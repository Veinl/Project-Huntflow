const React = require('react');
const Layout = require('./Layout');

function CandidateCard({ candidate }) {
  return (
    <Layout>
      <div className="container">
        <img src={candidate.image} className="card-img-bottom" alt="..." style={{height:700, width:700}}/>
        <div className="card-body">
          <h5 className="card-title">{candidate.name}</h5>
          <p className="card-text">Years' experience: {candidate.experience}</p>
          <p className="card-text">{candidate.email}</p>
          <p className="card-text">{candidate.number}</p>
          <button type="submit">Оставить комментарий</button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = CandidateCard;
