let ingredientList = [];
let dirList = [];
console.log(ingredientList);

const addIng = document.getElementById("add-ing");
const addStep = document.getElementById("add-step");

let addIngredient = addIng.addEventListener("click", (evt) => {
  boxvalue = document.getElementById("ingbox").value;
  let currentIng = ingredientList.push(boxvalue);

  console.log(ingredientList);
  clear();

  ingredientList.forEach(function (i) {
    let listItm = document.createElement("li");
    let text = document.createTextNode(i);

    listItm.appendChild(text);

    document.getElementById("ing-list").appendChild(listItm);
  });

  ingredientList = [];
});

let addDirection = addStep.addEventListener("click", (evt) => {
  dirValue = document.getElementById("dirbox").value;
  let currentDir = dirList.push(dirValue);

  clearDir();

  dirList.forEach(function (d) {
    let listItm = document.createElement("li");
    let text = document.createTextNode(d);

    listItm.appendChild(text);

    document.getElementById("dir-list").appendChild(listItm);
  });

  dirList = [];
});

function clear() {
  document.getElementById("ingbox").value = "";
}

function clearDir() {
  document.getElementById("dirbox").value = "";
}
