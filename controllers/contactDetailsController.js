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
        const neContact = new ContactModel(req.body)
        await createNewContact.save()
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

// Controller for updating a existing contact by ID
export const updateExistingContactByID = (req, res) => {

}

// Controller for deleting a contact by ID
export const deleteContactByID = (req, res) => {

}


// Controller for deleting a contact by ID
export const searchContactByEmailOrName = (req, res) => {

}