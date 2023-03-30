const comment = document.querySelector('#comment');

comment?.addEventListener('click', (e) => {
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
        const modalCom = document.querySelector('modalCom');
        modalCom?.addEventListener('submit', (e) => {
          e.preventDefault();
        //   const {method, }
        });
      });
    });
});
