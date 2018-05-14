import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { WorkItemListComponent } from './work-item-list/work-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkItemComponent,
    WorkItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
