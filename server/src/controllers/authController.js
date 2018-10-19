exports.login = async (req, res) => {
  res.status(200)
  res.json({
    message: 'You have been logged in'
  })
}
