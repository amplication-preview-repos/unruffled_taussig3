import * as graphql from "@nestjs/graphql";
import { PermissionManagementService } from "./permissionmanagement.service";

export class PermissionManagementResolver {
  constructor(protected readonly service: PermissionManagementService) {}
}
