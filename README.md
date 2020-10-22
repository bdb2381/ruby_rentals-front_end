## Welcome to Ruby Rentals: Frontend

# Description 
Owners of small to mid-size outdoor adventure gear (camping, bikes, skies, etc) rental companies can offer their equipment rentals online. The customer can see current available inventory, prices and make a reservation. This is an early beta of the user/client side.



## Installations
- Fork and clone repository.
- Navigate to the cloned the repository.
- Install `yarn` with `yarn install` and then run `yarn start`.

## Current Features 
- Login.
- View all equipment. 
- Select start and return date plus equipment quantity .
- Add items to the cart.
- Remove items from the cart.
- Checkout items.
- Mobile ready

## In the Pipeline features
- Validations - dates - require start date X days in advance of today.
- Validations - date - end date after start date
- inventory - show availability based on selected days
- inventory - can't book 0 items 
- inventory - disallow selecting of quantity until days are selected 
- inventory - persist to the database which inventory item was selected and mark as unavailable
- history - show user rental history (user's view)

## Future Features
- Search
- Filter
- Credit Card Processing
- Email confirmation
- Admin portal
- Integration with owner website design 

## Built With
- React & Javascript
- CSS
- Redux
- React Router

## Backend
https://github.com/bdb2381/ruby_rentals-back_end