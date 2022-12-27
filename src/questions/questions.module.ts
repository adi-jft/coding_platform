import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { questions } from './entity/questions.entity';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([questions])],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
