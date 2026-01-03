const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    // auth.middleware MUST run before this
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
        role: req.user.role,
        allowedRoles: allowedRoles,
      });
    }

    next();
  };
};

export default roleMiddleware;
