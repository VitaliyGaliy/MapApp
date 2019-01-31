export const getDataFromType = (dataType, searchList, suppliersList) => {
  let data;

  switch (dataType) {
    case 'suppliers':
      data = suppliersList;
      break;
    case 'search':
      data = searchList;
      break;
    case 'singleItem':
      data = searchList;
      break;
    default:
      break;
  }
  return data;
};
