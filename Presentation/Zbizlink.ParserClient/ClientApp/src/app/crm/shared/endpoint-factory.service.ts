import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointFactoryService {

  constructor(protected http: HttpClient) {
  }

  protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + '4534jhlkjhdflkh85094580',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      User: 'mahmood',
      Password: 'passwordabc',
      SecurityToken: 'tokenabc'
    });

    return { headers };
  }
}
