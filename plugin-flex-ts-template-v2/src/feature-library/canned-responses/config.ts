import { getFeatureFlags } from '../../utils/configuration';

const { enabled = false, location } = getFeatureFlags()?.features?.canned_responses || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const getUILocation = () => {
  return location;
};
