import { InjectModel } from "@nestjs/mongoose";
import { Thankfullnes } from "./schemas/Thankfullnes.schema";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class ReflexionService{

    constructor(@InjectModel(Thankfullnes.name) private thankfullnessModel: Model<Thankfullnes>){}

    async getThankFullness():Promise<Thankfullnes[]>{
        return this.thankfullnessModel.find().exec();
    }

    async createThankfullness(text:string[]):Promise<Thankfullnes>{
        const newThankfullness = new this.thankfullnessModel({text});
        return newThankfullness.save();
    }
    
}