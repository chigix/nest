import { Module } from '@nestjs/common';
import { DefaultController } from './default/default.controller';
import * as Knex from 'knex';
import { ValueProvider } from '@nestjs/common/interfaces';

const knexProvider = {
  provide: 'DB',
  useValue: Knex(require('../../knexfile')),
} as ValueProvider;

@Module({
  providers: [knexProvider],
  controllers: [DefaultController],
})
export class TestModule { }
