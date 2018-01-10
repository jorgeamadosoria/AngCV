import { Component, OnInit, Input } from '@angular/core';
import { CV } from '../../../common/cv';
import { socials } from '../../../common/socialIcon';

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
