const addBtn = document.querySelector('#addCan');
if (addBtn) {
  addBtn.addEventListener('click', (e) => {
    console.log(e.target);
    e.preventDefault();
    fetch('/modal-form')
      .then((res) => res.json())
      .then(({ html }) => {
        addBtn.insertAdjacentHTML('afterend', html);
        document.getElementById('closeBtn').addEventListener('click', () => {
          document.getElementById('can-dialog').remove();
        });
      })
      .catch((message) => console.log(message));
  });
}
