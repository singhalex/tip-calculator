# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![image](https://github.com/singhalex/tip-calculator/assets/115970252/f94b462a-2fa8-4521-bedb-80b3034bbc50)

### Links

- [Live Site](https://jovial-cupcake-135d1e.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS modules
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I really honed my use of conditional statements to control the behavior of the page. For example, the reset button only becomes active when certain data are entered by the user

```jsx
<button
  className={styles.resetButton}
  onClick={reset}
  disabled={bill !== "" && numPeople !== "" && tip !== 0 ? false : true}
>
```
I was also able to utilize grid to control my break points between a full sized web app and mobile views. I only needed a media query to change font sizes and some margins/paddings

```css
.wrapper {
  background-color: var(--white);

  width: clamp(250px, 100vw, 922px);
  min-height: 480px;
  margin-bottom: 4.5rem;
  padding: 2rem;
  transition: padding 0.25s ease-out;

  border-radius: 1.5rem;

  /* Responsive grid */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(316px, 1fr));
  gap: 2rem;

  box-shadow: 0rem 1rem 2rem rgb(0, 0, 0, 0.1);
}
```

### Continued development

I'd like to continue to increase my knowledge and use of controlled inputs. Giving feedback to the user about what they can and cannot do on a page is a strong emphasis for me. Anything that I can do to ease their burden when using my sites will be extremely beneficial.

### Useful resources

- [The Joy of CSS Grid](https://www.youtube.com/watch?v=705XCEruZFs) - This video on CSS Grid layouts was a great refresher on how to create the responsive design I needed.
- [The Oding Project - More On State](https://www.theodinproject.com/lessons/node-path-react-new-more-on-state) - This article was a handy reference when I was using state to control my inputs.

## Author

- Website - [Github](https://github.com/singhalex)
- Frontend Mentor - [@singhalex](https://www.frontendmentor.io/profile/singhalex)
- LinkedIn - [Alex Singh]https://www.linkedin.com/in/alex-singh-748000254/)
