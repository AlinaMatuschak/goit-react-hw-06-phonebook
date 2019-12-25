const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

const get = key => {
  try {
    const contacts = localStorage.getItem(key);
    return contacts ? JSON.parse(contacts) : null;
  } catch (err) {
    console.log('err');
  }
};

export default { save, get };
