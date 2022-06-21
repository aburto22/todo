/* eslint-disable react/jsx-no-useless-fragment */
import { useUser } from '@auth0/nextjs-auth0';
import { useUser as useUserSwr } from '@hooks/swr';
import { createUserFetcher } from '@lib/fetchers';

interface AuthenticationProps {
  children: React.ReactNode;
}

const Authentication = ({ children }: AuthenticationProps) => {
  const { user, isLoading, error } = useUser();
  const { user: userSwr, mutate } = useUserSwr(user?.email || '');

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error, try again!</p>;
  }

  if (!user) {
    return <p>Log-in to start creating lists!</p>;
  }

  if (userSwr === null) {
    mutate(createUserFetcher(user.email || '', user.name || ''));
  }

  return <>{children}</>;
};

export default Authentication;
