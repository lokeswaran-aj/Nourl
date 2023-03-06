import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UrlServiceBase } from "./base/url.service.base";

@Injectable()
export class UrlService extends UrlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
