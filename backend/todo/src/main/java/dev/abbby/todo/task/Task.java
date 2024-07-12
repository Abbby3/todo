package dev.abbby.todo.task;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import java.util.Date;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String task;
    @Column
    private boolean completed;
    @Column
    private String importance;
    @Column
    private Date created;
    @Column
    private Date edited;

    Task() {}

    public void setTask(String task) {
        this.task = task;
    }
    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
    public void setImportance(String importance) {
        this.importance = importance;
    }
    public void setCreated(Date created) {
        this.created = created;
    }
    public void setEdited(Date edited) {
        this.edited = edited;
    }

    @Override
    public String toString() {
        return "Task [id=" + id + ", task=" + task + ", completed=" + completed + ", importance=" + importance + ", created=" + created + ", edited=" + edited + "]";
    }

    public Long getId() {
        return id;
    }
    public String getTask() {
        return task;
    }
    public Boolean getCompleted() {
        return completed;
    }
    public String getImportance() {
        return importance;
    }
    public Date getCreated() {
        return created;
    }
    public Date getEdited() {
        return edited;
    }

}