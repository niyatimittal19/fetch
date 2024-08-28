/** 
* Author: Niyati Mittal
* Date Created: 27 Aug 2024
*
* This is the main startup file, whihc is the entry point for this application.
*/

const express = require('express');
const receiptRoutes = require('./routes/receiptRoutes');

const app = express();
app.use(express.json());

// Register routes
app.use('/receipts', receiptRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

