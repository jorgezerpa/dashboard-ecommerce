import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, Relation } from "typeorm"
import { Merchant } from "./merchant" 

@Entity()
export class AuthMerchant {
    @PrimaryColumn()
    id?: number

    @Column({unique:true})
    email?: string

    @Column({nullable:true})   
    recoveryToken?: string

    @Column({ nullable: false })   
    clientId?: string

    @Column({ nullable:false })   
    clientSecret?: string

    @Column()
    password?: string
    @OneToOne(() => Merchant, (merchant) => merchant.auth, { onDelete:"CASCADE" })
    @JoinColumn() 
    merchant?: Relation<Merchant>

}