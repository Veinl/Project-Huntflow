const router = require('express').Router();
const React = require('react');
const RDM = require('react-dom/server');
const Main = require('../components/Main');
const NewCan = require('../components/Form');
const { Candidate } = require('../db/models');

router.get('/', (req, res) => {
  try {
    res.renderComponent(Main, { title: 'Main page' });
  } catch ({ message }) {
    res.json(message);
  }
});

router
  .route('/modal-form')
  .get((req, res) => {
    const view = React.createElement(NewCan);
    const html = RDM.renderToStaticMarkup(view);
    res.json({ html });
  })
  .post(async ({ body: { image, name, experience, number, email } }, res) => {
    try {
      console.log(image, name, experience, number, email);
      await Candidate.create({
        image,
        name,
        experience,
        number,
        email,
        reject_status: false,
        handed: false,
      });
      res.json({ message: 'OK' });
    } catch ({ message }) {
      console.log(message);
    }
  });

module.exports = router;
