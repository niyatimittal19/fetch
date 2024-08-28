/** 
* Author: Niyati Mittal
* Date Created: 27 Aug 2024
*
* This is the router file, which had post and get API endpoints as mentioned.
*/

const express = require('express');
const { processReceipt, getReceiptPoints } = require('../controller/receiptController');

const router = express.Router();

// Process receipt route
router.post('/process', processReceipt);

// Get points by receipt ID route
router.get('/:id/points', getReceiptPoints);

module.exports = router;

