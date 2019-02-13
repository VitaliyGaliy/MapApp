export const getRegionForCoordinates = (points) => {
  // points should be an array of { latitude: X, longitude: Y }
  let minX,
    maxX,
    minY,
    maxY;

  ((point) => {
    minX = point.latitude;
    maxX = point.latitude;
    minY = point.longitude;
    maxY = point.longitude;
  })(points[0]);

  // calculate rect
  points.map((point) => {
    minX = Math.min(minX, point.latitude);
    maxX = Math.max(maxX, point.latitude);
    minY = Math.min(minY, point.longitude);
    maxY = Math.max(maxY, point.longitude);
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = (maxX - minX);
  const deltaY = (maxY - minY);

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY,
  };
};

export const getDistance = (lat1, lon1, lat2, lon2, unit) => {
  const radlat1 = Math.PI * lat1 / 180;
  const radlat2 = Math.PI * lat2 / 180;
  const theta = lon1 - lon2;
  const radtheta = Math.PI * theta / 180;
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  // if (unit == 'K') { dist *= 1.609344; }
  // if (unit == 'M') { dist *= 0.8684; }
  dist *= 1.609344;
  return dist.toFixed(1);
};
