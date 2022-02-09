function hideSelf() {
  const hiddenButton = document.querySelector('.hide-self-button');
  console.dir(hiddenButton)
  hiddenButton.onclick = () => {
    hiddenButton.hidden = true;
  };
}
