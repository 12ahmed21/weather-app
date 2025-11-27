const egyptCities = [
  "6th of October",
  "Alexandria",
  "Al Arish",
  "Aswan",
  "Asyut",
  "Banha",
  "Beni Suef",
  "Bir El Abd",
  "Cairo",
  "Damanhur",
  "Damietta",
  "Fayoum",
  "Faraskur",
  "Giza",
  "Helwan",
  "Hurghada",
  "Idfu",
  "Ismailia",
  "Kafr El Sheikh",
  "Luxor",
  "Mahalla",
  "Mallawi",
  "Mansoura",
  "Marsa Alam",
  "Marsa Matrouh",
  "Minya",
  "Mit Ghamr",
  "Nasr City",
  "New Aswan",
  "New Cairo",
  "New Damietta",
  "New Minya",
  "Port Said",
  "Qalyub",
  "Qena",
  "Rafah",
  "Ras Ghareb",
  "Safaga",
  "Sharm El Sheikh",
  "Sheikh Zayed City",
  "Shubra El Kheima",
  "Sohag",
  "Suez",
  "Tanta",
  "Zagazig"
];
function loadListOfCountry(){
    item = ``
    let chooser = document.getElementById("chooseCountry")
    for(let i = 0;i < egyptCities.length ; i++){
        item += `<p class="city-form-chooser">${egyptCities[i]}</p>`
        chooser.innerHTML = item
    }
}
function showList(){
    let chooser = document.getElementById("chooseCountry")
    let selecter = document.getElementById("city")
    let angle = document.getElementById('angleDown')
    let back = document.querySelector(".back")
    selecter.addEventListener("click",()=>{
            chooser.classList.remove("h0")
            angle.style.transform = "rotate(180deg)"
            back.classList.remove("h0")
    })
}
function removeList(){
        let chooser = document.getElementById("chooseCountry")
        let back = document.querySelector(".back")
            let angle = document.getElementById('angleDown')
        back.addEventListener("click",()=>{
            back.classList.add("h0")
            chooser.classList.add("h0")
            angle.style.transform = "rotate(0deg)"
        })
}
function countryChoosed(){
    let city = document.querySelectorAll(".city-form-chooser")
    city.forEach((e,i) => {
       e.addEventListener("click",()=>{
        takeApi(e.innerText)
        document.getElementById("loading").classList.remove("none")
       }) 
    });
}
