/* eslint-disable no-console */
import { RedisHelper } from '../redis';

export const cache = async (req, res, next) => {
  const key = req.url;

  const cachedResult = await RedisHelper.get(key);

  if (cachedResult) {
    res.json(cachedResult);
  } else {
    res.sendResponse = res.json;
    res.json = async body => {
      await RedisHelper.setEx(key, body, 60);
      res.sendResponse(body);
    };
    next();
  }
};
