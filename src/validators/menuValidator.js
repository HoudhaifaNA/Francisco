import _ from "lodash";
// eslint-disable-next-line import/no-anonymous-default-export
export default (type, postItem, editItem, items, categories) => {
  const itemsNames = _.values(items).map((it) => it.name.toLowerCase());
  const categoriesNames = _.values(categories).map((it) =>
    it.name.toLowerCase()
  );

  if (window.location.pathname.startsWith("/edit/")) {
    if (type !== "Categories") {
      if (categoriesNames.indexOf(editItem.Category.toLowerCase()) === -1) {
        return "Catégorie introuvable";
      }
      if (
        Math.sign(editItem["Price L"]) === -1 ||
        Math.sign(editItem["Price XL"]) === -1 ||
        Math.sign(editItem["Price XXL"]) === -1
      ) {
        return "Les prix ne peuvent pas être négatifs";
      }
    }
  } else {
    if (itemsNames.indexOf(postItem.name.toLowerCase()) !== -1) {
      return `Ce nom existe déjà`;
    }
    if (type !== "Categories") {
      if (categoriesNames.indexOf(postItem.Category.toLowerCase()) === -1) {
        return "Catégorie introuvable";
      }
      if (
        Math.sign(postItem["Price L"]) === -1 ||
        Math.sign(postItem["Price XL"]) === -1 ||
        Math.sign(postItem["Price XXL"]) === -1
      ) {
        return "Les prix ne peuvent pas être négatifs";
      }
    }
  }

  return "success";
};
