//Codigo cuadrado
console.group("Cuadrados")
 //console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

 
 function perimetrocuadrado(ladodelCuadrado){
    perimetrocuadrado  = ladodelCuadrado *4;
    return  perimetrocuadrado;
     
 }

function areacuadrado(ladodelCuadrado){
    areacuadrado  = ladodelCuadrado * ladodelCuadrado;
    return areacuadrado   
 }

console.groupEnd();


 //Codigo triangulo
 console.group("Triangulos")
 

 function perimetrotriangulo(ladotringulo1,ladotriangulo2, basetriangulo){
      return perimetrotriangulo = ladotringulo1 + ladotriangulo2 + basetriangulo;
 }

function areatriangulo(basetriangulo,alturatriangulo){
    return perimetrotriangulo = (basetriangulo*alturatriangulo)/2;
}
 console.groupEnd();
 

 //Codigo Circulo
 console.group("Circulos");

//DIAMETRO

function diametroCirculo(radiocirculo){
    return diametroCirculo = radiocirculo *2;
}
 
//PI
const PI = Math.PI;

 //CIRCUNFERENCIA
function perimetrocirculo(radiocirculo){
    diametroCirculo =  diametroCirculo(radiocirculo);
    return perimetrocirculo = diametroCirculo * PI;
}

//area
function areaCirculo(radiocirculo){
   return areaCirculo = (radiocirculo * radiocirculo) * PI
}
 console.groupEnd

 //Making some functinos

 function calcularperimetrocuadrado(){
     const input = document.getElementById("InputCuadrado");
     const value = input.value;
     const perimetro = perimetrocuadrado(value);

     alert(perimetro);
 }

 function calcularareacuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCirculo(value);

    alert(area);    
}

function calcularaltura(ladoA, LadoB, LadoBase){
  if(ladoA != LadoB){
      console.log("Este no es un triangulo isoceles")

  }else{
      //We have two tringles first we are gonna do the smallter
      let triangulopequeñoladoA;
      const triangulopequeñoladoB = LadoB;
      const  triangulopequeñoladobase = LadoBase /2;

      const triangulopcuadradoB = triangulopequeñoladoB * triangulopequeñoladoB;
      const trianguloPcuadradoBase = triangulopequeñoladobase * triangulopequeñoladobase;
      triangulopequeñoladoA = Math.sqrt(trianguloPcuadradoBase - triangulopcuadradoB);

    
      //We sent the finction's result
      const AlturaTriangulo = triangulopequeñoladoA;
      return AlturaTriangulo;


  }
}


