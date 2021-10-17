import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InstrumentDocument = Instrument & Document;

@Schema()
export class Instrument {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  color: string;
}

export const InstrumentSchema = SchemaFactory.createForClass(Instrument);
