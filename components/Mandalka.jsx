const React = require('react');

module.exports = function modalForHistory({ firstEmpty, id }) {
  return (
    <dialog id="can-dialog" open>
      <form id="modalCom" method="post" action={`/candidate/modal-form/${id}`}>
        <label id="stage" for="comment">
          {firstEmpty}{' '}
        </label>
        <input
          id="comment"
          name="comment"
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
