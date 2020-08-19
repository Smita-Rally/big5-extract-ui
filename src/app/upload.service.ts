import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ImageExtractorResponse} from './models/ImageExtractorResponse';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  SERVER_URL = 'http://localhost:9000/extract';
  constructor(private httpClient: HttpClient) { }

  public upload(formData): any {

    return this.httpClient.post<ImageExtractorResponse>(
      this.SERVER_URL,
      formData,
      {
        observe: 'events',
        reportProgress: true,
      }
    );
  }

}
