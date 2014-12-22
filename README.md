#CSS url adjuster Ingredient for Laravel Elixir

This is a simple [gulp-css-url-adjuster](https://github.com/casualrelaxation/gulp-css-url-adjuster) wrapper ingredient for Laravel Elixir.

## Installation

`npm install --save-dev laravel-elixir-css-url-adjuster`

## Usage

This package allows gulp to change css urls

css file:

```css
    .cool-background {
        background-image: url('coolImage.jpg');
    }
```
gulp file:

```javascript
    var urlAdjuster = require('gulp-css-url-adjuster');

    mix.urlAdjuster('style.css', {
        prepend: '/image_directory/',
        append: '?version=1'
    }, 'modifiedStyle.css');
```

after modified:

```css
    .cool-background {
        background-image: url('/image_directory/coolImage.jpg?version=1');
    }
```

only adjust relative paths:

```css
    .cool-background {
        background-image: url('coolImage.jpg');
    }

    .neato-background {
        background-image: url('/images/neatoImage.jpg');
    }
```

```javascript
    mix.urlAdjuster('style.css', {
        prependRelative: '/image_directory/'
    }, 'modifiedStyle.css');
```

```css
    .cool-background {
        background-image: url('/image_directory/coolImage.jpg');
    }

    .neato-background {
        background-image: url('/images/neatoImage.jpg');
    }
```

or replace path to another:

```css
    .cool-background {
        background-image: url('/old/path/coolImage.jpg');
    }

    .neato-background {
        background-image: url('/old/path/images/neatoImage.jpg');
    }
```

```javascript
    mix.urlAdjuster('style.css', {
        replace: ['/old/path', '/brand/new']
    }, 'modifiedStyle.css');
```

```css
    .cool-background {
        background-image: url('/brand/new/coolImage.jpg');
    }

    .neato-background {
        background-image: url('/brand/new/images/neatoImage.jpg');
    }
```

## Bugs and Contributions

If you find a bug, please [post an issue on GitHub](https://github.com/EdRands/laravel-elixir-css-url-adjuster/issues) describing the problem.
Or better yet, make a pull request with the solution.

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)