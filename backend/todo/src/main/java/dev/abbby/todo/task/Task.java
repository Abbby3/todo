package dev.abbby.todo.task;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.Date;

@Document(collection = "todo")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {

    @Id
    private String id;
    private String taskName;
    private String importance;
    private boolean completed;
    private Date calendar;
    private String repeats;
    @CreatedDate
    private Date created;
    @LastModifiedDate
    private Date edited;
}