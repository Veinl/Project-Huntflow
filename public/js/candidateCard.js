const commentBtn = document.querySelector('#comment');

commentBtn?.addEventListener('click', (e) => {
  const { formAction } = e.target;
  fetch(formAction)
    .then((res) => res.json())
    .then(({ html }) => {
      document
        .querySelector('#modalForm')
        .insertAdjacentHTML('beforebegin', html);
      const closeBtn = document.querySelector('#closeBtn');
      closeBtn?.addEventListener('click', () => {
        document.querySelector('#can-dialog').remove();
      });
      const modalCom = document.querySelector('#modalCom');
      console.log(modalCom);
      modalCom?.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const {
          method,
          action,
          comment: { value: comment },
        } = ev.target;
        const stage = document.querySelector('#stage').innerText;
        fetch(action, {
          method,
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            comment,
            stage,
          }),
        }).then((res) => res.json());
      });
    })
    .catch(({ message }) => console.log(message));
});
