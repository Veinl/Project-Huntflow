const React = require('react');

module.exports = function History({ history }) {
  return (
    <dialog id="can-dialog" open>
      <form id="modalForm" method="post" action="/modal-form">
        <label for="lfname">{history.invite}</label>
        <input
          id="lfname"
          name="fname"
          type="text"
          placeholder="Начни вводить"
        />
        <input type="submit" value="Add new!" className="button" />
        <button type="submit">Оставить комментарий</button>
        <button id="closeBtn">Close</button>
      </form>
    </dialog>
  );
};
