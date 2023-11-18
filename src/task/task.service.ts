import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/CreateTaskDto';
import { UpdateTaskDto } from './dto/updatetask';

@Injectable()
export class TaskService {
    async createTask(data: CreateTaskDto): Promise<string> {
        // Logika untuk membuat tugas
        return "Create Task";
    }

    async getAllTask(): Promise<string> {
        // Logika untuk mendapatkan semua tugas
        return "Get all task";
    }

    async getTaskById(id: string): Promise<string> {
        // Logika untuk mendapatkan tugas berdasarkan ID
        return "";
    }

    async updateTask(id: string, updateData: UpdateTaskDto): Promise<string> {
        // Logika untuk mengupdate tugas berdasarkan ID
        return `Update task with ID ${id}`;
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
