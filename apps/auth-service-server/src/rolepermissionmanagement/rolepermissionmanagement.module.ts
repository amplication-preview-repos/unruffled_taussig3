import { Module } from "@nestjs/common";
import { RolePermissionManagementService } from "./rolepermissionmanagement.service";
import { RolePermissionManagementController } from "./rolepermissionmanagement.controller";
import { RolePermissionManagementResolver } from "./rolepermissionmanagement.resolver";

@Module({
  controllers: [RolePermissionManagementController],
  providers: [RolePermissionManagementService, RolePermissionManagementResolver],
  exports: [RolePermissionManagementService],
})
export class RolePermissionManagementModule {}
