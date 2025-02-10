import express from "express"


// import Contact Details Controller Functions
import { 
    getAllContactDetails, 
    createNewContact, 
    getContactDetailsByID, 
    updateExistingContactByID, 
    deleteContactByID, 
    searchContactByEmailOrName } 
from "../controllers/contactDetailsController.js"

import {body, param} from "express-validator"



const contactRouter = express.Router()


// Route for Fetching All Contacts Details
contactRouter.get("/contacts", getAllContactDetails)

//Route for fetching a Contact details by ID
contactRouter.get("/contacts/:id",param("id").isMongoId(), getContactDetailsByID)


// Route for Creating new Contact

// Kindly check below for understanding the syntax

// body("name").notEmpty() → Ensures name is not empty.
// body("email").isEmail() → Ensures email is in a valid format.
// body("phone").notEmpty() → Ensures phone is not empty.

contactRouter.post("/contacts", [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("phone").notEmpty().withMessage("Phone number is required"),
  ], getAllContactDetails)

  
// Route for updating the existing Contact by ID
contactRouter.put("/contacts/:id",param("id").isMongoId(), updateExistingContactByID)

// Route for deleting a Contact by ID
contactRouter.delete("/contacts/:id",param("id").isMongoId(), deleteContactByID)

// Route for searching a Contact by Email or Name
contactRouter.get("/contacts/search", searchContactByEmailOrName)

export default contactRouter