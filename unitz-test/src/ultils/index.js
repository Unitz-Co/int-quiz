export function removeAccents(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}
export const filterByStatus = (advisor = [], status) => {
  return advisor.filter((item) => item.status === status);
};
