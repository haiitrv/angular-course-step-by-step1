import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeViewComponent } from './home-view/home-view.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { SupplierComponent } from './supplier/supplier.component';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './routing/Routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    MasterPageComponent,
    SupplierComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [MasterPageComponent],
})
export class AppModule {}
