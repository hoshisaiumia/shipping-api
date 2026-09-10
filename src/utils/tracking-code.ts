import countries from "i18n-iso-countries";
import { Logger } from "./logger.js";

export function validateCountryCode(countryCode: string): boolean {
  return countries.isValid(countryCode.toUpperCase());
}

export function generateTrackingCode(countryCode: string): string {
  if (!validateCountryCode(countryCode)) {
    Logger.error(`Invalid country code provided: ${countryCode}`);
    throw new Error(`Invalid country code provided: ${countryCode}`);
  }

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const prefix = Array.from(
    { length: 2 },
    () => letters[Math.floor(Math.random() * letters.length)],
  ).join("");

  const numbers = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 10),
  ).join("");

  const trackingCode = `${prefix}${numbers}${countryCode.toUpperCase()}`;

  if (Logger.isLevelEnabled("debug"))
    Logger.info(`Tracking code generated: ${trackingCode}`);

  return trackingCode;
}

export function validateTrackingCode(trackingCode: string): boolean {
  if (!/^[A-Z]{2}\d{8}[A-Z]{2}$/.test(trackingCode)) return false;

  const countryCode = trackingCode.slice(-2);
  return validateCountryCode(countryCode);
}
