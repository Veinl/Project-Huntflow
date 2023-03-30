const router = require('express').Router();
const React = require('react');
const RDM = require('react-dom/server');

const CandidateCard = require('../components/CandidateCard');
const modalForm = require('../components/Mandalka');
const { Candidate, History } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findOne({ where: { id }, raw: true });
    const { dataValues: history } = await History.findOne({
      where: { candidate_id: id },
    });
    res.renderComponent(CandidateCard, {
      title: 'Candidate page',
      candidate,
      history,
    });
  } catch ({ message }) {
    res.json(message);
  }
});

router
  .route('/modal-form/:id')
  .get(async ({ params: { id } }, res) => {
    const { dataValues: history } = await History.findOne({ where: { id } });
    let firstEmpty = '';
    for (const key in history) {
      if (history[key] === null) {
        firstEmpty = key;
        break;
      }
    }
    const view = React.createElement(modalForm, { firstEmpty, id });
    const html = RDM.renderToStaticMarkup(view);
    res.json({ html });
  })
  .post(async (req, res) => {
    const a = '';
  });

module.exports = router;
