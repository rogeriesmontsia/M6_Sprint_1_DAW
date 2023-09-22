$(document).ready(function() {
    $('#formulari').hide()
    $('#mostrardades').hide()
});
    function formulari1() {
        var email = $('#email').val();
        var password = $('#pwd').val();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if ($('#email').val() === '' || $('#pwd').val() === '') {
            $('#email').css('border', '2px solid red')
            $('#pwd').css('border', '2px solid red')
            $('#error').text('Completa tots els camps').show();

        }else if (!email.match(mailformat)){
            $('#error').text('Introdueix un correu en format correcte.').show();
            
        }
        else {
            $('#login').fadeOut(3000)
            $('#formulari').fadeIn(3000)
        } 
    };
    function formulari2() {

        // Obtén los valores de los campos
        var nom = $('#nom').val()
        var cognoms = $('#cognoms').val()
        var edat = $('#edat').val()
        var email = $('#email').val()
        var password = $('#pwd').val()

        // Verifica si el camps estan plens
        if (nom === '' || cognoms === '' || edat === '') {
            $('#error2').text('Completa els camps si us plau.').show();
        } else {
            $('#formulari').hide()
            // Construye el mensaje a mostrar
            var mensaje = 'Perfil:\n' +
              'E-mail: ' + email + '\n' +
              'Password: ' + password + '\n' +
              'Nombre: ' + nom + '\n' +
              'Apellidos: ' + cognoms + '\n' +
              'Edad: ' + edat;

            // Muestra el mensaje en el área 'mostrardades'
            $('#mostrardades').html('<pre>' + mensaje + '</pre>').show();
        } 

    };