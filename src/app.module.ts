import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionaryModule } from './Api/Dictionary/dictionary.module';
import { CrawlerModule } from './Api/craw-data/craw-data.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/Data'), 
      DictionaryModule,
      CrawlerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}