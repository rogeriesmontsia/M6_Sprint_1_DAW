var dades = []

function updateContador() {
    document.getElementById("contador").innerText = dades.length
}

function introduirDades() {
    dades.push(document.getElementById("name").value)
    updateContador()
    
}

function mostrarElements() {
    //dades.forEach((element) => console.log(element))
    var html = "<ul>"
    for (var i = 0; i < dades.length; i++) {
        html += "<li>" + dades[i] + "<button onclick='deleteDades("+i+")'>Eliminar</button></li>"
    }
    html += "</ul>"
    document.getElementById("dades").innerHTML = html
    
}


function deleteDades(index) {
    dades.splice(index,1)
    mostrarElements()
    console.log(index)
    updateContador()
}