import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Restaurant {
  @Field(_ => String)
  name: string;

  @Field(_ => Boolean)
  isVegan: boolean;

  @Field(_ => String)
  address: string;

  @Field(_ => String)
  ownersName: string;
}
