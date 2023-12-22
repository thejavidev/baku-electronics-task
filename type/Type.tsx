export type Categories = {
  id?: number;
  name?: string;
  icon?: string;
  submenu?: Array<{
    name?: string;
    categoryname?: Array<{ id?: number; name?: string }>;
  }>;
}[];
