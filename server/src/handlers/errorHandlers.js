// Catch errors
exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

// Not found
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 40
  next(err)
}

// Mongodb validation
exports.mongoValidationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err)
}

// Dev errors
exports.developmentErrors = (err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    errors: {
      message: err.message,
      error: err
    }
  })
}

// Production errors
exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  })
}
