import { Module } from "@nestjs/common";
import { PermissionManagementService } from "./permissionmanagement.service";
import { PermissionManagementController } from "./permissionmanagement.controller";
import { PermissionManagementResolver } from "./permissionmanagement.resolver";

@Module({
  controllers: [PermissionManagementController],
  providers: [PermissionManagementService, PermissionManagementResolver],
  exports: [PermissionManagementService],
})
export class PermissionManagementModule {}
