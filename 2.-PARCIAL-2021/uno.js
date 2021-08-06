/*
EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El importe total a pagar por las vacunaciones, sin descuento.
b)El importe total a pagar con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 20% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 30% de descuento sobre el total a pagar.
c)La raza con más cantidad de perros
d)Nombre, raza y edad del perro más viejo ingresado */

function mostrar(){

	

	let nombre; let raza; let edad; let peso; let precioConsulta;
	
	let seguir;

	let datos;
	let mensajeA;
	let descuento;
	let totalDescuento;
	let precioFinal;

	let acumSharpei=0; let acumGalgo=0; let acumPastor=0;
	let contSharpei=0; let contGalgo=0; let contPastor=0;

	let acumPrecioTotal=0;

	let acumRaza=0;
	let contRaza=0;

	let flagTodo=1;
	let maxRaza;

	let maxEdadViejo;
	let maxRazaViejo;
	let maxNomViejo;

	let total;

	do{
		nombre=prompt("Ingresa nombre");
		while(!isNaN(nombre)){
			nombre=prompt("Debes ingresar tu nombre");
		}

		raza=prompt("Ingresa raza del perro: sharpei, galgo, pator").toLowerCase();
		while(!isNaN(raza)||raza!="sharpei"&&raza!="galgo"&&raza!="pastor"){
			raza=prompt("Error. Ingresa raza del perro: sharpei, galgo, pator").toLowerCase();
		}

		edad=parseInt(prompt("ingresa edad"));
		while(isNaN(edad)||edad<1||edad>25){
			edad=parseInt(prompt("Debes ingresar edad"));
		}

		peso=parseFloat(prompt("Ingresa peso:"));
		while(isNaN(peso)||peso<0){
			peso=parseFloat(prompt("Error. Ingresa peso:"))
		}
		
		precioConsulta=parseFloat(prompt("Ingresa precio de consulta"))
		while(isNaN(precioConsulta)||precioConsulta<500||precioConsulta>1500){
			precioConsulta=parseFloat(prompt("Error. Ingresa precio de consulta"))
		}
		console.log("DATOS DEL PERRO: "+nombre+", raza: "+raza+", edad: "+edad+", precio de consulta: $"+precioConsulta+" USD");

		acumPrecioTotal+=precioConsulta;
		contPrecioTotal++;
		total=acumPrecioTotal;

		switch(raza){
			case "sharpei":
				acumSharpei+=nombre;
				contSharpei++;
				break;
			case "galgo":
				acumGalgo+=nombre;
				contGalgo++;
				break;
			case "pastor":
				acumPastor+=nombre;
				contPastor++;
				break;
        }

		if(raza>1&&raza<4){
			descuento=20;
		}else if(raza>4){
			descuento=30;
		}

		//CCCC    y DDDDDD
		if(flagTodo||raza<maxRaza){
			maxRaza=raza;  // mas razas
		}
		if(flagTodo||edad>maxEdadViejo){
			maxEdadViejo=edad;
			maxRazaViejo=raza;
			maxNomViejo=nombre;
			flagTodo=0;   // perro mas viejo
		}

		seguir=prompt("Ingresar datos de otro Perro?");
	}while(seguir=="s");

	totalDescuento=(descuento/100)*total;
		precioFinal=total-totalDescuento.toFixed(2);

 
	console.log("A.-importe total a pagar por las vacunas es: $"+total)
	console.log("B.-Descuento del: "+descuento+"%, pagas: $"+precioFinal+" USD")

	console.log("C.-La raza con más cantidad de perros es: "+maxRaza);
	console.log("D.-Nombre, raza y edad del perro más viejo es: "+maxNomViejo+", raza: "+maxRazaViejo+", edad: "+maxEdadViejo+" años");

}