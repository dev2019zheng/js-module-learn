
babel js/src -d js/build

browserify js/build/main.js -o js/dist/bundle.js