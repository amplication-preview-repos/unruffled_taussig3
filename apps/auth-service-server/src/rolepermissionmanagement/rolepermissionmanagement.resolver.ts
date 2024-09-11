import * as graphql from "@nestjs/graphql";
import { RolePermissionManagementService } from "./rolepermissionmanagement.service";

export class RolePermissionManagementResolver {
  constructor(protected readonly service: RolePermissionManagementService) {}
}
