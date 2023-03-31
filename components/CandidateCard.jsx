const React = require('react');
const Layout = require('./Layout');
const History = require('./History');
const Comment = require('./Comments');

function CandidateCard({ candidate, history }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <img
          src={candidate.image}
          className="card-img-bottom"
          alt="..."
          style={{ height: 500, width: 500 }}
        />
        <div className="card-body">
          <h5 className="card-title">Name: {candidate.name}</h5>
          <p className="card-text">Years' experience: {candidate.experience}</p>
          <p className="card-text">Email: {candidate.email}</p>
          <p className="card-text">Number: {candidate.number}</p>
          <Comment comment={comment} />
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
    </Layout>
  );
}

module.exports = CandidateCard;
