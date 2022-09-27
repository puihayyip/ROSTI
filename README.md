# ROSTI (Restaurant Ordering SysTem Inc)

## Introduction

A group project built by Yip Pui Hay and Chen Liyi as part of General Assembly's 12 weeks bootcamp's curriculum. A mock restaurant ordering system similar to the ones built by Aigens present for many restaurants nowadays.

This project is built using the following stack:

- Frontend: **_Javascript with React + JQuery_**
- Backend: **_NodeJS with Express_**
- Database: **_MongoDB_**
- Styling: **_MaterialUI_**
- Authentication: **_JsonWebToken_**
- Additional libraries used:
  - Number formatting: **_NumeralJS_**

## MVP (Minimal Viable Product)

There are 3 users to choose from at the front page, namely table, kitchen, cashier. The work flow is as follows.

1. Table would choose the dishes and submit orders to the kitchen to be processed.
2. Kitchen would review the orders, prepare the dishes and send dishes out to the service crew, then check off the orders.
3. Cashier would be able to review the bill and make neccesary changes before finalizing the bill with the customer.

## Features

User Menu:

- Login/logout
- Create new user

Security:

- Tokens are generated and stored in local storage whenever a user logs in.
- Tokens expires after 3 minutes and a new refresh token would be issued.
- Refresh token would expire in a day and user would be required to login again.
- Different users are only authorized to submit requests according to their user profile.

## **App Structure**

Backend

```
📦Backend
 ┣ 📂controllers
 ┃ ┣ 📜allFoodController.js
 ┃ ┣ 📜authController.js
 ┃ ┣ 📜orderController.js
 ┃ ┗ 📜usersController.js
 ┣ 📂models
 ┃ ┣ 📜allFoodSeed.js
 ┃ ┣ 📜allOrdersSeeds.js
 ┃ ┣ 📜allUsersSeed.js
 ┃ ┣ 📜foodSeed.schema.js
 ┃ ┣ 📜ordersSeed.schema.js
 ┃ ┣ 📜usersSeed.schema.js
 ┃ ┗ 📜.package-lock.json
 ┣ 📜.env
 ┣ 📜.env.example
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜server.js

```

Frontend

```
📦Frontend
┣ 📂public
┃ ┗ 📜index.html
┣ 📂src
┃ ┣ 📂pages
┃ ┃ ┣ 📂CashierComponents
┃ ┃ ┃ ┣ 📜CompEditOrderButtons.jsx
┃ ┃ ┃ ┣ 📜CompEditOrderList.jsx
┃ ┃ ┃ ┣ 📜CompFinalOrderButtons.jsx
┃ ┃ ┃ ┣ 📜CompFinalOrderList.jsx
┃ ┃ ┃ ┣ 📜CompMapEdit.jsx
┃ ┃ ┃ ┣ 📜CompMapTableRow.jsx
┃ ┃ ┃ ┣ 📜ViewMainCashier.jsx
┃ ┃ ┃ ┣ 📜ViewReceipt.jsx
┃ ┃ ┃ ┗ 📜ViewTableBill.jsx
┃ ┃ ┣ 📂GeneralComponents
┃ ┃ ┃ ┣ 📜CashierHeader.jsx
┃ ┃ ┃ ┣ 📜LogoutDialog.jsx
┃ ┃ ┃ ┣ 📜MainHeader.jsx
┃ ┃ ┃ ┣ 📜ScrollToTopBtn.jsx
┃ ┃ ┃ ┗ 📜ScrollToTopBtn.module.css
┃ ┃ ┣ 📂KitchenComponents
┃ ┃ ┃ ┣ 📜ButtonfalseCooked.jsx
┃ ┃ ┃ ┣ 📜ButtonfalseServed.jsx
┃ ┃ ┃ ┣ 📜ButtontrueCooked.jsx
┃ ┃ ┃ ┣ 📜ButtontrueServed.jsx
┃ ┃ ┃ ┣ 📜CompButtonsKitchen.jsx
┃ ┃ ┃ ┣ 📜CompButtonsService.jsx
┃ ┃ ┃ ┣ 📜CompOrderList.jsx
┃ ┃ ┃ ┗ 📜ViewMainKitchen.jsx
┃ ┃ ┣ 📂MainPage
┃ ┃ ┃ ┣ 📜AddUsers.jsx
┃ ┃ ┃ ┣ 📜Login.jsx
┃ ┃ ┃ ┗ 📜UserSelection.jsx
┃ ┃ ┗ 📂OrderTabComponents
┃ ┃ ┃ ┣ 📜FoodItem.jsx
┃ ┃ ┃ ┣ 📜Head.jsx
┃ ┃ ┃ ┣ 📜MainComponent.jsx
┃ ┃ ┃ ┣ 📜Order.jsx
┃ ┃ ┃ ┣ 📜SideTab.jsx
┃ ┃ ┃ ┣ 📜SideTabAddButton.jsx
┃ ┃ ┃ ┣ 📜SideTabMessage.jsx
┃ ┃ ┃ ┗ 📜SideTabRunningTab.jsx
┃ ┣ 📜App.css
┃ ┣ 📜App.js
┃ ┣ 📜index.css
┃ ┗ 📜index.js
┣ 📜.env
┣ 📜.gitignore
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜README.md
```
