export default class SingleRecipe {
    id: number;

    title: string;

    constructor(el: { id: number; title: string}) {
      this.id = el.id;
      this.title = el.title;
    }
}
