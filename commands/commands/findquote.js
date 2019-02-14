// Get quote
exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  const MongoClient = require('mongodb').MongoClient;
  const url = `mongodb://${process.env.MONGO_DB_USER}:${
    process.env.MONGO_DB_PASS
  }@ds121282.mlab.com:21282/dosebot_quotes`;
  const dbName = 'dosebot_quotes';

  MongoClient.connect(url, function(err, client) {
    console.log('Connected to Mongo');
    const db = client.db(dbName);
    const collection = db.collection('quotes');

    const foundQuotes = collection.find({ author: 'Kaylee' });
  });
};
