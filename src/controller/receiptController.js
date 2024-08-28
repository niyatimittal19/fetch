/** 
* Author: Niyati Mittal
* Date Created: 27 Aug 2024
*
* This is the controller file, which processes the output.
*/

const { v4: uuidv4 } = require('uuid');
const receiptService = require('../services/receiptServices');

const receipts = new Map();

// Function to validate the receipt input
const validateReceipt = (receipt) => {
    if (!receipt.retailer || !receipt.purchaseDate || !receipt.purchaseTime || !receipt.total || !receipt.items) {
        return false;
    }

    if (!Array.isArray(receipt.items) || receipt.items.length === 0) {
        return false;
    }

    for (let item of receipt.items) {
        if (!item.price || !item.shortDescription) {
            return false;
        }
    }

    return true;
};

// FUnction to process the receipt
exports.processReceipt = (req, res) => {
    const receipt = req.body;

    // Validate the input
    if (!validateReceipt(receipt)) {
        return res.status(400).json({ error: "Invalid receipt format. Please ensure all required fields are present." });
    }

    const id = uuidv4();
    const points = receiptService.calculatePoints(receipt);

    receipts.set(id, points);
    res.json({ id });
};

// Function to get points 
exports.getReceiptPoints = (req, res) => {
    const { id } = req.params;

    if (receipts.has(id)) {
        res.json({ points: receipts.get(id) });
    } else {
        res.status(404).json({ error: 'Receipt not found' });
    }
};

