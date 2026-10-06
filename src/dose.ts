/**
 * Weight-based dose calculation. FICTIONAL: a stand-in for a safety-relevant
 * software item so the pilot has requirements, tests and releases to report on.
 */
export interface DoseInput {
  weightKg: number;
  mgPerKg: number;
  maxMg: number;
}

export function weightBasedDoseMg(input: DoseInput): number {
  const { weightKg, mgPerKg, maxMg } = input;
  if (!Number.isFinite(weightKg) || weightKg <= 0) throw new RangeError('weightKg must be a positive number');
  if (!Number.isFinite(mgPerKg) || mgPerKg <= 0) throw new RangeError('mgPerKg must be a positive number');
  if (!Number.isFinite(maxMg) || maxMg <= 0) throw new RangeError('maxMg must be a positive number');
  const raw = weightKg * mgPerKg;
  return Math.round(Math.min(raw, maxMg) * 10) / 10;
}
