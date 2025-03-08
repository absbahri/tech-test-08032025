import { twMerge } from 'tailwind-merge'

type ClassValue = string | undefined | null | boolean

export function cn(...classes: ClassValue[]) {
  return twMerge(classes.filter(Boolean).join(' '))
}
