export interface User {
  id: string
  name: string
  category: string
  categoryImage: string
  company: string
  companyImage: string
  levelOfHappiness: string
}

export interface UserMock {
  id: string
  name: string
  category: string
  'category-image': string
  company: string
  'company-image': string
  levelOfHappiness: string
}
