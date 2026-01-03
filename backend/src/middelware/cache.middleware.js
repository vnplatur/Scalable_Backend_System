import redisClient from "../utils/redis.js";

const productCache = async (req, res, next) => {
  const cacheKey = `products:${JSON.stringify(req.query)}`;

  const cachedData = await redisClient.get(cacheKey);

  if (cachedData) {
    return res.status(200).json(JSON.parse(cachedData));
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    redisClient.setEx(cacheKey, 60, JSON.stringify(body)); // 60s cache
    res.sendResponse(body);
  };

  next();
};

export default productCache;
