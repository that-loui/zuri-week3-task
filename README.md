## ZURI TASK SOLUTION

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
-[communication summary](#communication-summary)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

This is the implementation of the design made by Dolapo Olateju

### The challenge

Page should be able to:

- Be responsive on different screen sizes
- look as close as possible to the actual design
- be functional for parts of the page that require functionality


### Links

- Repo URL: (https://github.com/that-loui/zuri-week3-task)
- Live Site URL: (https://that-loui.github.io/zuri-week3-task)

## My process

- I started out by choosing a design to implement from the folder provided, then after getting a clear of the design i went on to contact the design for additional information on the design. The designer provided me with the figma file link which aided my development.

- I decided to use bootstrap to build the site after careful consideration of the design specifics. I built out the design section by section starting with the nav and made it with mobile first approach to programming. Created the toggle button, then attached it to the nav-menu

- The next section was the search bar section which I built using a simple form, the I moved on to the first hero/ ad section, I used responsive flexBox to ensure that it was displayed row on wider screens and column on smaller screens.

- The next section was the (popular postcode) section which honestly gave the most stress cause it included a carousel which I implemented using vanilla javascript, I created multiple tables inside a container using bootstrap custom table class, I had to change a custom color which i did by changing the custom variable. I the went to implement functionality in js, called them in js using querySelectorAll, created a reset function to set their display = 'none' by looping through and setting the display of each iteration to 'none'. I then created a function to start the slide by setting the display of the first item to block. i then created the two function for changing slides in both directions. After proper testing that it functioned well and the layout was fine in all screen sizes i moved to the next section  

- I then did the extra information section which i made using the same technique as the ad hero section but switched the position of the items. The last section was the footer which I used bootstrap grid to implement. Pushed the code to github and made the implementation live    


## communication summary
- We started our communication by exchanging pleasantries and stating that I loved the design and would be glad to work her (THE DESIGNER), then I proceeded to let the designer (Dolapo Olateju) know that I had chosen to implement her design and that I would be needing specifics of how she wanted the site to break down on smaller screen sizes than the one she did.

- We arranged a google meet to discuss further on the mobile view for the site's navigation and other sections that needed attention. She did checkups to know how far i had gone with the build process.

- After I built the design I sent A live link for her to look into it to ensure I built the site to her specifications, after we made a few changes here and there then I pushed my code to github and redeployed the site. till it met the required standard.        

### Built with

- Bootstrap
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

- This process thought me how to establish clear communication with the designer. 
- I also learnt how to effectively collaborate with the designer to bring out the best

- code that gave the most stress was the Carousel section:
```css
  .thead{
    background-color: #F9C80E;
}
/* reset bootstrap table color */
thead{
    --bs-table-bg: var(	--bs-warning);
}
```
```js
function nextSlide() {
  reset();
  if (counter == carouselItems.length - 1) {
    counter = -1;
  }
  carouselItems[counter + 1].style.display = 'block';
  counter++;
}
function prevSlide() {
  reset();
  if (counter == 0) {
    counter = carouselItems.length;
  }
  carouselItems[counter - 1].style.display = 'block';
  counter--;
}

rightBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    nextSlide();
  });
});

leftBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    prevSlide();
  });
});
```

### Continued development

I play to improve upon my previous errors of not properly using semantic HTML syntax

## Author

- Zuri Student ID[ZUR0001972HT](https://cdt.zuriboard.com/user/profile/197)
- Twitter - [@LMacjob](https://www.twitter.com/LMacjob)
