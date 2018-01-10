export class Skill {
    name: String;
    level: String;
    summary: String;
    tag: String;

    constructor(src: any) {
        this.name = src.name;
        this.level = src.level;
        this.summary = src.summary;
        this.tag = src.tag;
    }
}

export const skillLevels: String[] = [
    'Beginner', 'Intermediate', 'Advanced', 'Professional'
];
