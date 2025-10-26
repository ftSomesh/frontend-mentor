document.addEventListener("load", (e) => {
    document.querySelectorAll(".skeleton").forEach((item) => {
        item.classList.remove("skeleton")
    })
})

const countryName = new URLSearchParams(location.search).get("name") //getting countryname
const flagImg = document.querySelector(".country-details img")
const countryNameElement = document.querySelector("#country-name")
const nativeNameElement = document.querySelector(".native-name")
const population = document.querySelector(".population")
const region = document.querySelector(".region")
const subRegion = document.querySelector(".sub-region")
const capital = document.querySelector(".capital")
const topLevelDomain = document.querySelector(".top-level-domain")
const currencies = document.querySelector(".currencies")
const languages = document.querySelector(".languages")
const borderCountries = document.querySelectorAll(".border-countries a")
const themeChange = document.querySelector(".theme-changer")

const icon = document.querySelector("#icon")
let classes = icon.className
icon.className = localStorage.themeIcon ?? classes
document.body.className = localStorage.themeState ?? ""
document.querySelector(".mode").innerText = localStorage.themeText ?? "Dark Mode"

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => {
        return res.json()
    })
    .then(([country]) => {
        flagImg.setAttribute("src", `${country.flags.svg}`)
        flagImg.setAttribute("alt", `${country.flags.alt}`)
        countryNameElement.innerText = country.name.common
        if (country.name.nativeName) {
            nativeNameElement.innerText = Object.entries(country.name.nativeName)[0][1].common;
        } else {
            nativeNameElement.innerText = "Undefined"
        }
        population.innerText = country.population.toLocaleString("en-IN")
        region.innerText = country.region
        country.subregion ? subRegion.innerText = country.subregion : subRegion.innerText = "Undefined"
        country.capital ? capital.innerText = country.capital : capital.innerText = "Undefined"
        topLevelDomain.innerText = country.tld.join(", ")
        if (country.currencies) {
            currencies.innerText = Object.values(country.currencies).map((currency) => `${currency.symbol} ${currency.name}`)
        } else {
            currencies.innerText = "Undefined"
        }
        if (country.languages) {
            languages.innerText = Object.entries(country.languages).map((lang) => lang[1]).join(", ")
        } else {
            languages.innerText = "Undefined"
        }
        if (country.borders) {
            country.borders.forEach(element => {
                fetch(`https://restcountries.com/v3.1/alpha/${element}`)
                    .then((res) => {
                        return res.json()
                    })
                    .then(([forBorderData]) => {
                        const borderElement = document.createElement("a")
                        borderElement.classList.add("skeleton")
                        borderElement.setAttribute("href", `country.html?name=${forBorderData.name.common}`)
                        borderElement.innerText = forBorderData.name.common
                        document.querySelector(".border-countries").append(borderElement)
                    })

            });
        }
        setTimeout(() => {
            document.querySelectorAll(".skeleton").forEach(item => item.classList.remove("skeleton"));
        }, 100);

    })

themeChange.addEventListener("click", (e) => {
    document.body.classList.toggle("dark")
    if (document.body.classList.value.includes("dark")) {
        themeChange.children[0].classList.remove("fa-moon")
        themeChange.children[0].classList.add("fa-sun")
        document.querySelector(".mode").innerText = "Light Mode"
    } else {
        themeChange.children[0].classList.add("fa-moon")
        themeChange.children[0].classList.remove("fa-sun")
        document.querySelector(".mode").innerText = "Dark Mode"
    }
    localStorage.themeState = document.body.className
    localStorage.themeText = document.querySelector(".mode").innerText
    localStorage.themeIcon = themeChange.children[0].className
})
