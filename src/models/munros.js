const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js')

const Munros = function() {
  this.munros = null;
}

Munros.prototype.getData = function (){
  const url = 'https://munroapi.herokuapp.com/api/munros'
  const request = new RequestHelper (url);
  request.get()
  .then((data) => {
    this.munros = data;
    PubSub.publish('Munro:All-Munros', this.munros)
  })
  .catch((error) => {
    PubSub.publish('Munro:error', error);
  })
}


Munros.prototype.bindEvents = function () {
  PubSub.subscribe('SelectedRegion:change', (event) => {
    // something something munrosDetail
  });
}

Munros.prototype.munrosDetail = function(munroIndex){
  const selectedRegion = this.munros[munroIndex];
  PubSub.publish('Munro:selected-ready', selectedCountry)
};



module.exports = Munros;
