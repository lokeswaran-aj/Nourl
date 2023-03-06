import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UrlService } from "./url.service";
import { UrlControllerBase } from "./base/url.controller.base";

@swagger.ApiTags("urls")
@common.Controller("urls")
export class UrlController extends UrlControllerBase {
  constructor(
    protected readonly service: UrlService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
