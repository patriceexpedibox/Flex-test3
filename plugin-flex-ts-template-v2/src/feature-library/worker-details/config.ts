import { getFeatureFlags } from '../../utils/configuration';
import WorkerDetailsConfig from './types/ServiceConfiguration';

const {
  enabled = false,
  edit_team = true,
  edit_department = true,
  edit_location = true,
  edit_manager_name = false,
  edit_auto_accept = true,
  edit_auto_wrapup = true,
  edit_unit_leader = true,
} = (getFeatureFlags()?.features?.worker_details as WorkerDetailsConfig) || {};

const { teams = [], departments = [] } = getFeatureFlags().common || {};

export const isFeatureEnabled = () => {
  return enabled;
};
export const editTeam = () => {
  return edit_team;
};
export const editDepartment = () => {
  return edit_department;
};
export const editLocation = () => {
  return edit_location;
};
export const editManagerName = () => {
  return edit_manager_name;
};
export const editAutoAccept = () => {
  return edit_auto_accept;
};
export const editAutoWrapup = () => {
  return edit_auto_wrapup;
};
export const editUnitLeader = () => {
  return edit_unit_leader;
};
export const getTeams = () => {
  return teams;
};
export const getDepartments = () => {
  return departments;
};