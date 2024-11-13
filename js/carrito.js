const carrito = [];
const guardarSession = (clave,valor) => { localStorage.setItem(clave,valor) };
let total = 0;

function agregarCarrito(nombre, precio, cantidad) {
	$("#carr-txt p, #carr-txt a, #carr-txt select, #carr-txt li").remove();
	let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
	let encontrado = carrito.find((e) => e.nombre === nombre);
	if(encontrado !== undefined) {
		encontrado.cantidad += cantidad;
	}
	else {
		carrito.push({nombre: nombre, precio: precio, cantidad: cantidad});
	}
	total = carrito.reduce((acc,item) => acc + (item.precio * item.cantidad), 0) * 1.21;
	guardarSession('carrito', JSON.stringify(carrito));
	
	console.log("Carrito actualizado:", carrito);
	console.log("Total:", total.toFixed(2));

	mostrarCarrito();
}

function mostrarCarrito() {
	const almacenados = JSON.parse(localStorage.getItem("carrito")) || [];
	for (let index = 0; index < localStorage.length; index++) {
		let clave = localStorage.key(index);
		console.log(clave);
		console.log(localStorage.getItem(clave));
	}
	$("#carr-txt p, #carr-txt a, #carr-txt select, #carr-txt li").remove();
	let subtotal = 0;
	if (almacenados.length > 0) {
        $("#carr-img").remove();
        $("#carrito").prepend(`<img src="imagenes/svg/carrito-listo.png" id="carr-img">`);
		for (const carr of almacenados) {
			$("#carr-txt").prepend(`<li>${carr.nombre}\n\n$${carr.precio}\n\nCantidad:${carr.cantidad}</li>\n`);
			subtotal += carr.precio * carr.cantidad;
		}
		
		let totalIVA = (subtotal * 1.21).toFixed(2);
		let cuotas = 1;

		$("#carr-txt").append(`<p style="font-size: 15px;">\nCuotas</p>
							<select class="cuotas">
								<option value="1">1</option>
								<option value="3">3</option>
								<option value="6">6</option>
								<option value="9">9</option>
								<option value="12">12</option>
							</select>
							<p id="total" style="color: red;">Total + IVA:\n$${totalIVA}</p>
							<a href="#" id="btn-carr" class="btn btn-danger">Comprar</a>`);

		$(".cuotas").change(function(e) {
			cuotas = e.target.value;
			let totalCuotas = (totalIVA / cuotas).toFixed(2);
			$("#total").text(`Total + IVA (${cuotas} cuotas): $${totalCuotas}`);
		});

		let totalCuotas = (totalIVA / cuotas).toFixed(2);
		$("#total").text(`Total + IVA (${cuotas} cuotas): $${totalCuotas}`);

		$("#btn-carr").click(() => {
            venderCarrito(almacenados,subtotal);
        });
	} else {
		$("#carr-txt").prepend('<p>Carrito vacío</p>');
	}
}

function venderCarrito(carrito, total) {
	alert("Compra realizada con exito!");
	localStorage.removeItem('carrito');
	$("#carr-txt p, #carr-txt a, #carr-txt select, #carr-txt li").remove();
	$("#carr-txt").prepend('<p>Carrito vacio</p>');
	/*for (const carr of carrito) {
		for (const producto of productos) {
			if (carr.nombre == producto.nombre) {
					producto.vender();
					console.log(producto.nombre);
					console.log(producto.disponible);			
				}
			}
		}	*/
} 

document.addEventListener('DOMContentLoaded', mostrarCarrito);