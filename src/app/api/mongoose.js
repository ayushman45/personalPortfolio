const mongoose = require('mongoose');

mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


// Define the schema
const requestSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true,
        enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD']
    },
    headers: {
        type: [{}],
        default: [{}]
    },
    body: {
        type: Object,
        default: {}
    },
    title:{
        type: String,
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt timestamps
});

// Create the model
const Request = mongoose.models.Request || mongoose.model('Request', requestSchema);

module.exports = Request;