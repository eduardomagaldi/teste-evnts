# Red Ventures Test
## Eduardo Magaldi

### Used in this project:

- HTML5 Boilerplate
- Stylus
- Gulp
- [Flickity](http://flickity.metafizzy.co/)
- Angular.js
- Angular Material

### How to run

First, install ```node``` and ```npm```.

[https://nodejs.org/en/](https://nodejs.org/en/)

You will also need Gulp CLI installed globally:

```sudo npm install gulp -g```

Then, install all project dependencies:

```npm install```

Then run ```gulp```, it will:

1. Copy files from ```node_modules``` to ```vendor``` because github pages won't serve any files in any folder with that name.
2. Convert stylus files to css in ```css``` folder.
3. Start watching source files to repeat 2 when any stylus file is changed.
4. Serve files locally in [http://localhost:8000/](http://localhost:8000/)