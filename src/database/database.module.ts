import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "plutta",
        "database": "blog",
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": true,
        "migrations": [
            "src/migration/**/*.ts"
        ],
        logging: true,
        logger: 'advanced-console'
    })]
})
export class DatabaseModule {}
