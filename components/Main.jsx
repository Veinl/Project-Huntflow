const React = require('react');
const Layout = require('./Layout');
const Categories = require('./Categories');
const CandidateItem = require('./CandidatesItem');

function Candidates({ title, candidates = [], user }) {
  return (
    <Layout title={title} user={user}>
      <Categories className="Categories" />
      <h1>Candidates</h1>
      <ul className="candidates">
        {candidates &&
          candidates.map((candidate) => (
            <CandidateItem key={candidate.id} candidate={candidate} />
          ))}
      </ul>
    </Layout>
  );
}

module.exports = Candidates;
