package dev.abbby.todo.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TaskService {
    @Autowired
    private TaskRepository repo;

    public Task createTask(CreateTaskDTO data) {
        Task newTask = new Task();
        newTask.setTask(data.getTask().trim());
        newTask.setCompleted(data.getCompleted());
        newTask.setImportance(data.getImportance().trim());
        newTask.setCreated(new Date());
        return this.repo.save(newTask);
    }

    public List<Task> getAllTasks() {
        return this.repo.findAll();
    }

    public Optional<Task> getTaskById(Long id) {
        return this.repo.findById(id);
    }

    public Optional<Task> updateTask(Long id, UpdateTaskDTO data) {
        Optional<Task> existingTask = this.getTaskById(id);
        if (existingTask.isPresent()) {
            Task task = existingTask.get();
            task.setTask(data.getTask().trim());
            task.setCompleted(data.isCompleted());
            task.setImportance(data.getImportance().trim());
            task.setEdited(new Date());
            return Optional.of(this.repo.save(task));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteById(Long id) {
        Optional<Task> request = this.getTaskById(id);
        if (request.isEmpty()) {
            return false;
        }
        this.repo.delete(request.get());
        return true; 
    }
}
