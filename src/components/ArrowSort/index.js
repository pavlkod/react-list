export const ArrowSort = ({ field, sort, order }) => {
  if (sort === field) {
    return <small>{order}</small>;
  }
  return null;
};
