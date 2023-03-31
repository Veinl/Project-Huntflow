const router = require('express').Router();
const React = require('react');
const RDM = require('react-dom/server');
// const Comment }=  require('../db/comment')
const CandidateCard = require('../components/CandidateCard');
const modalForm = require('../components/Mandalka');
const { Candidate, History, Comment } = require('../db/models');
const historyComp = require('../components/History');
const CommentComp = require('../components/Comments');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findOne({ where: { id }, raw: true });
    const comments = await Comment.findAll({ where: { candidate_id: id } });
    const { dataValues: history } = await History.findOne({
      where: { candidate_id: id },
    });
    res.renderComponent(CandidateCard, {
      title: 'Candidate page',
      candidate,
      history,
      comments,
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
  .post(async ({ body: { comment, stage }, params: { id } }, res) => {
    const history = await History.findOne({ where: { id } });
    await Comment.create({ candidate_id: id, text: comment });
    const candidate = await Candidate.findOne({ where: { id } });
    candidate.invite = false;
    candidate.screencall = false;
    candidate.videocall = false;
    candidate.interview = false;
    candidate.offer_date = false;
    candidate.offer_accepted = false;
    candidate.reject_status = false;
    candidate[`${stage}`] = true;
    candidate.save();
    const allComm = await Comment.findAll();
    const comView = React.createElement(CommentComp, { comments: allComm })
    const comhtml = RDM.renderToStaticMarkup(comView)
    history[`${stage}`] = `${new Date()}`;
    history.save();
    const view = React.createElement(historyComp, {
      history,
      candidate: { id },
    });
    const html = RDM.renderToStaticMarkup(view);
    res.json({ html, comhtml });
  });

module.exports = router;
