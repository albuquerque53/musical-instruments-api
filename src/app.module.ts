import { Module } from '@nestjs/common';
import { InstrumentsModule } from './instruments/instruments.module';

@Module({
  imports: [InstrumentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
