import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Thankfullnes, ThankfullnesSchema } from "./schemas/Thankfullnes.schema";
import { AppController } from "./app.controller";
import { ReflexionService } from "./reflexion.service";

@Module({
    imports:[MongooseModule.forFeature([{name:Thankfullnes.name,schema:ThankfullnesSchema}])],
    controllers:[],
    providers:[ReflexionService],
    exports:[ReflexionService],
})
export class reflextionModule{}