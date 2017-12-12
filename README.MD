# ng-neo-loader

## Installation

To install this library, run:

```bash
$ npm install ng-neo-loader --save
```
and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { NeoLoaderModule } from 'ng-neo-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    NeoLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Import library in child module
import { NeoLoaderModule } from 'ng-neo-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    NeoLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use it component in your Angular application:

```xml
<!-- You can now use your library component in *.component.html -->
<app-loader></app-loader>

<h1>
  {{title}}
</h1>
```

## License

MIT © [Neocomplexx](mailto:info@neocomplexx.com)
