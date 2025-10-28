/**
 * @summary
 * Shared test helper functions
 *
 * @module tests/helpers
 */

/**
 * @summary
 * Helper function to create mock request object
 *
 * @param {any} body - Request body
 * @param {any} params - Request params
 * @param {any} query - Request query
 *
 * @returns {any} Mock request object
 */
export const createMockRequest = (body?: any, params?: any, query?: any): any => {
  return {
    body: body || {},
    params: params || {},
    query: query || {},
    headers: {},
  };
};

/**
 * @summary
 * Helper function to create mock response object
 *
 * @returns {any} Mock response object
 */
export const createMockResponse = (): any => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

/**
 * @summary
 * Helper function to create mock next function
 *
 * @returns {any} Mock next function
 */
export const createMockNext = (): any => {
  return jest.fn();
};
