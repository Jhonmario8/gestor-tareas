package com.example.gestiondetareas.controllers;

import com.example.gestiondetareas.models.Entities.Task;
import com.example.gestiondetareas.models.services.ITaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
public class TaskController {
    @Autowired
    private ITaskService service;

    @GetMapping("/tasks")
    public List<Task> show(){
        return service.showAll();
    }


    @PostMapping("/tasks/add")
    public void add(@RequestBody Task tarea){
        service.add(tarea);
    }

    @PutMapping("/tasks/update/{id}")
    public void update(@PathVariable int id, @RequestBody Task tarea){
            tarea.setId(id);
            service.add(tarea);
    }
    @GetMapping("tasks/delete/{id}")
    public RedirectView delete(@PathVariable int id){
            service.delete(id);
        return new RedirectView("/Tareas.html");
    }

    @GetMapping("/tasks/search/{id}")
    public Task buscar(@PathVariable int id){
        return service.findByid(id);
    }

}
