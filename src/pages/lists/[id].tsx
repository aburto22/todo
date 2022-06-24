import { useEffect } from 'react';
import Pusher from 'pusher-js';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CreateTodoForm from '@components/CreateTodoForm';
import Spinner from '@components/Spinner';
import { useList } from '@hooks/swr';
import TodoList from '@components/TodoList';
import { SnowSvg, WarningSvg } from '@components/Svg';
import { toggleList } from '@lib/lists';
import { updateListFetcher } from '@lib/listFetchers';
import { triggerPusher } from '@lib/pusher';
import * as styles from '@styles/home';
import { useUser } from '@auth0/nextjs-auth0';
import { isUserOwner, userNotAllowedToEdit, formatCost } from '@lib/misc';
import TooltipIcon from '@components/TooltipIcon';

const List: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const listId = id?.toString() || '';
  const { list, error, mutate } = useList(listId);
  const { user } = useUser();

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY || '';

    const pusher = new Pusher(pusherKey, {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('todo-mother');

    channel.bind('update', ({ listIdPusher }: { listIdPusher: string }) => {
      if (listIdPusher === listId) {
        mutate();
      }
    });

    return () => {
      pusher.unsubscribe('todo-mother');
    };
  }, [listId, mutate]);

  const handleFreezeClick = () => {
    if (!list) {
      return;
    }

    const updatedList = toggleList(list);

    const options = {
      optimisticData: updatedList,
      rollbackOnError: true,
    };

    mutate(async () => {
      const savedList = await updateListFetcher(updatedList);
      await triggerPusher(list.id);
      return savedList;
    }, options);
  };

  const listCost = list?.todos.reduce((sum, todo) => sum + todo.cost, 0) || 0;

  return (
    <>
      <Head>
        <title>My list</title>
        <meta name="description" content="A powerful todo list for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <styles.Main>
        {list ? (
          <>
            <styles.Title>
              {`List: ${list.name}`}
              {userNotAllowedToEdit(list, user) && (
                <TooltipIcon
                  message="This list is freezed, only the owner can edit its content"
                  position="bottom"
                >
                  <styles.WarningIcon>
                    <WarningSvg />
                  </styles.WarningIcon>
                </TooltipIcon>
              )}
            </styles.Title>
            <styles.InfoContainer>
              {listCost > 0 && <styles.Info>{`Total cost: ${formatCost(listCost)}`}</styles.Info>}
              <styles.Info>{`Status: ${list.isFreezed ? 'freezed' : 'un-freezed'}`}</styles.Info>
              {isUserOwner(list, user) && (
                <styles.FreezeButton
                  size="large"
                  active={list.isFreezed}
                  onClick={handleFreezeClick}
                  title="toggle freezed"
                >
                  <SnowSvg />
                </styles.FreezeButton>
              )}
            </styles.InfoContainer>
            <styles.Section>
              <CreateTodoForm listId={listId} />
              <TodoList listId={listId} />
            </styles.Section>
          </>
        ) : <Spinner size="normal" />}
      </styles.Main>
    </>
  );
};

export default List;
