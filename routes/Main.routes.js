const router = require('express').Router();
const React = require('react');
const RDM = require('react-dom/server');
const Main = require('../components/Main');
const NewCan = require('../components/Form');

router.get('/', (req, res) => {
  try {
    res.renderComponent(Main, { title: 'Main page' });
  } catch ({ message }) {
    res.json(message);
  }
});
router.get('/modal-form', (req, res) => {
  const view = React.createElement(NewCan);
  const html = RDM.renderToStaticMarkup(view);
  res.json({ html });
});

module.exports = router;
