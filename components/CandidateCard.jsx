const React = require('react');
const Layout = require('./Layout');

function CandidateCard({ candidate }) {
  return (
    <Layout>
      <div className="card">
        <img src={candidate.image} className="card-img-bottom" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{candidate.name}</h5>
          <p className="card-text">Years' experience: {candidate.experience}</p>
          <p className="card-text">{candidate.email}</p>
          <p className="card-text">{candidate.number}</p>
          <button type="submit">Оставить комментарий</button>
        </div>
    </Layout>
  );
}

module.exports = CandidateCard;
