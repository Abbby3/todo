package dev.abbby.todo.task;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import dev.abbby.todo.exceptions.NotFoundException;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/tasks/")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);
    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> createTask(@Valid @RequestBody CreateTaskDTO data) {
        logger.info("Creating new task");
        Task createdTask = this.taskService.createTask(data);
        logger.info("Created task", createdTask.getId());
        return new ResponseEntity<>(createdTask, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        logger.info("Fetching tasks");
        List<Task> allTasks = this.taskService.getAllTasks();
        logger.info("Found {} task(s)", allTasks.size());
        return new ResponseEntity<>(allTasks, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) throws NotFoundException {
        logger.info("Fetching task");
        Optional<Task> task = this.taskService.getTaskById(id);
        Task resolved = task.orElseThrow(() -> new NotFoundException(Task.class, id));
        logger.info("Found task");
        return new ResponseEntity<>(resolved, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @Valid @RequestBody UpdateTaskDTO data) throws NotFoundException {
        logger.info("Updating task");
        Optional<Task> updatedTask = this.taskService.updateTask(id, data);
        Task resolved = updatedTask.orElseThrow(() -> new NotFoundException(Task.class, id));
        logger.info("Updated task");
        return new ResponseEntity<>(resolved, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable Long id) throws NotFoundException {
        logger.info("Deleting task");
        boolean deleted = this.taskService.deleteById(id);
        if (!deleted) {
            logger.warn("Task not found");
            throw new NotFoundException(Task.class, id);
        }
        logger.info("Deleted task");
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
