const React = require('react');

module.exports = function modalForHistory({ firstEmpty, id }) {
  return (
    <dialog id="can-dialog" open>
      <form id="modalCom" method="post" action={`/modal-form/${id}`}>
        <label for="lfname">{firstEmpty}: </label>
        <input
          id="lfname"
          name="fname"
          type="text"
          placeholder="Начни вводить"
        />
        <button id="sendCom" type="submit">
          Оставить комментарий
        </button>
        <button id="closeBtn">Close</button>
      </form>
    </dialog>
  );
};
