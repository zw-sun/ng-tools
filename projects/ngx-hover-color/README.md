# NgxHoverColor

Move ngx-hover-color to scope @just-so-so.

Angular tool for changing hover color, see [demo](https://stackblitz.com/edit/ngx-hover-color-example).

Import:

        import { NgxHoverColorModule } from '@just-so-so/ngx-hover-color';

You can add default hover color in this way:

        NgxHoverColorModule.forRoot({
                defaultColor: "green",
                defaultBgColor: "red",
                bgColorOnly: false
        })

***Note: Inline attribute values will override global configuration***

#### Release notes

- ##### 2020-12-20 (v11.1.3)
  * Move ngx-hover-color to scope @just-so-so

- ##### 2020-12-20 (v11.1.2)
  * Fix - Inline attribute values don't override global configuration correctly ([#3](https://github.com/zw-sun/ng-tools/issues/3))
  * Fix - Modify the way to change color ([#4](https://github.com/zw-sun/ng-tools/issues/4))

- ##### 2020-12-16 (v11.1.1)
  * Fix - NullInjectorError issue ([#2](https://github.com/zw-sun/ng-tools/issues/2))

- ##### 2020-12-15 (v11.1.0)
  * Add support for background changes ([#1](https://github.com/zw-sun/ng-tools/issues/1))

- ##### 2020-12-13 (v11.0.0)
  * Update README.md files
  * Update the package version to match the Angular version