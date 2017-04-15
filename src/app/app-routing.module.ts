import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { CardsComponent } from "app/cards/cards.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cards', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
