
# Order App
## Requirements
1. Responsible for order manangement
2. Each order can be at the single state at the time
3. Order states - created, confirmed, delivered, cancelled
4. After order was created Orders App should trigger Payments App call to process a payment for the current order.
5. Orders App updates order based on the response from the Payments App
6. After X amount of seconds confirmed orders should automatically be moved to the delivered state.
### Before you start
Create a .env file under the root directory. You may refer to .env.example for the variable used.

Run `npm install` to install necessary library into the project. 


#### Run the following command to create database and migrate table

`npx sequelize-cli db:create && npx sequelize-cli db:migrate`

### How to start
Run `npm start` to start the server.

You may need to start the Payment App before calling the create order API.
