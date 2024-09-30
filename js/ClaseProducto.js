class Producto {
	constructor(id, nombre, precio, img) {
		this.id = parseFloat(id);
		this.nombre = nombre;
		this.precio = parseFloat(precio);
		this.img = img;
		this.disponible = true;
	}
	sIva() {
		this.precio = this.precio * 1.21
	} 
	vender() {
		this.disponible = false;
	}
}

const productos = [];

productos.push(new Producto("0","Jordan 1 Retro High","3000","imagenes/jordan1.jpg"));
productos.push(new Producto("1","Buzo Jordan Jumpman","1600","imagenes/Pantalones.jpg"));
productos.push(new Producto("2","Jordan Jumpman 2020","2400","imagenes/Jordan2.jpg"));
productos.push(new Producto("3","Buzo Jordan Sport DNA","2200","imagenes/Buzo.jpg"));
productos.push(new Producto("4","Jordan 3 Retro","2000","imagenes/Jordan3.jpg"));
productos.push(new Producto("5","Jordan Dri-FIT","1800","imagenes/Shorts.jpg"));