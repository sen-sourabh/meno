import { Module } from '@nestjs/common';
import { MenoController } from './meno.controller';
import { MenoService } from './meno.service';

@Module({
  controllers: [MenoController],
  providers: [MenoService],
})
export class MenoModule {}
