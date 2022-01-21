async function checkPassword(req, dbUserData) {
    const authenticate = await bcrypt.compare(req.body.password, dbUserData.password)
    return authenticate;
}

module.exports = { checkPassword };