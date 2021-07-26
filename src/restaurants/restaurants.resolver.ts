import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

@Resolver()
export class RestaurantsResolver {
  @Query(_ => Restaurant)
  isPizzaGood() {
    return true;
  }

  @Query(_ => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);
    return [];
  }

  @Mutation(_ => Boolean)
  createRestaurant(
    @Args() createRestaurantDto: CreateRestaurantDto
  ): boolean {
    console.log(createRestaurantDto);
    return true
  }
}
