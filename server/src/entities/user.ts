import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column({ default: "https://i.ibb.co/ZLw7SsS/icons8-test-account-96.png" })
    avatar: string;

    @Field()
    @Column({ default: "Hello there" })
    bio: string;

    @Field()
    @Column({ default: "RES" })
    type: string;

    // @Field()
    // @Column({ default: false })
    // verified: boolean;

    // @Column()
    // verificationCode: string;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column()
    password!: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
