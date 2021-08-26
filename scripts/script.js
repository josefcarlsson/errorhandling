var clicked = 0;

function countClick() {
  clicked++;
  document.querySelector(".number-of-cliks").innerHTML = clicked + " times";
};
