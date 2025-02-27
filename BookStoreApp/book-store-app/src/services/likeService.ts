export const getLikedProductIds = (): number[] => {
  const storedIds = JSON.parse(localStorage.getItem("likedProducts") || "[]");
  return storedIds;
};
