/* eslint-disable react/jsx-key */
import type { User } from '../models/user.model'

import { useMemo } from 'react'

import { Table } from '@/components/Table'

import { useUsers } from '../context/UsersContext'

interface ListProps {
  users: User[]
}

export function ListUsers({ users }: ListProps) {
  const { handleLevelOfHappiness, updateFavorite, orderHappiness } = useUsers()

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
        <div className="flex items-center gap-1">
          Level of Hapiness
          <button type="button" onClick={handleLevelOfHappiness}>
            {orderHappiness === 'asc' ? 'up' : 'down'}
          </button>
        </div>,
      ]}
    />
  )
}
