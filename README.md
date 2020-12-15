# Rotten Tomatillos - Turing Mod 3 Paired Project

### [Link To Our Repo](https://github.com/Shawntru/Rotten-Tomatillos)

### [Rotten Tomatillos](https://shawntru.github.io/Rotten-Tomatillos/)

---

<img width="1053" alt="Screen Shot 2020-12-15 at 3 35 06 PM" src="https://user-images.githubusercontent.com/66269306/102280926-3c030680-3eeb-11eb-8458-07da35138b70.png">

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Technologies and Tools](#technologies-and-tools)
* [Challenges](#challenges)
* [Wins](#wins)
* [ScreenShots and Demos](#screenshots-and-demos)
* [Roadmap](#roadmap)
* [Credits](#credits)

## Project Overview
---

Rancid Tomatillos is a movie rating and information site where a user can get trailers and info for new and upcoming films, which are pulled from a heroku API.

It was created as a Module 3 project in the Turing Front End Engineering course.

## Features
---

- **Random Film Previews on Load** - The site gets a random movie from the information pulled from the API and displays the films trailer and information to the user. 

- **Completely Searchable** - The site responds in real time to queries using the search bar and displays them to the user

- **Detailed Movie Information** - Each movie can be clicked in order to preview details from the film, such as release date, budget, trailer, and overall rating. 

- **Fast and Responsive** - Using React, the site provides a quick and responsive user experience.

- **Navigation and Bookmarking** - Router allows the user to navigate the site using common sense URLs, as well as allowing the ability to bookmark their favorite movies. 

- **Contains Robust Testing** - All functionality is complimented by a robust testing suite, enabling easy expansion of the code base. 

## Technologies And Tools
---

* JavaScript (ES6)
* HTML
* CSS/Scss/Sass
* React
* Router
* JSX
* Jest

## Challenges
---

* Integrating async testing
* Working with states of React components
* Implementing HTML and JavaScript logic in React

## Wins
---

Creating a responsive website with multiple features.

## ScreenShots and Demos

---

### Homepage

---

![homepage](https://media.giphy.com/media/5Wktpo7NO6Qv7MImpO/giphy.gif)

<details>
  <summary>**Under the Hood**</summary>

Homepage:

<img width="33%" src="https://user-images.githubusercontent.com/68252181/102270764-a1e79200-3edb-11eb-9163-9926148ef3f1.png"></img>

<img width="33%" src="https://user-images.githubusercontent.com/68252181/102270773-a3b15580-3edb-11eb-8949-ed70b9a7f81b.png"></img>

Homepage is a landing page for users. As you open the website the first thing users will see is a randomly chosen trailer from the library that starts palying automatilly. The sound was disabled for this feature. The trailer conatainer has all necessary informmation about the movie such as: title, release date, genres, and time.

For displaying trailers we used [react-player](https://www.npmjs.com/package/react-player) component:

```JavaScript
<ReactPlayer
  data-testid={`${this.state.movieTrailer}`}
  className="react-player"
  url={`https:www.https://www.youtube.com/watch?v=${this.state.movieTrailer}`}
  width="100%"
  height="100%"
  controls={false}
  muted={true}
  playing={true}
  loop={true}
  config={{
    youtube: {
      playerVars: {
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        playlist: `${this.state.movieTrailer}`,
        modestbranding: 1,
      },
    },
  }}
/>

```

Under the trailer users will find the list of all available movies which are clickable. On click the website takes users to a single movie page that contains detailed information about a chosen movie.

The navigation bar on top of the website includes a search bar that allos users to find a specific title of the movie, if the title is not found the page shows nothing.

Search bar demo:

![searchbar](https://media.giphy.com/media/AIPRhg2M9LLbRnYrEV/giphy.gif)

</details>

---

### Single Movie Page

---

![gif-customer-bookings](https://media.giphy.com/media/Kw0eHerOWXhNObs6de/giphy.gif)

<details>
  <summary>**Under the Hood**</summary>

Movie Preview Page:

Here the users will find the following information about the chosen movie:

* Movie Poster
* Rating
* Release Date
* Runtime
* Budget
* Revenue
* Genres
* Overview
* Trailer

<img width="33%" src="https://user-images.githubusercontent.com/68252181/102270776-a449ec00-3edb-11eb-9f2c-0da8d5758a2c.png"></img>

Users are able to return to the homepage by pressing the closing button in the top right corner.

</details>

---

## Roadmap
---


## Credits

<img src="https://avatars0.githubusercontent.com/u/66269306?s=400&u=b59f8ccc1002269319d952aa028ee270629b2ead&v=4" alt="Olga Morgan"
 width="150" height="auto" />\

**Olga Morgan**
[GitHub Profile](https://github.com/scripka)

<img src="https://avatars2.githubusercontent.com/u/68252181?s=460&u=0e706c67d754b36a877dbbc3d7750b32e1e06454&v=4" alt="Shawn Truesdale"
 width="150" height="auto" />\

**Shawn Truesdale**
[GitHub Profile](https://github.com/Shawntru)