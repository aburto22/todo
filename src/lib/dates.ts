import { format } from 'date-fns';

export const formatDate = (timestamp: number): string => format(new Date(timestamp), 'd MMM uuuu, H:mm');
