document.addEventListener("load", (e)=> {
    document.querySelectorAll(".skeleton").forEach((item)=> {
        item.classList.remove("skeleton")
    })
})
const countriesContainer = document.querySelector(".countries-container")
const filterRegion = document.querySelector("#regions")

const search = document.querySelector(".search")
search.value = localStorage.inputValue ?? ""

const themeChange = document.querySelector(".theme-changer")

const icon = document.querySelector("#icon")
let classes = icon.className
icon.className = localStorage.icon ?? classes

document.body.className = localStorage.themeState ?? ""
document.querySelector(".mode").innerText = localStorage.themeText ?? "Dark Mode"

document.addEventListener("DOMContentLoaded", (e)=> {
    if(search.value != "") {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital')
        .then((res) => {
            return res.json()
    })
    .then((data)=> {
        const filtered = data.filter((country)=> {
            return country.name.common.toLowerCase().includes(search.value.toLowerCase())
        })
        renderCountries(filtered)
    })
}
})

let allDataOfCountries;
fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital')
    .then((res) => {
        return res.json()
    })
    .then((data)=> {
        renderCountries(data)
        allDataOfCountries = data
    })

filterRegion.addEventListener("change", (e)=> {
    search.value = ""
    localStorage.inputValue = ""
    fetch(`https://restcountries.com/v3.1/region/${filterRegion.value}?fields=name,flags,region,population,capital`)
    .then((res) => {
        return res.json()
    })
    .then(renderCountries)
})

function renderCountries(data) {
    countriesContainer.innerHTML = ""
    data.forEach(country => {
        const countryCard = document.createElement("a")
        countryCard.className = "country-card"
        countryCard.href = `country.html?name=${country.name.common}`

        const cardHTML = `
        <div class="skeleton"><img draggable="false" src="${country.flags.svg}" alt="${country.flags.alt ?? country.name.common + "-Flag"}"></div>
        <div class="card-details">
            <h3 class="country-name skeleton">${country.name.common}</h3>
            <p class="skeleton"><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
            <p class="skeleton"><b>Region: </b>${country.region}</p>
            <p class="skeleton"><b>Capital: </b>${country.capital}</p>
        </div>
    `
        countryCard.innerHTML = cardHTML;
        countriesContainer.append(countryCard)
    });
    setTimeout(() => {
        document.querySelectorAll(".skeleton").forEach(item => item.classList.remove("skeleton"));
    }, 1000);
}

let timeout;
search.addEventListener("input", (e) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        filterRegion.children[0].selected = "true"
        const filtered = allDataOfCountries.filter((country) => {
            return country.name.common.toLowerCase().includes(search.value.toLowerCase())
        })
        renderCountries(filtered)
        // Using localstorage to fetch data in the beginning
        localStorage.inputValue = search.value //preserving input value from the user
    }, 1000)

})
// Implementing dark-light mode
themeChange.addEventListener("click", (e)=> {
    document.body.classList.toggle("dark")
    if(document.body.classList.value.includes("dark")) {
        themeChange.children[0].classList.remove("fa-moon")
        themeChange.children[0].classList.add("fa-sun")
        document.querySelector(".mode").innerText = "Light Mode"
    } else {
        themeChange.children[0].classList.add("fa-moon")
        themeChange.children[0].classList.remove("fa-sun")
        document.querySelector(".mode").innerText = "Dark Mode"
    }
    // Using localstorage to fetch data in the beginning
    localStorage.themeState = document.body.className //preserving theme selected by the user
    localStorage.text = document.querySelector(".mode").innerText //preserving the the simple text names of the theme state
    localStorage.icon = themeChange.children[0].className //preserving icon data of the theme state
})

