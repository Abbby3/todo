package dev.abbby.todo.task;

import jakarta.validation.constraints.NotBlank;

public class UpdateTaskDTO {
    @NotBlank
    private String task;
    private boolean completed;
    private String importance;
    
    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getImportance() {
        return importance;
    }

    public void setImportance(String importance) {
        this.importance = importance;
    }

    @Override
    public String toString() {
        return "UpdateTaskDTO [task=" + task + ", completed=" + completed + ", importance=" + importance + "]";
    }
}
