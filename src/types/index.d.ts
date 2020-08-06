declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.css";

declare module "data/works.json" {
  interface WorksData {
    name: string;
    tecnology: string;
    description: string;
    imgPath: string;
  }

  const data: WorksData[];
  export = data;
}
