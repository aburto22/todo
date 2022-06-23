import type { ITodoList } from '@localTypes/client';
import type { UserProfile } from '@auth0/nextjs-auth0';

export const userNotAllowedToEdit = (
  list: ITodoList | null | undefined,
  user: UserProfile | undefined,
): boolean => Boolean(list && user && list.isFreezed && user.sub !== list.ownerId);
