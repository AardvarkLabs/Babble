var generateMessage = (from, text) => {
  // return an object 
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage};
