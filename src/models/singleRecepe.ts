export default class SingleRecepe {
    id: number;

    title: string;

    image: string;

    sourceUrl: string;

    imagePath = 'https://spoonacular.com/recipeImages/';

    imageSize = '636x393';

    constructor(el: { id: number; title: string; sourceUrl: string }) {
      this.id = el.id;
      this.title = el.title;
      this.image = `${this.imagePath}${this.id}-${this.imageSize}`;
      this.sourceUrl = el.sourceUrl;
    }
}
