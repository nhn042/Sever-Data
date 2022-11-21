import { DictionaryRepository } from './dictionary.repository';
import { Injectable } from '@nestjs/common';
import { updateData } from './dto/data-dto.update';
import { CrawlerService } from '../craw-data/craw-data.service';
import { DataDocument } from './dictionary.schema';

@Injectable()
export class DictionaryService {
    constructor(private readonly dicRepo: DictionaryRepository, private crawlService: CrawlerService) {}

    async create() {
        const arr_data = await this.crawlService.scrape()
        await arr_data.map((value,index) => {
            const item = {
                vietWord: "",
                tayWord: value
            }
            this.dicRepo.create(<DataDocument>item)
        })
        
    }

    async getTaySequence() {
        return await this.dicRepo.getAllByCondition({})
    }

    async updateVietSequence(id: string, vietWord: any) {
        await this.dicRepo.updateById(id, { vietWord: vietWord} ) 
        return await this.dicRepo.updateById(id, {vietWord: vietWord} )
    }
}
