const producto = {
    precio: 400,
    descuento: 10,
    neto: function() {
      const descuentoAplicado = this.precio * this.descuento / 100;
      const precioNeto = this.precio - descuentoAplicado;
      return precioNeto;
    }
  };
  
  console.log("Precio neto:", producto.neto());

