const router = require('express').Router();
const React = require('react');
const RDM = require('react-dom/server');
const { History } = require('../db/models');
const { CommentModal } = require('../components/CandidateCard');

router
  .route('/comment')
  .get(async ({ id }, res) => {
    History.findOne({ where: { id } }).then((history) => {
      let firstEmpty;
      for (const key in history) {
        if (history[key] === null) {
          firstEmpty = key;
          break;
        }
      }
      const modalForm = res.renderComponent(
        CommentModal,
        { label: firstEmpty },
        { options: { htmlOnly: true } }
      );
      res.json({ modalForm });
    });
  })
  .post(({ body: { comment, label } }, res) => {
    
  });

module.exports = router;
