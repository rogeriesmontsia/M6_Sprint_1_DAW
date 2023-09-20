hiddenAll()
show("1")

function show(id) {
    hiddenAll()
    document.getElementById(id).style = "display:block"
}

function hiddenAll() {
    document.getElementById("1").style = "display:none"
    document.getElementById("2").style = "display:none"
    document.getElementById("3").style = "display:none"
}