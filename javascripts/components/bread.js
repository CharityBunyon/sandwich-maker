import utilities from '../helpers/utilities.js'

//5- made an array for my for loop
const breads = [
{id: "bread1", name:"Rhye", price: 300},
{id: "bread2", name:"White", price: 200},
{id: "bread3", name:"Wheat", price: 200},
{id: "bread4", name:"Croissant", price: 300}
];

const getSelectedBreads = () => {
    //11- get all cheese checkboxes (give domstraing a class of cheese)
    //keep the checked ones in a new array
    // return the new array
    const selectedBreads = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
    for (let j = 0; j < breadCheckboxes.length; j++) {
        for (let k = 0; k < breads.length; k++){
            if (breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id) {
                selectedBreads.push(breads[k]);
             
            }
        }
    }
    return selectedBreads;
}

//4th: import utilities, make function, and export the function name
const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++){
    domString +=` <div class="form-check">
    <input type="checkbox" class="form-check-input bread" id="${breads[i].id}">
    <label class="form-check-label" for="${breads[i].id}">${breads[i].name}</label>
  </div>`;
    }
    //6- made for loop here. added name.
    //7- put cheese id and for because thats how screen readers relate??
    utilities.printToDom('bread-counter', domString);
};

export default {printBreadOptions, getSelectedBreads};
