/**
 * @summary
 * Global test environment setup
 *
 * @module tests/testSetup
 */

/**
 * @summary
 * Setup function to run before all tests
 */
beforeAll(() => {
  // Global test setup
  process.env.NODE_ENV = 'test';
});

/**
 * @summary
 * Cleanup function to run after all tests
 */
afterAll(() => {
  // Global test cleanup
});
