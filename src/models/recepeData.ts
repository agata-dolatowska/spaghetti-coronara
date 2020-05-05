export default class RecepeData {
    results: {
        id: number;
        title: string;
        sourceUrl: string;
    }[];

    constructor(recipesJSON: JSON) {
      this.results = JSON.parse(JSON.stringify(recipesJSON));
    }
}
