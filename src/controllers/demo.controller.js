const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { demoService } = require('../services');

const getDemo = catchAsync(async (req, res) => {
  const options = pick(req.query, ['name']);
  const result = await demoService.getDemo(options);
  res.send(result);
});

module.exports = {
  getDemo,
};
