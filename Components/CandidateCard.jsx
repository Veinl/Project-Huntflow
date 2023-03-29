const React = require("react");
const Layout = require("./Layout");

function CandidateCard({ title }) {
  return (
    <div class="card">
      <img src={candidate.img} class="card-img-bottom" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{candidate.name}</h5>
        <p class="card-text">{candidate.expirience}</p>
        <p class="card-text">{candidate.email}</p>
        <p class="card-text">{candidate.number}</p>
        <button>Оставить комментарий</button>
      </div>
    </div>
  );
}

module.exports = CandidateCard;
