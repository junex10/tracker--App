export const SAVE_DATA = 'SAVE_DATA';
export const RETRIEVE_DATA = 'RETRIEVE_DATA';

export const saveData = (data) => ({
  type: SAVE_DATA,
  payload: data,
});

export const retrieveData = () => ({
  type: RETRIEVE_DATA,
});