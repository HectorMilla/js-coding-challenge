// create 3 parks and 4 streets with name & build year

class Parks {
  constructor(name, year, trees, area) {
    this.name = name;
    this.year = year;
    this.trees = trees;
    this.area = area;
  }
  calcTreeDensity() {
    return this.trees / this.area;
  }
  calcAge(year) {
    return year - this.year;
  }
}

class Streets {
  constructor(name, year, length) {
    this.name = name;
    this.year = year;
    this.length = length;
  }
}

let park1 = new Parks("City Park", 1990, 10000, 500);
let park2 = new Parks("US National Park", 2000, 19000, 800);
let park3 = new Parks("Purple Stone Park", 2003, 15000, 600);

let street1 = new Streets("Ryze avenue", 1920, 150);
let street2 = new Streets("KDA street", 1940, 1000);
let street3 = new Streets("Yone trail", 1990, 300);

let parks = [park1, park2, park3];
let streets = [street1, street2, street3];
// 1. report tree density (trees / park area)
let treeDensity = () => {
  for (const park of parks) {
    let treeDense = park.calcTreeDensity();
    console.log(`${park.name} has a tree density of ${treeDense}`);
  }
};
// 2. average age of park (all age / number of parks)

let parkAvrgAge = () => {
  let x = 0;
  for (const park of parks) {
    x += park.calcAge(2020);
  }
  return `The average age of each park is ${Math.round(
    x / parks.length
  )} years`;
};

// 3. name of park that has  > 1000 trees

let forestPark = () => {
  for (const park of parks) {
    if (park.trees > 1000) {
      console.log(`${park.name} has more than 1000 trees`);
    }
  }
};
// 4. total average length of towns streets
let avrgStrtLength = () => {
  let total = 0;
  let avrg = 0;
  for (const street of streets) {
    total = total + street.length;
  }
  avrg = total / streets.length;

  console.log(`Our ${streets.length} streets have a total length of 
  ${total} miles and an average length of ${avrg} miles`);
};
// 5. classify the size of each street (tiny/small/normal/big/huge/ unknown)
let streetSize = () => {
  for (const street of streets) {
    let size;
    if (street.length < 300) {
      size = "small";
    } else if (street.length >= 300 && street.length < 1000) {
      size = "medium";
    } else if (street.length > 1000) {
      size = "large";
    }
    console.log(
      `${street.name} is a ${size} street that was built in the year ${street.year}`
    );
  }
};
// 6. print all data to console

let init = () => {
  console.log("--------- PARKS REPORT -----------");
  treeDensity();
  parkAvrgAge();
  forestPark();
  console.log("---------  STREETS REPORT -----------");
  avrgStrtLength();
  streetSize();
};
init();
