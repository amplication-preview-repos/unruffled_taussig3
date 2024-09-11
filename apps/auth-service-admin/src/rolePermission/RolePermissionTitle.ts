import { RolePermission as TRolePermission } from "../api/rolePermission/RolePermission";

export const ROLEPERMISSION_TITLE_FIELD = "id";

export const RolePermissionTitle = (record: TRolePermission): string => {
  return record.id?.toString() || String(record.id);
};
