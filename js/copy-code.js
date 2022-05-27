const boxes = document.querySelectorAll('.copy-code');

boxes.forEach(box => {
  box.addEventListener('click', function handleClick(e) {
    console.log('Kode kopieret');
    let buttonValue = event.target.value;
    let textArea = document.createElement("textarea");
    textArea.value = buttonValue;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    if (buttonValue == ""){
      alert("Der er desværre sket en fejl. Prøv igen")
    }
    else {
      alert("AWESOME!! Koden er kopiret");
    }

  });
});
