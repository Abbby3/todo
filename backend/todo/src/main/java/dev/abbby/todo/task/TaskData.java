package dev.abbby.todo.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Configuration
public class TaskData {

    @Autowired
    private TaskRepository taskRepository;

    @Bean
    CommandLineRunner init() {
        return args -> {
            if (taskRepository.count() == 0) {
                List<Task> tasks = Arrays.asList(
                    Task.builder().taskName("Feed the cat").importance("high").completed(false).build(),
                    Task.builder().taskName("Water the plants").importance("medium").completed(false).calendar(new Date()).repeats("daily").build(),
                    Task.builder().taskName("Complete project report").importance("high").completed(false).calendar(new Date()).repeats("weekly").build(),
                    Task.builder().taskName("Grocery shopping").importance("low").completed(false).calendar(new Date()).repeats("monthly").build()
                );

                taskRepository.saveAll(tasks);
            }
        };
    }
}
