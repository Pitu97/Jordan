$(document).ready(function() {
	const APIURL = 'https://jsonplaceholder.typicode.com/users'
	$("#saludo").append(`<h4>Ingresar Usuario</h4>
						<input type="number" class="persona" placeholder="Ingrese su id" style="width:120px; font-size:10px; display:none">
						<button id="ingreso">Ingresar</button>`);
	$("#ingreso").click(() => {
		$("#saludo input").toggle(300);
		$(".persona").change(function (e) {
			if (e.target.value <= 10 && e.target.value > 0) {
				$.get(APIURL, function(respuesta, estado) {
				if(estado === "success") {
					let usuarios = respuesta;
					for (const datos of usuarios) {
						if(e.target.value == datos.id) {
							$("#saludo h6, #saludo p, #saludo h4").remove();
							$("#saludo").prepend(`<h6>Bienvenido ${datos.username}!</h6>
											<p style="color:red; font-size:11px">Ingresar otro usuario</p>`);
						}
					}
				}
			});
		}
		else {
			$("#saludo h6, #saludo p, #saludo h4").remove();
			$("#saludo").prepend(`<h4>Usuario Inexistente</h4>`)
		}});
	});
});

const carrito = [];
const guardarSession = (clave,valor) => { localStorage.setItem(clave,valor) };
let total = 0;


let i = 0;
let tarjetas = document.getElementsByClassName('col');
for (const producto of productos) {
	tarjetas[i].innerHTML = `<div class="card h-100">
	<img src="${producto.img}" class="card-img-top" alt="...">
	<div class="card-body">
	<h5 class="card-title">${producto.nombre}</h5>
	<h5 class="card-title">$${producto.precio}</h5>
	<a href="#" id="btn${producto.id}" class="btn btn-danger">Comprar</a>
	<a href="#" id= "carr${producto.id}" class="carrito-add"><img src="imagenes/svg/carrito-add.png"</a></div></div>`;
	$(`#btn${producto.id}`).click(() => {venderProducto(producto)})
	.mouseover(()=>{$(`#btn${producto.id}`).animate({width:'117px',
													height:'39px'},
													"fast");
					}
			   )
	.mouseout(()=>{$(`#btn${producto.id}`).animate({width:'115px',
													height:'37px'},
													"fast");
					}
			   );
	$(`#carr${producto.id}`).click(() => {agregarCarrito(producto.nombre,producto.precio)});
	i++;
}



/*function agregarProductos() {
	let nombre = prompt("Ingrese el nombre del producto: ");
	let precio = prompt("Ingrese el precio del articulo: ");
	productos.push(new Producto(nombre, precio));
	for(const producto of productos) {
		console.log(producto.nombre);
		console.log(producto.precio);
		console.log(producto.disponible);
	}
}*/

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
			$("#btn-carr").click(() => {venderCarrito(almacenados,resultado)});
		});
		$("#btn-carr").click(() => {venderCarrito(almacenados,resultado)});
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

function venderProducto(producto) {
	producto.sIva();
	let cuotas = parseFloat(prompt("Ingrese el numero de cuotas (3,6,9,12)"));
	let resultado = calculoCuotas(producto.precio,cuotas);
	let res = confirm("El precio total es: $"+ producto.precio +"\n\nEn "+ cuotas +" cuotas de $"+ resultado +"\n\nDesea confirmar la compra?");
	if (res) {
		producto.vender();
	}
	console.log(producto.id);
	console.log(producto.nombre);
	console.log(producto.precio);
	console.log(producto.disponible);
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

						  

//agregarCarrito(productos[0].nombre,productos[0].precio);
//venderProducto(productos[1]);
//agregarProductos();



