import mongoose from "mongoose"

const contactManagementSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true},
    address: {type: String},
    createdAt: {type: Date, default: Date.now}
})

const ContactModel = mongoose.model("contactDetails", contactManagementSchema)

export default ContactModel