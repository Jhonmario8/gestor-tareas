package com.example.gestiondetareas.models.repositories;

import com.example.gestiondetareas.models.Entities.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task,Integer> {

}
