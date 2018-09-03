export function normalizeResponse(response) {
  const item = response.data;

  return {
    [item.id]: { ...item },
  };
}
