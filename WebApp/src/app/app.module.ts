import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkItemListComponent } from './work-item-list/work-item-list.component';
import { NGModalComponent } from './ngmodal/ngmodal.component';


@NgModule({
  declarations: [
    AppComponent,    
    WorkItemListComponent, NGModalComponent
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,  
    HttpClientModule,
    NgbModule.forRoot()
  ],
  entryComponents : [NGModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
