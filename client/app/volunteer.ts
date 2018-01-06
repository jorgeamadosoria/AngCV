export class Volunteer {
    logo: String;
    organization: String;
    position: String;
    website: String;
    startDate: Date;
    endDate: Date;
    tag: String;
    summary: String;

    constructor(src: any) {
        this.logo = src.logo;
        this.organization = src.organization;
        this.position = src.position;
        this.website = src.website;
        this.startDate = src.startDate;
        this.endDate = src.endDate;
        this.tag = src.tag;
        this.summary = src.summary;
    }
}
