/* eslint-disable no-console */
import Redis from 'redis';
import { promisify } from 'util';

export const RedisHelper = {
  client: null,
  options: { host: 'cache', port: 6379 },

  connect() {
    this.client = Redis.createClient(this.options);
  },
  async set(key, value) {
    const asyncSet = promisify(this.client.set).bind(this.client);
    await asyncSet(key, JSON.stringify(value));
  },
  async setEx(key, value, expiration) {
    const asyncSetEx = promisify(this.client.set).bind(this.client);
    await asyncSetEx(key, JSON.stringify(value), 'EX', expiration);
  },
  async get(key) {
    const asyncGet = promisify(this.client.get).bind(this.client);
    const result = await asyncGet(key);
    console.log('REDIS GET', result);
    return JSON.parse(result);
  },
};
