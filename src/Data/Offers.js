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
  fetch("http://localhost:8080/offers")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        Offers.info = res;
      });
}
export default Offers
