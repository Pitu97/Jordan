const carrito = [];
const guardarSession = (clave,valor) => { localStorage.setItem(clave,valor) };
let total = 0;

function agregarCarrito(nombre, precio) {
	$("#carr-txt p, #carr-txt a, #carr-txt select, #carr-txt li").remove();
	carrito.push({nombre: nombre, precio: precio});
	total = (total + precio) * 1.21;
	let resultado = (total).toFixed(2);
	guardarSession("carrito", JSON.stringify(carrito));	
	for (let index = 0; index < localStorage.length; index++) {
		let clave = localStorage.key(index);
		console.log(clave);
		console.log(localStorage.getItem(clave));
	}
	console.log(total);
	const almacenados = JSON.parse(localStorage.getItem("carrito"));

	if (almacenados != null) {
        $("#carr-img").remove();
        $("#carrito").prepend(`<img src="imagenes/svg/carrito-listo.png" id="carr-img">`)
		for (const carr of almacenados) {
			$("#carr-txt").prepend(`<li>${carr.nombre}\n\n$${carr.precio}</li>\n`);
		}
		$("#carr-txt").append(`<p style="font-size: 15px;">\nCuotas</p>
							<select class="cuotas">
								<option value="1">1</option>
								<option value="3">3</option>
								<option value="6">6</option>
								<option value="9">9</option>
								<option value="12">12</option>
							</select>
							<p id="total" style="color: red;">Total + IVA:\n$${resultado}</p>
							<a href="#" id="btn-carr" class="btn btn-danger">Comprar</a>`);
		$(".cuotas").change(function(e) {
			resultado = (calculoCuotas(total,e.target.value)).toFixed(2);
			$("#total, #btn-carr").remove();
			$("#carr-txt").append(`<p id="total" style="color: red;">Total +  IVA:\n$${resultado}</p>
							<a href="#" id="btn-carr" class="btn btn-danger">Comprar</a>`)
			$("#btn-carr").click(() => {venderCarrito(almacenados,resultado)
                location.reload();
            });
		});
		$("#btn-carr").click(() => {
            venderCarrito(almacenados,resultado)
            location.reload();
        });
	}
}

function eliminarCarrito (nombre) {
	carrito.filter(producto => producto.nombre !== nombre);
	guardarSession("carrito", JSON.stringify(carrito));
}

function calculoCuotas (precio,cuota) {
	console.log(precio/cuota);
	return precio/cuota;
}

function venderCarrito(carrito, total) {
	alert("Compra realizada con exito!");
		for (const carr of carrito) {
			for (const producto of productos) {
				if (carr.nombre == producto.nombre) {
					producto.vender();
					console.log(producto.nombre);
					console.log(producto.disponible);			
				}
			}
			eliminarCarrito(carr.nombre);
		}
		console.log(total);
		$("#carr-txt p, #carr-txt a, #carr-txt select, #carr-txt li").remove();
		$("#carr-txt").prepend('<p>Carrito vacio</p>');	
} 