import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PermissionManagementService } from "./permissionmanagement.service";

@swagger.ApiTags("permissionManagements")
@common.Controller("permissionManagements")
export class PermissionManagementController {
  constructor(protected readonly service: PermissionManagementService) {}
}
