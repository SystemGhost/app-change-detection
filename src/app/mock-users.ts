import { User } from "./user";

export const USERS: User[] = [
  {
    id: 1,
    name: "Jackie",
    surname: "Ghost",
    homework: [
      {
        id: 1,
        title: "Math",
        description: "Sum two numbers 10 and 5",
        status: true
      },
      {
        id: 2,
        title: "Eng",
        description: "Translate word ro Rus: Cat",
        status: true
      },
      {
        id: 3,
        title: "Informatics",
        description: "Create calculator on C#",
        status: false
      }
    ]
  },
  {
    id: 2,
    name: "Ivan",
    surname: "Book",
    homework: [
      {
        id: 2,
        title: "Eng",
        description: "Translate word ro Rus: Cat",
        status: false
      }
    ]
  },
  {
    id: 3,
    name: "Nikole",
    surname: "Black",
    homework: [
      {
        id: 3,
        title: "Informatics",
        description: "Create calculator on C#",
        status: false
      }
    ]
  }
];
