import type { ITodoList, ITodo } from '@localTypes/client';
import type { UserProfile } from '@auth0/nextjs-auth0';

export const userNotAllowedToEdit = (
  list: ITodoList | null | undefined,
  user: UserProfile | undefined,
): boolean => Boolean(list && user && list.isFreezed && user.sub !== list.ownerId);

export const isUserOwner = (
  list: ITodoList | null | undefined,
  user: UserProfile | undefined,
): boolean => Boolean(list && user && user.sub === list.ownerId);

export const sortList = <T extends ITodo | ITodoList>(array: T[]) => array
  .sort((a, b) => (new Date(b.updatedAt)).getTime() - (new Date(a.updatedAt)).getTime());

export const formatCost = (cost: number): string => `$${cost.toString()
  .split('')
  .reverse()
  .join('')
  .replace(/\d{3}/g, '$&,')
  .replace(/,$/, '')
  .split('')
  .reverse()
  .join('')}`;
