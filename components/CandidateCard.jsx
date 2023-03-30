const React = require('react');
const Layout = require('./Layout');
const History = require('./History');

function CandidateCard({ candidate, history }) {
  return (
    <Layout>
      <div className="card">
        <img src={candidate.image} className="card-img-bottom" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {candidate.name}</h5>
          <p className="card-text">Years' experience: {candidate.experience}</p>
          <p className="card-text">Email: {candidate.email}</p>
          <p className="card-text">Number: {candidate.number}</p>
          <History candidate={candidate} history={history} />
        </div>
      </div>
    </Layout>
  );
}

module.exports = CandidateCard;
