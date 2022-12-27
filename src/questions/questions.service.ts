import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { questions } from './entity/questions.entity';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(questions)
        private questionsRepository: Repository<questions>
    ){}

    async findByShow(show: number){
        return this.questionsRepository.findOneBy({show});
    }
}
