/* eslint-disable no-plusplus */
import bread from '../bread/bread';
import cheese from '../cheese/cheese';
import condiment from '../condiments/condiment';
import meat from '../meat/meat';
import veggie from '../veggie/veggie';
import utilities from '../../helpers/utilities';

const createFinalOrder = (items) => {
  let domString2 = '';
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    let priceNumber = items[i].price;
    sum += priceNumber;
    priceNumber /= 100;
    const dollars = priceNumber.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    domString2 += `
        <p>${items[i].name} ${dollars}</p>
        `;
  }
  sum /= 100;
  const totalDollars = sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  domString2 += `<hr><h4>Your total is: ${totalDollars}</h4></div>`;
  utilities.printToDom('total', domString2);
  // this will overwrite the button but we could make another div
};

const createOrderEvent = () => {
  // 12- created a final function
  const selectedBreads = bread.getSelectedBreads();
  const selectedCheeses = cheese.getSelectedCheeses();
  const selectedMeats = meat.getSelectedMeats();
  const selectedVeggies = veggie.getSelectedVeggies();
  const selectedCondiments = condiment.getSelectedCondiments();
  const allItems = selectedBreads.concat(selectedMeats, selectedCheeses, selectedVeggies, selectedCondiments);
  createFinalOrder(allItems);
};


const printOrderButton = () => {
  const domString = '<button id="order-button" class="btn btn-success btn-lg btn-block">Make Sandwich</button>';
  utilities.printToDom('final-order', domString);
  document.getElementById('order-button').addEventListener('click', createOrderEvent);
  // 9-added event, put an id on the button, created a function
  document.getElementById('order-button').addEventListener('click',
    (event) => {
      if (event.target.innerHTML === 'Make Sandwich') {
        // eslint-disable-next-line no-param-reassign
        event.target.innerHTML = 'Complete Order';
      }
    },
  // eslint-disable-next-line function-paren-newline
  );
};


// 8- made function and added import


export default { printOrderButton };
