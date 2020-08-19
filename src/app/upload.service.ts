import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import {Injectable} from '@angular/core';
import {ImageExtractorResponse} from './models/ImageExtractorResponse';
import {mockImageExtractorResponse} from './mock/mock-data';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  SERVER_URL = 'http://localhost:9000/api';
  constructor(private httpClient: HttpClient) { }

  public upload(formData): any {

    return this.httpClient.post<ImageExtractorResponse>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
