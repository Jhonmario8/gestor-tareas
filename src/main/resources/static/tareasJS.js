async function getTasks(){
    try{
        let res=await fetch("http://localhost:8080/tasks")
        let json=await res.json()
        const tabla=document.getElementById("Tabla-tareas")
        json.forEach(task=>{
            const row=document.createElement("tr")
            row.innerHTML= `
            <td>${task.id}</td>
            <td>${task.titulo}</td>
            <td>${task.descripcion}</td>
            <td>${task.completada?"Si":"No"}</td>
            <td><a href="http://localhost:8080/tasks/delete/${task.id}" class="opc"  >Borrar</a></td>`

            tabla.appendChild(row)
        })
    }catch (e){
        console.error("Error al obtener tareas: ",e)
    }
}
document.addEventListener("DOMContentLoaded",getTasks)

