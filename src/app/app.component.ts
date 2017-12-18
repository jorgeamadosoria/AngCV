import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { CV } from './cv';
import { CVService } from './cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  cv: CV;
  constructor(private formBuilder: FormBuilder, private service: CVService) { }

    getCV(): void {
      this.service.getCV().subscribe(cv => this.cv = cv);
    }

    ngOnInit() {
      this.getCV();

      this.form = this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(5)]],
          languages: this.formBuilder.array([
              this.initLanguage()
          ])
      });
  }

  initLanguage() {
      return this.formBuilder.group({
          language: ['', Validators.required],
          level: ['', Validators.required]
      });
  }

  addLanguage() {
      const control = <FormArray>this.form.controls['languages'];
      control.push(this.initLanguage());
  }

  removeLanguage(i: number) {
      const control = <FormArray>this.form.controls['languages'];
      control.removeAt(i);
  }

  save(model: CV) {
      // call API to save
      // ...
      console.log(model);
  }
}
