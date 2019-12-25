const generateId = () => {
  const uuidv4 = require('uuid/v4');
  return uuidv4();
};

export default generateId;
