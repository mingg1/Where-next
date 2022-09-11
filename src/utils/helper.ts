import { Country } from '../types'

export const sortByNameDsc = (list: Country[]) =>
  list.sort((a, b) => a.name.common.localeCompare(b.name.common))

export const sortByNameAsc = (list: Country[]) =>
  list.sort((a, b) => b.name.common.localeCompare(a.name.common))

export const sortByPopulationAsc = (list: Country[]) =>
  list.sort((a, b) => b.population - a.population)

export const sortByPopulationDsc = (list: Country[]) =>
  list.sort((a, b) => a.population - b.population)
