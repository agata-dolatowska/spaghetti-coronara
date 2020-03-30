export default class RecepeData {
    results: {
        id: number;
        title: string;
        image: string;
    }[];

    constructor(recipesJSON: JSON) {
      this.results = JSON.parse(JSON.stringify(recipesJSON));
    }
}
