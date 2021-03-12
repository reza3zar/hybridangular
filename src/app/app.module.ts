import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { TestModule } from './test/test.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    UpgradeModule,
    TestModule 
  ],
  declarations: [ AppComponent, HelloComponent ],
  // bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['demo']);
  }
}
