import cafeteriaInfoList from "./cafeteriaInfoList";

getCafeteriaInfoFromName = (cafeteriaName) => {
  const cafeteriaInfo = cafeteriaInfoList.find(
    (cafeteria) => cafeteria.name === cafeteriaName
  );
  return cafeteriaInfo;
};
