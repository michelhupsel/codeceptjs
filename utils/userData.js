const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../output/user.json');

function saveUser(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), {
    encoding: 'utf-8',
    flag: 'w' // sobrescreve sempre
  });
}

function getUser() {
  if (!fs.existsSync(filePath)) {
    throw new Error('User file not found! Execute o teste de registro primeiro.');
  }

  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

module.exports = {
  saveUser,
  getUser
};