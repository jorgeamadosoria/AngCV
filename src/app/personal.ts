import { Social } from './social';
import { Location } from './location';

export class Personal {
    name: String;
    label: String;
    picture: String;
    email: String;
    phone: String;
    summary: String;
    location: Location;
    social: Social[];
}
