package dev.abbby.todo.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(String id) {
        if (taskRepository.existsById(id)) {
            return taskRepository.findById(id).get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found.");
        }
    }

    public Task updateTask(String id, Task updatedTask) {
        if (taskRepository.existsById(id)) {
            return taskRepository.save(updatedTask);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found.");
        }
    }

    public void deleteTask(String id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found.");
        }
    }
}
