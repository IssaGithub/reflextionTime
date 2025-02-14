import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ReflexionService } from './reflexion.service';
import { Thankfullnes } from './schemas/Thankfullnes.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly reflexionService: ReflexionService) {}

  
  @Get("thankfullness")
  getThankfullness():Promise<Thankfullnes[]> {
    return this.reflexionService.getThankFullness();
  }

  @Post("thankfullness")
  async createThankfullness(@Body() body:{text:string[]}){
    return this.reflexionService.createThankfullness(body.text)
  }
}
