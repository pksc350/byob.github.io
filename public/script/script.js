let ingredientList = [];
let dirList = [];
console.log(ingredientList);

const addIng = document.getElementById("add-ing");
const addStep = document.getElementById("add-step");

let addIngredient = addIng.addEventListener("click", (evt) => {
  let listItm = document.createElement("div");
  listItm.innerHTML =
    '<input type="text" name="ingredients" id="ingbox" class="type-here">';
  document.getElementById("ingredients").appendChild(listItm);
});

let addDirection = addStep.addEventListener("click", (evt) => {
  let listItm = document.createElement("div");
  listItm.innerHTML =
    '<input type="text" name="directions" id="dirbox" class="type-here">';
  document.getElementById("directions").appendChild(listItm);
});
