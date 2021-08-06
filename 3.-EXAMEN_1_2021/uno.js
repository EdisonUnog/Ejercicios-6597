/*
Nombre: Edison Francisco Uñog Valencia
EJERCICIO 1
Un restaurante necesita un programa que permita 
ingresar datos de los platos con su precio a pagar
y cantidad hasta que el cliente quiera. Por cada cliente, se ingresa:
plato: (validar "ravioles", "milanesa", "pizza").
precio del plato (desde 100 hasta 500)
cantidad (mas que 0)
medio de pago (validar "efectivo", "debito", "credito")
a)	El importe total de todos los clientes.
		Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
c)	Promedio de ventas con Debito.
d)	Promedio por plato y el más barato.
*/

function mostrar(){
    let plato;
    let precio;
    let cantidad;
    let medioPago;
    let descuento;
    let aumento;
    
    let totalDescuento;
    let totalAumento;

    let pagoEfectivo;

    let acumDebito=0;
    let contDebito=0;
    let promDebito;

    let acumRavioles=0; let acumMilanesa=0; let acumPizza=0;
    let contRavioles=0; let contMilanesa=0; let contPizza=0;
    let promRavioles;
    let promMilanesa;
    let promPizza;
    
    let platoBarato;
    let precioBarato;
    let flag=1;

    let precioFinalDes;
    let precioFinalAum;
    let seguir;

    let total; // importe de todos los clientes

    do{
        plato=prompt("ingrese plato: ravioles, milanesa, pizza");
        while(!isNaN(plato)||plato!="ravioles"&&plato!="milanesa"&&plato!="pizza"){
            plato=prompt("Error.ingrese plato: ravioles, milanesa, pizza");
        }

        precio=parseFloat(prompt("ingresa precio"));
        while(isNaN(precio)||precio<100||precio>500){
            precio=parseFloat(prompt("Error. ingresa precio"));
        }
        cantidad=parseInt(prompt("ingresa cantidad"));
        while(isNaN(cantidad)||cantidad<0){
            cantidad=parseInt(prompt("ingresa cantidad"));
        }
        medioPago=prompt("medio de pago: efectivo, debito, credito");
        while(medioPago!="efectivo"&&medioPago!="debito"&&medioPago!="credito"){
            medioPago=prompt("Error. medio de pago: efectivo, debito, credito");
        }

        total=precio*cantidad; //AAAA

        if(medioPago=="efectivo"){
            pagoEfectivo=precio*cantidad;
            descuento=10; //AAA
        }else{
            if(medioPago=="credito"){
                aumento=15; //AAA
            }
        }
        console.log("DATOS: "+plato+" "+precio+ " "+cantidad);

        if(medioPago=="debito"){
            acumDebito+=precio;
            contDebito++;
            promDebito=acumDebito/contDebito;

        }
        switch(plato){
            case "ravioles":
                acumRavioles+=cantidad;
                contRavioles++;
                promRavioles=acumRavioles/contRavioles;
                break;
            case "milanesa":
                acumMilanesa+=cantidad;
                contMilanesa++;
                promMilanesa=acumMilanesa/contMilanesa;
                break;
            case "pizza":
                acumPizza+=cantidad;
                contPizza++;
                promPizza=acumPizza/contPizza;
                break;
        }

        if(flag||precio<precioBarato){
            precioBarato=precio;
            platoBarato=plato;
            flag=0;
        }

        seguir=prompt("ingresar otro dato");
    }while(seguir=="s");

    totalDescuento=(descuento/100)*total;
    precioFinalDes=total-totalDescuento;

    totalAumento=(total*aumento)/100;
    precioFinalAum=total+totalAumento;

    console.log("A.-descuento: "+precioFinalDes);
    console.log("A.-aumento: "+precioFinalAum);
    console.log("B.-importe total de los pagos en efectivo: "+pagoEfectivo);
    console.log("C.-promedio de pagos con debito es: "+promDebito);

    console.log("D.-promedio por plato\nRavioles: "+promRavioles+"\nMilanesa: "+promMilanesa+"\nPizza: "+promPizza+".\nY el plato mas barato es: "+platoBarato+" su precio: "+precioBarato);
}