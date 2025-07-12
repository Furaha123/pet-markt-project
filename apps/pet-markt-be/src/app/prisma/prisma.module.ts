import {  Module } from "@nestjs/common";
import { PrismaService } from "./prisima.service";

@Module({
    providers: [PrismaService],
    imports: [],
    exports: [PrismaService], 
})
export class PrismaModule {
}