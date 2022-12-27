import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class questions{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    question: string;

    @Column()
    marks: number;

    @Column()
    show: number;
}