/* tslint:disable */

declare var Object: any;
export interface CvInterface {
  "personal": any;
  "skills": Array<any>;
  "references": Array<any>;
  "work": Array<any>;
  "eduction": Array<any>;
  "volunteer": Array<any>;
  "accolades": Array<any>;
  "publications": Array<any>;
  "events": Array<any>;
  "languages": Array<any>;
  "id"?: any;
}

export class Cv implements CvInterface {
  "personal": any;
  "skills": Array<any>;
  "references": Array<any>;
  "work": Array<any>;
  "eduction": Array<any>;
  "volunteer": Array<any>;
  "accolades": Array<any>;
  "publications": Array<any>;
  "events": Array<any>;
  "languages": Array<any>;
  "id": any;
  constructor(data?: CvInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cv`.
   */
  public static getModelName() {
    return "Cv";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cv for dynamic purposes.
  **/
  public static factory(data: CvInterface): Cv{
    return new Cv(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Cv',
      plural: 'cvs',
      path: 'cvs',
      idName: 'id',
      properties: {
        "personal": {
          name: 'personal',
          type: 'any'
        },
        "skills": {
          name: 'skills',
          type: 'Array&lt;any&gt;'
        },
        "references": {
          name: 'references',
          type: 'Array&lt;any&gt;'
        },
        "work": {
          name: 'work',
          type: 'Array&lt;any&gt;'
        },
        "eduction": {
          name: 'eduction',
          type: 'Array&lt;any&gt;'
        },
        "volunteer": {
          name: 'volunteer',
          type: 'Array&lt;any&gt;'
        },
        "accolades": {
          name: 'accolades',
          type: 'Array&lt;any&gt;'
        },
        "publications": {
          name: 'publications',
          type: 'Array&lt;any&gt;'
        },
        "events": {
          name: 'events',
          type: 'Array&lt;any&gt;'
        },
        "languages": {
          name: 'languages',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
