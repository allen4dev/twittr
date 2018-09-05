export function normalizeResponse(response) {
  const { data } = response;

  if (!Array.isArray(response.data)) {
    return {
      [data.id]: { ...data },
    };
  }

  return data.reduce((initial, value) => {
    return {
      ...initial,
      [value.id]: { ...value },
    };
  }, {});
}
