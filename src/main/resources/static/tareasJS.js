async function  getData(){
    try{
        let res=await fetch("http://localhost:8080/tasks")
        if (!res.ok){
            throw new Error("Error al obtener las tareas")
        }
        let json=await res.json()
        const tabla=document.getElementById("Tabla-tareas")
        json.forEach(task=>{
            let row =document.createElement("tr")
            row.innerHTML=`
        <td>${task.id}</td>
        <td>${task.titulo}</td>
        <td>${task.descripcion}</td>
        <td>${task.completada?"Si":"No"}</td>
        <td><a href="#" class="opc" data-id="${task.id}">Borrar</a></td>
      
        `
            tabla.appendChild(row)

            document.querySelectorAll(".opc").forEach(link =>{
                link.addEventListener("click",async e =>{
                    e.preventDefault()
                    const id=link.getAttribute("data-id")
                    let conf=confirm("Estas seguro de que deseas borrar la tarea?")
                    if (conf) {
                        try {
                            let res=await fetch(`http://localhost:8080/tasks/delete/${id}`)
                            if(!res.ok){
                                throw new Error("Error al eliminar la tarea")
                            }
                            alert("Tarea eliminada")
                            link.closest("tr").remove()
                        }catch (e){
                                console.error(e)
                            }

                    }else{
                        alert("Operacion cancelada")
                    }
                })
            })
        })
    }catch (e){
        console.error(e)
    }
}

document.addEventListener("DOMContentLoaded",getData)