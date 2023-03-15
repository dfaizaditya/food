/* eslint-disable no-shadow */
import resto from '../DATA.json';

const restaurantList = (resto) => {
  const restaurantElement = document.querySelector('#restaurant-list');
  restaurantElement.innerHTML = '';
  resto.forEach((restaurant) => {
    const {
      name, description, pictureId, rating,
    } = restaurant;
    const Listrestaurant = document.createElement('div');

    Listrestaurant.innerHTML = `
        <div class="card">
            <div class="img-container">
                <img class="card-image" alt="${name}" src="${pictureId}">
                <span class="card-rating">
                    <i title="ratings" class="fa fa-star"></i>
                    <p tabindex="0">${rating}</p>
                </span>
            </div>
            <div tabindex="0" class="card-content">
                <h2 class="card-content-title">${name}</h2>
                <p class="card-content-description">${description}</p>
            </div>
        </div>
        `;

    restaurantElement.appendChild(Listrestaurant);
  });
};

restaurantList(resto.restaurants);
