/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateUrlArgs } from "./CreateUrlArgs";
import { UpdateUrlArgs } from "./UpdateUrlArgs";
import { DeleteUrlArgs } from "./DeleteUrlArgs";
import { UrlFindManyArgs } from "./UrlFindManyArgs";
import { UrlFindUniqueArgs } from "./UrlFindUniqueArgs";
import { Url } from "./Url";
import { User } from "../../user/base/User";
import { UrlService } from "../url.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Url)
export class UrlResolverBase {
  constructor(
    protected readonly service: UrlService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Url",
    action: "read",
    possession: "any",
  })
  async _urlsMeta(
    @graphql.Args() args: UrlFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Url])
  @nestAccessControl.UseRoles({
    resource: "Url",
    action: "read",
    possession: "any",
  })
  async urls(@graphql.Args() args: UrlFindManyArgs): Promise<Url[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Url, { nullable: true })
  async url(@graphql.Args() args: UrlFindUniqueArgs): Promise<Url | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Url)
  @nestAccessControl.UseRoles({
    resource: "Url",
    action: "create",
    possession: "any",
  })
  async createUrl(@graphql.Args() args: CreateUrlArgs): Promise<Url> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Url)
  @nestAccessControl.UseRoles({
    resource: "Url",
    action: "update",
    possession: "any",
  })
  async updateUrl(@graphql.Args() args: UpdateUrlArgs): Promise<Url | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Url)
  @nestAccessControl.UseRoles({
    resource: "Url",
    action: "delete",
    possession: "any",
  })
  async deleteUrl(@graphql.Args() args: DeleteUrlArgs): Promise<Url | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: Url): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
