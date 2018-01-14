import { Directive, ElementRef, NgModule } from '@angular/core';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

var NgxImageDimensionDirective = /** @class */ (function () {
    function NgxImageDimensionDirective(el) {
        this.el = el;
    }
    NgxImageDimensionDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.el.nativeElement.style.overflow = 'hidden';
        var im = this.el.nativeElement.querySelector('img');
        im.onload = function () {
            var th = _this.el.nativeElement.getBoundingClientRect().height, // box height
            tw = _this.el.nativeElement.getBoundingClientRect().width, // box width
            ih = im.height, // inital image height
            iw = im.width; // initial image width;
            if (ih > iw) {
                // if portrait
                im.classList.add('ww');
                im.classList.remove('wh'); // set width 100%
            }
            else {
                // if landscape
                im.classList.add('wh');
                im.classList.remove('ww'); // set height 100%
            }
            // set offset
            var nh = im.height, // new image height
            nw = im.width, // new image width
            hd = (nh - th) / 2, // half dif img/box height
            wd = (nw - tw) / 2; // half dif img/box width
            if (nh < nw) {
                // if portrait
                im.style.marginLeft = '-' + wd + 'px';
                im.style.marginTop = 0; // offset left
            }
            else {
                // if landscape
                im.style.marginTop = '-' + hd + 'px';
                im.style.marginLeft = 0; // offset top
            }
        };
    };
    NgxImageDimensionDirective = __decorate([
        Directive({
            selector: '[imageCenteredSize]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object])
    ], NgxImageDimensionDirective);
    return NgxImageDimensionDirective;
    var _a;
}());

var NgxImageDimensionModule = /** @class */ (function () {
    function NgxImageDimensionModule() {
    }
    NgxImageDimensionModule = __decorate([
        NgModule({
            imports: [],
            exports: [NgxImageDimensionDirective],
            declarations: [NgxImageDimensionDirective]
        })
    ], NgxImageDimensionModule);
    return NgxImageDimensionModule;
}());

export { NgxImageDimensionModule, NgxImageDimensionDirective };
//# sourceMappingURL=ngx-image-dimension.esm.js.map
