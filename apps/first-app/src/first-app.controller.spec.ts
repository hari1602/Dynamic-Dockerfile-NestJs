import { Test, TestingModule } from '@nestjs/testing';
import { FirstAppController } from './first-app.controller';
import { FirstAppService } from './first-app.service';

describe('FirstAppController', () => {
  let firstAppController: FirstAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FirstAppController],
      providers: [FirstAppService],
    }).compile();

    firstAppController = app.get<FirstAppController>(FirstAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(firstAppController.getHello()).toBe('Hello World!');
    });
  });
});
