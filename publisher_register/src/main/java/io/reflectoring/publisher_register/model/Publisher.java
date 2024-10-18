package io.reflectoring.publisher_register.model;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "Publisher")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Publisher {
    @Id
    String id;
    String name;
    String email;
    Integer published;
}
