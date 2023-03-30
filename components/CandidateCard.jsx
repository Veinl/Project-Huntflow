const React = require('react');
const Layout = require('./Layout');
const History = require('./History');

function CandidateCard({ candidate, history = {} }) {
  return (
    <Layout>
      <div className="card">
        <img src={candidate.image} className="card-img-bottom" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {candidate.name}</h5>
          <p className="card-text">Years' experience: {candidate.experience}</p>
          <p className="card-text">Email: {candidate.email}</p>
          <p className="card-text">Number: {candidate.number}</p>
          <form
            id="modalForm"
            method="get"
            action={`/modal-form/${candidate.id}`}
          >
            <h1 className="card-title">History:</h1>
            <p className="card-text">
              Invite status:{' '}
              {(history.invite && `✅ ${history.invite}`) || '❌'}
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
              {(history.offer_accepted && `✅ ${history.offer_accepted}`) ||
                '❌'}
            </p>
          </form>
          <button
            formAction={`/candidate/modal-form/${candidate.id}`}
            id="comment"
            type="submit"
          >
            Оставить комментарий
          </button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = CandidateCard;
