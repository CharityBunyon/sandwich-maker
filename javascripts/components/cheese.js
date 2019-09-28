import utilities from '../helpers/utilities.js'

//5- made an array for my for loop
const cheeses = [
{id: "cheese1", name:"American", price: 50.00},
{id: "cheese2", name:"Cheddar", price: 90.00},
{id: "cheese3", name:"Provolone", price: 50.00},
{id: "cheese4", name:"Jack", price: 60.00}
];

const getSelectedCheeses = () => {
    //11- get all cheese checkboxes (give domstraing a class of cheese)
    //keep the checked ones in a new array
    // return the new array
    const selectedCheeses = [];
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    for (let j = 0; j < cheeseCheckboxes.length; j++) {
        for (let k = 0; k < cheeses.length; k++){
            if (cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id) {
                selectedCheeses.push(cheeses[k]);
             
            }
        }
    }
    return selectedCheeses;
}

//4th: import utilities, make function, and export the function name
const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++){
    domString +=` <div class="form-check">
    <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
    <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
  </div>`;
    }
    //6- made for loop here. added name.
    //7- put cheese id and for because thats how screen readers relate??
    utilities.printToDom('cheese-counter', domString);
};

export default {printCheeseOptions, getSelectedCheeses};