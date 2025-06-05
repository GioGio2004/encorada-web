// Import encryption and decryption utility functions
import { encryptData, decryptData } from './crypto';

/**
 * Stores encrypted data securely in sessionStorage
 * @param key - The key under which the value will be stored
 * @param value - The actual value (object, string, etc.) to store
 */
export const setSecureItem = (key: string, value: any): void => {
  try {
    // Encrypt the value before storing to protect sensitive data
    const encryptedValue = encryptData(value);

    // Store the encrypted string in sessionStorage using the provided key
    sessionStorage.setItem(key, encryptedValue);
  } catch (error) {
    // Log any error that occurs during encryption or storage
    console.error('Failed to set secure item:', error);
  }
};

/**
 * Retrieves and decrypts secure data from sessionStorage
 * @param key - The key of the value to retrieve
 * @returns - The decrypted data, or null if something fails
 */
export const getSecureItem = (key: string): any => {
  try {
    // Get the encrypted value from sessionStorage
    const encryptedValue = sessionStorage.getItem(key);

    // If nothing is stored under the key, return null
    if (!encryptedValue) return null;

    // Decrypt and return the original value
    return decryptData(encryptedValue);
  } catch (error) {
    // Log any error that occurs during retrieval or decryption
    console.error('Failed to get secure item:', error);
    return null;
  }
};

/**
 * Removes an item from sessionStorage
 * @param key - The key of the item to remove
 */
export const removeSecureItem = (key: string): void => {
  try {
    // Remove the item from sessionStorage by key
    sessionStorage.removeItem(key);
  } catch (error) {
    // Log any error that occurs during removal
    console.error('Failed to remove secure item:', error);
  }
};
