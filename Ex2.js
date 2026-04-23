//exercice2
let nombre=Math.floor(Math.random()*10)+1;
let tentatives=0;
let proosition;
do{
   proosition=prompt("devinez un nombr entre 1 et 10: ");
    tentatives++
    if (isNaN(proosition)){
       alert("veuillez entre un nombre valide");
    }
    else if (proosition<nombre){
        alert("le nombre est plus grand");
    }
    else if (proosition>nombre){
       alert("le nombre est plus petit")
    }
  }while(proosition!==nombre); 

  alert("bravo vous avez trouve  "+nombre+ "en" +proosition+"proosition")
