function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max || min < 0){
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt();

function getRandomFloat(min,max,digits) {
  min = parseFloat(min);
  max = parseFloat(max);
  if (min > max || min < 0){
    return null;
  }
  return parseFloat((Math.random() * (max - min + 1) + min).toFixed(digits));
}

getRandomFloat();
