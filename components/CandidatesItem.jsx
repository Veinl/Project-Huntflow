const React = require('react');

function CandidateItem() {
  return (
    <div className="card" style="width: 18rem;">
      <img src={candidate.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{candidate.name}</h5>
        <p className="card-text">{candidate.email}</p>
        <a href="#" className="btn btn-primary">
          Подробнее
        </a>
      </div>
    </div>
  );
}

module.exports = CandidateItem;
