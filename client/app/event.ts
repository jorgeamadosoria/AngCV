export class Event {
    name: String;
    publisher: String;
    startDate: Date;
    endDate: Date;
    website: String;
    summary: String;
    tag: String;

    constructor(src: any) {
        this.name = src.name;
        this.publisher = src.publisher;
        this.startDate = src.startDate;
        this.endDate = src.endDate;
        this.website = src.website;
        this.summary = src.summary;
        this.tag = src.tag;
    }
}
