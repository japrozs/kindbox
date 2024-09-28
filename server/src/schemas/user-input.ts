import { InputType, Field } from "type-graphql";

@InputType()
export class UserInput {
    @Field()
    email: string;
    @Field()
    name: string;
    @Field()
    type: string;
    @Field()
    password: string;
}
