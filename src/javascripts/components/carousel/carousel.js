import utilities from '../../helpers/utilities';
// import i from '../../helpers/data/carouselImages';
import sand1 from '../../../../images/sand1.jpg';
import sand2 from '../../../../images/sand2.jpg';
import sand3 from '../../../../images/sand3.jpg';


const printCarousel = () => {
  const domString = `<div id="carouselExampleControls" class="carousel slide container" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="${sand1}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${sand2}" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${sand3}" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> `;
  utilities.printToDom('carousel', domString);
};

export default { printCarousel };
