const React = require('react');

function CandidateItem({ candidate }) {
  return (
    <div className="card" style={{ width: '12rem' }}>
      <img src={candidate.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{candidate.name}</h5>
        <p className="card-text">{candidate.email}</p>
        <p className="card-text">{candidate.experience}</p>
        <a href={`/candidate/${candidate.id}`} className="btn btn-primary">
          Подробнее
        </a>
      </div>
    </div>
  );
}

module.exports = CandidateItem;
