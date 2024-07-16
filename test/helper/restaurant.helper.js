import supertest from 'supertest';
import { App } from '../../src/main';

import RestaurantModel from '../../src/Application/v1/restaurant/restaurant.model';

export const api = supertest(App);

export const initialRestaurants = [
  {
    name: 'Restaurant 1',
    email: 'restaurant1@gmail.com',
    status: 'active',
    department: 'Chalatenango',
    municipality: 'Chalatenango',
    direction: 'Direction 1',
    phone: '123456789',
    openingHour: '09:00',
    closingHour: '21:00',
    image: {
      public_id: 'test/stock-vector-restaurant-logo-food-service-vector-logo-design-template-insignia-logotype-label-or-badge-454784548_edjrbm',
      secure_url: 'https://res.cloudinary.com/project-tpis/image/upload/v1651445650/test/stock-vector-restaurant-logo-food-service-vector-logo-design-template-insignia-logotype-label-or-badge-454784548_edjrbm.jpg'
    },
    user: '634c687603eaf9e8e0d1828a'
  },
  {
    name: 'Restaurant 2',
    email: 'restaurant2@gmail.com',
    status: 'active',
    department: 'Chalatenango',
    municipality: 'Santa Rita',
    direction: 'Direction 2',
    phone: '987654321',
    openingHour: '09:00',
    closingHour: '21:00',
    image: {
      public_id: 'test/stock-vector-restaurant-logo-food-service-vector-logo-design-template-insignia-logotype-label-or-badge-454784548_edjrbm',
      secure_url: 'https://res.cloudinary.com/project-tpis/image/upload/v1651445650/test/stock-vector-restaurant-logo-food-service-vector-logo-design-template-insignia-logotype-label-or-badge-454784548_edjrbm.jpg'
    },
    user: '634c687603eaf9e8e0d1828a'
  }
];

export const getAllNamesfromRestaurant = async () => {
  const response = await api.get('/v1/restaurants');
  return {
    names: response.body.restaurants.map((restaurant) => restaurant.name),
    response
  };
};
