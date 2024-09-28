import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input/input.component';

const MODULES = [
  CommonModule,
  FormsModule,
  IonicModule,
  ReactiveFormsModule,
];

const COMPONENTS = [
  InputComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES
  ],
  providers: [AuthService],
  exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule {}
