import _ from "lodash";
// eslint-disable-next-line import/no-anonymous-default-export
export default (type, postItem, editItem, items, categories) => {
  const itemsNames = _.values(items).map((it) => it.name);
  const categoriesNames = _.values(categories).map((it) => it.name);

  if (window.location.pathname.startsWith("/edit/")) {
    if (type !== "Categories") {
      if (categoriesNames.indexOf(editItem.Category) === -1) {
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
    if (itemsNames.indexOf(postItem.name) !== -1) {
      return `Ce nom existe déjà`;
    }
    if (type !== "Categories") {
      if (categoriesNames.indexOf(postItem.Category) === -1) {
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
