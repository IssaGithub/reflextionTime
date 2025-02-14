import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
@Schema()
export class Thankfullnes extends Document {

@Prop({required:true})
text:string[];

}

export const ThankfullnesSchema = SchemaFactory.createForClass(Thankfullnes);