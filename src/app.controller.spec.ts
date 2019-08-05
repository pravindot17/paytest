import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;
  let appController: AppController;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('App Controller', () => {
    it('should return health status', () => {
      expect(appController.checkHealth()).toEqual({ status: 'working' });
    });

    it('should return application title', () => {
      jest.spyOn(appService, 'getTitle').mockImplementation(() => '<h1>Payment test app!</h1>');
      expect(appController.getTitle()).toEqual('<h1>Payment test app!</h1>');
    });
  });
});
