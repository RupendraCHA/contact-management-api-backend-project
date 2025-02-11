# Contact Management API
### Remainder Text: 
    to match API endpoints with industry standerds took liberty in creating like this: /api/v1/{given endpoint}
    
    Fetch all contacts: GET /api/v1/contacts

    Fetch Contact by ID: GET /api/v1/contacts/:id

    Creating a New Contact: POST /api/v1/contacts

    Updating a Existing Contact: PUT /api/v1/contacts/:id

    Delete a Contact by ID: DELETE /api/v1/contacts/:id

## API Service Deployed on Render:

#### Deployed URL: https://contact-management-api-backend-project.onrender.com/

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

  #### If Request Successful

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts

    Status Code: 200 (ok)
    
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

#### If any network errors etc are there:

    Status Code: 500 (Internal Server Error)

    Response: {"message": "Server Error"}
    
### 2. Fetch Contact by ID

    Endpoint: GET api/v1/contacts/:id

#### If ID exists

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/67aa699186562967948721a2

    Status Code: 200 (ok)
    
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

    Status Code: 404 (Not Found)
    
    Response:
    {
    "message": "Contact not found"
    }

  #### If ID Not provided or given random one  or not in format of Object ID in MOngoDB
  
    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/123acbrt

    Status Code: 500 (Internal Server Error)
    
    Response:
    {
    "message": "Server Error - Invalid ID"
    }

### 3. Create a New Contact

    Endpoint: POST /api/v1/contacts

#### If all input fields given correctly


    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts
    
    Request Body:
        {
      "name": "Sachin Tendulkar",
      "email": "sachin@gmail.com",
      "phone": "1112223333",
      "address": "789 Road, Mumbai"
        }

    Status Code: 201 (Created)

    Response: 
        {
        "message": "Contact created Successfully",
        "contact": {
            "name": "Sachin Tendulkar",
            "email": "sachin@gmail.com",
            "phone": "1112223333",
            "address": "789 Road, Mumbai",
            "_id": "67aaeaae22e7b18f19f04296",
            "createdAt": "2025-02-11T06:14:06.340Z",
            "__v": 0
                }
        }
        

#### If same email is sent in request body

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts

    Request Body:
        {
      "name": "Sachin Tendulkar",
      "email": "sachin@gmail.com",
      "phone": "1112223333",
      "address": "789 Road, Mumbai"
        }

    
    Status Code: 409 (Conflict)
    
    Response: 
        {
            "message": "This Email already exists! - sachin@gmail.com"
        }
#### If request is sent with empty fields

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts

    Request Body:
        {
      "name": "",
      "email": "",
      "phone": "",
      "address": "789 Road, Mumbai"
        }

    
    Status Code: 400 (Bad Request)

    Response:
        {
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "Name is required",
            "path": "name",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "Invalid email format",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "Phone number is required",
            "path": "phone",
            "location": "body"
        }
    ]
    }
### 4. Update a Contact
    Endpoint: PUT /api/v1/contacts/:id

#### If ID exists

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/67aa77234d7a4d09ad21da5f
    
    Request Body:
        {
        "name": "Alice Johnson",
        "email": "aliceJohn@example.com",
        "phone": "1112223333",
        "address": "789 Road, TX"
        }

    Status Code: 200 (ok)

    Response:
        {
    "_id": "67aa77234d7a4d09ad21da5f",
    "name": "Alice Johnson",
    "email": "aliceJohn@example.com",
    "phone": "1112223333",
    "address": "789 Road, TX",
    "createdAt": "2025-02-10T22:01:07.221Z",
    "__v": 0
    }

#### If ID doesn't exists

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/67aa77234d7a4d09ad21da5a
    
    Request Body:
        {
        "name": "Alice Johnson",
        "email": "aliceJohn@example.com",
        "phone": "1112223333",
        "address": "789 Road, TX"
        }

    Status Code: 404 (Not Found)

    Response:
        {
    "message": "Contact not found"
    }
#### If ID Not provided or given random one  or not in format of Object ID in MOngoDB
  
    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/123acbrt

    Status Code: 500 (Internal Server Error)
    
    Response:
    {
    "message": "Server Error - Invalid ID"
    }

### 4. Delete a Contact by ID
    Endpoint: DELETE /api/v1/contacts/:id

#### If ID Exists

    Request: Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/67aa77234d7a4d09ad21da5f

    Status Code: 200 (ok)

    Response:
        {
    "message": "Contact deleted successfully"
    }

#### If ID doesn't exists

    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/abaa77234d7a4d09ad21dacd

    Status Code: 404 (Not Found)

    Response:
        {
    "message": "Contact not found"
    }
#### If ID Not provided or given random one  or not in format of Object ID in MOngoDB
  
    Request: https://contact-management-api-backend-project.onrender.com/api/v1/contacts/123acbrt

    Status Code: 500 (Internal Server Error)
    
    Response:
    {
    "message": "Server Error - Invalid ID"
    }
