import { useEffect, useState } from "react";
import { User } from "../models/user.model";
import { getUsers } from "../services/get-users";

export function useUsers () {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers().then(setUsers).catch(console.error)
  }, [])

  return {users}
}
