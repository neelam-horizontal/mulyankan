// Global
import { merge } from 'lodash';
import type { Config } from 'tailwindcss';

export const camelize = (s: string) =>
  s.toLowerCase().replace(/[-. ]./g, (x) => x[1].toUpperCase());

export const mergeConfigs = (a: Config, b: Config) => merge({}, a, b);

export const objectMap = (
  obj: Record<string, unknown>,
  fn: (v: unknown, k: string, i: number) => void
) => Object.fromEntries(Object.entries(obj).map(([k, v], i) => [camelize(k), fn(v, k, i)]));
