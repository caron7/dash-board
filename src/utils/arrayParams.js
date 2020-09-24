export const getObjectKeys = (object) => {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }

  return keys;
}

export const getObjectValues = (object) => {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }

  return values;
}
