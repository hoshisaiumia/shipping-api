import { describe, it, expect } from "vitest";
import {
  generateTrackingCode,
  validateCountryCode,
  validateTrackingCode,
} from "../utils/tracking-code.js";

describe("validateCountryCode", () => {
  it("validates japan code", () => {
    expect(validateCountryCode("JP")).toBe(true);
  });

  it("validates lowercased code", () => {
    expect(validateCountryCode("jp")).toBe(true);
  });

  it("validates iso code", () => {
    expect(validateCountryCode("XX")).toBe(false);
  });
});

describe("generateTrackingCode", () => {
  it("generates valid tracking code", () => {
    const code = generateTrackingCode("JP");
    expect(code).toMatch(/^[A-Z]{2}\d{8}JP$/);
  });

  it("rejects due to invalid country code", () => {
    expect(() => generateTrackingCode("XX")).toThrow(
      "Invalid country code provided: XX",
    );
  });
});

describe("validateTrackingCode", () => {
  it("validates correct tracking code", () => {
    expect(validateTrackingCode("AB12345678JP")).toBe(true);
  });

  it("validates incorrect tracking code", () => {
    expect(validateTrackingCode("ab12345678XX")).toBe(false);
  });
});
