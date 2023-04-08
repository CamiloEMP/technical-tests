/* eslint-disable react/jsx-key */
import type { User } from '../models/user.model'

import { useMemo } from 'react'

import { Table } from '@/components/Table'

interface ListProps {
  users: User[]
  updateFavorite: (id: string) => void
}

export function ListUsers({ users, updateFavorite }: ListProps) {
  const body = useMemo(() => {
    return users.map(user => [
      <button type="button" onClick={() => updateFavorite(user.id)}>
        {user.favorite ? '💖' : '🖤'}
      </button>,
      user.name,
      user.category,
      <img alt={user.category} className="w-20" src={user.categoryImage} />,
      user.company,
      <img alt={user.company} className="w-20" src={user.companyImage} />,
      user.levelOfHappiness,
    ])
  }, [users, updateFavorite])

  return (
    <Table
      body={body}
      headers={[
        'Favoritos',
        'Nombre',
        'Category',
        'Category Image',
        'Company',
        'Company Image',
        'Level of Hapiness',
      ]}
    />
  )
}
