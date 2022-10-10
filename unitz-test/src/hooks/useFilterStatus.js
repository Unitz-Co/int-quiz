export function useFilterStatus(advisor, status) {
  return advisor.filter((item) => item.status === status);
}
