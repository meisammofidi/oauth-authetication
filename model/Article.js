const mongoose =require('mongoose')

const ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    author : {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Article', ArticleSchema)