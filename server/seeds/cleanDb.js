const mongoose = require('mongoose');

module.exports = async (collectionNames) => {
  try {
    const db = mongoose.connection.db;

    // List all existing collections
    const existingCollections = await db.listCollections().toArray();
    const existingCollectionNames = existingCollections.map(col => col.name);

    // Iterate over the specified collection names to drop
    for (const collectionName of collectionNames) {
      if (existingCollectionNames.includes(collectionName)) {
        await db.dropCollection(collectionName);
        console.log(`${collectionName} collection dropped.`);
      } else {
        console.log(`${collectionName} collection does not exist, skipping...`);
      }
    }
  } catch (err) {
    console.error(`Error during database cleanup:`, err);
    // It's generally a good idea to handle errors in a way that's meaningful to your application.
    // Rethrowing the error here, as it might be caught and handled by the caller.
    throw err;
  }
};
