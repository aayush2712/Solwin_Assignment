const fs = require('fs');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const Country = require('./models/Country');
const State = require('./models/State');
const Hobby = require('./models/Hobby');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const countries = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/countries.json`, 'utf-8')
);

const states = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/states.json`, 'utf-8')
);

const hobbies = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/hobbies.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Country.create(countries);
    await State.create(states);
    await Hobby.create(hobbies);
    console.log('Data Imported..');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Country.deleteMany();
    await State.deleteMany();
    await Hobby.deleteMany();
    console.log('Data destroyed..');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
