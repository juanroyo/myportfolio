const Offers = {
  info:[],
}

function initApp() {

  //this.GetMovies();

  getOffersFromMongo();
}

initApp()



function getOffersFromMongo(){

  fetch("https://git.heroku.com/polar-meadow-31783.git/offers")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        Offers.info = res;
      });
}
export default Offers
