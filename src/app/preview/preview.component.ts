import { Component, OnInit, Input } from '@angular/core';
import { CV } from './../cv';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() pCv: CV;
  constructor() { }

  ngOnInit() {
  }

}
