const router = require('express').Router();
const React = require('react');
const RDM = require('react-dom/server');
const Main = require('../components/Main');
const NewCan = require('../components/Form');
const { Candidate, History } = require('../db/models');
const CandidateItem = require('../components/CandidatesItem');

router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.findAll({ raw: true });
    res.renderComponent(Main, { title: 'Main page', candidates });
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
      const { dataValues: candidate } = await Candidate.create({
        image,
        name,
        experience,
        number,
        email,
        reject_status: false,
        handed: false,
      });
      await History.create({ candidate_id: candidate.id });
      const view = React.createElement(CandidateItem, { candidate });
      const html = RDM.renderToStaticMarkup(view);
      res.json({ html });
    } catch ({ message }) {
      console.log(message);
    }
  });

module.exports = router;
