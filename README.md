#TMDB TEST EXPRESS
<br>
<br>
### Project details
<br>
This is a team project. We have two objectives: learn how to do teamwork and start to work with endpoints. We use TMBD api to find some endpoints to work with. Then we have to verify our code with Postman app. 
<br>
- Start date: 18 May 2021
- Delivery date: 23 May 2021
- Dedicated time: <15 hours 

<br>
<br>
<br>
<img src="./readmeIMG/img01.png" style="width: 100%">
<br>
<br>
<br>
## Tech

- JAVASCRIPT
- POSTMAN
<br>
<br>

<img src="./readmeIMG/img03.png" style="width: 100%">
<br>
## Commands to search
<br>
### ANYBODY
<br>
GET Allmovies
- movies/allmovies
<br>
GET To search by title
- movies/bytitle/:title
<br>
GET To search by id
- movies/byid/:id
<br>
GET To search by genre
- movies/bygenre/:genre
<br>
GET To search by actor
- movies/byactor/:actor
<br>
GET To search by movies are in theathers right now
- movies/nowplaying
<br>
GET To search by popularity
- movies/popular
<br><br><br><br>
#### NEW USER
POST Create new user 
- /users
- Body attributes: mame, lastname, email, country, city, cp, password
<br>
POST Login
- /login
- Body attributes: email, password
<br><br><br><br>
### ADMIN
GET All orders
- /orders
<br>
GET All users
- /users/allUsers
<br>
POST Orders by city
- /orders/bycity
- Body attributes: city
<br>
POST Find user by name
- users/byname
- Body attributes: name
<br>
POST Find users by email
- users/byemail
- Body attributes: email
<br>
DEL Delete user by id
- users/delete
- Body attributes: id
<br>
DEL Delete order
- orders/delete
- Body attributes: orderid
<br>
POST Create movie
- movies/createmovie
- Body attributes: title
<br>
DEL Delete movie
- movies/deletemovie
- Body attributes: title
<br><br><br><br>

<img src="./readmeIMG/img04.png" style="width: 100%">