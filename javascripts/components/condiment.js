import utilities from '../helpers/utilities.js'

//5- made an array for my for loop
const condiments = [
{id: "con1", name:"Mayo", price: 50},
{id: "con2", name:"Ketchup", price: 90},
{id: "con3", name:"Mustard", price: 500},
{id: "con4", name:"Oil", price: 0}
];

const getSelectedCondiments = () => {
    //11- get all cheese checkboxes (give domstraing a class of cheese)
    //keep the checked ones in a new array
    // return the new array
    const selectedCondiments = [];
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    for (let j = 0; j < condimentCheckboxes.length; j++) {
        for (let k = 0; k < condiments.length; k++){
            if (condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id) {
                selectedCondiments.push(condiments[k]);
             
            }
        }
    }
    return selectedCondiments;
}

//4th: import utilities, make function, and export the function name
const printCondimentOptions = () => {
    let domString = '';
    for (let i = 0; i < condiments.length; i++){
    domString +=` <div class="form-check">
    <input type="checkbox" class="form-check-input condiment" id="${condiments[i].id}">
    <label class="form-check-label" for="${condiments[i].id}">${condiments[i].name}</label>
  </div>`;
    }
    //6- made for loop here. added name.
    //7- put cheese id and for because thats how screen readers relate??
    utilities.printToDom('condiment-counter', domString);
};

export default {printCondimentOptions, getSelectedCondiments};