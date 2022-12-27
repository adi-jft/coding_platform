import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { admin } from './entity/admin.entity';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(admin)
        private adminRepository: Repository<admin>
        ){}

    async findByEmail(email: string){
        return this.adminRepository.findOneBy({email});
    }
}
