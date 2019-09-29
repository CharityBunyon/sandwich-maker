import bread from './bread.js';
import cheese from './cheese.js';
import condiment from './condiment.js';
import meat from './meat.js';
import veggie from './veggie.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = '';
    let sum = 0;
    for (let i=0; i < items.length; i++) {
        let priceNumber = items[i].price
        sum += priceNumber;
        priceNumber /= 100;
        let dollars = priceNumber.toLocaleString("en-US", {style:"currency", currency:"USD"});
        domString2 += `
        <p>${items[i].name} ${dollars}</p>
        `
    };
    sum /= 100;
    const totalDollars = sum.toLocaleString("en-US", {style:"currency", currency: "USD"});
    domString2 += `<hr><h4>Your total is: ${totalDollars}</h4></div>`;
    utilities.printToDom('total', domString2);
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

const thanks =() => {
    if(event.target.innerHTML === "Complete Order") {
        alert('Thank you for your order!');
    }
};
//10 selected cheeses will be in cheese.js

const printOrderButton = () => { 
    const domString = `<button id="order-button" class="btn btn-success btn-lg btn-block">Make Sandwich</button>`
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
    // 9-added event, put an id on the button, created a function
    document.getElementById("order-button").addEventListener('click',
        function(event) {
          if (event.target.innerHTML === "Make Sandwich") {
            event.target.innerHTML = "Complete Order";
          } 
          document.getElementById("order-button").addEventListener('click', thanks)
        },
        // false
      );
};

// document.getElementById("order-button").addEventListener('click', thanks)

//8- made function and added import


export default { printOrderButton, thanks, };