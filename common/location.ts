export class Location {
    address: String;
    city: String;
    region: String;
    country: String;

    constructor(src: any) {
        if (src != null) {
            this.address = src.address;
            this.city = src.city;
            this.region = src.region;
            this.country = src.country;
        }
    }
}
