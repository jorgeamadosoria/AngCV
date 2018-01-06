export class Social {
    network: String;
    url: String;

    constructor(src: any) {
        this.network = src.network;
        this.url = src.url;
    }
}
