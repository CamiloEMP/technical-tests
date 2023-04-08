import { Table } from "@/components/Table"
import { useUsers } from "../hooks/useUsers"
import { User } from "../models/user.model"

interface Props {
  users: User[]
}

export function ListUsers ({ users }: Props) {
  const body = users.map(user => [
    user.name,
    user.category,
    <img src={user.categoryImage} alt={user.category} className="w-20" />,
    user.company,
    <img src={user.companyImage} alt={user.company} className="w-20" />,
    user.levelOfHappiness
  ])

  return (
    <Table headers={["Nombre", "Category", "Category Image", "Company", "Company Image", "Level of Hapiness"]} body={body} />
  )
}
