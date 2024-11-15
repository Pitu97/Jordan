$(document).ready(function() {
	const APIURL = 'https://jsonplaceholder.typicode.com/users';
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    
    $("#saludo").append(`<input type="number" class="persona" placeholder="Ingrese su id" min="1" max="10" style="width:120px; font-size:10px; display:none">
						<button id="ingreso" style="margin-top:5px; border-radius:10px">Ingresar</button>
                        <button id="borrar" style="margin-top:5px; border-radius:10px; display:none">Desconectarse</button>`);
	
    if (usuario) {
        mostrarMensaje(`Bienvenido ${usuario.username}!`);
        $("#borrar").css("display","inline");
    } else {
        $("#saludo").prepend(`<h4>Ingresar Usuario</h4>`);
    }

	function mostrarMensaje(mensaje, esError = false) {
		$("#saludo h6, #saludo p, #saludo h4").remove();
		const color = esError ? 'red' : 'black';
		$("#saludo").prepend(`<h6 style="color: ${color}; font-size:15px">${mensaje}</h6>`);
        $("#ingreso").css("display","none");
	}					

	$("#ingreso").click(() => {
		$("#saludo input").toggle(300);
	});

    $("#borrar").click(() => {
        localStorage.removeItem('usuario');
        location.reload();
    });

	$(".persona").change(async function (e) {
		const userID = parseInt(e.target.value);
		if (userID < 1 || userID > 10) {
			mostrarMensaje('Usuario Inexistente', true);
			return;
		}
		try {
			const response = await fetch(APIURL);
			const usuarios = await response.json();
			const usuarioEncontrado = usuarios.find(user => user.id === userID);
			if (usuarioEncontrado) {
				mostrarMensaje(`Bienvenido ${usuarioEncontrado.username}!`);
                $("#borrar").css("display","inline");
                guardarSession('usuario', JSON.stringify(usuarioEncontrado));
			} else {
				mostrarMensaje('Usuario Inexistente', true);
			}
		} catch(error) {
			console.error('Error al obtener los datos:', error);
			mostrarMensaje('Error al conectar con la API', true);
		}
	});
});