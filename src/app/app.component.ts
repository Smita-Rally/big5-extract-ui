import {Component, ElementRef, Injectable, OnInit, Renderer2, ViewChild} from '@angular/core';
import {mockImageExtractorResponse} from './mock/mock-data';
import {ImageExtractorResponse} from './models/ImageExtractorResponse';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChild('video', { static: true }) videoElement: ElementRef;
    @ViewChild('canvas', { static: true }) canvas: ElementRef;
    url;
    extractedImageData: ImageExtractorResponse;
    isVideo = false;
    isstartCamera = false;
    videoWidth = 0;
    videoHeight = 0;
    constraints = {
        video: {
            facingMode: 'environment',
            width: { ideal: 4096 },
            height: { ideal: 2160 }
        }
    };

    constructor(private renderer: Renderer2, private http: HttpClient) {}

    ngOnInit() {
        // this.startCamera();
    }

    startCamera() {
        if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
        } else {
            alert('Sorry, camera not available.');
        }
        this.isstartCamera = true;
    }

    attachVideo(stream) {
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
        const img = document.createElement('img');
        img.src = this.canvas.nativeElement.toDataURL('image/jpeg');
        this.canvas.nativeElement.style.display = 'block';
        this.videoElement.nativeElement.style.display = 'none';
        this.postRequest();
    }

    handleError(error: HttpErrorResponse) {
        console.log('Error: ', error);
        return [];
    }

    postRequest() {
        const file	=  this.dataURIToBlob(this.canvas.nativeElement.toDataURL( 'image/png' ));
        return this.http.post(`/api`, file)
          .pipe(catchError(error => this.handleError(error)))
          .subscribe( res => console.log(res));

        // testing
        this.populateForm(mockImageExtractorResponse);
    }

    dataURIToBlob(dataURI: string) {
        const splitDataURI = dataURI.split(',')
        const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });

    }

    // testing
    populateForm(extractedData: ImageExtractorResponse) {
        this.extractedImageData = extractedData;
    }

    onSelectFile(event): void {
    console.log(event)
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => {
        this.url = event.target.result;
        console.log(this.url)
      }
    }
  }
}
