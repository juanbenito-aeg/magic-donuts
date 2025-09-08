const data = {
  items: {
    item: [
      {
        id: "0001",
        type: "donut",
        name: "Hell Cake",
        ppu: 0.55,
        batters: {
          batter: [
            { id: "1001", type: "Regular" },
            { id: "1002", type: "Chocolate" },
            { id: "1003", type: "Blueberry" },
            { id: "1004", type: "Devil's Food" },
          ],
        },
        topping: [
          { id: "5001", type: "None" },
          { id: "5002", type: "Glazed" },
          { id: "5005", type: "Sugar" },
          { id: "5007", type: "Powdered Sugar" },
          { id: "5006", type: "Chocolate with Sprinkles" },
          { id: "5003", type: "Chocolate" },
          { id: "5004", type: "Maple" },
        ],
        nutrition_facts: {
          nutrition: {
            calories: 345,
            fat: {
              daily_value: "8%",
              fat_type: {
                saturated: "5.5g",
                trans: "1.3g",
              },
            },
            cholesterol: {
              daily_value: "12%",
              amount: "12mg",
            },
            sodium: {
              daily_value: "15%",
              amount: "280mg",
            },
            carbohydrate: {
              daily_value: "6%",
              carbs_detail: {
                amount: "12g",
                type: {
                  fibre: "1g",
                  sugars: "25g",
                },
              },
            },
            protein: "11g",
            vitamins: [
              { type: "Vitamin A", percent: "0%" },
              { type: "Vitamin C", percent: "0%" },
              { type: "Calcium", percent: "2%" },
              { type: "Iron", percent: "8%" },
            ],
          },
        },
      },
      {
        id: "0002",
        type: "donut",
        name: "Funny Wizard",
        ppu: 0.54,
        batters: {
          batter: [
            { id: "1001", type: "Regular" },
            { id: "1002", type: "Chocolate" },
            { id: "1003", type: "Blueberry" },
            { id: "1009", type: "Strawberry" },
          ],
        },
        topping: [
          { id: "5001", type: "None" },
          { id: "5002", type: "Glazed" },
          { id: "5012", type: "Lemon" },
          { id: "5005", type: "Sugar" },
          { id: "5007", type: "Powdered Sugar" },
          { id: "5006", type: "Chocolate with Sprinkles" },
          { id: "5003", type: "Chocolate" },
          { id: "5008", type: "White Chocolate" },
        ],
        nutrition_facts: {
          nutrition: {
            calories: 445,
            fat: {
              daily_value: "22%",
              fat_type: {
                saturated: "7.5g",
                trans: "1.8g",
              },
            },
            cholesterol: {
              daily_value: "19%",
              amount: "22mg",
            },
            sodium: {
              daily_value: "15%",
              amount: "280mg",
            },
            carbohydrate: {
              daily_value: "12%",
              carbs_detail: {
                amount: "32g",
                type: {
                  fibre: "10g",
                  sugars: "45g",
                },
              },
            },
            protein: "13g",
            vitamins: [
              { type: "Vitamin A", percent: "0%" },
              { type: "Vitamin C", percent: "0%" },
              { type: "Calcium", percent: "2%" },
              { type: "Iron", percent: "6%" },
            ],
          },
        },
      },
      {
        id: "0003",
        type: "donut",
        name: "Magic Fusion",
        ppu: 0.67,
        batters: {
          batter: [
            { id: "1001", type: "Regular" },
            { id: "1002", type: "Chocolate" },
            { id: "1003", type: "Blueberry" },
            { id: "1004", type: "Devil's Food" },
            { id: "1005", type: "Mint" },
            { id: "1006", type: "Gluten-free" },
            { id: "1009", type: "Strawberry" },
          ],
        },
        topping: [
          { id: "5001", type: "None" },
          { id: "5002", type: "Glazed" },
          { id: "5005", type: "Sugar" },
          { id: "5007", type: "Powdered Sugar" },
          { id: "5006", type: "Chocolate with Sprinkles" },
          { id: "5003", type: "Chocolate" },
          { id: "5004", type: "Maple" },
          { id: "5008", type: "White Chocolate" },
        ],
        nutrition_facts: {
          nutrition: {
            calories: 395,
            fat: {
              daily_value: "10%",
              fat_type: {
                saturated: "9.5g",
                trans: "1.8g",
              },
            },
            cholesterol: {
              daily_value: "22%",
              amount: "22mg",
            },
            sodium: {
              daily_value: "15%",
              amount: "280mg",
            },
            carbohydrate: {
              daily_value: "46%",
              carbs_detail: {
                amount: "32g",
                type: {
                  fibre: "1g",
                  sugars: "55g",
                },
              },
            },
            protein: "11g",
            vitamins: [
              { type: "Vitamin A", percent: "0%" },
              { type: "Vitamin C", percent: "0%" },
              { type: "Calcium", percent: "2%" },
              { type: "Iron", percent: "8%" },
            ],
          },
        },
      },
      {
        id: "0004",
        type: "donut",
        name: "Black Mockaroo",
        ppu: 0.58,
        batters: {
          batter: [
            { id: "1001", type: "Regular" },
            { id: "1003", type: "Blueberry" },
            { id: "1004", type: "Devil's Food" },
            { id: "1007", type: "Peanut" },
            { id: "1006", type: "Gluten-free" },
          ],
        },
        topping: [
          { id: "5001", type: "None" },
          { id: "5002", type: "Glazed" },
          { id: "5005", type: "Sugar" },
          { id: "5007", type: "Powdered Sugar" },
          { id: "5006", type: "Chocolate with Sprinkles" },
          { id: "5009", type: "Extra crunchy" },
          { id: "5008", type: "White Chocolate" },
        ],
        nutrition_facts: {
          nutrition: {
            calories: 485,
            fat: {
              daily_value: "14%",
              fat_type: {
                saturated: "7.5g",
                trans: "3.3g",
              },
            },
            cholesterol: {
              daily_value: "12%",
              amount: "19mg",
            },
            sodium: {
              daily_value: "25%",
              amount: "299mg",
            },
            carbohydrate: {
              daily_value: "9%",
              carbs_detail: {
                amount: "16g",
                type: {
                  fibre: "13g",
                  sugars: "28g",
                },
              },
            },
            protein: "11g",
            vitamins: [
              { type: "Vitamin A", percent: "5%" },
              { type: "Vitamin C", percent: "2%" },
              { type: "Calcium", percent: "2%" },
              { type: "Iron", percent: "8%" },
            ],
          },
        },
      },
      {
        id: "0005",
        type: "donut",
        name: "Relaxing Alchemy",
        ppu: 0.78,
        batters: {
          batter: [{ id: "1006", type: "Gluten-free" }],
        },
        topping: [
          { id: "5001", type: "None" },
          { id: "5022", type: "Orange" },
          { id: "5025", type: "Melon" },
          { id: "5027", type: "Banana" },
          { id: "5028", type: "Watermelon" },
        ],
        nutrition_facts: {
          nutrition: {
            calories: 625,
            fat: {
              daily_value: "38%",
              fat_type: {
                saturated: "15.5g",
                trans: "12.3g",
              },
            },
            cholesterol: {
              daily_value: "78%",
              amount: "125mg",
            },
            sodium: {
              daily_value: "35%",
              amount: "580mg",
            },
            carbohydrate: {
              daily_value: "56%",
              carbs_detail: {
                amount: "47g",
                type: {
                  fibre: "1g",
                  sugars: "64g",
                },
              },
            },
            protein: "31g",
            vitamins: [
              { type: "Vitamin A", percent: "0.3%" },
              { type: "Vitamin C", percent: "0.6%" },
              { type: "Calcium", percent: "2%" },
              { type: "Iron", percent: "18%" },
            ],
          },
        },
      },
    ],
  },
};

const donuts = data.items.item;

//1.- Nuestro grupo se encuentra totalmente debilitado. Necesitamos tomar azúcares, hierro, proteínas y poca fibra. Para ello debemos preparar un conjuro que nos muestre:

//donut con más azúcar (+ 50 exp)

//donut con más hierro (+ 50 exp)

//donut con más proteína (+ 50 exp)

//donut con menos fibra (+ 50 exp)

//donut con más calorías (+ 50 exp)

let sweetestDonut = donuts[0];

let donutWithMostIron = donuts[0];

let donutWithMostProtein = donuts[0];

let donutsWithLeastFibre = [];
const lowestFibreValue = getLowestFibreValue();

function getLowestFibreValue() {
  let lowestFibreValue =
    +donuts[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.split(
      "g"
    )[0];

  for (let i = 1; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutFibre =
      +currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.split(
        "g"
      )[0];

    if (currentDonutFibre < lowestFibreValue) {
      lowestFibreValue = currentDonutFibre;
    }
  }

  return lowestFibreValue;
}

let donutWithMostCalories = donuts[0];

for (let i = 0; i < donuts.length; i++) {
  const currentDonut = donuts[i];

  if (i > 0) {
    updateSweetestDonut(currentDonut);

    updateDonutWithMostIron(currentDonut);

    updateDonutWithMostProtein(currentDonut);

    updateDonutWithMostCalories(currentDonut);
  }

  updateDonutsWithLeastFibre(currentDonut);
}

function updateSweetestDonut(currentDonut) {
  const currentDonutSugars =
    +currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
      "g"
    )[0];

  const sweetestDonutYetSugars =
    +sweetestDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
      "g"
    )[0];

  if (currentDonutSugars > sweetestDonutYetSugars) {
    sweetestDonut = currentDonut;
  }
}

function updateDonutWithMostIron(currentDonut) {
  const currentDonutIron =
    +currentDonut.nutrition_facts.nutrition.vitamins[3].percent.split("%")[0];

  const donutWithMostIronYetIron =
    +donutWithMostIron.nutrition_facts.nutrition.vitamins[3].percent.split(
      "%"
    )[0];

  if (currentDonutIron > donutWithMostIronYetIron) {
    donutWithMostIron = currentDonut;
  }
}

function updateDonutWithMostProtein(currentDonut) {
  const currentDonutProtein =
    +currentDonut.nutrition_facts.nutrition.protein.split("g")[0];

  const donutWithMostProteinYetProtein =
    +donutWithMostProtein.nutrition_facts.nutrition.protein.split("g")[0];

  if (currentDonutProtein > donutWithMostProteinYetProtein) {
    donutWithMostProtein = currentDonut;
  }
}

function updateDonutsWithLeastFibre(currentDonut) {
  const currentDonutFibre =
    +currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.split(
      "g"
    )[0];

  if (currentDonutFibre === lowestFibreValue) {
    donutsWithLeastFibre.push(`"${currentDonut.name}"`);
  }
}

function updateDonutWithMostCalories(currentDonut) {
  const currentDonutCalories = currentDonut.nutrition_facts.nutrition.calories;

  const donutWithMostCaloriesYetCalories =
    donutWithMostCalories.nutrition_facts.nutrition.calories;

  if (currentDonutCalories > donutWithMostCaloriesYetCalories) {
    donutWithMostCalories = currentDonut;
  }
}

// |||||||||||||||| RESULTADOS EJERCICIO NÚMERO 1

console.log("|||||||||||||||| EJERCICIO NÚMERO 1 ||||||||||||||||\n");
console.log(`El donut con más azucar es "${sweetestDonut.name}"`);
console.log(`El donut con más hierro es "${donutWithMostIron.name}"`);
console.log(`El donut con más proteína es "${donutWithMostProtein.name}"`);
console.log(
  `Los donuts con menos fibra son ${donutsWithLeastFibre.join(", ")}`
);
console.log(`El donut con más calorías es "${donutWithMostCalories.name}"`);

//2.- Necesitamos saber si la ingesta de calorías, grasas y carbohidratos puede mellar nuestra agilidad por lo que necesitamos:
console.log("\n|||||||||||||||| EJERCICIO NÚMERO 2 ||||||||||||||||\n");

//Listar todos los donuts y sus calorías (+ 50 exp)

console.log("|||||||||||| DONUTS Y SUS CALORÍAS ||||||||||||");

for (let i = 0; i < donuts.length; i++) {
  const currentDonut = donuts[i];
  const currentDonutCalories = currentDonut.nutrition_facts.nutrition.calories;
  console.log(`${currentDonut.name}: ${currentDonutCalories} calorías`);
}

//Listar todos los donuts y sus carbohidratos (+ 50 exp)

console.log("\n|||||||||||| DONUTS Y SUS CARBOHIDRATOS ||||||||||||");

for (let i = 0; i < donuts.length; i++) {
  const currentDonut = donuts[i];
  const currentDonutCarbohydrates =
    currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type;
  console.log(
    `${currentDonut.name}: ${currentDonutCarbohydrates.fibre} de fibra |||||||| ${currentDonutCarbohydrates.sugars} de azúcar`
  );
}

//Mostrar la media de calorías de todos los donuts (+ 50 exp)

//Mostrar la suma de las grasas saturadas de todos los donuts (+ 50 exp)

//Mostrar el porcentaje medio de cada vitamina (+ 50 exp)

//3.- El horno a la leña de esta posada es de alta calidad, debemos lanzar un hechizo para saber qué tipo de masa utilizan

//Listar cada donut con sus posibles masas, batter (+ 50 exp)

//Listar cada donut con sus posibles extras topping (+ 50 exp)

//Mostrar el donut con más variedad de masas (batters) (+ 50 exp)

//Mostrar el donut con más variedad de toppings (+ 50 exp)

//Contar el número total de masas y toppings diferentes que existen en toda la posada (+ 50 exp)

//4.- Nuestro grupo sólo dispone de 4 monedas de plata.

//Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)

//Encontrar el donut más caro que aún podamos comprar con 4 monedas de plata (+ 50 exp)

//Encontrar el donut más barato de la posada (+ 50 exp)

//Ordenar los donuts por precio de menor a mayor (+ 50 exp)

//Calcular cuántos donuts distintos podríamos comprar con 4 monedas en total (mezclando tipos) (+ 50 exp)

//5.- Para nuestro horror y preocupación hemos detectado grandes errores sintácticos en el conjuro original, es momento de poner nuestros conocimientos arcanos al servicio de toda la posada.

//Los donuts con el colesterol > 12 modificar las grasas trans a 3,2 gr (+ 50 exp)

//Donuts con azúcar > 50  modificar el amount de los detalles de carbohidratos a 42gr (+ 50 exp)

//Añadir una vitamina llamada "Nitacina" al donut con el nombre "Magic Fusion" (+ 50 exp)

//El daily value de los carbohidratos de todos los donuts va a ser de 53% (+ 50 exp)

//Crearle un nuevo atributo "Alergen" al donut llamado "Relaxing Alchemy" y que dentro de el ponga "Gluten Free" (+ 50 exp)
