import { WithID } from '@/types';

export function withoutID() {
  return (data: any) => {
    const newData = { ...data };
    delete newData.id;
    return newData;
  };
}

export function requireID() {
  return (params: WithID) => {
    if (!Number(params.id)) {
      throw new Error('param [id] is required');
    }
    return params.id;
  };
}
