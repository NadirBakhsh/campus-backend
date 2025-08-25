import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CampusModule } from './campus/campus.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { UniversityModule } from './university/university.module';
import { UsersModule } from './users/users.module';
import { DepartmentModule } from './department/department.module';
import { EventModule } from './event/event.module';
import { ClubModule } from './club/club.module';
import { AcademicModule } from './academic/academic.module';
import { ContactModule } from './contact/contact.module';
import { DiscussionModule } from './discussion/discussion.module';
import { NotificationModule } from './notification/notification.module';
import { Club_ChatModule } from './club_chat/club_chat.module';
import { Discussion_ChatModule } from './discussion_chat/discussion_chat.module';
const ENV = process.env.NODE_ENV || 'development';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ['.env.development', '.env.production'],
      envFilePath: !ENV ? '.env.development' : `.env.${ENV}`,
      load: [appConfig, databaseConfig, jwtConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        autoLoadEntities: configService.get('database.autoLoadEntities'),
        synchronize: configService.get('database.synchronize'),
      }),
    }),
    AuthModule,
    UsersModule,
    EnrollmentModule,
    UniversityModule,
    CampusModule,
    DepartmentModule,
    EventModule,
    ClubModule,
    Club_ChatModule,
    AcademicModule,
    ContactModule,
    DiscussionModule,
    Discussion_ChatModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
