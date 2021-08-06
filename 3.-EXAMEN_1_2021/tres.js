/*
Nombre: Edison Francisco Uñog Valencia
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
*/

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
	
}


