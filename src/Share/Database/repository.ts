/* eslint-disable prettier/prettier */
import { Document, Model } from 'mongoose';
export class Repository<T extends Document> {
    constructor(private model: Model<T>) {}

    async create(item: T) {
        try{
            return this.model.create(item)
        }
        catch(error) {
            Promise.reject(error)
        }
    }

    getOneByCondition(condition: any) {
        return this.model.findOne(condition);
    }

    getAllByCondition(condition: any) {
        return this.model.find(condition);
    }

    getAll() {
        return this.model.find()
    }

    delete(id: string) {
        return this.model.deleteOne({ _id: id });
    }
    
    save(condition: any) {
        return this.model.bulkSave(condition);
    }
    // create(condition: any) {
    //     return this.model.create(condition);
    // }

    update(condition: any) {
        return this.model.updateOne(condition);
    }
    test() {
        return this.model.find()
    }
    updateById(id: string, item: any) {
        return this.model.findByIdAndUpdate({_id: id}, {$set: item})
    }
}
