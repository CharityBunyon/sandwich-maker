import utilities from '../../helpers/utilities';
import breadData from '../../helpers/data/breadData';
import breadCard from '../breadCard/breadCard';
// 5- made an array for my for loop
const breads = [
  { id: 'bread1', name: 'Rhye', price: 300 },
  { id: 'bread2', name: 'White', price: 200 },
  { id: 'bread3', name: 'Wheat', price: 200 },
  { id: 'bread4', name: 'Croissant', price: 300 },
];

const getSelectedBreads = () => {
  const selectedBreads = [];
  const breadCheckboxes = document.getElementsByClassName('bread');
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < breadCheckboxes.length; j++) {
    // eslint-disable-next-line no-plusplus
    for (let k = 0; k < breads.length; k++) {
      if (breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id) {
        selectedBreads.push(breads[k]);
      }
    }
  }
  return selectedBreads;
};

// 4th: import utilities, make function, and export the function name
const printBreadOptions = (uid) => {
  let domString = '';
  breadData.getBreads(uid)
    // eslint-disable-next-line no-shadow
    .then((breads) => {
      breads.forEach((bread) => {
        domString += breadCard.makeBreadCheckboxes(bread);
      });
      utilities.printToDom('bread-counter', domString);
    });
};

export default { printBreadOptions, getSelectedBreads };
