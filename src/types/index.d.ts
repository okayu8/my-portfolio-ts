declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.css";

declare module "*/works.json" {
  interface WorksData {
    name: string;
    tecnology: string;
    description: string;
    imgPath: string;
  }

  const value: WorksData[];
  export = value;
}
