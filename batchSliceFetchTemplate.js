const articleNumbers = [
  "9SD505790-588",
  // ... more article numbers
];

async function fetchAndDownloadBatch(articleNumbers) {
  const requestBody = {
	  //    args: JSON.stringify(articleNumbers.map(articleNumber => ({
    args: articleNumbers.map(articleNumber => ({
      articleNumber,
      quantity: 1,
      // ... other properties
    })),
	// }))),//if need stringify
    method: "batchExportCulate"
  };

  const response = await fetch("http://10.100.1.1/sale-extra/priceCalculator", {
	  //; header doesn't need stringify
	  body: JSON.stringify(requestBody),
    // ... request options with requestBody; 
  });

  const blob = await response.blob();
  // ... process the blob and download the file
}

// Break the article numbers into smaller batches
const batchSize = 100; // Adjust the batch size as needed
const batches = [];
for (let i = 0; i < articleNumbers.length; i += batchSize) {
  batches.push(articleNumbers.slice(i, i + batchSize));
}

// Send requests for each batch
for (const batch of batches) {
  await fetchAndDownloadBatch(batch);
}