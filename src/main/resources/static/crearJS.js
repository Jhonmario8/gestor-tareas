const boton=document.getElementById("boton")
boton.addEventListener("click",e=>{
    e.preventDefault()
    const titulo=document.getElementById("title").value
    const descripcion=document.getElementById("description").value
    const completa=document.getElementById("complete").checked
    fetch("http://localhost:8080/tasks/add",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion,
            completada: completa
        })
    })
        .then(response => response.text())
        .then(data=>alert("Tarea Agregada: ",data))
        .catch(e=>console.error("Error: ",e))
})

