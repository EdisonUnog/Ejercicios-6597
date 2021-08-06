/*
EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:
A) El nombre y rareza de la carta con mayor precio.

B) Cuantas cartas de tipo "trampa" y de rareza "rara o super rara" fueron vendidas.

C) El promedio de precio de las cartas de tipo "monstruo" de rareza "ultra rara" con un precio menor a 500.
 */

function mostrar(){

    let tipoCarta; let rareza; let precio;
    let seguir;

    let maxPrecio;
    let maxRareza;   
    let maxNombre;
    let flag=1;    // AAA

    let acumMonstruo=0; let acumMagica=0; let acumTrampa=0;
    let contMonstruo=0; let contMagica=0; let contTrampa=0;
    
    let acumRara=0; let acumSuperRara=0; let acumUltraRara=0;
    let contRara=0; let contSuperRara=0; let contUltraRara=0;
    let contRarisimo=0;
    let mensajeB;
    
    let promedio;

    do{
        
        tipoCarta=prompt("Ingresa nombre de tipo de carta: mostruo, magica, trampa").toLowerCase();
        while(!isNaN(tipoCarta)||tipoCarta!="monstruo"&&tipoCarta!="magica"&&tipoCarta!="trampa"){
            tipoCarta=prompt("Error. Ingresa nombre de tipo de carta: mostruo, magica, trampa").toLowerCase();
        }

        rareza=prompt("Ingresa rareza: rara, super rara, ultra rara").toLowerCase();
        while(!isNaN(rareza)||rareza!="rara"&&rareza!="super rara"&&rareza!="ultra rara"){
            rareza=prompt("Error. Ingresa rareza: rara, super rara, ultra rara").toLowerCase();
        }

        precio=parseFloat(prompt("ingresa precio entre 100 a 300"));
		while(isNaN(precio)||precio<0){
			recio=parseFloat(prompt("Error. precio entre 100 a 300"));
		}

        console.log("DATOS: "+tipoCarta+" "+rareza+" "+precio);

        if(flag||precio>maxPrecio){
            maxPrecio=precio;
            maxRareza=rareza;     //AAAAAAAAA
            maxNombre=tipoCarta;
            flag=0;
        }

        switch(rareza){
            case "rara":
                acumRara+=tipoCarta;
                contRara++;
                if(tipoCarta=="trampa"){
                    contRarisimo++;
                }
                break;
            case "super rara":
                acumSuperRara+=tipoCarta;
                contSuperRara++;
                if(tipoCarta=="trampa"){
                    contRarisimo++;
                }
                break;
            case "ultra rara":
                acumUltraRara+=tipoCarta;
                contUltraRara++;
                if(tipoCarta=="monstruo"&&precio<500){
                    acumMonstruo+=precio;
                    contMonstruo++;
                    promedio=acumMonstruo/contMonstruo;
                }
                break;
        }
        

        seguir=prompt("Ingrsar otro dato??")
    }while(seguir=="s");

    console.log("A.-El nombre y rareza de la carta con mayor precio es: "+maxNombre+" y su rareza: "+maxRareza+", precio: $"+maxPrecio+" USD");

    console.log("B.-Cantidad de cartas de tipo trampa, rarera rara o super rara que fueron vendidas: "+contRarisimo);
	
    console.log("C.-El promedio de precio de las cartas de tipo monstruo de rareza ultra rara con un precio menor a 500 es: "+promedio);
}

/*
switch(tipoCarta){
            case "monstruo":
                acumMonstruo+=rareza;
                contMonstruo++;
                break;
              //----------------------  
            case "magica":
                acumMagica+=rareza;
                contMagica++;
                break;
                //---------------------
            case "trampa":
                acumTrampa+=rareza;
                contTrampa++;
        } */