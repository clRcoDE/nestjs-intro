import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://danial_access:ViNau0W0I9gzgpaM@cluster0-28v3x.mongodb.net/test?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
