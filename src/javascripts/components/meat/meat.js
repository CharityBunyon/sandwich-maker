/* eslint-disable no-plusplus */
import utilities from '../../helpers/utilities';

// 5- made an array for my for loop
const meats = [
  { id: 'meat1', name: 'Bacon', price: 300 },
  { id: 'meat2', name: 'Steak', price: 700 },
  { id: 'meat3', name: 'Turkey', price: 700 },
  { id: 'meat4', name: 'Chicken', price: 500 },
];

const getSelectedMeats = () => {
  // 11- get all cheese checkboxes (give domstring a class of cheese)
  // keep the checked ones in a new array
  // return the new array
  const selectedMeats = [];
  const meatCheckboxes = document.getElementsByClassName('meat');
  for (let j = 0; j < meatCheckboxes.length; j++) {
    for (let k = 0; k < meats.length; k++) {
      if (meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id) {
        selectedMeats.push(meats[k]);
      }
    }
  }
  return selectedMeats;
};

// 4th: import utilities, make function, and export the function name
const printMeatOptions = () => {
  let domString = '';
  for (let i = 0; i < meats.length; i++) {
    domString += ` <div class="form-check">
    <input type="checkbox" class="form-check-input meat" id="${meats[i].id}">
    <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
  </div>`;
  }
  // 6- made for loop here. added name.
  // 7- put cheese id and for because thats how screen readers relate??
  utilities.printToDom('meat-counter', domString);
};

export default { printMeatOptions, getSelectedMeats };
