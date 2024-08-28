/** 
* Author: Niyati Mittal
* Date Created: 27 Aug 2024
*
* This is the service file, which calculates the points for each receipt.
*/

exports.calculatePoints = (receipt) => {
    let points = 0;

    // 1 point for every alphanumeric character in the retailer name
    points += receipt.retailer.replace(/[^a-zA-Z0-9]/g, '').length;

    // 50 points if the total is a round dollar amount with no cents
    if (parseFloat(receipt.total) % 1 === 0) {
        points += 50;
    }

    // 25 points if the total is a multiple of 0.25
    if (parseFloat(receipt.total) % 0.25 === 0) {
        points += 25;
    }

    // 5 points for every two items on the receipt
    points += Math.floor(receipt.items.length / 2) * 5;

    // Points based on item descriptions
    receipt.items.forEach(item => {
        const descriptionLength = item.shortDescription.trim().length;
        if (descriptionLength % 3 === 0) {
            points += Math.ceil(parseFloat(item.price) * 0.2);
        }
    });

    // 6 points if the day in the purchase date is odd
    const purchaseDay = parseInt(receipt.purchaseDate.split('-')[2], 10);
    if (purchaseDay % 2 !== 0) {
        points += 6;
    }

    // 10 points if the time of purchase is strictly after 2:00pm and strictly before 4:00pm
    const [hours, minutes] = receipt.purchaseTime.split(':').map(Number);
    if ((hours === 14 && minutes > 0) || (hours === 15)) {
        points += 10;
    }

    return points;
};
