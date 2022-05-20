export interface Dish{
  id:number;
  name:string;
  image:string;
  readyInMinutes:number;
  servings:number;
  sourceName:string;
  healthScore:number;

}
export interface Category{
  id:number;
  name:string;
  image:string;
}
//initial categories
export const categories:Category[]=[
  {
    name:'Home',
    id:1,
    image:'jhkhkjhk'
  }, {
    name:'Vegetarianos',
    id:2,
    image:'jhkhkjhk'
  },
  {
    name:'Platos Principales',
    id:3,
    image:'jhkhkjhk'
  },
  {
    name:'Tortas',
    id:4,
    image:'jhkhkjhk'
  },
  {
    name:'Comidas Rápidas',
    id:5,
    image:'jhkhkjhk'
  },
  {
    name:'Menú Ninos',
    id:6,
    image:'jhkhkjhk'
  },
  {
    name:'Sopas',
    id:7,
    image:'jhkhkjhk'
  }

]
