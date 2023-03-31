const React = require('react');
const Layout = require('./Layout');

function Comments({ comments = [] }) {
  return (
    <div id='com'
      className="card-body"
      style={{
        borderRadius: '30px',
        backgroundColor: 'orange',
        width: '300px',
        height: '400px',
        marginLeft: '450px',
        paddingTop: '10px',
      }}
    >
      {comments &&
        comments.map((comment) => (
          <div
            style={{
              borderRadius: '10px',
              backgroundColor: 'yellow',
              width: '200px',
              marginTop: '5px',
              marginLeft: '47px',
              height: '30px',
            }}
          >
            <p className="card-text">{comment.text}</p>
          </div>
        ))}
    </div>
  );
}

module.exports = Comments;
