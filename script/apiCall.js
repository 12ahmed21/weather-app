async function takeApi(city){
    fetch(`https://api.weatherapi.com/v1/current.json?key=a4893458241a46a3978135819250111&q=${city}-egypt&aqi=no
`)
    .then(res => res.json()).
    then(data => {
        loadData(data);
        backGroundtrans(data.current.is_day)
        setTimeout(() => {
            document.getElementById("loading").classList.add("none")
        }, 1000);
    })
}
// async function isSunSet(date) {
//     fetch(`https://api.weatherapi.com/v1/astronomy.json?key=a4893458241a46a3978135819250111&q=egypt&dt=${date}`)
//     .then( res => res.json())
//     .then(data =>{
//         console.log(data);
        
//         backGroundtrans(data.astronomy.astro.is_sun_up,data.astronomy.astro.is_moon_up);
//     })
// }
window.onload = takeApi("tanta");time();loadListOfCountry();countryChoosed();showList();removeList()