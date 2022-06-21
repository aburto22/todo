/* eslint-disable react/jsx-no-useless-fragment */
import { useUser } from '@auth0/nextjs-auth0';

interface AuthenticationProps {
  children: React.ReactNode;
}

const Authentication = ({ children }: AuthenticationProps) => {
  const { user, isLoading, error } = useUser();

  console.log(user);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error, try again!</p>;
  }

  if (!user) {
    return <p>Log-in to start creating lists!</p>;
  }

  return <>{children}</>;
};

export default Authentication;
