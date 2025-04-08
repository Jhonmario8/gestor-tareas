package com.example.gestiondetareas.controllers;

import com.example.gestiondetareas.models.Entities.Task;
import com.example.gestiondetareas.models.services.ITaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;


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
    public ResponseEntity<?> buscar(@PathVariable int id){
        Task task=service.findByid(id);
        if (task!=null) {
            return ResponseEntity.ok(task);
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarea no encontrada");
        }
    }

}
