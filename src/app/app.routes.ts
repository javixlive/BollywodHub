import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'movie/:id', component:MovieCardComponent},
    {path: 'search/:text', component:SearchComponent},
  
    {path: '', pathMatch:'full', redirectTo:'/home'},
    {path: '**',redirectTo:'/home'}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}