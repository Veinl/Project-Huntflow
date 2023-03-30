const React = require('react');
const Layout = require('./Layout');
const Categories = require('./Categories');
const CandidateItem = require('./CandidatesItem');

function Candidates({ title, candidates = [] }) {
  return (
    <Layout title={title}>
      <Categories className="Categories" />
      <h1>Candidates</h1>
      <ul className="candidates">
        {candidates.map((candidate) => (
          <CandidateItem key={candidate.id} candidate={candidate} />
        ))}
      </ul>
      <button type="submit">Добавить нового кандидата</button>
    </Layout>
  );
}

module.exports = Candidates;
