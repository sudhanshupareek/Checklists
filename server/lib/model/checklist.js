
/**
 * Module dependencies
 */

var debug = require('simple-debug')
  , mongoose = require('mongoose');

mongoose.connect(process.env.MONGOHQ_URL);


/**
 * Schema
 */

var ChecklistSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = ChecklistSchema;