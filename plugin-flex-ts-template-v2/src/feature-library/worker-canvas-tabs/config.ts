import { getFeatureFlags } from '../../utils/configuration';
import WorkerCanvasTabsConfig from './types/ServiceConfiguration';

const { enabled = false } = (getFeatureFlags()?.features?.worker_canvas_tabs as WorkerCanvasTabsConfig) || {};

const { enabled: supervisorCapacityEnabled = false } = getFeatureFlags()?.features?.supervisor_capacity || {};
const { enabled: attributeViewerEnabled = false } = getFeatureFlags()?.features?.attribute_viewer || {};
const { enabled: workerDetailsEnabled = false } = getFeatureFlags()?.features?.worker_details || {};

export const isFeatureEnabled = () => {
  return enabled;
};
export const isSupervisorCapacityEnabled = () => {
  return supervisorCapacityEnabled;
};
export const isAttributeViewerEnabled = () => {
  return attributeViewerEnabled;
};
export const isWorkerDetailsEnabled = () => {
  return workerDetailsEnabled;
};