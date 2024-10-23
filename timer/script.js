const items = document.querySelectorAll('.count h2');
const elem = document.querySelector('.container');

let date = new Date(2024, 10,23,23,43,0,0).getTime();

function getCountTime() {
    const now = new Date().getTime();

    let dist = date - now;

    if(dist < 0) {
        clearInterval(interval);
        elem.innerHTML = "<h1 class = 'end'>Time is over</h1>";
    }

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSec = 1000;

    let day = Math.floor(dist/oneDay);
    let hour = Math.floor(dist%oneDay/oneHour);
    let min = Math.floor(dist%oneHour/oneMin);
    let sec = Math.floor(dist%oneMin/oneSec);
    
    const value = [day, hour, min, sec];

    items.forEach(function (item, index) {
        item.textContent = value[index];
    });
}
getCountTime();

let interval = setInterval(getCountTime, 1000);
