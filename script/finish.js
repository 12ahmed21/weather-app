function loadData(data){
console.log(data);
countryAndCity(data.location.country,data.location.name)
temp(data.current.temp_c)
wide(data.current.wind_kph)
status(data.current.condition.text,data.current.condition.icon)
realFeel(data.current.feelslike_c)
uv(data.current.uv)
}
function time(){
    setInterval(()=>{
        let now = new Date()
        let hours = now.getHours()
        let minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}`: now.getMinutes()
        let amPm = hours < 12 ? "AM": hours > 12? "PM": "AM" 
        hours = hours % 12
        hours = hours ? hours : "12"
        let clock = document.getElementById("time")
        clock.innerHTML = `<p>${hours}:${minutes}<span class="ampm">${amPm}</span></p>`
    },1000)
}
function countryAndCity(country,city){
let countryShow = document.getElementById("country").innerText = country;
let cityShow = document.getElementById("city").innerText = city
}
function temp(temp){
    let tempShow = document.getElementById("temp").innerText = `${temp}°`
}
function wide(kph){
    let wideShow = document.getElementById("wideSpeed").innerText = kph
}
function status(statu,icon){
    let statueShow = document.getElementById("status").innerText = statu
    let statuIconShow = document.getElementById("statusIcon").setAttribute("src",icon)
}
function uv(uv){
    let uvShow = document.getElementById("uv").innerText = uv
}
function realFeel(feellike){
    let realFeelShow = document.getElementById("realFeel").innerText = `${feellike}°`
}
function backGroundtrans(day){
    let background = document.getElementById("backgroundUi")

    let img = document.getElementById("sets")
    if(day){
        img.setAttribute("src","/media/sun_PNG13421.png")
        document.body.style.backgroundColor ="#51A5B4"
    }else{
        img.setAttribute("src","/media/R.png")
        document.body.style.backgroundColor ="black"
    }
}