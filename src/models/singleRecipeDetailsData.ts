import Ingredients from '@/models/ingredients';

export default class SingleRecipeDetailsData {
    id: number;

    title: string;

    image: string;

    instructions: string;

    extendedIngredients: Ingredients[];

    constructor(el: {id: number; title: string; image: string; instructions: string; extendedIngredients: Ingredients[]}) {
      this.id = el.id;
      this.title = el.title;
      this.image = el.image;
      this.instructions = el.instructions;
      this.extendedIngredients = el.extendedIngredients;
    }
}
