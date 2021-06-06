/**
 * Get demo
 * @param {Object} options - Query options
 * @returns {Promise<any>}
 */
const getDemo = async (options) => {
  return options.name;
};

module.exports = {
  getDemo,
};
