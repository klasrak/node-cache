export const contentType = (req, res, next) => {
  res.type('json');
  next();
};
