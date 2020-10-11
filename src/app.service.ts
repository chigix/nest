import { Injectable } from '@nestjs/common';
import { Sequelize,DataTypes } from 'sequelize';
import { User } from './User.model';

@Injectable()
export class AppService {
getHello(): string {
    const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");
    User.init({
      id: DataTypes.STRING,
      name: DataTypes.STRING,
    }, {sequelize});
    return 'Hello World!';
  }
}
