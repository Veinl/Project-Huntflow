const router = require('express').Router();
const React = require('react');
const RDM = require('react-dom/server');

const CandidateCard = require('../components/CandidateCard');
const { Candidate } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findOne({ where: { id }, raw: true });
    res.renderComponent(CandidateCard, { title: 'Candidate page', candidate });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
