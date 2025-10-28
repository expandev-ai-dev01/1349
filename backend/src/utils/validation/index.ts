import { z } from 'zod';

/**
 * @summary
 * Common Zod validation schemas and utilities
 *
 * @module utils/validation
 */

/**
 * @summary
 * String validation with max length
 */
export const zString = (maxLength?: number) => {
  let schema = z.string().min(1, 'Field is required');
  if (maxLength) {
    schema = schema.max(maxLength, `Field must not exceed ${maxLength} characters`);
  }
  return schema;
};

/**
 * @summary
 * Nullable string validation with max length
 */
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength, `Field must not exceed ${maxLength} characters`);
  }
  return schema.nullable();
};

/**
 * @summary
 * Name validation (1-200 characters)
 */
export const zName = z
  .string()
  .min(1, 'Name is required')
  .max(200, 'Name must not exceed 200 characters');

/**
 * @summary
 * Description validation (max 500 characters, nullable)
 */
export const zNullableDescription = z
  .string()
  .max(500, 'Description must not exceed 500 characters')
  .nullable();

/**
 * @summary
 * Positive integer validation
 */
export const zPositiveInt = z.number().int('Must be an integer').positive('Must be positive');

/**
 * @summary
 * Nullable positive integer (foreign key)
 */
export const zNullableFK = z.number().int().positive().nullable();

/**
 * @summary
 * Boolean bit validation (0 or 1)
 */
export const zBit = z.number().int().min(0).max(1);

/**
 * @summary
 * Date string validation (ISO format)
 */
export const zDateString = z.string().datetime();

/**
 * @summary
 * Email validation
 */
export const zEmail = z.string().email('Invalid email format');

/**
 * @summary
 * URL validation
 */
export const zUrl = z.string().url('Invalid URL format');

/**
 * @summary
 * Validates required parameter
 *
 * @function validateRequiredParam
 * @module utils/validation
 *
 * @param {any} param - Parameter to validate
 * @param {string} paramName - Parameter name for error message
 *
 * @throws {Error} When parameter is null or undefined
 */
export const validateRequiredParam = (param: any, paramName: string): void => {
  if (param === null || param === undefined) {
    throw new Error(`${paramName} is required`);
  }
};
