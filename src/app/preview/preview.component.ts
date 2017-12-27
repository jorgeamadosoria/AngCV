import { Component, OnInit, Input } from '@angular/core';
import { CV } from './../cv';
import { socials } from './../socialIcon';

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
  socialIcon(idx: number ) {
    return socials.get(this.pCv.personal.social[idx].network);
}
}
