import data from "./data.mjs";

const donuts = data.items.item;

//1.- Nuestro grupo se encuentra totalmente debilitado. Necesitamos tomar azúcares, hierro, proteínas y poca fibra. Para ello debemos preparar un conjuro que nos muestre:
console.log(
  "|||||||||||||||| BLOQUE DE EJERCICIOS NÚMERO 1 ||||||||||||||||\n"
);

//donut con más azúcar (+ 50 exp)

logDonutWithMostSugar();

function logDonutWithMostSugar() {
  let donutWithMostSugar = donuts[0];

  for (let i = 1; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutSugar =
      +currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      )[0];

    const donutWithMostSugarYetSugar =
      +donutWithMostSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      )[0];

    if (currentDonutSugar > donutWithMostSugarYetSugar) {
      donutWithMostSugar = currentDonut;
    }
  }

  console.log(
    `|||||||||||| EL DONUT CON MÁS AZÚCAR ES "${donutWithMostSugar.name.toUpperCase()}" ||||||||||||`
  );
}

//donut con más hierro (+ 50 exp)

logDonutWithMostIron();

function logDonutWithMostIron() {
  let donutWithMostIron = donuts[0];

  for (let i = 1; i < donuts.length; i++) {
    const currentDonut = donuts[i];

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

  console.log(
    `|||||||||||| EL DONUT CON MÁS HIERRO ES "${donutWithMostIron.name.toUpperCase()}" ||||||||||||`
  );
}

//donut con más proteína (+ 50 exp)

logDonutWithMostProtein();

function logDonutWithMostProtein() {
  let donutWithMostProtein = donuts[0];

  for (let i = 1; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutProtein =
      +currentDonut.nutrition_facts.nutrition.protein.split("g")[0];

    const donutWithMostProteinYetProtein =
      +donutWithMostProtein.nutrition_facts.nutrition.protein.split("g")[0];

    if (currentDonutProtein > donutWithMostProteinYetProtein) {
      donutWithMostProtein = currentDonut;
    }
  }

  console.log(
    `|||||||||||| EL DONUT CON MÁS PROTEÍNA ES "${donutWithMostProtein.name.toUpperCase()}" ||||||||||||`
  );
}

//donut con menos fibra (+ 50 exp)

logDonutsWithLeastFibre();

function logDonutsWithLeastFibre() {
  let donutsWithLeastFibre = [];

  const lowestFibreValue = getLowestFibreValue();

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutFibre =
      +currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.split(
        "g"
      )[0];

    if (currentDonutFibre === lowestFibreValue) {
      donutsWithLeastFibre.push(`"${currentDonut.name.toUpperCase()}"`);
    }
  }

  console.log(
    `|||||||||||| LOS DONUTS CON MENOS FIBRA SON ${donutsWithLeastFibre.join(
      ", "
    )} ||||||||||||`
  );
}

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

//donut con más calorías (+ 50 exp)

logDonutWithMostCalories();

function logDonutWithMostCalories() {
  let donutWithMostCalories = donuts[0];

  for (let i = 1; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutCalories =
      currentDonut.nutrition_facts.nutrition.calories;

    const donutWithMostCaloriesYetCalories =
      donutWithMostCalories.nutrition_facts.nutrition.calories;

    if (currentDonutCalories > donutWithMostCaloriesYetCalories) {
      donutWithMostCalories = currentDonut;
    }
  }

  console.log(
    `|||||||||||| EL DONUT CON MÁS CALORÍAS ES "${donutWithMostCalories.name.toUpperCase()}" ||||||||||||`
  );
}

//2.- Necesitamos saber si la ingesta de calorías, grasas y carbohidratos puede mellar nuestra agilidad por lo que necesitamos:
console.log(
  "\n|||||||||||||||| BLOQUE DE EJERCICIOS NÚMERO 2 ||||||||||||||||\n"
);

//Listar todos los donuts y sus calorías (+ 50 exp)

logDonutsAndTheirCalories();

function logDonutsAndTheirCalories() {
  console.log("|||||||||||| DONUTS Y SUS CALORÍAS ||||||||||||\n");

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutCalories =
      currentDonut.nutrition_facts.nutrition.calories;

    console.log(`${currentDonut.name}: ${currentDonutCalories} calorías`);
  }
}

//Listar todos los donuts y sus carbohidratos (+ 50 exp)

logDonutsAndTheirCarbohydrates();

function logDonutsAndTheirCarbohydrates() {
  console.log("\n|||||||||||| DONUTS Y SUS CARBOHIDRATOS ||||||||||||\n");

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutCarbohydrates =
      currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type;

    console.log(
      `${currentDonut.name}: ${currentDonutCarbohydrates.fibre} de fibra |||||||| ${currentDonutCarbohydrates.sugars} de azúcar`
    );
  }
}

//Mostrar la media de calorías de todos los donuts (+ 50 exp)

logAverageCaloriesOfDonuts();

function logAverageCaloriesOfDonuts() {
  let totalCalories = 0;

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutCalories =
      currentDonut.nutrition_facts.nutrition.calories;

    totalCalories += currentDonutCalories;
  }

  const averageCalories = totalCalories / donuts.length;

  console.log(
    `\n|||||||||||| MEDIA DE CALORÍAS DE LOS DONUTS: ${averageCalories} ||||||||||||`
  );
}

//Mostrar la suma de las grasas saturadas de todos los donuts (+ 50 exp)

logTotalSaturatedFatOfDonuts();

function logTotalSaturatedFatOfDonuts() {
  let totalSaturatedFat = 0;

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutSaturatedFat =
      +currentDonut.nutrition_facts.nutrition.fat.fat_type.saturated.split(
        "g"
      )[0];

    totalSaturatedFat += currentDonutSaturatedFat;
  }

  console.log(
    `\n|||||||||||| SUMA DE LAS GRASAS SATURADAS DE LOS DONUTS: ${totalSaturatedFat}G ||||||||||||`
  );
}

//Mostrar el porcentaje medio de cada vitamina (+ 50 exp)

logAveragePercentageOfEachVitamin();

function logAveragePercentageOfEachVitamin() {
  console.log(
    "\n|||||||||||| PORCENTAJE MEDIO DE CADA VITAMINA ||||||||||||\n"
  );

  const vitaminsPercentagesSums = {
    "Vitamin A": 0,
    "Vitamin C": 0,
    Calcium: 0,
    Iron: 0,
  };

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    for (
      let j = 0;
      j < currentDonut.nutrition_facts.nutrition.vitamins.length;
      j++
    ) {
      const currentVitamin = currentDonut.nutrition_facts.nutrition.vitamins[j];

      vitaminsPercentagesSums[currentVitamin.type] +=
        +currentVitamin.percent.split("%")[0];
    }
  }

  const vitaminsAveragePercentages = {
    "Vitamin A": 0,
    "Vitamin C": 0,
    Calcium: 0,
    Iron: 0,
  };

  for (const vitamin in vitaminsAveragePercentages) {
    vitaminsAveragePercentages[vitamin] =
      vitaminsPercentagesSums[vitamin] / donuts.length;
  }

  console.log(`Vitamina A: ${vitaminsAveragePercentages["Vitamin A"]}%`);
  console.log(`Vitamina C: ${vitaminsAveragePercentages["Vitamin C"]}%`);
  console.log(`Calcio: ${vitaminsAveragePercentages["Calcium"]}%`);
  console.log(`Hierro: ${vitaminsAveragePercentages["Iron"]}%`);
}

//3.- El horno a la leña de esta posada es de alta calidad, debemos lanzar un hechizo para saber qué tipo de masa utilizan
console.log(
  "\n|||||||||||||||| BLOQUE DE EJERCICIOS NÚMERO 3 ||||||||||||||||"
);

//Listar cada donut con sus posibles masas, batter (+ 50 exp)

logDonutsAndTheirBatters();

function logDonutsAndTheirBatters() {
  console.log("\n|||||||||||| DONUTS Y SUS POSIBLES MASAS ||||||||||||\n");

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];
    console.log(`${currentDonut.name}:`);

    for (let j = 0; j < currentDonut.batters.batter.length; j++) {
      const currentBatter = currentDonut.batters.batter[j];
      console.log(`\t-> ${currentBatter.type}`);
    }

    console.log();
  }
}

//Listar cada donut con sus posibles extras topping (+ 50 exp)

logDonutsAndTheirToppings();

function logDonutsAndTheirToppings() {
  console.log(
    "|||||||||||| DONUTS Y SUS POSIBLES EXTRAS TOPPING ||||||||||||\n"
  );

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];
    console.log(`${currentDonut.name}:`);

    for (let j = 0; j < currentDonut.topping.length; j++) {
      const currentTopping = currentDonut.topping[j];

      if (currentTopping.type !== "None") {
        console.log(`\t-> ${currentTopping.type}`);
      }
    }

    console.log();
  }
}

//Mostrar el donut con más variedad de masas (batters) (+ 50 exp)

logDonutWithMostBatters();

function logDonutWithMostBatters() {
  let donutWithMostBatters = donuts[0];

  for (let i = 1; i < donuts.length; i++) {
    const currentDonut = donuts[i];
    const currentDonutBattersNumber = currentDonut.batters.batter.length;

    const donutWithMostBattersYetBattersNumber =
      donutWithMostBatters.batters.batter.length;

    if (currentDonutBattersNumber > donutWithMostBattersYetBattersNumber) {
      donutWithMostBatters = currentDonut;
    }
  }

  console.log(
    `|||||||||||| EL DONUT CON MÁS VARIEDAD DE MASAS ES "${donutWithMostBatters.name.toUpperCase()}" ||||||||||||`
  );
}

//Mostrar el donut con más variedad de toppings (+ 50 exp)

logDonutsWithMostToppings();

function logDonutsWithMostToppings() {
  const donutsWithMostToppings = [];

  const highestToppingsNumber = getHighestToppingsNumber();

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];
    const currentDonutToppingsNumber = currentDonut.topping.length;

    if (currentDonutToppingsNumber === highestToppingsNumber) {
      donutsWithMostToppings.push(`"${currentDonut.name.toUpperCase()}"`);
    }
  }

  console.log(
    `\n|||||||||||| LOS DONUTS CON MÁS VARIEDAD DE TOPPINGS SON ${donutsWithMostToppings.join(
      ", "
    )} ||||||||||||`
  );
}

function getHighestToppingsNumber() {
  let highestToppingsNumber = donuts[0].topping.length;

  for (let i = 1; i < donuts.length; i++) {
    const currentDonutToppingsNumber =
      donuts[i].topping.length -
      1; /* THE "None" TOPPING ISN'T TAKEN INTO ACCOUNT */

    if (currentDonutToppingsNumber > highestToppingsNumber) {
      highestToppingsNumber = currentDonutToppingsNumber;
    }
  }

  return highestToppingsNumber;
}

//Contar el número total de masas y toppings diferentes que existen en toda la posada (+ 50 exp)

logTotalNumOfDiffBattersAndToppings();

function logTotalNumOfDiffBattersAndToppings() {
  console.log(
    "\n|||||||||||| NÚMERO TOTAL DE MASAS Y TOPPINGS DIFERENTES ||||||||||||\n"
  );

  const batters = [];
  const toppings = [];

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    for (let j = 0; j < currentDonut.batters.batter.length; j++) {
      const currentBatterType = currentDonut.batters.batter[j].type;

      if (!batters.includes(currentBatterType)) {
        batters.push(currentBatterType);
      }
    }

    for (let j = 0; j < currentDonut.topping.length; j++) {
      const currentToppingType = currentDonut.topping[j].type;

      if (
        currentToppingType !== "None" &&
        !toppings.includes(currentToppingType)
      ) {
        toppings.push(currentToppingType);
      }
    }
  }

  console.log(`Masas: ${batters.length}`);
  console.log(`Toppings: ${toppings.length}`);
}

//4.- Nuestro grupo sólo dispone de 4 monedas de plata.
console.log(
  "\n|||||||||||||||| BLOQUE DE EJERCICIOS NÚMERO 4 ||||||||||||||||"
);

//Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)

logHowManyDonutsCanBeBoughtAndRemainingCoins();

function logHowManyDonutsCanBeBoughtAndRemainingCoins() {
  console.log(
    "\n|||||||||||| CUÁNTOS DONUTS DE CADA TIPO SE PUEDEN COMPRAR CON 4 MONEDAS Y LAS MONEDAS SOBRANTES ||||||||||||\n"
  );

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const AVAILABLE_COINS = 4;
    const numberOfDonutsThatCanBeBought = Math.floor(
      AVAILABLE_COINS / currentDonut.ppu
    );
    const remainingCoins = (AVAILABLE_COINS % currentDonut.ppu).toFixed(2);

    console.log(`${currentDonut.name}:`);
    console.log(`\t-> Se pueden comprar ${numberOfDonutsThatCanBeBought}`);
    console.log(`\t-> Sobran ${remainingCoins} monedas\n`);
  }
}

//Encontrar el donut más caro que aún podamos comprar con 4 monedas de plata (+ 50 exp)

logMostExpensiveDonutThatCanBeBoughtWith4Coins();

function logMostExpensiveDonutThatCanBeBoughtWith4Coins() {
  let mostExpensiveDonut;

  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    if (
      currentDonut.ppu <= 4 &&
      currentDonut.ppu > ((mostExpensiveDonut && mostExpensiveDonut.ppu) || 0)
    ) {
      mostExpensiveDonut = currentDonut;
    }
  }

  console.log(
    `|||||||||||| EL DONUT MÁS CARO QUE AÚN SE PUEDE COMPRAR CON 4 MONEDAS ES "${mostExpensiveDonut.name.toUpperCase()}" ||||||||||||`
  );
}

//Encontrar el donut más barato de la posada (+ 50 exp)

logCheapestDonut();

function logCheapestDonut() {
  let cheapestDonut = donuts[0];

  for (let i = 1; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    if (currentDonut.ppu < cheapestDonut.ppu) {
      cheapestDonut = currentDonut;
    }
  }

  console.log(
    `\n|||||||||||| EL DONUT MÁS BARATO ES "${cheapestDonut.name.toUpperCase()}" ||||||||||||`
  );
}

//Ordenar los donuts por precio de menor a mayor (+ 50 exp)

function logDonutsAndTheirPPU() {
  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];
    console.log(
      `${i + 1}. ${currentDonut.name} (${
        currentDonut.ppu
      } monedas de plata por unidad)`
    );
  }
}

console.log(
  "\n|||||||||||| LISTADO DE DONUTS (ANTES DE SER ORDENADOS POR PRECIO DE MENOR A MAYOR) ||||||||||||\n"
);
logDonutsAndTheirPPU();

sortDonutsByPriceAscendingOrder();

function sortDonutsByPriceAscendingOrder() {
  for (let i = 0; i < donuts.length - 1; i++) {
    for (let j = i + 1; j < donuts.length; j++) {
      if (donuts[i].ppu > donuts[j].ppu) {
        [donuts[i], donuts[j]] = [donuts[j], donuts[i]];
      }
    }
  }
}

console.log(
  "\n|||||||||||| LISTADO DE DONUTS (TRAS SER ORDENADOS POR PRECIO DE MENOR A MAYOR) ||||||||||||\n"
);
logDonutsAndTheirPPU();

//Calcular cuántos donuts distintos podríamos comprar con 4 monedas en total (mezclando tipos) (+ 50 exp)

//5.- Para nuestro horror y preocupación hemos detectado grandes errores sintácticos en el conjuro original, es momento de poner nuestros conocimientos arcanos al servicio de toda la posada.
console.log(
  "\n|||||||||||||||| BLOQUE DE EJERCICIOS NÚMERO 5 ||||||||||||||||"
);

function logDonutsDetails() {
  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    console.log(`${currentDonut.name}:`);
    console.log(
      `\t-> Colesterol: ${currentDonut.nutrition_facts.nutrition.cholesterol.amount}`
    );
    console.log(
      `\t-> Grasas trans: ${currentDonut.nutrition_facts.nutrition.fat.fat_type.trans}`
    );
    console.log(
      `\t-> Azúcar: ${currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars}`
    );
    console.log(
      `\t-> Cantidad detalles de carbohidratos: ${currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount}`
    );

    console.log("\t-> Vitaminas:");

    const currentDonutVitamins =
      currentDonut.nutrition_facts.nutrition.vitamins;

    for (let j = 0; j < currentDonutVitamins.length; j++) {
      const currentVitamin = currentDonutVitamins[j];

      console.log(
        `\t\t-> Tipo: ${currentVitamin.type} |||||||| Porcentaje: ${currentVitamin.percent}`
      );
    }

    console.log(
      `\t-> Valor diario de los carbohidratos: ${currentDonut.nutrition_facts.nutrition.carbohydrate.daily_value}`
    );

    if (currentDonut.Alergen) {
      console.log(`\t-> Alérgenos: ${currentDonut.Alergen}`);
    }

    console.log();
  }
}

console.log(
  "\n|||||||||||| LISTADO DE DONUTS CON SUS DETALLES (ANTES DE SER MODIFICADOS) ||||||||||||\n"
);
logDonutsDetails();

//Los donuts con el colesterol > 12 modificar las grasas trans a 3,2 gr (+ 50 exp)

modifyDonutsTransFat();

function modifyDonutsTransFat() {
  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutCholesterolAmount =
      +currentDonut.nutrition_facts.nutrition.cholesterol.amount.split("mg")[0];

    if (currentDonutCholesterolAmount > 12) {
      currentDonut.nutrition_facts.nutrition.fat.fat_type.trans = "3.2g";
    }
  }
}

//Donuts con azúcar > 50  modificar el amount de los detalles de carbohidratos a 42gr (+ 50 exp)

modifyDonutsCarbsDetailAmount();

function modifyDonutsCarbsDetailAmount() {
  for (let i = 0; i < donuts.length; i++) {
    const currentDonut = donuts[i];

    const currentDonutSugars =
      +currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.split(
        "g"
      )[0];

    if (currentDonutSugars > 50) {
      currentDonut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount =
        "42g";
    }
  }
}

//Añadir una vitamina llamada "Nitacina" al donut con el nombre "Magic Fusion" (+ 50 exp)

//El daily value de los carbohidratos de todos los donuts va a ser de 53% (+ 50 exp)

//Crearle un nuevo atributo "Alergen" al donut llamado "Relaxing Alchemy" y que dentro de el ponga "Gluten Free" (+ 50 exp)

console.log(
  "\n|||||||||||| LISTADO DE DONUTS CON SUS DETALLES (TRAS SER MODIFICADOS) ||||||||||||\n"
);
logDonutsDetails();
