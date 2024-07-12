package dev.abbby.todo.task;

import jakarta.validation.constraints.NotBlank;

public class CreateTaskDTO {
    @NotBlank
    private String task;
    private boolean completed;
    @NotBlank
    private String importance;
    
    public String getTask() {
        return task;
    }
    public boolean getCompleted() {
        return completed;
    }
    public String getImportance() {
        return importance;
    }

    @Override
    public String toString() {
        return "CreateTaskDTO [task=" + task + ", completed=" + completed + ", importance=" + importance + "]";
    }
}
