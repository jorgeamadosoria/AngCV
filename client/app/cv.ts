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
import { Filter } from './filter';
import { FilterTag } from './filtertag';
import * as _ from 'underscore';

export class CV {
  public personal: Personal;
  public skills: Skill[];
  public references: Reference[];
  public work: Work[];
  public education: Education[];
  public volunteer: Volunteer[];
  public accolades: Accolade[];
  public publications: Publication[];
  public events: Event[];
  public languages: Language[];

  constructor(src: any) {
    this.personal = new Personal(src.personal);
    this.skills = _.map(src.skills, o => new Skill(o));
    this.references = _.map(src.references, o => new Reference(o));
    this.work = _.map(src.work, o => new Work(o));
    this.education = _.map(src.education, o => new Education(o));
    this.volunteer = _.map(src.volunteer, o => new Volunteer(o));
    this.accolades = _.map(src.accolades, o => new Accolade(o));
    this.publications = _.map(src.publications, o => new Publication(o));
    this.events = _.map(src.events, o => new Event(o));
    this.languages = _.map(src.languages, o => new Language(o));
  //  console.log("Work array " + JSON.stringify(this.work));
  }

  assignFromAny(src: any) {
    this.personal = src.personal;
    this.skills = src.skills;
    this.references = src.references;
    this.work = src.work;
    this.education = src.education;
    this.volunteer = src.volunteer;
    this.accolades = src.accolades;
    this.publications = src.publications;
    this.events = src.events;
    this.languages = src.languages;
  }

  assignFrom(src: CV) {
    this.personal = src.personal;
    this.skills = src.skills;
    this.references = src.references;
    this.work = src.work;
    this.education = src.education;
    this.volunteer = src.volunteer;
    this.accolades = src.accolades;
    this.publications = src.publications;
    this.events = src.events;
    this.languages = src.languages;
  }

  clone() {
    return new CV(this);
  }

  applyFilter(filter: Filter) {
    console.log('checked ' + filter.tags);
    const lambda = obj => obj.tag && _.intersection(filter.tags, obj.tag.split(',')).length === 0;
    this.accolades = _.reject(this.accolades, lambda);
    this.events = _.reject(this.events, lambda);
    this.publications = _.reject(this.publications, lambda);
    this.skills = _.reject(this.skills, lambda);
    this.volunteer = _.reject(this.volunteer, lambda);
    this.work = _.reject(this.work, lambda);

    const lambdaStartDate = obj => filter.startDate > obj.endDate;
    this.work = _.reject(this.work, lambdaStartDate);
    this.events = _.reject(this.events, lambdaStartDate);
    this.volunteer = _.reject(this.volunteer, lambdaStartDate);
    this.publications = _.reject(this.publications, obj => filter.startDate > obj.date || obj.date > filter.endDate);

    const lambdaEndDate = obj => filter.endDate < obj.startDate;
    this.work = _.reject(this.work, lambdaEndDate);
    this.events = _.reject(this.events, lambdaEndDate);
    this.volunteer = _.reject(this.volunteer, lambdaEndDate);
    this.publications = _.reject(this.publications, obj => filter.startDate > obj.date || obj.date > filter.endDate);

  }

  createFilter() {
    let tags: string[] = [];
    const lambda = obj => tags = obj.tag ? tags.concat(obj.tag.split(',')) : [];
    this.accolades.map(lambda);
    this.events.map(lambda);
    this.publications.map(lambda);
    this.skills.map(lambda);
    this.volunteer.map(lambda);
    this.work.map(lambda);
    const startDate = new Date(Math.min(
      _.min(this.work.map(obj => obj.startDate.getTime())),
      _.min(this.events.map(obj => obj.startDate.getTime())),
      _.min(this.volunteer.map(obj => obj.startDate.getTime())),
      _.min(this.publications.map(obj => obj.date.getTime()))));
      const endDate = new Date(Math.max(
      _.max(this.work.map(obj => obj.endDate.getTime())),
      _.max(this.events.map(obj => obj.endDate.getTime())),
      _.max(this.volunteer.map(obj => obj.endDate.getTime())),
      _.max(this.publications.map(obj => obj.date.getTime()))));
    return <Filter>{
      tags: _.reject(_.uniq(tags), obj => obj === ''),
      startDate: startDate, endDate: endDate
    };
  }
}

