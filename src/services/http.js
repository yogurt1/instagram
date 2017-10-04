import axios from 'axios';
import mergeOptions from 'merge-options';

const defaultOptions = {};

/**
 * Merge options with defaults 
 */
const mergeDefaults = (...args) => mergeOptions(defaultOptions, ...args);

/**
 * Do HTTP request
 * @param {string} url Request url
 * @param {object} [options] Request options
 */
const http = async (url, options) => {
  const response = await axios(url, mergeDefaults(options));
  return response;
};

/**
 * Create wrapper for http
 * @param {objext} newDefaults 
 * @return {function(string, object): Promise<object>}
 */
export const createWrapper = (newDefaults) => async (url, options) => await http(url, mergeOptions(newDefaults, options));

export default http;
