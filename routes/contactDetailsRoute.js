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



const contactRouter = express.Router()


// Route for Fetching All Contacts Details
contactRouter.get("/contacts", getAllContactDetails)

//Route for fetching a Contact details by ID
contactRouter.get("/contacts/:id", getContactDetailsByID)


// Route for Creating new Contact
contactRouter.post("/contacts", getAllContactDetails)

// Route for updating the existing Contact by ID
contactRouter.put("/contacts/:id", updateExistingContactByID)

// Route for deleting a Contact by ID
contactRouter.delete("/contacts/:id", deleteContactByID)

// Route for searching a Contact by Email or Name
contactRouter.delete("/contacts/search", searchContactByEmailOrName)

export default contactRouter