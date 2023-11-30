export default function getCrowded(cafeteriaInfo) {
  if (cafeteriaInfo.available) {
    const crowdedPercentage =
      cafeteriaInfo.occupiedSeats / cafeteriaInfo.totalSeats;
    if (crowdedPercentage >= 2 / 3) {
      return 3;
    } else if (crowdedPercentage >= 1 / 3) {
      return 2;
    } else if (crowdedPercentage >= 0) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return 0;
  }
}
