const btn = document.getElementById('btn');
const body = document.querySelector("body");

function getcolor(){
    const randomNo= Math.floor(Math.random()*16777216);
   let randomCode = "#"+randomNo.toString(16);
    console.log(randomCode);
    body.style.backgroundColor = randomCode;
    let clrCode = document.getElementById('clrCode');
    clrCode.innerHTML=randomCode;

    // navigator.clipboard.writeText(randomCode);
}
btn.addEventListener('click',getcolor);
getcolor();