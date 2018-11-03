document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info abaout Parcel.
  <h1>Que wena!!!</h1>
</div>
`;

const myMap = new Map([["key", "value"], ["other key", "other value"]]);

console.log("hello");
console.log(myMap);

const amap = new Map();
amap.set("Hola", 1);
amap.set("ASD", 10);
console.log(amap.keys.next().value);
