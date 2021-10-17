import { Module } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { InstrumentsController } from './instruments.controller';
import { Instrument, InstrumentSchema } from './entities/instrument.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Instrument.name, schema: InstrumentSchema },
    ]),
  ],
  controllers: [InstrumentsController],
  providers: [InstrumentsService],
})
export class InstrumentsModule {}
