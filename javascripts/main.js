import bread from './components/bread.js';
import order from './components/order.js';
import meat from './components/meat.js';
import cheese from './components/cheese.js';
import condiment from './components/condiment.js';
import veggie from './components/veggie.js';
// 3rd thing: Make init function in the main.js

const init = () => {
    //do stuff
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    condiment.printCondimentOptions();
    veggie.printVeggieOptions();
    //7- Making the order btn that will print out the items I check off. I also imported above and made this file in the components folder
    order.printOrderButton();
    order.thanks();
    //inside store theres a function call this and run it.
};

init();