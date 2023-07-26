let btnGrid = document.getElementById("btnGrid");
let btnList = document.getElementById("btnList");
let formList = document.getElementById("formList");
let formGrid = document.getElementById("formGrid");

function showForm(formToShow) {
  formGrid.style.display = "none";
  formList.style.display = "none";
  formToShow.style.display = "block";
}

btnGrid.addEventListener("click", function() {
  showForm(formGrid);
});

btnList.addEventListener("click", function() {
  showForm(formList);
});

const colorSelect = document.getElementById("colorSelect");
const bgColor = document.getElementById("bgColor");

colorSelect.addEventListener("change", function() {
  const selectedColor = colorSelect.value;
  bgColor.style.backgroundColor = selectedColor;
});

