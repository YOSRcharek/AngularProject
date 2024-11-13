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
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormCategorieComponent } from './Components/form-categorie/form-categorie.component';
import { CategoryComponent } from './Components/category/category.component';
import { TestComponent } from './Components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    FilterPipe,
    HighlightDirective,
    NotFoundComponent,
    FormCategorieComponent,
    CategoryComponent,

   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    TestComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
