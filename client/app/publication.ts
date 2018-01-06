export class Publication {
    name: String;
    publisher: String;
    date: Date;
    website: String;
    summary: String;
    tag: String;

    constructor(src: any) {
        this.name = src.name;
        this.publisher = src.publisher;
        this.date = src.date;
        this.website = src.website;
        this.summary = src.summary;
        this.tag = src.tag;
    }
}
