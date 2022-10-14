export interface INavbarLink {
  id: string,
  name: string
}

export interface INavbarLinks {
  id: string,
  name: string,
  subcategories: INavbarLink[]
}

export interface ICategoryItem {
  id: number,
  name: string,
}

export interface ISubcategoryItem {
  id: number,
  name: string,
  category: ICategoryItem
}

export interface IFoodItem {
  id: number,
  name: string,
  desc: string,
  weight: number,
  price: number,
  image: string,
  subcategory: ISubcategoryItem,
  count? : number
}