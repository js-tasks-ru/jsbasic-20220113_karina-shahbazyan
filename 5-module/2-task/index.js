function toggleText() {
  const toggleButton = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');

  const onClick = () => {
    if (text.hidden) {
      text.hidden = false;
      return;
    } 
    text.hidden = true;
    
  };

  toggleButton.addEventListener('click', onClick)
}
