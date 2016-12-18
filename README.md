# VapeNique
Check it out here, now deployed on --> https://vapenique.herokuapp.com/
***
## Concept:
The ‘VapeNique’ app concept consist of a personal library of your own generated vape juice recipes. This app will include a calculator to insure a user is using the correct measurements necessary for different bottle sizes, and different nicotine levels. These homemade recipes will be saved to each individual user in their concoctions profile. Along with options to improve or remove individual recipes, a built in Flavor Chat to collaborate recipes with users, company flavorings, and general talk with fellow e-juice creators.

***
## Known Bugs:
- Unable to add ingredients/measurements, as of now only recipe names, nicotine level and millileter size are unique to each users uniqueness.
- Delete Functionallity is within models and routes, unable to connect and grab user's unique 'user_id' (still trying to debug)
- Sign Up / Log In via localhost allows adding unlimited unique users with encrypted password and profiles, unfortunately deploying on Heroku is onyl allowing ONE user.

*** 

User Login
### Username = yo
### Password = yo

***

## Going Forward:
- Would like to fix any bugs listed above
- Would like to add features showing Sign up was successful, and Login Was successful with maybe adding a user's personal name to the window.
- Adding d3 chart or charjs like planned in wireframes showing User unput with ingredients
- Fix slight refrences within database tables


***
## Technologies:

- React.js
- Node.js
- WebSocket
- Node and Express server
- PSQL: the app will have user authentication and tables to store recipes with specific user relations as they are similar to diary entries

***
## User Stories:

- Vape Shop Employee: From a personal experience, handful of vape shops make their own e-juice on the spot as a designated juice bar. Customers request specialized juices with a variation of flavors, flavor percentages, and flavor profiles. The method of choice is to save these new creations on a scrap piece of paper and store it within a binder in hopes you will not lose your customers favorite juice recipe. This changes into an organizer for these recipes, as well as a calculator, because mental math isn’t everyones strongest asset.

- DIY-er: Fellow vape enthusiasts is tired or paying all this money for ‘premium’ juice and sees a new hobby within making their own e-juice.  Maybe this said vape would have an amazing idea for a juice not done yet with a twist of their own to it, creating a place to develop recipes for different vape ideas. and options to update these recipes leave no worry of wether it is version 1, version 4, version 17...

***
## Wireframes:
![wireframep4](https://git.generalassemb.ly/storage/user/66/files/567f56ec-bd37-11e6-9fa7-13a38a1d3310)
***
## Timetable:

- Dec-7: Setting up database schema and component structure.
- Dec-8: Set up webpack & server (basic skeleton)
- Dec-9: connect to db, set up user authorization & specific routes
- Dec-10: Notes CRUD functionality (math portion of measurements)
- Dec-11: Notes CRUD functionality
- Dec-12: Web Socket implementation
- Dec-13: Test functionality styling
- Dec-14: debugging & styling

***
## Key Challenges:

- Implementing Websockets for the first time
- Ensuring individuality with user auth
- Time Management
- Data Base Issues
- Deployment
