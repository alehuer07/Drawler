const admin = require("firebase-admin");

const serviceAccount = require("../config/drawler-8387edeefdb0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
