function URLValidation (req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.status(404).send("<h1>URL Not Found</h1>");
    }

}

module.exports=URLValidation;