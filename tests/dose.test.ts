import { describe, expect, it } from 'vitest';
import { weightBasedDoseMg } from '../src/dose';

describe('weight-based dose', () => {
  it('REQ-DOSE-001: multiplies weight by the per-kg rate', () => {
    expect(weightBasedDoseMg({ weightKg: 20, mgPerKg: 5, maxMg: 500 })).toBe(100);
  });

  it('REQ-DOSE-002: never exceeds the configured maximum', () => {
    expect(weightBasedDoseMg({ weightKg: 200, mgPerKg: 5, maxMg: 500 })).toBe(500);
  });

  it('REQ-DOSE-003: rejects a non-positive weight', () => {
    expect(() => weightBasedDoseMg({ weightKg: 0, mgPerKg: 5, maxMg: 500 })).toThrow(RangeError);
  });

  it('REQ-DOSE-002: a dose exactly at the maximum is allowed', () => {
    expect(weightBasedDoseMg({ weightKg: 100, mgPerKg: 5, maxMg: 500 })).toBe(500);
  });
});
