## Completed
- Dynamic display of inventory amount
- Persist dates to db 

## Validations on Inventory Page To Do (in rough order)
- Check start date is 24 hours after today
- Set this as variable to make it extend into a lead time)
- Check return date is after start date. Q - Have a max checkout date range? 
- Check item availability and render inventory numbers based on availability for the date range entered. Hide/gray out item availability until dates entered
- Check that at least 1 item is selected
- If all above is valid, change color of ‘add to cart button’ 
- Q- Upon add to cart, optimistically change availability in the backend even if cart is not checked out?  
- Upon checkout, mark inventory rental_status as false (unavailable, rented out) the requested number of requested items (1 or more items)

## Future Validations/Enhancements
- gray out items until previous step is complete. ie can't select return date until start date is entered. Can't see availability until dates entered 