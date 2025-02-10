// Contact Model Schema
import ContactModel from "../models/contactManagementSchema.js";

// validationResult is a function from the express-validator library that collects and checks validation errors
import { validationResult } from "express-validator";


//Controller for getting all contact details
export const getAllContactDetails = async (req, res) => {
    try {
        const contacts = await ContactModel.find()
        res.status(200).json({totalContacts: contacts.length, allContacts:  contacts})
    } catch (error) {
        return res.status(500).json({ message: "Server Error - Invalid ID" });

    }
}

export const getContactDetailsByID = async (req, res) => {

    try {
        const {id} = req.params
        
        const contact = await ContactModel.findOne({_id: id})
        if (!contact) return res.status(404).json({ message: "Contact not found" });
        return res.status(200).json(contact);
    } catch (error) {
        return res.status(500).json({ message: "Server Error - Invalid ID" });
    }
}

// Controller for creating a new contact
export const createNewContact = async (req, res) => {

    const {name, email, phone} = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const contact = await ContactModel.findOne({email})
    // console.log(contact)

    if (contact) return res.json({message: `This Email already exists! - ${contact.email}`})

    try {
        const newContact = new ContactModel(req.body)
        await newContact.save()
        return res.status(201).json({message: "Contact created Successfully",contact: newContact});
    } catch (error) {
        return res.status(500).json({ message: "Server Error - provide correct details" });
        
    }
}

// Controller for updating a existing contact by ID
export const updateExistingContactByID = async (req, res) => {
    try {

        const contact = await ContactModel.findOne({_id: req.params.id})
        if (!contact) return res.status(404).json({ message: "Contact not found" });


        const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedContact);
    } catch (error) {
        return res.status(500).json({ message: "Server Error - Invalid ID" });

    }
}


// Controller for deleting a contact by ID
export const deleteContactByID = async (req, res) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id);
        if (!deletedContact) return res.status(404).json({ message: "Contact not found" });
        res.status(200).json({ message: "Contact deleted successfully" });
      } 
      catch (error) {
        return res.status(500).json({ message: "Server Error - Invalid ID" });

      }
}


// Controller for searching a contact by Email or Name

// Kindly check below for the meaning of the syntax

// $or: [
//     { name: { $regex: query, $options: "i" } },
//     { email: { $regex: query, $options: "i" } },
//   ],

// $regex: query - This applies a regular expression (pattern matching) to search for the given query in both the name and email fields.
// $options: "i" - The "i" flag makes the search case-insensitive, meaning "John" and "john" will match the same results.
// $or - Ensures that either name or email matches the given search term.

// GET /contacts/search?query=alice
export const searchContactByEmailOrName = async (req, res) => {
    try {
    
        const query = req.params.query; // Extract query from route parameter
        if (!query || query === "") {
          return res.status(400).json({ message: "Search term is required" });
        }
    
        // Search in name or email
        const contacts = await ContactModel.find({
          $or: [
            { name: new RegExp(query, "i") },
            { email: new RegExp(query, "i") }
          ]
        });
    
        if (contacts.length === 0) {
          return res.status(404).json({ message: "No contacts found" });
        }
    
        res.status(200).json(contacts);
      } catch (error) {
        console.error("Error searching contacts:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
}