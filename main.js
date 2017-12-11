var clickme = document.getElementById('clickme');
clickme.addEventListener('click', openModal, false);

function openModal()
{
  var parent = this.parentNode.parentNode;

  if(parent.clientHeight<10 && parent.clientWidth <10)
  {
    alert('Sorry, can\'t fit another box.');
    return;
  }

  var modal = document.createElement('div');
  modal.setAttribute('class', 'modal');

  var linkdiv = document.createElement('div');
  linkdiv.setAttribute('class', 'click');

  var link = document.createElement('a');
  link.innerHTML = 'Click here';
  link.setAttribute('href', '#');
  link.setAttribute('class', 'modallink');
  link.addEventListener('click', openModal, false);

  var closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('class', 'closebtn');
  closeBtn.addEventListener('click', closeModal, false);

  linkdiv.appendChild(link);
  linkdiv.appendChild(closeBtn);
  modal.appendChild(linkdiv);
  // modal.appendChild(closeBtn);
  parent.appendChild(modal);
}

function closeModal()
{
  var modal = this.parentNode.parentNode;
  var modalParent = modal.parentNode;
  modalParent.removeChild(modal);
}
