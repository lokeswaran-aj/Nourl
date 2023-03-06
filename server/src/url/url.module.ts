import { Module } from "@nestjs/common";
import { UrlModuleBase } from "./base/url.module.base";
import { UrlService } from "./url.service";
import { UrlController } from "./url.controller";
import { UrlResolver } from "./url.resolver";

@Module({
  imports: [UrlModuleBase],
  controllers: [UrlController],
  providers: [UrlService, UrlResolver],
  exports: [UrlService],
})
export class UrlModule {}
