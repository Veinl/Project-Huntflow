const React = require('react');

module.exports = function History({ history = {}, candidate = {} }) {
  return (
    <form id="modalForm" method="get" action={`/modal-form/${candidate.id}`}>
      <h1 className="card-title">History:</h1>
      <p className="card-text">
        Invite status: {(history.invite && `✅ ${history.invite}`) || '❌'}
      </p>
      <p className="card-text">
        Screencall status:{' '}
        {(history.screencall && `✅ ${history.screencall}`) || '❌'}
      </p>
      <p className="card-text">
        Videocall status:{' '}
        {(history.videocall && `✅ ${history.videocall}`) || '❌'}
      </p>
      <p className="card-text">
        Offer status:{' '}
        {(history.offer_date && `✅ ${history.offer_date}`) || '❌'}
      </p>
      <p className="card-text">
        Offer assign date:{' '}
        {(history.offer_accepted && `✅ ${history.offer_accepted}`) || '❌'}
      </p>
    </form>
  );
};
