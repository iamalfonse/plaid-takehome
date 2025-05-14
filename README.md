## Installation

To setup this project and install it's tools/dependencies, if any, run the
following command(s):

No dependencies. You can just open the `index.html` file in your browser to view the page.

## Running locally

You just need to open the `index.html` file in your browser. 

If you need to edit the `/styles/main.scss` file, make sure you've installed [Sass](https://sass-lang.com/install/). Then run:

```
$ sass --no-source-map --watch styles/main.scss main.css
```

## Future improvements

Would definitely like to implement maybe a popup modal form when a user clicks on the "Let's work together" link at the top right. That way, we can generate leads through the form. Make it so that the modal shows up, with an animation (fade in, and shift from the top slightly), maybe blur the background as well to put more emphasis on the modal form itself.

Also, maybe make the guilloche pattern in the background be in a canvas and programatically created in JS, instead of as a background image.
