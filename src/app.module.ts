import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { InstrumentsModule } from './instruments/instruments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    InstrumentsModule,
    MongooseModule.forRoot(process.env.MONGOOSE_CONNECTION_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
