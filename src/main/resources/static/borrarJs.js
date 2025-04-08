const boton=document.getElementById("boton")

boton.addEventListener("click",async e =>{
    e.preventDefault()
    const id=document.getElementById("id").value
    try{
        let res=await fetch(`http://localhost:8080/tasks/search/${id}`)

        if (res.status===404){
            alert("La tarea no se encontro")
            return
        }
        if (!res.ok){
            throw new Error("Error al buscar la tarea")
        }

    }catch (e){
        console.error(e)
    }
    let conf=confirm("Confirme la eliminacion")
    if (conf) {
        try {
            let res = await fetch(`http://localhost:8080/tasks/delete/${id}`)
            if (!res.ok) {
                throw new Error("Error al eliminar la tarea")
            }
            alert("Tarea eliminada")
            window.location.href="Tareas.html"
        } catch (e) {
            console.error(e)
        }
    }else {
        alert("Operacion cancelada")
    }
})