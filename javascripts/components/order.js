import bread from './bread.js';
import cheese from './cheese.js';
import condiment from './condiment.js';
import meat from './meat.js';
import veggie from './veggie.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i = 0; i < items.length; i++){
        domString2 += `<h2>${items[i].name} $${items[i].price}</h2>`;
    }
    utilities.printToDom('final-order', domString2);
    //this will overwrite the button but we could make another div
}

const createOrderEvent = () => {
    // const selectedBreads = bread.getSelectedBreads();
    // const selectedMeats = meat.getSelectedMeats();
    // const selectedMeats = meat.getSelectedMeats(); TODO
    // createFinalOrder(selectedBreads, selectedMeats);
    //12- created a final function
    const selectedBreads = bread.getSelectedBreads();
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const selectedVeggies = veggie.getSelectedVeggies();
    const selectedCondiments = condiment.getSelectedCondiments();
    const allItems = selectedBreads.concat(selectedMeats, selectedCheeses, selectedVeggies, selectedCondiments);
    createFinalOrder(allItems);

};
//10 selected cheeses will be in cheese.js

const printOrderButton = () => { 
    const domString = `<button id="order-button" class="btn btn-primary">Make Sandwich</button>`
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
    // 9-added event, put an id on the button, created a function

};

//8- made function and added import



export default { printOrderButton };