// Contact Model Schema
import ContactModel from "../models/contactManagementSchema.js";

// validationResult is a function from the express-validator library that collects and checks validation errors
import { validationResult } from "express-validator";


//Controller for getting all contact details
export const getAllContactDetails = async (req, res) => {
    try {
        const contacts = await ContactModel.find()
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

export const getContactDetailsByID = async (req, res) => {
    try {
        const contact = await ContactModel.findById(req.params.id)
        if (!contact) return res.status(404).json({ message: "Contact not found" });
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

// Controller for creating a new contact
export const createNewContact = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const newContact = new ContactModel(req.body)
        await createNewContact.save()
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

// Controller for updating a existing contact by ID
export const updateExistingContactByID = async (req, res) => {
    try {
        const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) return res.status(404).json({ message: "Contact not found" });
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
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
        res.status(500).json({ message: "Server Error" });
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
export const searchContactByEmailOrName = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) return res.status(400).json({ message: "Search query is required" });
    
        const contacts = await ContactModel.find({
          $or: [
            { name: { $regex: query, $options: "i" } },
            { email: { $regex: query, $options: "i" } },
          ],
        });
    
        res.status(200).json(contacts);
      } catch (error) {
        res.status(500).json({ message: "Server Error" });
      }
}