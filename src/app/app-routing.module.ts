import { LoginGuard } from './login.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { fallbackRoute } from './shared/fallback-route';
import { ReduceSubscriber } from 'rxjs/operator/reduce';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { CardsComponent } from "app/cards/cards.component";

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent },
      { path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
        canActivate: [LoginGuard]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
