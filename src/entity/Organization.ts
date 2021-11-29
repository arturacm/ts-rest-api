import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IOrganization } from "./types";

@Entity()
export default class Organization extends BaseEntity implements IOrganization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyName: string;

  @Column({ unique: true })
  corporateTaxpayerRegistry: string;

  @Column()
  tradingName: string;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column('simple-array')
  tags: string[];
}