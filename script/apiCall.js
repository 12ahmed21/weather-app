async function takeApi(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=a4893458241a46a3978135819250111&q=egypt&aqi=no
`)
    .then(res => res.json()).
    then(data => {
        loadData(data);
        isSunSet(data.location.localtime)
        setTimeout(() => {
            document.getElementById("loading").classList.add("none")
        }, 1000);
    })
}
async function isSunSet(date) {
    fetch(`https://api.weatherapi.com/v1/astronomy.json?key=a4893458241a46a3978135819250111&q=egypt&dt=${date}`)
    .then( res => res.json())
    .then(data =>{
        backGroundtrans(data.astronomy.astro.is_sun_up);
    })
}
window.onload = takeApi();time()