const boton = document.getElementById("boton");
boton.addEventListener("click", async (e) => {
    e.preventDefault();
    let titulo = document.getElementById("title").value;
    const descripcion = document.getElementById("description").value;
    const completa = document.getElementById("complete").checked;
    titulo = titulo.charAt(0).toUpperCase() + titulo.slice(1);
    try {
        const res = await fetch("http://localhost:8080/tasks");
        const json = await res.json();

        for (const task of json) {
            if (task.titulo.toLowerCase() === titulo.toLowerCase()) {
                const conf = confirm("Ya hay una tarea con este nombre. ¿Desea sobreescribirla?");
                if (conf) {
                    try {
                        const resAct = await fetch(`http://localhost:8080/tasks/update/${task.id}`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ titulo, descripcion, completa })
                        });
                        if (!resAct.ok) {
                            throw new Error("Error al sobreescribir la tarea");
                        }
                        alert("Tarea sobreescrita con éxito");
                        window.location.href = "Tareas.html";
                        return;
                    } catch (e) {
                        console.error(e);
                    }
                } else {
                    return;
                }
            }
        }
        const response = await fetch("http://localhost:8080/tasks/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo,
                descripcion,
                completada: completa
            })
        });

        const data = await response.text();
        alert("Tarea agregada: " + data);
    } catch (e) {
        console.error("Error: ", e);
    }
});