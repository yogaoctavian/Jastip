import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    pw: ''
  };
  constructor(private auth: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  signIn() {
    this.auth.signIn(this.user).subscribe(user => {
      let role = user['role'];
      if (role === 'ADMIN') {
        this.router.navigateByUrl('/home/feed');
      } else if (role === 'USER') {
        this.router.navigateByUrl('/home/feed');
      } else {
        this.Peringatan();
      }
    });

  }

  async Peringatan() {
    let alert = await this.alertCtrl.create({
      header: 'SALAH COYY!!',
      message: 'COBA LAGI NGGEH :P',
      buttons: ['OK']
    });
    alert.present();
  }

}
