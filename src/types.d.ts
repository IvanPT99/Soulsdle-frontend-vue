export interface User {
  name: string
  email?: string
  image?: string
  password?: string
  premium?: boolean
  maxScore: number
}

export type Friend = Omit<User, 'password'>

export interface Boss {
  id: number
  name: string
  weapon: string[]
  race: string[]
  gender: string[]
  type: string[]
  weakness: string[]
  element: string[]
  movement: string
  game: string
  year: number
  image: string
}
