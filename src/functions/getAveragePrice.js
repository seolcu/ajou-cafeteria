export default function getAveragePrice(cafeteriaInfo) {
  let averagePrice = 0;

  if (cafeteriaInfo.type == "collection") {
    let sum = 0;
    let count = 0;
    cafeteriaInfo.shops.forEach((shop) => {
      shop.menu.forEach((menu) => {
        sum += menu.price;
        count++;
      });
    });
    averagePrice = Math.round(sum / count);
  } else if (cafeteriaInfo.type == "random") {
    averagePrice = cafeteriaInfo.price;
  } else if (cafeteriaInfo.type == "restaurant") {
    averagePrice =
      cafeteriaInfo.menu.reduce((sum, menu) => sum + menu.price, 0) /
      cafeteriaInfo.menu.length;
  } else if (cafeteriaInfo.type == "shop") {
    averagePrice =
      cafeteriaInfo.menu.reduce((sum, menu) => sum + menu.price, 0) /
      cafeteriaInfo.menu.length;
  }

  return averagePrice;
}
