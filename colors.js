const colors = ["yellow", "blue", "red", "orange"];
let i = 0;

while(i < colors.length){
    console.log(colors[i]);
    i++;
};

for(let j = 0; j < colors.length; j++) {
    console.log(colors[j]);
};

colors.forEach(colors => console.log(colors));

//1. Mijn while loop neemt 6 regels in beslag.
//   Mijn for loop  neemt 4 regels in beslag.
//2. Mijn forEach loop neemt 1 regel in beslag.
//3. De forEach method is het makkelijkste leesbaar.


const object = { a: 1, b: 2, c: 3, e: 4, f: 5 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//4. 