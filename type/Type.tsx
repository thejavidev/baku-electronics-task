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
    id?: number;
    name?: string;

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
export interface Cardtype{
  id?:number,
  src?:string,
  title?:string,
  text?:string,
  btnText?:string
}
export interface darkModeType{
  icon?:any,
  text:string
}