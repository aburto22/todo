/* eslint-disable react/jsx-no-useless-fragment */
import { useUser } from '@auth0/nextjs-auth0';
// import { useUser as useUserSwr } from '@hooks/swr';
// import { createUserFetcher } from '@lib/fetchers';
import MessageScreen from '@components/MessageScreen';

interface AuthenticationProps {
  children: React.ReactNode;
}

const Authentication = ({ children }: AuthenticationProps) => {
  const { user, isLoading, error } = useUser();
  // const { user: userSwr, mutate } = useUserSwr(user?.email || '');

  // console.log(user);

  if (isLoading) {
    return <MessageScreen message="loading..." />;
  }

  if (error) {
    return <MessageScreen message="There was an error, try again!" />;
  }

  if (!user) {
    return <MessageScreen message="Log-in to start using the app!" />;
  }

  // if (userSwr === null) {
  //   mutate(createUserFetcher(user.email || '', user.name || ''));
  // }

  return <>{children}</>;
};

export default Authentication;
