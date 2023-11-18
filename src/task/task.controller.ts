import { Controller, Post, Get, Body, Param } from '@nestjs/common'; // Tambahkan 'Param' di sini
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/CreateTaskDto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        return await this.taskService.createTask(body);
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string) { // Ganti 'param' menjadi 'Param', dan tambahkan tipe data untuk 'id'
        return await this.taskService.getTaskById(id);
    }

  
@Controller('task')
export class NamaController {
    constructor(private readonly namaService: NamaService) {}

    @Patch(':id')
    updatePartialData(@Param('id') id: string, @Body() updatePartialDataDto: UpdatePartialDataDto): string {
        return this.namaService.updatePartialData(id, updatePartialDataDto);
    }
}

import { Controller, Delete, Param } from '@nestjs/common';
import { NamaService } from './nama-service.service';

@Controller('nama')
export class NamaController {
    constructor(private readonly namaService: NamaService) {}

    @Delete(':id')
    deleteData(@Param('id') id: string): string {
        return this.namaService.deleteData(id);
    }
}

}
