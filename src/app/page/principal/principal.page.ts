import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private readonly authSrv: AuthService, private readonly navCtrl: NavController) { }

  async ngOnInit() {
    const isAuth = await this.authSrv.isAuth();
    if(isAuth) {
      console.log("It is Auth");
    } else {
      this.navCtrl.navigateForward("/home");
    }
  }

  async logOut() {
    await this.authSrv.logout();
    this.navCtrl.navigateForward("/home");
  }

}
