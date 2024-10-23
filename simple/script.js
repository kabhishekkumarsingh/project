const url='https://ipinfo.io/161.185.160.93/geo';
const content=document.querySelector('#container');

document.addEventListener('DOMContentLoaded',()=>{
async function information() {
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    userData(data);
}
function userData(data){
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`
    <p><strong>IP:</strong> ${data.ip}</p>
    <p><strong>CITY:</strong> ${data.city}</p>
    <p><strong>REGION:</strong> ${data.region}</p>
    <p><strong>COUNTRY:</strong> ${data.country}</p>

    `
    content.appendChild(card);
}


information();
});