export const getTrimmed = (text, num) => {
  let textArr = text.split(" ");
  if (textArr.length > num) {
    textArr = textArr.slice(0, num + 1);
    textArr = textArr.join(" ");
  } else {
    textArr.join(" ");
  }
  return textArr;
};
export const randomDiscount = Math.floor(Math.random() * 100);
export const APISERVER = `https://fakestoreapi.com`;
