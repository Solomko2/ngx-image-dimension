# NGX-IMAGE-DIMENSION

Directive imageCenteredSize makes image centered, as background (background-position: 50% 50%; background-size: cover; background-repeat: no-repeat;) but it is remains tag (`<img src='#' alt="#">`)

## Getting Started
To get started, install it from npm:

```
npm i ngx-image-dimension
```

## Usage

Import NgxImageDimensionModule to your application module.

```javascript
...
import {NgxImageDimensionModule} from 'ngx-image-dimension';
...

 ...
@NgModule({
  imports: [...,NgxImageDimensionModule]
  })
  ...
```

### CSS

Add this css to your css file
```css
.wh {
  height: 100% !important
}

.ww {
  width: 100% !important
}

```

### View

Use in template like below

```angular2html
    <div style="width: 200px; height: 200px; overflow: hidden;" imageCenteredSize>
      <img src="http://kb4images.com/images/image/37184284-image.jpg" alt="">
    </div>
```