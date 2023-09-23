$(document).ready(function () {
    $('#formulari').hide();
    $('#mostrardades').hide();
})

let email, password, mailformat, nom, cognoms, edat;

function dades() {
    email = $('#email').val();
    password = $('#pwd').val();
    mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    nom = $('#nom').val();
    nom = nom.charAt(0).toUpperCase() + nom.slice(1);
    cognoms = $('#cognoms').val();
    cognoms = cognoms.charAt(0).toUpperCase() + cognoms.slice(1);
    edat = $('#edat').val();
}

function comprovarDades1() {
    if (email === '' && password === '') {
        $('#email, #pwd').css('border', '2px solid red');
        $('#error').text('Completa tots els camps').show();

    } if (email === '' && password != '') {
        $('#pwd').css('border', '');
        $('#email').css('border', '2px solid red');
        $('#error').text('Completa tots els camps').show();
    } if (email != '' && !email.match(mailformat) && password != '') {
        $('#error').text('Introdueix un mail en format correcte').show();
    } if (email.match(mailformat) && password != '') {
        $('#login').fadeOut(350);
        $('#formulari').fadeIn(499);
    }
}
function formulari1() {
    dades();
    comprovarDades1();
}
function comprovarDades2() {
    if (nom === '' || cognoms === '' || edat === '') {
        $('#error2').text('Completa els camps si us plau.').show();
        $('#nom, #cognoms, #edat').css('border', '2px solid red');
    } if (nom != '' && cognoms === '' && edat === '') {
        $('#error2').text('Completa els camps si us plau.').show();
        $('#nom').css('border', '');
        $('#cognoms, #edat').css('border', '2px solid red');
    } if (nom != '' && cognoms != '' && edat === '') {
        $('#error2').text('Completa els camps si us plau.').show();
        $('#nom, #cognoms').css('border', '');
        $('#edat').css('border', '2px solid red');
    } if (edat <= 0 && cognoms != '' && edat != '') {
        $('#error2').text('Introdueix una edat valida.').show();
    } if (nom != '' && cognoms != '' && edat > 0) {
        $('#formulari').hide()
        $('#mostrardades').show()
        $('#mostrarnom span').text(nom).show();
        $('#mostrarcognom span').text(cognoms).show();
        $('#mostraredat span').text(edat).show();
        $('#mostraremail span').text(email).show();
        $('#mostrarpass span').text(password).show();
    }
}
function formulari2() {
    dades();
    comprovarDades2();
}