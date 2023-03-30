const React = require('react');

function CandidateCard({ title }) {
  return (
    <div className="card">
      <img src={candidate.img} className="card-img-bottom" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{candidate.name}</h5>
        <p className="card-text">{candidate.expirience}</p>
        <p className="card-text">{candidate.email}</p>
        <p className="card-text">{candidate.number}</p>
        <button type="submit">Оставить комментарий</button>
      </div>
    </div>
  );
}

module.exports = CandidateCard;
