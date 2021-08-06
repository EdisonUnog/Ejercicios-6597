/*
nombre:EdisonFrancisco Uñog Valencia
EJERCICIO 2
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) y si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que ingresar 
se debe reportar
a)	El nombre de la persona más joven que se dio sputnik
b)	El porcentaje de jóvenes que tuvieron la enfermedad
c)	El promedio de edad 
d)  La vacuna más veces aplicada
 */

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
    
}