import * as graphql from "@nestjs/graphql";
import { RoleManagementService } from "./rolemanagement.service";

export class RoleManagementResolver {
  constructor(protected readonly service: RoleManagementService) {}
}
