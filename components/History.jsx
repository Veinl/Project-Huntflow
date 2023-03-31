const React = require('react');

module.exports = function History({ history = {}, candidate = {} }) {
  return (
    <form id="modalForm" method="get" action={`/modal-form/${candidate.id}`}>
      <h2 className="card-title">History:</h2>
      <p className="card-text">
      <span> Invite status:</span> {(history.invite && `✅ ${history.invite}`) || '❌'}
      </p>
      <p className="card-text">
       <span> Screencall status:{' '}</span>
        {(history.screencall && `✅ ${history.screencall}`) || '❌'}
      </p>
      <p className="card-text">
      <span> Videocall status:{' '}</span>
        {(history.videocall && `✅ ${history.videocall}`) || '❌'}
      </p>
      <p className="card-text">
      <span> Interview status:{' '}</span>
        {(history.interview && `✅ ${history.interview}`) || '❌'}
      </p>
      <p className="card-text">
      <span>Offer status:{' '}</span>
        {(history.offer_date && `✅ ${history.offer_date}`) || '❌'}
      </p>
      <p className="card-text">
      <span>Offer assign date:{' '}</span>
        {(history.offer_accepted && `✅ ${history.offer_accepted}`) || '❌'}
      </p>
    </form>
  );
};
