const mongoose = require('mongoose');

const Files = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    files:[]
},{
    timestamps:true,
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
});


Files.virtual('url').get(function(){
    const url = process.env.URL || 'http://localhost:3333';
    return `${url}/files/${encodeURIComponent(this.path)}`
})
module.exports = mongoose.model("Files", Files);