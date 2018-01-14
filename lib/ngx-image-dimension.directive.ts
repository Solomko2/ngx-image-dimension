import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[imageCenteredSize]'
})
export class NgxImageDimensionDirective implements AfterViewInit {

  constructor(public el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.style.overflow = 'hidden';
    const im = this.el.nativeElement.querySelector('img');

    im.onload = () => {
      const th = this.el.nativeElement.getBoundingClientRect().height, // box height
        tw = this.el.nativeElement.getBoundingClientRect().width, // box width
        ih = im.height, // inital image height
        iw = im.width; // initial image width;

      if (ih > iw) {
        // if portrait
        im.classList.add('ww');
        im.classList.remove('wh'); // set width 100%
      } else {
        // if landscape
        im.classList.add('wh');
        im.classList.remove('ww'); // set height 100%
      }

      // set offset
      const nh = im.height, // new image height
        nw = im.width, // new image width
        hd = (nh - th) / 2, // half dif img/box height
        wd = (nw - tw) / 2; // half dif img/box width

      if (nh < nw) {
        // if portrait
        im.style.marginLeft = '-' + wd + 'px';
        im.style.marginTop = 0; // offset left
      } else {
        // if landscape
        im.style.marginTop = '-' + hd + 'px';
        im.style.marginLeft = 0; // offset top
      }
    };
  }
}
