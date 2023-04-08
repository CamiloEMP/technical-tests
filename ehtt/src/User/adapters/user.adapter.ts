import { User } from "../models/user.model"

export const userAdapter = (person: any): User => {
  return {
    id: person.id,
    name: person.name,
    category: person.category,
    categoryImage: person["category-image"],
    company: person.company,
    companyImage: person["company-image"],
    levelOfHappiness: person.levelOfHappiness
  }
}

