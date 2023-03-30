const React = require('react');

module.exports = function NewCan() {
  return (
    <dialog id="can-dialog" open>
      <form id="modalForm" method="post" action="/modal-form">
        <label htmlFor="img">Image:</label>
        <input id="img" type="text" />
        <label htmlFor="name">Full Name:</label>
        <input id="name" type="text" />
        <label htmlFor="exp">Experience:</label>
        <input id="exp" type="text" />
        <label htmlFor="num">Number:</label>
        <input id="num" type="text" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" />
        <input type="submit" value="Add new!" className="button" />
        <button id="closeBtn">Close</button>
      </form>
    </dialog>
  );
};
