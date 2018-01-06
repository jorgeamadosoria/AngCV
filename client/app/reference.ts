export class Reference {
    name: String;
    position: String;
    mail: String;
    phone: String;

    constructor(src: any) {
        this.name = src.name;
        this.position = src.position;
        this.mail = src.mail;
        this.phone = src.phone;
    }
}
