const PubSub = require('../helpers/pub_sub.js');
//select view

const MunroView = function(element){
  this.element = element;
};

MunroView.prototype.bindEvents = function () {
  PubSub.subscribe('Munro:All-Munros', (event) =>{
    const munroData = event.detail;
    this.populate(munroData);
  })

this.element.addEventListener('change', (event) => {
  const selectedRegion = event.target.value;
  PubSub.publish('SelectedRegion:change', selectedRegion);

});
};



// MunroView.prototype.populate = function (allMunros) {
//   const munros = [...new Set(allMunros.map(x => x.region))];
//   console.log(munros);
//
//   const option = document.createElement('option');
//   option.textContent = munros;
//   option.value = munro;
//   this.element.appendChild(option);


// }


MunroView.prototype.populate = function (allMunros) {
  return allMunros
    const regions = allMunros.map(munro => munro.region);
    const uniqueregions = regions.filter((region, index, regions) => regions.indexOf(region) === index);
    console.log("region", region);
}

// const option = document.createElement('option');
// option.textContent = munro.region;
// option.value = index;
// this.element.appendChild(option);


module.exports = MunroView;
