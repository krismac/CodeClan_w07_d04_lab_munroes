const Munros = require('./models/munros.js');
const MunroView = require('./views/munro_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const munroContainer = new Munros ();
  munroContainer.bindEvents();

const munroViewType =
  document.querySelector('select#munroselector')

const munroView = new MunroView(munroViewType);
  munroView.bindEvents();


  munroContainer.getData();
  });
