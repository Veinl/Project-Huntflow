const React = require('react');
const Layout = require('./Layout');

function Comments({ comment }) {
  return (
    <div
      className="card-body"
      style={{ borderRadius: '10px', backgroundColor: 'orange', width: '80px' }}
    >
      <div
        style={{
          borderRadius: '10px',
          backgroundColor: 'yellow',
          width: '50px',
        }}
      >
        <p className="card-text">{comment.text}</p>
      </div>
    </div>
  );
}

module.exports = Comments;
