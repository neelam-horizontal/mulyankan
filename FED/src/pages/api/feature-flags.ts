// Global
import { NextRequest, NextResponse } from 'next/server';

import { get, getAll } from 'lib/feature-flags';
import type { FeatureFlags } from 'lib/feature-flags';

const fetchFeatureFlag = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const flag = searchParams.get('flag') as keyof FeatureFlags;

  /** if no flag provided, return all */
  if (!flag) {
    const featureFlags = await getAll();
    return NextResponse.json(featureFlags);
  }

  const featureFlag = await get(flag);
  return NextResponse.json(featureFlag);
};

export default fetchFeatureFlag;

export const config = {
  runtime: 'edge',
};
