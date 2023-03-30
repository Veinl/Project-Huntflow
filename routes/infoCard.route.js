const router = require('express').Router();
const React = require('react');
const RDM = require('react-dom/server');

const CandidateCard = require('../components/CandidateCard');
const { Candidate, History } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findOne({ where: { id }, raw: true });
    const { dataValues: history } = await History.findOne({
      where: { candidate_id: id },
    });
    console.log(history);
    res.renderComponent(CandidateCard, {
      title: 'Candidate page',
      candidate,
      history,
    });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
