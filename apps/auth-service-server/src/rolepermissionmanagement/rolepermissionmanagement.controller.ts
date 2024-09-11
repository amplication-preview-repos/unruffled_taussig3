import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RolePermissionManagementService } from "./rolepermissionmanagement.service";

@swagger.ApiTags("rolePermissionManagements")
@common.Controller("rolePermissionManagements")
export class RolePermissionManagementController {
  constructor(protected readonly service: RolePermissionManagementService) {}
}
