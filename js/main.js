const isTrue = true;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max || min < 0){
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min,max,digits) {
  min = parseFloat(min);
  max = parseFloat(max);
  if (min > max || min < 0){
    return null;
  }
  return parseFloat((Math.random() * (max - min + 1) + min).toFixed(digits));
}

getRandomFloat();


const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const time = ['12:00', '13:00', '14:00'];


function getRandomArr(arr) {
  const elements = [];
  const element = getRandomInt(1, arr.length-1);
  for (let i = 0; i <= element; i++) {
    elements.push(arr[i]);
  }
  return elements;
}

function getLocation() {
  return {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5)
  };
}

function getRandomNum(arr) {
  const element = arr[getRandomInt(0, arr.length-1)];
  return element;
}

function getRandomFeatures(arr) {
  const featuresResult = [];
  const randomElements = getRandomInt(1, arr.length);

  if(randomElements === features.length) {
    return features;
  }
  while(isTrue) {
    const feature = arr[getRandomInt(0, arr.length - 1)];
    if(featuresResult.includes(feature)) {
      continue;
    }
    featuresResult.push(feature);
    if(featuresResult.length >= randomElements) {
      break;
    }
  }
  return featuresResult;
}

function getNumStr(a) {
  const prefix = '0';
  const num = a.toString();
  if(a < 10) {
    return prefix + num;
  }
  return num;
}

function generatedAd(count = 10) {
  const places = [];
  const locData = getLocation();
  for(let i = 1; i <= count; i++) {
    places.push({
      author: {
        avatar: `img/avatars/user${getNumStr(i)}.png`
      },
      offer: {
        title: 'Название',
        address: `${locData.lat}, ${locData.lng}`,
        price: getRandomInt(5000, 10000),
        type: getRandomNum(types),
        rooms: getRandomInt(1,3),
        guests: getRandomInt(1,6),
        checkin: getRandomNum(time),
        checkout: getRandomNum(time),
        features: getRandomFeatures(features),
        description: 'Описание',
        photos: getRandomArr(photos),
      },
      location: locData
    });
  }
  return places;
}

generatedAd();
