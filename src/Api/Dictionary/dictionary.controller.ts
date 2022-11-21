import { DictionaryService } from './dictionary.service';
import { Body, Controller, Get, Post, Query, Patch, Param } from '@nestjs/common';
import { updateData } from './dto/data-dto.update';

@Controller('Data')
export class DictionaryController {
  constructor(private readonly dictionarySerivce: DictionaryService) {}
 
    // @Get()
    // getAll() {   
    //     return this.dictionarySerivce.getAll();
    // }

    // @Post('update')
    // updateData(@Body() dto: updateData) {
    //     return this.dictionarySerivce.updateData(dto);
    // }

    @Get('add')
    addData() {
        this.dictionarySerivce.create()
        return "test"
    }

    @Get('')
    getTaySequece() {
        return this.dictionarySerivce.getTaySequence()
    }

    @Patch('/:id')
    updateVietSequence(@Param('id') id: string, @Body() {vietWord}: {vietWord: string}) {
        return this.dictionarySerivce.updateVietSequence(id, vietWord)
    }
}
