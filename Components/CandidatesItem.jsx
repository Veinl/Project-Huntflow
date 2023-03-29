const React = require("react");

function CandidateItem() {
  return (
    <div class="card" style="width: 18rem;">
      <img src={candidate.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{candidate.name}</h5>
        <p class="card-text">{candidate.email}</p>
        <a href="#" class="btn btn-primary">
          Подробнее
        </a>
      </div>
    </div>
  );
}

module.exports = CandidateItem;
