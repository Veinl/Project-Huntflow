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
            img: { value: img },
            name: { value: name },
            exp: { value: exp },
            num: { value: num },
            email: { value: email },
          } = ev.target;
          fetch(action, {
            method,
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              img,
              name,
              exp,
              num,
              email,
            })
              .then((res) => res.json())
              .then(({ message }) => console.log(message)),
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
