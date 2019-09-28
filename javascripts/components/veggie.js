import utilities from '../helpers/utilities.js'

//5- made an array for my for loop
const veggies = [
{id: "veggie1", name:"Lettuce", price: 200.00},
{id: "veggie2", name:"Tomato", price: 300.00},
{id: "veggie3", name:"Pickle", price: 300.00},
{id: "veggie4", name:"Olive", price: 400.00}
];

const getSelectedVeggies = () => {
    //11- get all cheese checkboxes (give domstraing a class of cheese)
    //keep the checked ones in a new array
    // return the new array
    const selectedVeggies = [];
    const veggieCheckboxes = document.getElementsByClassName('veggie');
    for (let j = 0; j < veggieCheckboxes.length; j++) {
        for (let k = 0; k < veggies.length; k++){
            if (veggieCheckboxes[j].checked && veggieCheckboxes[j].id === veggies[k].id) {
                selectedVeggies.push(veggies[k]);
             
            }
        }
    }
    return selectedVeggies;
};

//4th: import utilities, make function, and export the function name
const printVeggieOptions = () => {
    let domString = '';
    for (let i = 0; i < veggies.length; i++){
    domString +=` <div class="form-check">
    <input type="checkbox" class="form-check-input veggie" id="${veggies[i].id}">
    <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
  </div>`;
    }
    //6- made for loop here. added name.
    //7- put cheese id and for because thats how screen readers relate??
    utilities.printToDom('veggie-counter', domString);
};

export default {printVeggieOptions, getSelectedVeggies};