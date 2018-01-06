import { Social } from './social';
import { Location } from './location';
import * as _ from 'underscore';

export class Personal {
    name: String;
    label: String;
    picture: String;
    email: String;
    phone: String;
    summary: String;
    location: Location;
    social: Social[];

    constructor(src: any) {
    this.name = src.name;
    this.label = src.label;
    this.picture = src.picture;
    this.email = src.email;
    this.phone = src.phone;
    this.summary = src.summary;
    this.location = new Location(src.location);
    this.social = _.map(src.social, s => new Social(s));
    }
}
