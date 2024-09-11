import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RoleManagementService } from "./rolemanagement.service";

@swagger.ApiTags("roleManagements")
@common.Controller("roleManagements")
export class RoleManagementController {
  constructor(protected readonly service: RoleManagementService) {}
}
