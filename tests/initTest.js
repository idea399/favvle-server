const mongoose = require("mongoose");
const db = require('../config/db');

// Connect to MongoDB before each test
beforeEach((done) => {
    db.connectTestDb()
        .then(done());
    jest.setTimeout(30000);
});

// Drop database to clear temp data after each test
afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => done());
});