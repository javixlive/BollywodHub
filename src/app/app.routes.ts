import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { MovieCardDetailsComponent } from "./components/movie-card-details/movie-card-details.component";

const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'movie/:id', component:MovieCardDetailsComponent},
    {path: 'search/:text', component:SearchComponent},
  
    {path: '', pathMatch:'full', redirectTo:'/home'},
    {path: '**',redirectTo:'/home'}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}