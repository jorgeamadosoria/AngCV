export class Education {
    institution: String;
    career: String;
    startDate: Date;
    endDate: Date;
    logo: String;
    website: String;
    summary: String;

    constructor(src: any) {
        this.institution = src.institution;
        this.career = src.career;
        this.startDate = src.startDate;
        this.endDate = src.endDate;
        this.logo = src.logo;
        this.website = src.website;
        this.summary = src.summary;
    }
}
