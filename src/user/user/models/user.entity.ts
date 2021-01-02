import {BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    emailLowerCase() {
        this.email = this.email.toLocaleLowerCase()
    }
};
