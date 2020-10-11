import { Optional,Model } from "sequelize";

export interface UserAttributes {
  id: number;
  name: string;
}

export type UserCreationAttributes = Optional<UserAttributes, "id">

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
}
