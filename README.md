# Netwila Coding Challenge

## JWT Authentication API
<p align = 'center'>
    <img src="./screenshots/challenge.gif" width="60%">
</p>

## About:
- This simple React.js application demonstrates client to server data flow through sample user sign-up system
- When a user signs up, their account information is sent to a Express.js middleware that places their information in a mock database
- When a user logs in, the Express.js middleware generates and returns a JWT token containing the users credentials,which is then stored locally in the web browser
- Users can fetch their account information on the Home page, this action sends the JWT token stored locally to the Express.js middleware which then decrypts and fetches the users information from the mock database

- **Client Repository**: the client was bootstrapped via create-react-app, thus is stored in its own git repository which can be viewed here: https://github.com/SasankG/nwchallenge-client

## Technologies:
- **Client**: The front end of the application was built using the following technologies:
    - **React.js**: **React-Router**, **Bootstrap 4**
- **Server**: The server was built using the following technologies
    - **Node.js**: **Express.js**, **jsonwebtoken**

## Author
- Sasank Ganapathiraju