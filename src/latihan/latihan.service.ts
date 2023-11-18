import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    createTask() {
        return "Create Task";
    }
}
