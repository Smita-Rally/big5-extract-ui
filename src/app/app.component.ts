import {Component, ElementRef, Injectable, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {mockImageExtractorResponse} from './mock/mock-data';
import {ImageExtractorResponse} from './models/ImageExtractorResponse';
import {HttpClient, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import {catchError, map, switchMap, take} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { UploadService} from './upload.service';

@Injectable({
  providedIn: 'root'
})
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild('video', { static: true }) videoElement: ElementRef;
    @ViewChild('canvas', { static: true }) canvas: ElementRef;
    extractedImageData: ImageExtractorResponse;
    isVideo = false;
    url: any;
    isStartCamera = false;
    mediaStream;
    videoWidth = 0;
    videoHeight = 0;
    constraints = {
        video: {
            facingMode: 'environment',
            width: { ideal: 4096 },
            height: { ideal: 2160 }
        }
    };
    private file: Blob;

    constructor(private renderer: Renderer2, private http: HttpClient, private uploadService: UploadService) {}

    ngOnInit() {
        // this.startCamera();
    }

    startCamera() {
        if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            navigator.mediaDevices.getUserMedia(this.constraints).then((ms: MediaStream) => this.attachVideo(ms));
            this.isStartCamera = true;
        } else {
            alert('Sorry, camera not available.');
        }
    }

    attachVideo(stream) {
        this.mediaStream = stream;
        this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
        this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
            this.videoHeight = this.videoElement.nativeElement.videoHeight;
            this.videoWidth = this.videoElement.nativeElement.videoWidth;
        });
        this.canvas.nativeElement.style.display = 'none';
        this.videoElement.nativeElement.style.display = 'block';
        this.isVideo = true;
    }

    capture() {
        this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
        this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
        this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);

        this.canvas.nativeElement.style.display = 'block';
        this.videoElement.nativeElement.style.display = 'none';
        this.postRequest();
    }

    handleError(error: HttpErrorResponse) {
        console.log('Error: ', error);
        return [];
    }

    postRequest() {
      this.onStop();
      const img = document.createElement('img');
      img.src = this.canvas.nativeElement.toDataURL('image/jpeg');
      this.populateForm(mockImageExtractorResponse);
      this.dataURIToBlob(img.src);
    }

    dataURIToBlob(dataURI: string) {
        fetch(dataURI)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], 'File name', { type: 'image/png' });
          this.uploadFile(file);
        });
        // return new Blob([ia], { type: mimeString });
    }

    onStop() {
      this.videoElement.nativeElement.pause();
      (this.videoElement.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
      this.videoElement.nativeElement.srcObject = null;
    }

    ngOnDestroy() {
      (this.videoElement.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
    }

    populateForm(extractedData: ImageExtractorResponse) {
        this.extractedImageData = extractedData;
    }

    onSelectFile(event): void {
      if (this.videoElement.nativeElement || this.canvas.nativeElement) {
        this.canvas.nativeElement.style.display = 'none';
        this.videoElement.nativeElement.style.display = 'none';
      }
      const reader = new FileReader();
      const file = event.target.files[0];
      this.uploadFile(file);
      if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.url = reader.result;
        };
      }
    }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    file.inProgress = true;
    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        console.log(event.body);
      }
    });
  }

}
