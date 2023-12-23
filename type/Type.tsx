export type Categories = {
  id?: number;
  name?: string;
  icon?: string;
  submenu?: Array<{
    name?: string;
    categoryname?: Array<{ id?: number; name?: string }>;
  }>;
}[];

export type MenuType = {
  id?: number;
  name?: string;
  icon?:any,
  submenu?: Array<{
    id: number;
    name: string;

  }>;
}[];
export type Types = {
  id?: number;
  name?: string;
}[];

export interface Producs{
  id?: number;
  name?: string;
  image?: any;
  categories?: string;
  oldPrice?: number;
  newPrice?: number;
}