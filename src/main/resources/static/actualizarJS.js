const boton=document.getElementById("botonBuscar")
boton.addEventListener("click",async (e)=>{
    e.preventDefault()
    const id=document.getElementById("id").value
    try {
        let res= await fetch(`http://localhost:8080/tasks/search/${id}`)
            if (!res.ok){
                throw new Error(`Erro al obtener la tarea: ${res.status}`)
            }
            let task= await res.json()
            let form =document.getElementById("form")
            form.innerHTML=""

            const labelT=document.createElement("label")
            labelT.setAttribute("for","title")
            labelT.textContent="Titulo: "
            const titulo =document.createElement("input")
            titulo.setAttribute("id","title")
            titulo.setAttribute("required","")
            titulo.value=task.titulo

            const labelD=document.createElement("label")
            labelD.setAttribute("for","description")
            labelD.textContent= "Descripcion: "
            const descripcion=document.createElement("input")
            descripcion.setAttribute("id","description")
            descripcion.setAttribute("required","")
            descripcion.value=task.descripcion

            const labelC=document.createElement("label")
            labelC.setAttribute("for","complete")
            labelC.textContent="Completa: "
            const completa=document.createElement("input")
            completa.setAttribute("id","complete")
            completa.setAttribute("type","checkbox")
            if (task.completada){
                completa.checked=true
            }

            const actualizarBtn =document.createElement("button")
            actualizarBtn.setAttribute("id","botonActualizar")
            actualizarBtn.textContent= "Actualizar"

            actualizarBtn.addEventListener("click",async (e) =>{
                e.preventDefault()
                try {
                    let res=await fetch(`http://localhost:8080/tasks/update/${id}`,{
                        method:"PUT",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify({
                            titulo: titulo.value,
                            descripcion: descripcion.value,
                            completada: completa.checked
                        })
                    })
                    if (!res.ok){
                        throw new Error( `Error al actualizar la tarea: ${res.status}`)
                    }
                    alert("Tarea Actualizada con exito")
                    window.location.href="Tareas.html"
                }catch(e){
                    console.error(e)
                }
            })
        form.appendChild(labelT);
        form.appendChild(titulo);
        form.appendChild(labelD);
        form.appendChild(descripcion);
        form.appendChild(labelC);
        form.appendChild(completa);
        form.appendChild(actualizarBtn);
    }catch(e){
        console.error(e)
    }
})