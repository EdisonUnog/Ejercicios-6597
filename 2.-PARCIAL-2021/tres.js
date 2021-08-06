/*
EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar:
*marca del producto
* Tipo de galletita : "con sal", "sin sal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"
Se pide informar por document.write:
a) el ingreso de tipo con la mayor cantidad de cajas.
b) de las galletitas dulces, la que menos kilos tiene por caja.
c) que porcentaje de cajas hay sobre el total de cada tipo
[ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)]
*/

function mostrar(){

    let marca; let tipoGalleta; let cantidadCajas; let kilos; let nombreProveedor; let origen;

    let acumConSal=0; let acumSinSal=0; let acumDulces=0;
    let contConSal=0; let contSinSal=0; let contDulces=0;

    let flagTodo=1;
    let maxCantiCajas;
    let maxNomCajas;

    let minKilos;

    let porConSal;
    let porSinSal;
    let porDulces;

    for(let i=0; i<10; i++){
        marca=prompt("ingresa marca");
        while(!isNaN(marca)){
            marca=prompt("Error. Ingresa marca");
        }

        tipoGalleta=prompt("tipo de galleta: con sal, sin sal, dulces").toLowerCase();
        while(!isNaN(tipoGalleta)||tipoGalleta!="con sal"&&tipoGalleta!="sin sal"&&tipoGalleta!="dulces"){
            tipoGalleta=prompt("Error. Tipo de galleta: con sal, sin sal, dulces").toLowerCase();
        }

        cantidadCajas=parseInt(prompt("Ingresa cantidad de cajas"));
        while(isNaN(cantidadCajas)||cantidadCajas<0){
            cantidadCajas=parseInt(prompt("Error. Ingresa cantidad de cajas"));
        }

        kilos=parseFloat(prompt("Ingresa kilos"));
        while(isNaN(kilos)||kilos<0){
            kilos=parseFloat(prompt("Error. Ingresa kilos"));
        }

        nombreProveedor=prompt("Nombre del proveedor");
        while(!isNaN(nombreProveedor)){
            nombreProveedor=prompt("Error. Nombre del proveedor");
        }

        origen=prompt(" Origen: nacional, mercosur, resto del mundo").toLowerCase();
        while(!isNaN(origen)||origen!="nacional"&&origen!="mercosur"&&origen!="resto del mundo"){
            origen=prompt("Error. Origen: nacional, mercosur, resto del mundo").toLowerCase();
        }

        if(flagTodo||cantidadCajas>maxCantiCajas){
            maxCantiCajas=cantidadCajas; //AAAAAAAA
            maxNomCajas=tipoGalleta;
        }
        if(flagTodo||tipoGalleta=="dulces"&&kilos<minKilos){
            minKilos=kilos;   //BBBBBBBBB
            flagTodo=0;
        }

        if(tipoGalleta=="con sal"){
            acumConSal+=cantidadCajas;
            contConSal++;
        }else{
            if(tipoGalleta=="sin sal"){
                acumSinSal+=cantidadCajas;
                contSinSal++;
            }else{
                acumDulces+=cantidadCajas;
                contDulces++;
            }
        }

        console.log("DATOS: "+tipoGalleta+" cantidad:"+cantidadCajas+" peso: "+kilos);

    }// fin del for

    // porcentajes:
    porConSal=(contConSal/10)*100;
    porSinSal=(contSinSal/10)*100;
    porDulces=(contDulces/10)*100;

    console.log("A.-Galletas: "+maxNomCajas+" mayor cantidad de cajas: "+maxCantiCajas);

    console.log("B.-Peso mas bajo de galletas dulces: "+minKilos);

    console.log("el porcentaje de cada producto es_\nCon sal: "+porConSal+"%\nsin sal: "+porSinSal+"%\ndulces: "+porDulces+"%");
	
}


/*
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

*/

/*
EJERCICIO 2
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) y si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que ingresar 
se debe reportar
a)	El nombre de la persona más joven que se dio sputnik
b)	El porcentaje de jóvenes que tuvieron la enfermedad
c)	El promedio de edad 
d)  La vacuna más veces aplicada

function mostrar(){

    let nombre; let edad; let vacuna; let contrajoVirus;
    let seguir;

    let acumAstrazeneca=0; let acumSputnik=0; let acumSinopharm=0;
    let contAstrazeneca=0; let contSputnik=0; let contSinopharm=0;
    let mayorVacuna;

    let acumEdad=0;
    let contEdad=0;
    let promEdad;

    let acumEnfermedad=0;
    let contEnfermedad=0;
    let porJovenEfermedad;

    let masJoven;
    let masJovenNom;
    let flag=1;
    
    do{
        nombre=prompt("Ingresa nombre");
		while(!isNaN(nombre)){
			nombre=prompt("Debes ingresar tu nombre");
		}

		edad=parseInt(prompt("ingresa edad"));
		while(isNaN(edad)||edad<0){
			edad=parseInt(prompt("Debes ingresar edad"));
		}
        vacuna=prompt("que vacuna te pusiste: sputnik, astrazeneca, sinopharm");
		while(!isNaN(vacuna)||vacuna!="sputnik"&&vacuna!="astrazeneca"&&vacuna!="sinopharm"){
			vacuna=prompt("Ingresa tipo de vacuna que tienes: sputnik, astrazeneca, sinopharm");
		}
        contrajoVirus=prompt("contrajo virus: si / no");
        while(!isNaN(contrajoVirus)||contrajoVirus!="si"&&contrajoVirus!="no"){
            contrajoVirus=prompt("contrajo virus: si / no");
        }
        acumEdad+=edad;
        contEdad++;
        promEdad=acumEdad/contEdad;

        if(flag||edad>masJoven){
            masJoven=edad;
            masJovenNom=nombre;
            flag=0;
        }

        if(contrajoVirus=="si"){
            acumEnfermedad+=edad;
            contEnfermedad++;
            porJovenEfermedad=((contEnfermedad/acumEnfermedad)*100).toFixed(2);
        }


        seguir=prompt("ingresar otro paciente");
    }while(seguir=="s")

    //mayor vacuna
    if(acumAstrazeneca>acumSinopharm&&acumAstrazeneca>acumSputnik){
        mayorVacuna="astrazeneca";
    }else if(acumSinopharm>acumAstrazeneca&&acumSinopharm>acumSputnik){
        mayorVacuna="sinopharm";
    }else{
        mayorVacuna="sputnik";
    }

    console.log("A.-La persona mas joven es: "+masJovenNom+" y tiene: "+masJoven+" años");

    console.log("B.-porcentaje de jovenes que tuvieron enfermedad: "+porJovenEfermedad+"%");

    console.log("C.-Promedio de edad: "+promEdad);

    console.log("D.-la vacuna mas aplicada: "+mayorVacuna);
    
}*/
/*
EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar
 marca del producto
 Tipo de galletita : "con sal", "sin sal", "dulces".
 cantidad de cajas: mas de 0
 cantidad de kilos por caja:mas de 0
 nombre proveedor
 origen: "nacional", "mercosur", "resto del mundo"
	a) informar el ingreso con la menor cantidad de cajas
	b) de las galletitas dulces , la marca que mas kilos tiene por caja
	c)que porcentaje de cajas hay sobre el total de cada tipo
	ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)


function mostrar(){

    let marca; let tipoGalleta; let cantidadCajas; let kilos; let nombreProveedor; let origen;

    let acumConSal=0; let acumSinSal=0; let acumDulces=0;
    let contConSal=0; let contSinSal=0; let contDulces=0;

    let flagTodo=1;
    let maxCantiCajas;
    let maxNomCajas;

    let maxKilos;
    let maxMarca;

    let porConSal;
    let porSinSal;
    let porDulces;

    for(let i=0; i<10; i++){
        marca=prompt("ingresa marca");
        while(!isNaN(marca)){
            marca=prompt("Error. Ingresa marca");
        }

        tipoGalleta=prompt("tipo de galleta: con sal, sin sal, dulces").toLowerCase();
        while(!isNaN(tipoGalleta)||tipoGalleta!="con sal"&&tipoGalleta!="sin sal"&&tipoGalleta!="dulces"){
            tipoGalleta=prompt("Error. Tipo de galleta: con sal, sin sal, dulces").toLowerCase();
        }

        cantidadCajas=parseInt(prompt("Ingresa cantidad de cajas"));
        while(isNaN(cantidadCajas)||cantidadCajas<0){
            cantidadCajas=parseInt(prompt("Error. Ingresa cantidad de cajas"));
        }

        kilos=parseFloat(prompt("Ingresa kilos"));
        while(isNaN(kilos)||kilos<0){
            kilos=parseFloat(prompt("Error. Ingresa kilos"));
        }

        nombreProveedor=prompt("Nombre del proveedor");
        while(!isNaN(nombreProveedor)){
            nombreProveedor=prompt("Error. Nombre del proveedor");
        }

        origen=prompt(" Origen: nacional, mercosur, resto del mundo").toLowerCase();
        while(!isNaN(origen)||origen!="nacional"&&origen!="mercosur"&&origen!="resto del mundo"){
            origen=prompt("Error. Origen: nacional, mercosur, resto del mundo").toLowerCase();
        }

        if(flagTodo||cantidadCajas>maxCantiCajas){
            maxCantiCajas=cantidadCajas; //AAAAAAAA
            maxNomCajas=tipoGalleta;
        }
        if(flagTodo||tipoGalleta=="dulces"&&kilos>maxKilos){
            maxKilos=kilos;   //BBBBBBBBB
            maxMarca=marca;
            flagTodo=0;
        }

        if(tipoGalleta=="con sal"){
            acumConSal+=cantidadCajas;
            contConSal++;
        }else{
            if(tipoGalleta=="sin sal"){
                acumSinSal+=cantidadCajas;
                contSinSal++;
            }else{
                acumDulces+=cantidadCajas;
                contDulces++;
            }
        }

        console.log("DATOS: "+tipoGalleta+" cantidad:"+cantidadCajas+" peso: "+kilos);

    }// fin del for

    // porcentajes:
    porConSal=(contConSal/10)*100;
    porSinSal=(contSinSal/10)*100;
    porDulces=(contDulces/10)*100;

    console.log("A.-Galletas: "+maxNomCajas+" mayor cantidad de cajas: "+maxCantiCajas);

    console.log("B.-Peso mas alto de galletas dulcesy su marca: "+maxMarca+" peso mas alto: "+ maxKilos+"kg");

    console.log("C.-el porcentaje de cada producto es_\nCon sal: "+porConSal+"%\nsin sal: "+porSinSal+"%\ndulces: "+porDulces+"%");
	
}*/


