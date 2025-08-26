export const validateId = (id: string) => {
  if (id.trim() === '') return false;
  return true;
};
