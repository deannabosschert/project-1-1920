const Dialogue = {
  question1: () => {
    const updateButton = document.getElementById('updateDetails');
    const favDialog = document.getElementById('favDialog');
    const outputBox = document.querySelector('output');
    const selectEl = document.querySelector('select');
    const confirmBtn = document.getElementById('confirmBtn');

    // "Update details" button opens the <dialog> modally
    updateButton.addEventListener('click', function onOpen() {
      if (typeof favDialog.showModal === "function") {
        favDialog.showModal();
      } else {
        alert("Werkstukmaatje is helaas niet beschikbaar in deze browser. Probeer het eens in Chrome?");
      }
    });
    // "Favorite animal" input sets the value of the submit button
    selectEl.addEventListener('change', function onSelect(e) {
      confirmBtn.value = selectEl.value;
    });
    // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    favDialog.addEventListener('close', function onClose() {
      outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
    });
  }
}

export {
  Dialogue
}