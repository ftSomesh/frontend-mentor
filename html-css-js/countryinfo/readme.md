# Country Info App

A web application that displays country details with a
skeleton loading effect before content is fully loaded.

## Features

- Fetches and displays country details (flag, name, population, etc.)
- Implements a skeleton loading effect for smooth UI experience
- Supports both light and dark mode for skeleton loaders
- Optimized skeleton effect for images and text separately

## Technologies Used

- HTML
- CSS (with custom properties for light/dark mode support)
- JavaScript (DOM manipulation, event handling, and dynamic class updates)

## Project Structure

```root/
├── images       # Favicon Image
├── index.html       # Main HTML structure
├── style.css        # Styling and skeleton loader effect
├── script.js        # JavaScript functionality
├── country.html       # Secondary HTML structure
├── country.css        # Secondary Css File
├── country.js        # Secondary Script File
└── README.md        # Project documentation

```

## How It Works

1. **Skeleton Loader**: Placeholder elements are shown before the actual content loads.
2. **Fetching Data**: Country details are loaded dynamically.
3. **Removing Skeleton Effect**:
   - Text: `classList.remove("skeleton")` is used once content is ready.
   - Skeleton Effect: A wrapper (`.skeleton`) is used with a `::before` effect, removed after loading.
4. **Dark Mode Support**: Custom CSS variables ensure proper skeleton colors in both modes.

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/ftSomesh/country-info-app.git
   ```

2. Navigate to the project folder:

   ```sh
   <!-- Undefined -->
   ```

3. Open `index.html` in a browser.

## Customization

- Modify `--var-skeleton-color-first`, `--var-skeleton-color-second`, `--var-skeleton-color-third` in `style.css` to customize the skeleton loader colors.
- Adjust the image skeleton effect by modifying `.image-wrapper::before` in `style.css`.

## Known Issues & Fixes

### **Skeleton Effect Not Disappearing**

- Ensure `classList.remove("skeleton")` is applied after content is loaded.
- JavaScript should listen to the `load` event of images before removing the effect.

## Future Enhancements

- Add API integration for dynamic country data
- Implement a toggle switch for dark/light mode
- Improve performance with lazy loading

## Codes

### HTML

```html
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="shortcut icon" href="/images/earth-americas-solid.svg" type="image/svg">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,regular,500,600,700,800" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="script.js" defer></script>
</head>

<body>
    <header class="navbar">
        <h2 id="where-in-the-world"><a href="/index.html">Where in the world</a></h2>
        <p class="theme-changer"><i id="icon"
                style="font-size: 1.4rem; vertical-align: middle; transform: rotate(-20deg);"
                class="fa-regular fa-moon"></i>&nbsp;&nbsp; <span class="mode">Dark Mode</span></p>
    </header>
    <div class="author-info">
        <h5 id="author-details-h5">
            <a class="skeleton" href="https://www.instagram.com/ft.someshh"><i
                    class="fa-brands fa-instagram"></i>&nbsp;Instagram</a>
            <a class="skeleton" href="https://github.com/ftSomesh"><i class="fa-brands fa-github"></i>&nbsp;Github</a>
            <a class="skeleton" href="https://www.x.com/programmerizz"><i
                    class="fa-brands fa-twitter"></i>&nbsp;x-corp</a>
        </h5>
    </div>
    <div class="search-filter-container">
        <div class="search-container skeleton">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div class="search-bar"><input class="search" placeholder="Search for a country.." type="text"></div>
        </div>
        <select title="region-select" name="select-regions" id="regions">
            <option value="Filter by region" selected hidden>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
    <main>
        <div class="countries-container">
            <!-- <a href="/" class="country-card">
                <div class="skeleton"><img src="${country.flags.svg}"
                        alt="${country.flags.alt ?? country.name.common + " -Flag"}"></div>
                <div class="card-details">
                    <h3 class="country-name skeleton">${country.name.common}</h3>
                    <p class="skeleton"><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
                    <p class="skeleton"><b>Region: </b>${country.region}</p>
                    <p class="skeleton"><b>Capital: </b>${country.capital}</p>
                </div>
            </a> -->
        </div>
    </main>
</body>

</html>
```

### CSS

```css
* {
    box-sizing: border-box;
}

:root {
    /* light-themes */
    --var-skeleton-color-first: #eee;
    --var-skeleton-color-second: #f2f2f2;
    --var-skeleton-color-third: #ddd;
    --var-background-color: white;
    --var-color: black;
    --var-elements-color: white;
}

a {
    text-decoration: none;
    color: inherit;
}

body {
    -webkit-user-select: none;
    user-select: none;
    background-color: var(--var-background-color);
    color: var(--var-color);
    margin: 0;
    padding: 0;
    font-family: "Nunito", serif;
}

body.dark {
    /* dark themes */
    --var-skeleton-color-first: #696464;
    --var-skeleton-color-second: #494747;
    --var-skeleton-color-third: #444;
    --var-background-color: hsl(207, 26%, 17%);
    --var-color: white;
    --var-elements-color: hsl(209, 23%, 22%);
}

main {
    padding: 1.5rem 3rem;
}
.author-info {
    background-color: var(--var-elements-color);
    box-shadow: 0 0.1 0.3rem rgba(0, 0, 0, 0.1);
}
#author-details-h5 {
    margin-block: 0;
    display: flex;
    justify-content: flex-end;
    column-gap: 1rem;
    padding: 0.3rem 0.3rem;
}
#author-details-h5:last-child {
    padding-right: 1rem;
}
#where-in-the-world {
    font-weight: 800;
}

.navbar {
    background-color: var(--var-elements-color);
    padding-inline: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
}

.countries-container {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1rem;
    max-width: 1200px;
    margin-inline: auto;
}

.country-card {
    background-color: var(--var-elements-color);
    display: inline-block;
    padding-bottom: 1.6rem;
    overflow: hidden;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 13rem;
    transition: transform 0.2s ease-in-out;
}

.country-card:hover {
    transform: scale(1.02);
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.1);
}

.country-card img {
    object-position: center;
    object-fit: cover;
    height: 150px;
    width: 100%;
}

.card-details {
    padding-inline: 1rem;
}

.card-details>p {
    font-size: 0.8rem;
    margin-block: 0.3rem;
}

.country-name {
    margin-block: 0.6rem;
}

.search-filter-container {
    display: flex;
    justify-content: space-between;
    margin-block: 2rem;
    margin-inline: 3rem;
}

.search-container {
    background-color: var(--var-elements-color);
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
    width: 40%;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}

.search-container input {
    background-color: inherit;
    color: var(--var-color);
    border: none;
    outline: none;
    width: 100%;
    margin-right: auto;
    font-family: inherit;
}

.search-bar {
    padding-right: 0.8rem;
    flex-grow: 1;
}

.search-container input::placeholder {
    color: var(--var-color);
}

.search-container i {
    padding: 1rem;
}

#regions {
    background-color: var(--var-elements-color);
    color: var(--var-color);
    padding-inline: 0.9rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    width: 30%;
}

.theme-changer {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
}

.skeleton {
    position: relative;
}

.skeleton::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--var-skeleton-color-first), var(--var-skeleton-color-second), var(--var-skeleton-color-third));
    background-size: 200%;
    animation: skeleton 1.2s infinite;
}
/* media-quaries */

@keyframes skeleton {
    0% {
        background-position: 100% 0;
    }

    100% {
        background-position: -100% 0;
    }
}

@media screen and (max-width: 768PX) {
    .countries-container {
        justify-content: center;
    }

    #where-in-the-world {
        font-size: 1rem;
        font-weight: 600;
    }

    header p {
        font-size: 0.7rem;
    }

    .navbar {
        padding-inline: 1rem;
    }

    .search-filter-container {
        flex-direction: column;
        justify-content: center;
        row-gap: 2rem;
    }

    .search-container {
        padding-block: 0.4rem;
        width: 100%;
    }

    #regions {
        width: 100%;
        padding-block: 0.8rem;
    }

    .search-container input {
        vertical-align: middle;
        font-size: 0.7rem;
    }

    .search-container i {
        font-size: 0.8rem;
        padding: 0.5rem;
    }

}

```

### JavaScript

```javascript
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
document.querySelector(".mode").innerText = localStorage.text ?? "Light Mode"

document.addEventListener("DOMContentLoaded", (e)=> {
    if(search.value != "") {
        fetch('https://restcountries.com/v3.1/all')
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
fetch('https://restcountries.com/v3.1/all')
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
    fetch(`https://restcountries.com/v3.1/region/${filterRegion.value}`)
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
        countryCard.href = `/country.html?name=${country.name.common}`

        const cardHTML = `
        <div class="skeleton"><img src="${country.flags.svg}" alt="${country.flags.alt ?? country.name.common + "-Flag"}"></div>
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

search.addEventListener("input", (e)=> {
    filterRegion.children[0].selected = "true"
    const filtered = allDataOfCountries.filter((country)=> {
        return country.name.common.toLowerCase().includes(search.value.toLowerCase())
    })
    renderCountries(filtered)
    // Using localstorage to fetch data in the beginning
    localStorage.inputValue = search.value //preserving input value from the user
    
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


```

## Secondary Files

### country.html

```index
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Country-Details</title>
    <link rel="shortcut icon" href="/images/earth-americas-solid.svg" type="image/svg">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,regular,500,600,700,800" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="country.js" defer></script>
    <link rel="stylesheet" href="country.css">
</head>

<body>
    <header class="navbar">
        <h2 id="where-in-the-world">Where in the world?</h2>
        <p class="theme-changer"><i id="icon" style="font-size: 1.4rem; vertical-align: middle; transform: rotate(-20deg);"
                class="fa-regular fa-moon"></i>&nbsp;&nbsp; <span class="mode">Dark Mode</span></p>
    </header>
    <main class="particular-main">
        <div class="container-for-structure">
            <a onclick= "history.back()" class="back-btn skeleton" href="#"><i class="fa-solid fa-arrow-left"></i>&nbsp; Back</a>
            <div class="country-details">
                <div id="img-container-flag" class="skeleton">
                    <img>
                </div>
                <div class="details-text-container">
                    <h1 class="skeleton" id="country-name"></h1>
                    <div class="details-text">
                        <p class="skeleton"><b>Native Name: </b><span class="native-name"></span></p>
                        <p class="skeleton"><b>Population: </b><span class="population"></span></p>
                        <p class="skeleton"><b>Region: </b><span class="region"></span></p>
                        <p class="skeleton"><b>Sub Region: </b><span class="sub-region"></span></p>
                        <p class="skeleton"><b>Capital: </b><span class="capital"></span></p>
                        <p class="skeleton"><b>Top Level Domain: </b><span class="top-level-domain"></span></p>
                        <p class="skeleton"><b>Currencies: </b><span class="currencies"></span></p>
                        <p class="skeleton"><b>Languages: </b><span class="languages"></span></p>
                    </div>
                    <div class="border-countries">
                        <b class="bold skeleton">Border Countries: </b>
                        <!-- <a href="">France</a>
                    <a href="">France</a>
                    <a href="">France</a> -->
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
```

### country.css

```css
* {
    box-sizing: border-box;
}

body {
    -webkit-user-select: none;
    user-select: none;
    margin: 0;
}
:root {
    --var-background-color: white;
    --var-color: black;
    --var-elements-color: white;
}
.particular-main {
    padding-inline: 1.8rem;
}

.back-btn {
    background-color: var(--var-elements-color);
    border-radius: 0.4rem;
    padding: 0.4rem 1.8rem;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
}


.country-details {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    gap: 3rem;
}
#img-container-flag {
    max-width: 420px;
}

.country-details img {
    border: 1px solid #ddd;
    width: 100%;
}

.details-text {
    max-height: 10rem;
    row-gap: 0.8rem;
    column-gap: 4rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.details-text p {
    margin: 0;
}

.border-countries {
    margin-top: 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
}

.border-countries a {
    font-size: 0.9rem;
    border-radius: 0.2rem;
    padding: 0.2rem 1rem;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
}
.border-countries > a {
    background-color: var(--var-elements-color);
}

@media screen and (max-width: 1030px) {
    
    .details-text {
        column-gap: 0.2rem;
    }
    #img-container-flag {
        max-width: 300px;
    }
}
@media screen and (max-width: 900px) {
    .country-details {
        flex-direction: column;
        align-items: flex-start;
    }

    .details-text {
        column-gap: 0;
        row-gap: 0.2rem;
        max-height: unset;
    }

    .country-details img {
        width: 100%;
        max-width: 400px;
    }

    .back-btn {
        padding-inline: 0.4rem;
        padding-block: 0.4rem;
        font-size: 0.8rem;
    }
    .border-countries a {
        font-size: 0.8rem;
        border-radius: 0.2rem;
        padding: 0.2rem 1rem;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
    }
}
```

### country.js

```javascript
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
document.querySelector(".mode").innerText = localStorage.themeText ?? "Light Mode"

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
                        borderElement.setAttribute("href", `/country.html?name=${forBorderData.name.common}`)
                        borderElement.innerText = forBorderData.name.common
                        document.querySelector(".border-countries").append(borderElement)
                    })

            });
        }
        setTimeout(() => {
            document.querySelectorAll(".skeleton").forEach(item => item.classList.remove("skeleton"));
        }, 1000);

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

```

### data.json

```json
//  Get it from my github Profile.
```

## License

This project is open-source and free to use.

## Author

- **Full Name** : Somesh Kumar Sahu
- **Email** : <desktopsomesh@gmail.com>  
- **Github** : <https://github.com/ftSomesh>  

---

Made with ❤️ by `Someshhh`
