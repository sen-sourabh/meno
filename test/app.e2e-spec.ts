import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { MenoModule } from '../src/meno.module';

describe('MenoController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MenoModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/message (POST)', () => {
    return request(app.getHttpServer()).post('/message').expect(201).expect({
      title: 'title',
      body: 'body',
    });
  });

  it('/notification (POST)', () => {
    return request(app.getHttpServer())
      .post('/notification')
      .expect(201)
      .expect({
        title: 'title',
        data: 'data',
      });
  });
});
