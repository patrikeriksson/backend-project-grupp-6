# backend-project-grupp-6

# Airbean API


## The assignment:

"In this group project, you will create an API for the web app Airbean where users can order coffee and have it delivered by drone (drones are not included in the assignment). Note: You do not need to create any frontend; your task is only the backend."

## Start up the project:

<<<<<<< HEAD
1. In the terminal, write git clone INSERT THE LINK TO YOUR GITHUB REPOSITORY HERE
=======
1. In the terminal, write git clone INSERT THE LINK TO THE GITHUB REPOSITORY HERE
>>>>>>> origin/main

2. Ensure you have Node.js installed, then write npm install in the terminal

3. In the terminal write npm run dev to start the development server.

4. To test out the application, make sure you have Insomnia or Postman installed on your computer.

# API documentation

## Base URL:
http://localhost:8000

## Endpoints:

### 1.
URL: /menu
Method: GET
Description: This endpoint returns the entire menu.
<<<<<<< HEAD
res:
[
	{
		"id": 1,
		"title": "Bryggkaffe",
		"desc": "Bryggd på månadens bönor.",
		"price": 39,
		"preptime": 5
	},
	{
		"id": 2,
		"title": "Caffè Doppio",
		"desc": "Bryggd på månadens bönor.",
		"price": 49,
		"preptime": 7
	},
	{
		"id": 3,
		"title": "Cappuccino",
		"desc": "Bryggd på månadens bönor.",
		"price": 49,
		"preptime": 8
	},
	{
		"id": 4,
		"title": "Latte Macchiato",
		"desc": "Bryggd på månadens bönor.",
		"price": 49,
		"preptime": 7
	},
	{
		"id": 5,
		"title": "Kaffe Latte",
		"desc": "Bryggd på månadens bönor.",
		"price": 54,
		"preptime": 6
	},
	{
		"id": 6,
		"title": "Cortado",
		"desc": "Bryggd på månadens bönor.",
		"price": 39,
		"preptime": 5
	}
]
=======

>>>>>>> origin/main

### 2.
URL: /about
Method: GET
Description: This endpoint returns information about the company.
<<<<<<< HEAD
res:
[
	{
		"title": "Air Bean",
		"desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae condimentum neque. Suspendisse nec sollicitudin orci, vel tristique nisl. Ut in diam id odio efficitur laoreet. Sed sed massa consequat, malesuada neque eu, placerat orci. Nam molestie, enim eget malesuada finibus, tellus sem efficitur tortor, eget maximus erat lacus in."
	}
]
=======

>>>>>>> origin/main

### 3.
URL: /order
Method: POST
Header: Authorization: Bearer <token>
Description: This endpoint allows authenticated users to create a new order.
<<<<<<< HEAD
req:
{
  "title": "Kaffe Latte",
	"price": 54
}
res:
{
	"items": [
		{
			"title": "Cortado",
			"price": 39,
			"preptime": 5,
			"_id": "0jvouLw5Yd7F0WUV"
		},
		{
			"title": "Cortado",
			"price": 39,
			"preptime": 5,
			"_id": "5ZJNSFKOedz74zmQ"
		}
	],
	"totalPrice": 78,
	"delivery": "2024-06-06T08:59:08.913Z",
	"message": "Order created successfully"
}
=======
>>>>>>> origin/main

URL: /order/user/:userId
Method: GET
Description: This endpoint shows a list of all your orders, and the total sum.
<<<<<<< HEAD
HÄR MÅSTE DET SKRIVAS NÅGOT!!
=======
>>>>>>> origin/main

URL: /order/:orderId
Method: GET
Description: This endpoint shows the status of a specific order.
<<<<<<< HEAD
HÄR MÅSTE DET SKRIVAS NÅGOT!!
=======

>>>>>>> origin/main

### 4.
/user

URL: /user/register
Method: POST
Description: This endpoint allows a new user to register.
<<<<<<< HEAD
req:
{
  "username": "vickan",
	"password": "12345"
}
res:
{
	"username": "vickan",
	"password": "$2b$10$Fh7Xk8MowBONZvLdKqrGy.ynY3pMANtGlrIFTVJDXnZfTGLLyFHm6",
	"_id": "W3Y2rTOP0D7BSfPo"
}
=======
>>>>>>> origin/main

URL: /user/login
Method: POST
Description: This endpoint allows a user to log in.
<<<<<<< HEAD
req:
{
	"username": "vickan",
	"password": "$2b$10$Fh7Xk8MowBONZvLdKqrGy.ynY3pMANtGlrIFTVJDXnZfTGLLyFHm6"
}
res:
{
	"message": "Login successful"
}
=======
>>>>>>> origin/main

URL: /user/logout
Method: POST
Description: This endpoint allows a user to log out.
<<<<<<< HEAD
req:
{
	"username": "vickan",
	"password": "$2b$10$Fh7Xk8MowBONZvLdKqrGy.ynY3pMANtGlrIFTVJDXnZfTGLLyFHm6"
}
res:
{
	"message": "Logged out successfully"
}
=======

>>>>>>> origin/main

### 5.
URL: /cart
method: POST
Description: this endpoint allow a user to add an item to their cart.
<<<<<<< HEAD
req:
{
  "title": "Cortado",
	"price": 39
}
res:
{
	"title": "Cortado",
	"price": 39,
	"preptime": 5,
	"message": "Added to cart successfully"
}
=======
>>>>>>> origin/main

URL: /cart
method: GET
Description: this endpoint returns the current contents of the cart along with the total price.
<<<<<<< HEAD
res:
{
	"cart": [
		{
			"title": "Cortado",
			"price": 39,
			"preptime": 5,
			"_id": "0jvouLw5Yd7F0WUV"
		},
		{
			"title": "Cortado",
			"price": 39,
			"preptime": 5,
			"_id": "5ZJNSFKOedz74zmQ"
		},
		{
			"title": "Kaffe Latte",
			"price": 54,
			"preptime": 6,
			"_id": "bNNBB23xTwhcwLZA"
		}
	],
	"totalPrice": 132
}
=======
>>>>>>> origin/main

URL: /cart/:id
method: DELETE
Description: This endpoint allows a user to remove an item from their cart by specifying the item's ID in the URL.
<<<<<<< HEAD
res:
{
	"message": "Order removed successfully"
}
{
	"cart": [
		{
			"title": "Cortado",
			"price": 39,
			"preptime": 5,
			"_id": "0jvouLw5Yd7F0WUV"
		},
		{
			"title": "Cortado",
			"price": 39,
			"preptime": 5,
			"_id": "5ZJNSFKOedz74zmQ"
		}
	],
	"totalPrice": 78
}
=======



>>>>>>> origin/main

### Security
All endpoints that require authentication use JWT (JSON Web Token) to secure the API

. Send the JWT token in the Authorization header with each request that requires authentication.


### Contributors:
Linnea Sjöholm
Patrik Eriksson
Lina Persson Signell
Jens Alm
Victoria Sten Åsenius


#### License:
<<<<<<< HEAD
"ISC"
=======
"ISC"
>>>>>>> origin/main
