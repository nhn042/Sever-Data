import { Data, DataDocument } from './dictionary.schema';
import { Repository } from 'src/Share/Database/repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DictionaryRepository extends Repository<DataDocument> {
    constructor(@InjectModel(Data.name) private dictionaryModel: Model<DataDocument>) {
        super(dictionaryModel);
    }
}
