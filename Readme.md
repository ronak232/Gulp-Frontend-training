## setup ##
* If you don't have node js 12.13.0, first download it.
* To manage muliple node version use nvm "https://github.com/coreybutler/nvm-windows"
* nvm install 12.13.0
* nvm use 12.13.0
* to see the node version use nvm list 
* Open command prompt on plastic directory and run command "npm install" or "npm i".

## Gulp Task ##
* gulp default (This is the default task that produces the minified css/js/images)
* gulp watch uses browser sync and watches task
  - sass (Assets/scss)
  - js (Assets/js)
  - images (Assets/images)
  - fonts (Assets/fonts)
  - component html (Prototype/Components)
  - page level html (Prototype/Templates)

## Run the local server ##
* Open command prompt on plastic directory and run "gulp watch". This will open a view in browser http://localhost:3000/.

## How to add a html file ##
* For reference see Prototype/Components and Prototype/Templates and ./index.html

## How to add script ##
*  For reference see Assets/js/banner-carousel.js and Assets/js/main.js 

## How to add a scss file ##
* For reference see Assets/scss/style.scss and write scss style in BEM notation for more refrence visit this "http://getbem.com/introduction/"

## How to add a third party refrences (For example bootstrap)
* For reference see Assets/js/banner-carousel.js and Assets/scss/vendor/_bootstrap.scss

## Icons
* For icons font awesome 5.15.4 has been used here.

## Dist folder ##
* Compile css will go here dist/css/style.min.css
* Compile js will go here dist/js/main.min.js
* Resultent html will go here dist/Prototype/Templates
 