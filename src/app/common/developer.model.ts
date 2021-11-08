import { skill } from './skill.model';

export class developer {
  public lastName: string;
  public firstName: string;
  public age: number;
  public sexe: string;
  public bio: string;
  public skills: skill[];

  constructor(
    lastName: string,
    firstName: string,
    age: number,
    sexe: string,
    bio: string,
    skills: skill[]
  ) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.sexe = sexe;
    this.bio = bio;
    this.skills = skills;
  }
}
