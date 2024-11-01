/*MOUSE OVER */

$("#evolucion").mouseover(() =>	{$("#evolucion").css({"background-color":"rgb(38, 38, 38, 0.7)",
    "color":"#f2f2f2"});})
.mouseout(() => {$("#evolucion").css({"background-color":"rgba(242, 242, 242, 0.4)",
    "color":"#cc0000"});});
$("#col1").mouseover(() =>	{$("#col1").css({"background-color":"rgb(38, 38, 38, 0.7)",
    "color":"#f2f2f2"});})
.mouseout(() => {$("#col1").css({"background-color":"rgba(242, 242, 242, 0.4)",
    "color":"#cc0000"});}) ;
$("#col2").mouseover(() => {$("#col2").css({"background-color":"rgb(38, 38, 38, 0.7)",
    "color":"#f2f2f2"});})
.mouseout(() => {$("#col2").css({"background-color":"rgba(242, 242, 242, 0.4)",
    "color":"#cc0000"});}) ;						 
$("#col3").mouseover(() => {$("#col3").css({"background-color":"rgb(38, 38, 38, 0.7)",
    "color":"#f2f2f2"});})
.mouseout(() => {$("#col3").css({"background-color":"rgba(242, 242, 242, 0.4)",
    "color":"#cc0000"});}) ;

$("#saludo").mouseover(() => {
	$("#saludo").css({"background-color":"rgb(153, 0, 0, 0.6)",
						"color":"white"});
	$("#saludo p").css("color","black");
})
.mouseout(() => {
	$("#saludo").css({"background-color":"rgba(38, 38, 38, 0.2)",
						"color":"black"});
	$("#saludo p").css("color","red");
});	

/*MODO OSCURO */

/*let mod = confirm('¿Quiere ver el sitio en Modo Oscuro?')

if(mod) {
	$("#cabecera").css("background-color","#1a1a1a");
	$("a").css("color","#f2f2f2");
	$("#presentacion, #presen2, #presen3").css({"background-color":"rgb(38, 38, 38, 0.7)",
							"color":"#cc0000"});
	$("#evolucion").css({"background-color":"rgb(38, 38, 38, 0.7)",
						"color":"#f2f2f2"})
	.mouseover(() => {$("#evolucion").css({"background-color":"rgba(242, 242, 242, 0.4)",
					"color":"#cc0000"});})
	.mouseout(() => {$("#evolucion").css({"background-color":"rgb(38, 38, 38, 0.7)",
					"color":"#f2f2f2"});});
	$("#col1, #col2, #col3").css({"background-color":"rgb(38, 38, 38, 0.7)",
					"color":"#f2f2f2"});
	$("#col1").mouseover(() => {$("#col1").css({"background-color":"rgba(242, 242, 242, 0.4)",
					"color":"#cc0000"});})
	.mouseout(() =>	{$("#col1").css({"background-color":"rgb(38, 38, 38, 0.7)",
					"color":"#f2f2f2"});});
	$("#col2").mouseover(() => {$("#col2").css({"background-color":"rgba(242, 242, 242, 0.4)",
					"color":"#cc0000"});})
	.mouseout(() =>	{$("#col2").css({"background-color":"rgb(38, 38, 38, 0.7)",
					"color":"#f2f2f2"});});
	$("#col3").mouseover(() => {$("#col3").css({"background-color":"rgba(242, 242, 242, 0.4)",
					"color":"#cc0000"});})
	.mouseout(() =>	{$("#col3").css({"background-color":"rgb(38, 38, 38, 0.7)",
					"color":"#f2f2f2"});});									
	$("#colecciones").css("background-color","#1a1a1a");
	$("body").css("background-image","url(imagenes/fondo-negro.png)");
	$("footer").css({"background-color":"#990000",
					"color":"#f2f2f2"});
	$("#zapatillas").css("background-color","#1a1a1a");
	$("#saludo").css({"background-color":"rgba(242, 242, 242, 0.4)",
					"color":"#cc0000"})
	.mouseout(() => {$("#saludo").css({"background-color":"rgba(242, 242, 242, 0.4)",
					"color":"#cc0000"});});
	$("#carrito img").remove();
	$("#carrito").prepend('<img src="imagenes/svg/carrito-osc.png">');

} */

/*CARRITO */

$("#carrito").click(() => {
	$("#carr-txt").toggle(300);
});