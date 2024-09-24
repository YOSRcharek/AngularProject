import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { HeaderComponent } from "./Components/header/header.component";
import { HomeComponent } from "./Components/home/home.component";
import { ListCategoriesComponent } from "./Components/list-categories/list-categories.component";
import { UserComponent } from "./Components/user/user.component";
import { HighlightDirective } from "./directive/highlight.directive";
import { FilterPipe } from "./pipe/filter.pipe";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
