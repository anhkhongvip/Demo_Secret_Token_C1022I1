import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;

    @Column({type: 'varchar'})
    public username: string;

    @Column({type: 'varchar'})
    public password: string;

    @Column({type: 'int'})
    public role: number;
}