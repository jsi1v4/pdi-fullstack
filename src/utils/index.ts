export function removeId(data: any) {
  const newData = { ...data };
  delete newData.id;
  return newData;
}
