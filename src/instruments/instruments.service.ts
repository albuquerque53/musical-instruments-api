import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
import { Instrument, InstrumentDocument } from './entities/instrument.entity';

@Injectable()
export class InstrumentsService {
  constructor(
    @InjectModel(Instrument.name)
    private instrumentModel: Model<InstrumentDocument>,
  ) {}

  create(createInstrumentDto: CreateInstrumentDto) {
    const instrument = new this.instrumentModel(createInstrumentDto);
    instrument.save();

    return instrument.id;
  }

  findAll() {
    return this.instrumentModel.find();
  }

  findOne(id: string) {
    return this.instrumentModel.findById(id);
  }

  update(id: string, updateInstrumentDto: UpdateInstrumentDto) {
    return this.instrumentModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateInstrumentDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.instrumentModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
