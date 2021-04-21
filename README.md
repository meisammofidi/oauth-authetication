# oauth-authetication
This is a Token Base Authentication. Use can create a user with username and password.
Login to and get auth token too use for private routes like Articles. To see the lost of Articles or insert new one you always have to pass the toke from header otherwise you would get 'No Token.authorization denied' message.
## Installation

Please follow the structure below 

Install dependencies
```bash
npm install 
```
To run in development mode
```bash
node server.js
```

## Usage
Below you can see all the routes:

Register user\
Public route\
POST http://localhost:3000/api/users/register
Body request
{
    "username": "String",
    "password": "String"
}

Login User\
Public route\
POST http://localhost:3000/api/users/login
Body request
{
    "username": "String",
    "password": "String"
}

Get user info from token\
Private route\
GET http://localhost:3000/api/users/register <br />

Get all aricles\
Private route\
GET http://localhost:3000/api/articles <br />

Insert aricle\
Private route\
POST http://localhost:3000/api/articles \
Body request
{
    "name": "String",
    "author": "String"
}

auth-token=<Token> must be passed in headers for private routes

## Middleware
There is one middleware as auth which is going to add add Token to headers to be useable in all the private routes. So we only need just add this middleware on route

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)