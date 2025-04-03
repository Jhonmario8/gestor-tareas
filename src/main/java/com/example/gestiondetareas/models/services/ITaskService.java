package com.example.gestiondetareas.models.services;

import com.example.gestiondetareas.models.Entities.Task;

import java.util.List;


public interface ITaskService {
    List<Task> showAll();
    void add(Task tarea);
    void delete(Integer id);

    Task findByid(Integer id);
}
