import { ErrorMessageFacadeService } from './../../Abstraction/Facade/error-message-facade.service';
import { NotificationFacadeService } from './../../../../Shared/Abstraction/Facade/notification-facade.service';
import { EmailConfirmationFacadeService } from './../../Abstraction/Facade/email-confirmation-facade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiResponse } from 'src/app/Shared/Core/models/webApiResponse.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  EmailConfirmationSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute,
     private emailConfirmationFacadeService: EmailConfirmationFacadeService,
     private errorMessageFacadeService: ErrorMessageFacadeService,
     ) { }

  ngOnInit(): void {
    this.EmailConfirmation();
  }

  EmailConfirmation() {
    const id = this.route.snapshot.queryParams['userid'];
    const token = this.route.snapshot.queryParams['token'];

    this.emailConfirmationFacadeService.EmailConfirmation({id, token}).subscribe((data) => {
      this.errorMessageFacadeService.formResponse(data);
    });
  }

  ngOnDestroy() {
    if (this.EmailConfirmationSubscription) {
      this.EmailConfirmationSubscription.unsubscribe();
    }
  }






}
