import { Event } from './event';
import { Personal } from './personal';
import { Education } from './education';
import { Work } from './work';
import { Skill } from './skill';
import { Reference } from './reference';
import { Volunteer } from './volunteer';
import { Publication } from './publication';
import { Accolade } from './accolade';
import { Language } from './language';

export class CV {
  personal: Personal;
  skills: Skill[];
  references: Reference[];
  work: Work[];
  education: Education[];
  volunteer: Volunteer[];
  accolades: Accolade[];
  publications: Publication[];
  events: Event[];
  languages: Language[];
}

