import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';






@NgModule({
  declarations: [],
  imports: [
    NgxCaptchaModule,
    NgxMatIntlTelInputModule,
    ],
  exports: [
    NgxCaptchaModule,
    NgxMatIntlTelInputModule,
  ],
})
export class NgxModule { }
