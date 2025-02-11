# Contact Management API

## Overview

### The Contact Management API is a RESTful service built using Node.js and Express.js, with MongoDB as the database. This API allows users to perform CRUD operations on contacts, including searching by name or email.

# Features

#### Fetch all contacts
#### Fetch a contact by ID
#### Create a new contact
#### Update an existing contact
#### Delete a contact
#### Search contacts by name or email
#### Input validation using express-validator
#### Proper error handling & HTTP status codes
#### Clean code practices with modular structure

# Technologies Used

#### Node.js & Express.js (Backend)

#### MongoDB & Mongoose (Database)

#### express-validator (Data validation)

#### Git (Version control)

# API Endpoints

### 1. Fetch All Contacts
  ##### Added one more key indicating total Contacts present in database
    Endpoint: GET /api/v1/contacts
    Response:
    {
    "totalContacts": 2,
    "allContacts": [
        {
            "_id": "67aa699186562967948721a2",
            "name": "Alice Johnson",
            "email": "alice1@example.com",
            "phone": "1112223333",
            "address": "789 Road, TX",
            "createdAt": "2025-02-10T21:03:13.590Z",
            "__v": 0
        },
        {
            "_id": "67aa81673abdc2fd76424463",
            "name": "Rupendra Johnson",
            "email": "rupee@example.com",
            "phone": "1112223333",
            "address": "789 Road, TX",
            "createdAt": "2025-02-10T22:44:55.231Z",
            "__v": 0
        }
    ]
    }
