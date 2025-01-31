# Javascript 2 Assignment: eCommerce with React

## Project description
This was the final assignment in the Javascript 2-course at the Front End Developer programme. 
Our task was to create an e-shop website, using the React Javascript library. 

In the shop, the user is able to browse products, add them to a shopping cart and place an order with the added products. The user is also able to remove one or all products from the shopping cart, and send a message via a contact form.

The purpose of the project was to develop our Javascript skills further and learn how to use components and APIs in order to render, navigate and handle stored data on a website.<br/>The project was created using the Vite build tool with Javascript, and styled using CSS and the Tailwind framework. React Router was used in order to navigate between the website’s pages, and the Context API was used in order to store information while using the website (such as storing products in the shopping cart). A Javascript file with validating functions was used in order to validate forms, and the Fetch API was used to fetch products and post messages and orders to an external API.

This project was a fun challenge. It did take some time for me to understand and get the hang of using the Context API, and so I sadly didn’t have the time to implement a register user or login function, which I had wished for. But I am very happy with what I managed to create and how much I’ve learned throughout this course. 

## Installation
To launch the website, first make sure that you have NodeJs installed. 

Clone the repository: `https://github.com/veraaa99/INL-MNINGSUPPGIFT---Javascript-2.git` or download it as a zip-file and unpack it.<br/>

Open up the project in eg. your development environment and open up a new terminal.<br/>First run the `npm install` command, followed by `npm run dev`.<br/>Finally, launch the presented `localhost`-link in your desired browser.

## Usage & features
Use the nav bar on top to navigate between the site’s different pages.

At the Home and Products-pages, you’re able to browse and view a handful of products, including images and their price. To add an item to your shopping cart, set the amount with the item’s corresponding - and + buttons, and press the **Add to cart**-button.<br/>To view all the images and the description of a product, click on its name or image and you will be taken to a product details-page. You can press each image in order to display it in a bigger size, and also add the item to your shopping cart from this page too.

Press the shopping cart to view your shopping list. Here, you can add or remove items using the + and - buttons, or clean your cart by pressing the  **Delete all items**-button. If the shopping cart is empty, a message will inform the user about this. 

In order to navigate to the checkout page, press the  **Checkout**-button in the shopping cart. You will be taken to a page where you can review your order, and add or remove any amount of your products if you desire.<br/>To place an order, fill in the form at the bottom (Name, email and message), and press the **Submit**-button. You will then be informed that your cart is empty, and that your order has been successfully placed.

To send a message, go to the Contacts-page via the nav bar. Fill in your name, email and your message in the displayed form, press the **Submit**-button, and you will be greeted with a message confirming that your message has been successfully submitted. 

## Credits
The images used in the API and on the website are taken from Komplett.se, and do not belong to me or my school. We do not own the rights to these images, and they are only used for the purpose of this school assignment.

I would like to once again thank my teacher, for their very clear lectures, support, and making Front End Development all the more fun to learn!

