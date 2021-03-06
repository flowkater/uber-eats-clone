import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";


@ArgsType()
export class CreateRestaurantDto {
  @Field(_ => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(_ => Boolean)
  @IsBoolean()
  isVegan: boolean;

  @Field(_ => String)
  @IsString()
  address: string;

  @Field(_ => String)
  @IsString()
  ownersName: string;
}
