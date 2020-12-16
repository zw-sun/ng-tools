# NgxHoverColor

Angular tools for changing hover color, see [demo](https://stackblitz.com/edit/ngx-hover-color-example).

Import:

        import { NgxHoverColorModule } from 'ngx-hover-color';

You can add default hover color in this way:

        NgxHoverColorModule.forRoot({
                defaultColor: "green",
                defaultBgColor: "red",
                bgColorOnly: false
        })

***Note: Inline attribute values will override global configuration***

#### Release notes

- ##### 2020-12-16 (v11.1.1)
  * Fix NullInjectorError issue ([#2](https://github.com/zw-sun/ng-tools/issues/2))

- ##### 2020-12-15 (v11.1.0)
  * Add support for background changes ([#1](https://github.com/zw-sun/ng-tools/issues/1))

- ##### 2020-12-13 (v11.0.0)
  * Update README.md files
  * Update the package version to match the Angular version