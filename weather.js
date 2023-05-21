let city = document.getElementById('city')
let country = document.getElementById('country')
let tempp = document.getElementById('temp')
let user_input = document.getElementById('user_input')


let check = async () => {
    console.log(city, country, tempp, user_input)
    let cityvalue = user_input.value;
    console.log(cityvalue);
    if (cityvalue == "") {
        alert(" Please Enter the City name...", cityvalue)
    }
    else {

        let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
        console.log(res)

        let data = await res.json()
        city.textContent = data.name
        country.textContent = data.sys.country
        tempp.innerText = data.main.temp
    }
}
