// SETTING UP THE FLASH MESSAGES FOR TYPE SUCCESS AND ERROR

module.exports.setFlash = function (req, res, next) {
  res.locals.flash = {
    'success': req.flash('success'),
    'error': req.flash('error'),
  };
  next();
};
