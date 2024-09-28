import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// Thruty

// Falsy
// undefined, null, 0, "", NaN
export class HomePage {
  public email!: FormControl;
  public password!: FormControl;
  public form!: FormGroup;

  constructor(private authSrv: AuthService, private readonly navCtrl: NavController) {
    this.initForm();
  }

  public async doLogin() {
    try {
      console.log(this.form.value);
      const response = await this.authSrv.login(this.form.value.email, this.form.value.password);
      console.log(response);
      this.navCtrl.navigateForward("/principal");
    } catch (error) {
      console.error(error);
    }
  }

  private initForm() {
    this.email = new FormControl("", [Validators.email, Validators.required]);
    this.password = new FormControl("", [Validators.required]);
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

}
