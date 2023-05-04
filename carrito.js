const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-el-carrito"));


const carritoVacio = document.getElementById("carrito-vacio");
const productosCarrito = document.getElementById("productos-carrito");
const carritoFunciones = document.getElementById("carrito-funciones");
const carritoCompro = document.getElementById("carrito-compro");



function cargarProductosAlCarrito(){

if (productosEnCarrito) {
carritoVacio.classList.add("disable");
productosCarrito.classList.remove("disable");
carritoFunciones.classList.remove("disable");


productosCarrito.innerHTML= "";

productosEnCarrito.forEach(producto =>  {
    const div = document.createElement("div");
div.classList.add("producto-carrito")

div.innerHTML = `
<img class="carrito-producto-imagen" src="${producto.imagen}" alt = "${producto.titulo}">
<div class="carrito-producto nombre">
   <small>titulo</small>
   <h3>${producto.titulo}</h3>
</div>
<div class="carrito-producto-cantidad">
    <small>Cantidad</small>
    <p>${producto.cantidad}</p>
</div>
<div class="carrito-producto-precio">
    <small>precio</small>
    <p>$${producto.precio}</p>
</div>
<div class="carrito-producto-subtotal">
    <small>subtotal</small>
    <p>$${producto.precio * producto.cantidad}</p>
</div>

<button class="carrito-producto-eliminar" id = ${producto.id} >Eliminar</button>
`;

productosCarrito.append(div);

});

} else {
    carritoCompro.classList.add("disable");
}
}
cargarProductosAlCarrito();



