const precio = document.querySelector("#precio");
const descuento = document.querySelector("#descuento");
const precioFinal = document.querySelector(".precioFinal");
const boton = document.querySelector("button");
const cupon = document.querySelector("#cupon");

console.log(precio.value);
// console.log(descuento.value);
console.log(cupon.value);





boton.addEventListener("click", ()=>{
    let pre = precio.value;
    let desc;
    let pf;
    let cp = cupon.value;
    if(cp == "des_20"){
    desc = 20;
   }else if(cp == "des_30"){
    desc = 30;
   }else if(cp == "des_40"){
    desc = 40;
   }else if(cp == "des_50"){
    desc = 50;
   }
   else{
    precioFinal.innerText = `
    Precio Final: no valido`;
   return;}
    
   pf = (pre * (100 - desc ) ) / 100;
   precioFinal.innerText = `
   Precio Final: ${pf}`;
})