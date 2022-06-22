import type { ITodoList } from '@localTypes/client';
import type { UserProfile } from '@auth0/nextjs-auth0';

export const canUserEdit = (
  list: ITodoList | null | undefined,
  user: UserProfile | undefined,
): boolean => Boolean(list && list.isFreezed && user && user.sub === list.ownerId);
