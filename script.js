function calcula(){

    let a = parseFloat(document.getElementById('numero_a').value);
    let b = parseFloat(document.getElementById('numero_b').value);
    let c = parseFloat(document.getElementById('numero_c').value);

    if(a == 0){
        alert("não é função do segundo grau");
        return;

    }

    let delta = (b*b)-(4*a*c);
    if(delta <0 ){
    document.getElementById('resultado').textContent = "não tem raiz";
    return;

    }

    if(delta == 0){
        let bhaskara = -b/(2*a);
        document.getElementById('resultado').textContent ='a unica raiz vale:' + bhaskara;
        return;
   }

   if(delta > 0){
    let bhaskara = -b/(2*a);
        document.getElementById('resultado') = 'as duas raizes são:' + bhaskara;
        return;
   }   

   if(delta > 0){
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);

        document.getElementById('resultado').textContent = 
        'x1 vale' + x1 + ' e x2 vale' + x2;
        return;
   } 
}