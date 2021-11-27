function calcularpreciodescuento(precio, descuento ) {
    
    const descuentototal  = 100 - descuento;
    const Totalcondescuento = (precio * descuentototal ) / 100 

    return Totalcondescuento;
}

function Calculardescuento() {
    const answereobje = document.getElementById("answere");
//    const answerevalue = answereobje.value;

    const inputcantidad = document.getElementById("inputproduc");
    const cantidadvalue = inputcantidad.value;

    const inputdiscount = document.getElementById("inputdiscount");
    const discountvalue = inputdiscount.value;

    const montoapagar = calcularpreciodescuento(cantidadvalue, discountvalue);
  
    return answereobje.innerText = "Con este descuento de BlackFriday es de " + montoapagar;
}



