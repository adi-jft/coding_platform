import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class users{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;
}