import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
        {
            path: 'feed',
            loadChildren: '../pages/feed/feed.module#FeedPageModule',
            canActivate: [AuthGuard],
            data: {
              role: 'USER'
            }
        },
        {
            path: 'account',
            loadChildren: '../pages/account/account.module#AccountPageModule',
            canActivate: [AuthGuard],
            data: {
              role: 'USER'
            }
        },
        {
            path: 'cart',
            loadChildren: '../pages/cart/cart.module#CartPageModule',
            canActivate: [AuthGuard],
            data: {
              role: 'USER'
            }
        },
        {
            path: 'settings',
            loadChildren: '../pages/settings/settings.module#SettingsPageModule',
            canActivate: [AuthGuard],
            data: {
              role: 'USER'
            }
        }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter {}
