package com.example.gestiondetareas.models.services;

import com.example.gestiondetareas.models.Entities.Task;
import com.example.gestiondetareas.models.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService implements ITaskService{
    @Autowired
    private TaskRepository repository;

    @Override
    public List<Task> showAll(){
        return (List<Task>) repository.findAll();
    }
    @Override
    public void add(Task tarea){
        repository.save(tarea);
    }


    @Override
    public void delete(Integer id){
        repository.deleteById(id);
    }

    @Override
    public Task findByid(Integer id) {
        return repository.findById(id).orElse(null);
    }
}
