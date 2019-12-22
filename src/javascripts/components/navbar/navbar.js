import utilities from '../../helpers/utilities';

const printNavbar = () => {
  const domString = `<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow navbar">
  <h5 class="my-0 mr-md-auto brand">Hit The Spot</h5>
  <nav class="my-2 my-md-0 mr-md-3 navLinks">
    <a class="p-2 text-white " href="#">Locations</a>
    <a class="p-2 text-white " href="#">Menus</a>
    <a class="p-2 text-white " href="#">About</a>
  </nav>
  <a class="p-2 text-white order href="#">Order Online</a>
</div>`;
  utilities.printToDom('navbar', domString);
};

export default { printNavbar };
