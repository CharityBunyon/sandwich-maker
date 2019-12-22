import 'bootstrap';
import '../styles/main.scss';
import bread from './components/bread/bread';
import order from './components/order/order';
import meat from './components/meat/meat';
import cheese from './components/cheese/cheese';
import condiment from './components/condiments/condiment';
import veggie from './components/veggie/veggie';
import navbar from './components/navbar/navbar';
import carousel from './components/carousel/carousel';
// 3rd thing: Make init function in the main.js

const init = () => {
  bread.printBreadOptions();
  meat.printMeatOptions();
  cheese.printCheeseOptions();
  condiment.printCondimentOptions();
  veggie.printVeggieOptions();
  order.printOrderButton();
  navbar.printNavbar();
  carousel.printCarousel();
  // 7- Making the order btn that will print out the items I check off. I also imported above and made this file in the components folder
};

init();
