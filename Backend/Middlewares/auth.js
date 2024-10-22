const auth = async (req, res, next) => {
    const { name, email } = req.body;
    res.send({ sucess: true, msg: "you have permision to access a data" });
    next();
}
module.exports = auth;