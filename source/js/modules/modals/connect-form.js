const form = document.querySelector('form');
const phoneField = form.querySelector('[data-phone-pattern]');
const nameField = form.querySelector('[data-name]');

const checkExist = phoneField && nameField;

let isStorageSupport = true;
let storagePhone = '';
let storageName = '';

try {
  storagePhone = localStorage.getItem('user-phone');
  storageName = localStorage.getItem('user-name');
} catch (err) {
  isStorageSupport = false;
}

const checkPhoneMask = (evt) => {
  const element = evt.target;
  const clearValue = element.dataset.phoneClear;
  const pattern = element.dataset.phonePattern;
  const martixDef = '+7 (___) ___-__-__';
  const matrix = pattern ? pattern : martixDef;
  let i = 0;
  const def = matrix.replace(/\D/g, '');
  let val = evt.target.value.replace(/\D/g, '');

  if (clearValue !== 'false' && evt.type === 'blur') {
    if (val.length < matrix.match(/([\_\d])/g).length) {
      evt.target.value = '';
      evt.target.classList.add('input--error');
      return;
    }
  }

  if (def.length >= val.length) {
    val = def;
  }

  evt.target.value = matrix.replace(/./g, function (char) {
    if ((/[_\d]/).test(char) && i < val.length) {
      evt.target.classList.remove('input--error');
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    }
    return char;
  });

};

const activatePhoneMask = () => {
  for (let ev of ['input', 'blur', 'focus']) {
    phoneField.addEventListener(ev, checkPhoneMask);
  }
};

const removeErrorClass = (evt) => {
  evt.target.classList.remove('input--error');
};

const checkNameField = () => {
  if (nameField.value === '') {
    nameField.classList.add('input--error');
  } else {
    nameField.classList.remove('input--error');
  }
};

const activateValid = () => {
  if (nameField) {
    for (let ev of ['input', 'blur']) {
      nameField.addEventListener(ev, checkNameField);
    }

    nameField.addEventListener('focus', removeErrorClass);
  }
  if (checkExist || nameField) {
    if (storagePhone) {
      phoneField.value = storagePhone;
    } else {
      phoneField.value = '';
    }
    if (storageName) {
      nameField.value = storageName;
    }
  }
};

const useLocalStorage = () => {
  if (isStorageSupport) {
    localStorage.setItem('user-name', nameField.value);
    localStorage.setItem('user-phone', phoneField.value);
  }
};

if (phoneField) {
  document.addEventListener('DOMContentLoaded', activatePhoneMask);
}

const addListenersForForm = () => {
  activateValid();

  form.addEventListener('submit', useLocalStorage);
};

addListenersForForm();
