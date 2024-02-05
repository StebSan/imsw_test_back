import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mariadb',
        host: 'localhost',
        port: 8889,
        username: 'root',
        password: 'root',
        database: 'imsw_test',
        entities: ['dist/**/**.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      }),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
