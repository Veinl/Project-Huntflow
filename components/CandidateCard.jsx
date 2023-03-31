const React = require('react');
const Layout = require('./Layout');
const History = require('./History');

function CandidateCard({ candidate, history }) {
  return (
    <Layout>
      <div class="container">
        <div class="wrapper" >
          <img
            src={candidate.image}
            class="banner-image"
            alt="..."
            style={{ height: 500, width: 500 }}
          />
          <h1>{candidate.name}</h1>
          <br />
          <br />
          <br />
          <br />
          <div class = "discription">
          <p className="card-text">Years' experience: {candidate.experience}</p>
          <p className="card-text">Email: {candidate.email}</p>
          <p className="card-text">Number: {candidate.number}</p>
          </div>
          <div class="history">
          <History candidate={candidate} history={history} />
          <button
            formAction={`/candidate/modal-form/${candidate.id}`}
            id="comment"
            type="submit"
          >
            Оставить комментарий
          </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = CandidateCard;
