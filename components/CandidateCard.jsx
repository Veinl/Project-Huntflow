const React = require('react');
const Layout = require('./Layout');

function CandidateCard({ candidate, history = {} }) {
  return (
    <Layout>
      <div className="card" id={candidate.id}>
        <img src={candidate.image} className="card-img-bottom" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {candidate.name}</h5>
          <p className="card-text">Years' experience: {candidate.experience}</p>
          <p className="card-text">Email: {candidate.email}</p>
          <p className="card-text">Number: {candidate.number}</p>
          <h1>History:</h1>
          <p className="card-text">
            Invite status: {history.invite && `✅ ${history.invite}`}
          </p>
          <p className="card-text">
            Screencall status:{' '}
            {history.screencall && `✅ ${history.screencall}`}
          </p>
          <p className="card-text">
            Videocall status: {history.videocall && `✅ ${history.videocall}`}
          </p>
          <p className="card-text">
            Offer status: {history.offer_date && `✅ ${history.offer_date}`}
          </p>
          <p className="card-text">
            Offer assign date:{' '}
            {history.offer_accepted && `✅ ${history.offer_accepted}`}
          </p>
          <button type="submit">Оставить комментарий</button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = CandidateCard;
