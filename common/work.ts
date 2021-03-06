export class Work {
    company: String;
    position: String;
    website: String;
    startDate: Date;
    endDate: Date;
    tag: String;
    summary: String;
    logo: String;

    constructor(src: any) {
        this.company = src.company;
        this.position = src.position;
        this.website = src.website;
        this.startDate = new Date(src.startDate);
        this.endDate = new Date(src.endDate);
        this.tag = src.tag;
        this.summary = src.summary;
        this.logo = src.logo;
    }
}
