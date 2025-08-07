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
import { UserClubModule } from './user-club/user-club.module';
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
    UserClubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
