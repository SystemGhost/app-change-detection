import { Homework } from "./homework";

export class User {
  id: number;
  name: string;
  surname: string;
  homework: Array<Homework>;
}
