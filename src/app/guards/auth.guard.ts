import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private alertCtrl: AlertController) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data.role;
    console.log('expected: ', expectedRole);

    return this.auth.user.pipe(
      take(1),
      map(user => {

        console.log('log: ', user);
        if (user) {
          let role = user['role'];

          if (expectedRole === role) {
            return true;
          } else {
            this.showAlert();
            return this.router.parseUrl('/login');
          }
        } else {
          this.showAlert();
          return this.router.parseUrl('/login');
        }

      })
    );

  }

  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: 'LHOH MAYAK!',
      message: 'MBOTEN PARENG MBROBOS :)',
      buttons: ['OK']
    });
    alert.present();
  }
}

