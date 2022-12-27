import { Body, Controller, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
    constructor(private questionsService: QuestionsService){}

    @Post("/showQue")
    showQue(@Body() que: any){
        return this.questionsService.findByShow(que.show);
    }
}
