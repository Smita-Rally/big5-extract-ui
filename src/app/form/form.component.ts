import { Component, OnInit, Input } from '@angular/core';
import { ImageExtractorResponse } from '../models/ImageExtractorResponse';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @Input() formData: ImageExtractorResponse;

    constructor() { }

    ngOnInit() {
        console.log('form data', this.formData);
    }

}
