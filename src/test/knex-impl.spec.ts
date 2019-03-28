import { Test, TestingModule } from '@nestjs/testing';
import { KnexImpl } from './knex-impl';

describe('KnexImpl', () => {
  let provider: KnexImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnexImpl],
    }).compile();

    provider = module.get<KnexImpl>(KnexImpl);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
