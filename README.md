# Project 2 - Artist Index 📀

A pair programming project. Building a React app that receives a third-party API.

### Team Mates

<a href="https://github.com/dan-laurie" target="_blank">Dan Laurie</a>

## Project Overview

The React app had to built within 2 days (hackathon) and must display information taken from a third-party API.

We decided to create an app that serves as a Wikipedia for music artists using TheAudioDB API!

Users are simply able to type in their desired artist and the page will display a profile picture, biography and also display albums the artist had produced, if applicable.

![enter image description here](https://i.imgur.com/prSgAU0.png)

## Technologies/Languages Used

- HTML5
- CSS3
- SASS
- Bootstrap
- JavaScript ES6+
- React
- Axios
- Yarn
- NPM
- Git
- GitHub
- Font Awesome
- Google Fonts

## Planning

We began by discussing a quick plan. We knew we wanted to create something music based, and spent a little while trying to find a good free music API to use. This proved to be fairly difficult. Once we settled on using the AudioDB API we decided on which features to include. We knew we wanted a live search bar, and chose which artist details we wanted to display.

## The Build

As the project only lasted a few days, I'll highlight and explain some key features/functionality.

Here's an overview of the App.js file, showing all components of 'Artist Index'.
![enter image description here](https://i.imgur.com/FBV1oe5.png)

As we were using a third-party API, we used Axios to serve our front-end. Using interpolation, the users input would then be inserted into the end of the URL.
![enter image description here](https://i.imgur.com/TM8CDh9.png)
If the user needed to enter a space for their search query, for example 'Bob Dylan' , a quick conditional to replace spaces with underscores was needed.
![enter image description here](https://i.imgur.com/z2id7pS.png)
In order to display all the information for each respective artist on the page, 'dot notation' is used. In addition, a `.map()` is used to iterate through each artists album list, if applicable.
![enter image description here](https://i.imgur.com/ixbMiQO.png)
To stop the React app from 'erroring' on every letter input, some error handling is included, that displays a gif and some text to alert the user that no artist had been found in the database. If no errors had been thrown, a spinner would load instead, alerting the user to wait.
![enter image description here](https://i.imgur.com/w6BOTyP.png)
In the event of our path becoming invalid/broken or TheAudioDB API became inactive, an 'Error' component is included to display a warning and give the user the option to be taken back to the homepage.
![enter image description here](https://i.imgur.com/Dvu6FgR.png)

## Wins

- Getting data successfully to display on our page with Axios was of course a huge win as this provides the core functionality of the app.
- I think implementing the user search bar with an `onChange={function}` was definitely a fun problem to solve.
- Converting spaces to underscores was also a great little work-around to include!

## Challenges

- Due to the time sensitive nature of this project, it was a struggle to plan which parts of the app needed to be finished before implementing other features.

## Future Additions

- A page to view the top charts, filtered by region.
- Include links to each artists social media pages and iTunes/Apple Music/Spotify.

## Key Learning Points

- Axios: As this was both our first project using Axios to receive data from an API, it was crucial to practice and get to know how to use it. We enjoyed working out how render information on the page with using this.

- Team Communication: Building on teamwork skills was definitely another key-learning point. It was great practice being able to communicate changes to code, what needed to be completed and just conversing with each other, talking through problems that had arisen during the build!
