import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionaryController } from './dictionary.controller';
import { DictionaryRepository } from './dictionary.repository';
import { Data, DataSchema } from './dictionary.schema';
import { DictionaryService } from './dictionary.service';
import { CrawlerModule } from '../craw-data/craw-data.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }]), CrawlerModule],
    controllers: [DictionaryController],
    providers: [DictionaryRepository, DictionaryService],

})
export class DictionaryModule {}
