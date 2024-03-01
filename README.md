# Bank Transactions Management Application

## Overview

This application serves as a tool for managing transactions, providing users with the ability to add, edit, and delete transactions. Built with React and designed for simplicity and efficiency, the Transactions Management Application aims to streamline the process of tracking financial transactions.

## Transactions Management Backend


[Bank Transactions Management Backend Link](https://github.com/MichaelARestrepoross/project-budgeting-app-backend)


## Frontend Features

- **Add Transactions**: Users can add new transactions by providing details such as item name, amount, date, source, and category.
- **Edit Transactions**: Modify existing transactions, updating information like item name, amount, date, source, and category as needed.
- **Delete Transactions**: Remove transactions from the system, keeping the transaction list organized and up to date.
- **Transaction Type Identification**: Transactions are categorized as additions, deductions, or neutral based on the amount, providing visual cues for financial status.
- **Responsive Design**: The application is designed to be responsive, ensuring optimal usability across various devices and screen sizes.

## Frontend Technology Stack

- **Frontend**: Developed using React.js, leveraging functional components and hooks for state management.
- **Styling**: CSS for styling, ensuring a clean and intuitive user interface.
- **Routing**: Utilizes React Router for navigation between different views and components.
- **HTTP Requests**: Integrates with a backend API for handling CRUD operations on transactions.

## Getting Started Locally

Follow these steps to run the Transactions Management application on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**

    ```sh
    git clone <repository-url>
    cd transactions-management-app
    ```

2. **Install NPM packages**

    ```sh
    npm install
    ```

3. **Start the Application**

    ```sh
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## User Stories

**Add Transactions**
As a user, I want to be able to add new transactions by providing details such as item name, amount, date, source, and category.

**Edit Transactions**
As a user, I want the ability to edit existing transactions, allowing me to update information like item name, amount, date, source, and category as needed.

**Delete Transactions**
As a user, I want to delete transactions from the system, ensuring that the transaction list remains organized and up to date.

**Transaction Type Identification**
As a user, I want transactions to be categorized as additions, deductions, or neutral based on the amount, providing visual cues for my financial status.

**Responsive Design**
As a user, I expect the application to be responsive, allowing for optimal usability across different devices and screen sizes.


## Stretch Goals

- **Integrate Axios**: Replace the use of fetch with Axios for making calls to the backend.

- **Color-Coded Transactions**: Implement color-coded transaction displays by assigning classNames to transaction divs. Transactions with a value of 0 should have a default color, positive transactions should be displayed in green, and negative (cash removal) transactions should be displayed in red.
