const Offers = {
  info:[],
}

function initApp() {
  console.log("initApp");
  //this.GetMovies();

  getOffersFromMongo();
}

initApp()



function getOffersFromMongo(){
  console.log("la funcion")
  fetch("https://git.heroku.com/polar-meadow-31783.git/offers")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        Offers.info = res;
      });
}
export default Offers
