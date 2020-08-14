import { Component, Input, OnInit } from '@angular/core';
import { ImageExtractorResponse } from '../models/ImageExtractorResponse';
import { interval } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData;

  @Input() extractedData: ImageExtractorResponse;

  constructor() { }

  ngOnInit() {
    this.initFormData();

    interval(1000)
      .pipe(
        take(Object.values(this.extractedData).length),
        map(i => [i, Object.values(this.extractedData)[i]]),
        tap(([i, val]) => this.formData[i] = val),
      ).subscribe();
  }

  initFormData() {
    this.formData = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    };
  }
}
