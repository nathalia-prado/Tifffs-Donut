export interface Glaze {
  id: number
  name: string
  color: string
  price: number
}

export interface Base {
  id: number
  name: string
  color: string
}

export interface Donut {
  id: number
  base: number
  glaze: number
  auth0_id: string
}

export interface DonutDetails {
  id: number
  auth0_id: string
  glazeId: number
  baseId: number
  glazeName: string
  baseName: string
  price: number
  glazeColor: string
  baseColor: string
}
