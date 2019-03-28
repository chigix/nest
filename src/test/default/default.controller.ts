import { Controller, Inject } from '@nestjs/common';
import * as Knex from 'knex';

@Controller('default')
export class DefaultController {
    private a = 2;

    constructor(
        @Inject('DB') private readonly knex: Knex,
    ) {
        console.log(this.knex);
    }

}
