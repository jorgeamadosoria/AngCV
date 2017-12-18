import { Event } from './event';
import { Location } from './location';
import { Personal } from './personal';
import { Education } from './education';
import { Work } from './work';
import { Experience } from './experience';
import { Skill } from './skill';
import { Reference } from './reference';
import { Volunteer } from './volunteer';
import { Publication } from './publication';
import { Award } from './Award';
import { Certification } from './certification';
import { Language } from './language';

export class CV {
  personal: Personal;
  skills: Skill[];
  references: Reference[];
  experience: Experience[];
  work: Work[];
  education: Education[];
  volunteer: Volunteer[];
  certification: Certification[];
  publications: Publication[];
  awards: Award[];
  events: Event[];
  languages: Language[];
}

