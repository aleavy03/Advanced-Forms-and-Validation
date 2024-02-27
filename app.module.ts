//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from "@angular/forms";
import { MyFormComponent} from "./my-form.component";

@NgModule({
  declarations: [
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [MyFormComponent]
})
export class AppModule{}
