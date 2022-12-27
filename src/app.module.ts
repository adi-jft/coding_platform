import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { users } from './users/entity/users.entity';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { admin } from './admin/entity/admin.entity';
import { QuestionsModule } from './questions/questions.module';
import { questions } from './questions/entity/questions.entity';

@Module({
  imports: [UsersModule, AdminModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'coding_platform',
    entities: [users, admin, questions],
    synchronize: true,
  }), AdminModule, QuestionsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
