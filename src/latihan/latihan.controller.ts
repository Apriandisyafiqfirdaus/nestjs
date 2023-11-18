import { Controller, Get } from '@nestjs/common';
import { LatihanService } from 'src/latihan/latihan.service';

@Controller('latihan')
export class LatihanController {
    constructor(private readonly latihanservice: LatihanService) {}

    @Get()
    getHello(): string {
      return "Halaman Latihan";
    }
  
    @Get("test")
    testPath(): string {
      return "ini adalah path test";
    }
  }