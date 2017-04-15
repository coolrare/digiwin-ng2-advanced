import { ReduceSubscriber } from 'rxjs/operator/reduce';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { CardsComponent } from "app/cards/cards.component";
import { FlotComponent } from "app/charts/flot/flot.component";
import { RadialComponent } from "app/charts/radial/radial.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'charts',
    children: [
      { path: '', redirectTo: 'flot', pathMatch: 'full' },
      { path: 'flot', component: FlotComponent },
      { path: 'radial', component: RadialComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
