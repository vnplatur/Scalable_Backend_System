import Product from "../models/product.model.js";
// import redisClient from "../utils/redis.js";

// export const clearProductCache = async () => {
//   const keys = await redisClient.keys("products:*");
//   if (keys.length) await redisClient.del(keys);
// };


export const getProductsService = async (query) => {
  const {
    page = 1,
    limit = 10,
    keyword,
    category,
    minPrice,
    maxPrice,
    sortBy = "createdAt",
    order = "desc"
  } = query;

  const filter = {};

  //Search
  if (keyword) {
    filter.name = { $regex: keyword, $options: "i" };
  }

  //Category filter
  if (category) {
    filter.category = category;
  }

  // 💰 Price filter
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  const skip = (page - 1) * limit;

  const products = await Product.find(filter)
    .sort({ [sortBy]: order === "asc" ? 1 : -1 })
    .skip(skip)
    .limit(Number(limit));

  const total = await Product.countDocuments(filter);

  return {
    products,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit)
    }
  };
};

export const createProductService = async (data, userId) => {
  return await Product.create({
    ...data,
    createdBy: userId
  });
};

export const getAllProductsService = async () => {
  return await Product.find().sort({ createdAt: -1 });
};

export const getProductByIdService = async (id) => {
  return await Product.findById(id);
};

export const updateProductService = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

export const deleteProductService = async (id) => {
  return await Product.findByIdAndDelete(id);
};
