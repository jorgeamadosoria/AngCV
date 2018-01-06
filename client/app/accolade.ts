export class Accolade {
    name: String;
    from: String;
    date: Date;
    link: String;
    summary: String;
    tag: String;

    constructor(src: any) {
        this.name = src.name;
        this.from = src.from;
        this.date = src.date;
        this.link = src.link;
        this.summary = src.summary;
        this.tag = src.tag;
    }
}

