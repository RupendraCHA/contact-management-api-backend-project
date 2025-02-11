# Contact Management API
    Remainder: to match API endpoints with industry standerds took liberty in creating like this: /api/v1/{given endpoint}
    
    Fetch all contacts: GET /api/v1/contacts

    Fetch Contact by ID: GET api/v1/contacts/:id

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

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts
    
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
### 2. Fetch Contact by ID
    Endpoint: GET api/v1/contacts/:id

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/67aa699186562967948721a2
    
    Response:
    {
    "_id": "67aa699186562967948721a2",
    "name": "Alice Johnson",
    "email": "alice1@example.com",
    "phone": "1112223333",
    "address": "789 Road, TX",
    "createdAt": "2025-02-10T21:03:13.590Z",
    "__v": 0
    }

  #### If ID not Found:
  
    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/67aa69918656296794872abc
    
    Response:
    {
    "message": "Contact not found"
    }

  #### If ID Not provided or given random one  or not in format of Object ID in MOngoDB
  
    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/123acbrt
    
    Response:
    {
    "message": "Server Error - Invalid ID"
    }
