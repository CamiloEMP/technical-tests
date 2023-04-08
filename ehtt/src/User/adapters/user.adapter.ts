import type { User, UserMock } from '../models/user.model'

export const userAdapter = (user: UserMock): User => {
  return {
    id: user.id,
    name: user.name,
    category: user.category,
    categoryImage: user['category-image'],
    company: user.company,
    companyImage: user['company-image'],
    levelOfHappiness: user.levelOfHappiness,
  }
}
