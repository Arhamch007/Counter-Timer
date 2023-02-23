const daysel=document.getElementById('days');
const hoursel=document.getElementById('hours');
const mintuessel=document.getElementById('mintues');
const secondsel=document.getElementById('seconds');

const newyear= '1 Jan 2024';
function countdown(){

    const currentdate=new Date();
    const newyeardate= new Date(newyear);

    const totalseconds= (newyeardate - currentdate) /1000;
    const days= Math.floor(totalseconds/3600/24);
    const hours= Math.floor(totalseconds/3600) %24;
    const mintues= Math.floor(totalseconds/60) %60;
    const seconds=Math.floor(totalseconds)%60;
    console.log(days,hours,mintues,seconds);

    daysel.innerHTML=days;
    hoursel.innerHTML=formatetime(hours);
    mintuessel.innerHTML=formatetime(mintues);
    secondsel.innerHTML=formatetime(seconds);
}

function formatetime(time){
    return time < 10 ? (`0${time}`) : time;
}
//Intial Call
countdown();
setInterval(countdown,1000)
