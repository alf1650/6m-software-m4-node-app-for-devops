
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Alfred successfully deployed to Heroku");
}

module.exports = print;