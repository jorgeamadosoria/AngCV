export class User {
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    };
    photo: String;
    role: String;

    constructor(src: any) {
        console.log(src.google);
        this.google = src.google;
        this.photo = src.photo;
        this.role = src.role;
    }
}
