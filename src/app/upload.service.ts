import {HttpClient, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ImageExtractorResponse} from './models/ImageExtractorResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  SERVER_URL = 'http://localhost:9000/extract';
  constructor(private httpClient: HttpClient) { }

  public upload(formData): any {

    return this.httpClient.post<Observable<HttpEvent<any>>>(
      this.SERVER_URL,
      formData,
      {
        observe: 'events',
        reportProgress: true,
      }
    );
  }

}
