const addBtn = document.querySelector('#addCan');
if (addBtn) {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/modal-form')
      .then((res) => res.json())
      .then(({ html }) => {
        addBtn.insertAdjacentHTML('afterend', html);
        const modalForm = document.getElementById('modalForm');
        modalForm.addEventListener('submit', (ev) => {
          ev.preventDefault();
          const {
            action,
            method,
            img: { value: image },
            name: { value: name },
            exp: { value: experience },
            num: { value: number },
            email: { value: email },
          } = ev.target;
          fetch(action, {
            method,
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              image,
              name,
              experience,
              number,
              email,
            }),
          })
            .then((res) => res.json())
            .then(({ html: html1 }) => {
              document
                .querySelector('.candidates')
                .insertAdjacentHTML('beforeend', html1);
            });
          document.getElementById('can-dialog').remove();
        });
        document.getElementById('closeBtn').addEventListener('click', () => {
          document.getElementById('can-dialog').remove();
        });
      })
      .catch((message) => console.log(message));
  });
}
