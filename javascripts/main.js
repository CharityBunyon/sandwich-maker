import bread from './components/bread.js';
import order from './components/order.js';
// 3rd thing: Make init function in the main.js

const init = () => {
    //do stuff
    bread.printBreadOptions();
    //7- Making the order btn that will print out the items I check off. I also imported above and made this file in the components folder
    order.printOrderButton();
    //inside store theres a function call this and run it.
};

init();