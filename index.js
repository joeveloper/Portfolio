function openNav() {
  document.getElementById('mobile-menu').classList.add('visible');
}

function closeNav() {
  document.getElementById('mobile-menu').classList.replace('visible', 'hidden');
}

function ReadElement(selector) {
  return document.querySelector(selector);
}

const inputName = ReadElement('#input-name');
const inputEmail = ReadElement('#input-email');
const inputMessage = ReadElement('#input-message');
const formResponse = ReadElement('.form-response');
const submitForm = ReadElement('#submit-form');

const modal1 = ReadElement('#modal1');
const modal2 = ReadElement('#modal2');
const modal3 = ReadElement('#modal3');
const modal4 = ReadElement('#modal4');
const modalMain = ReadElement('#modal-main');
const modalBody = ReadElement('.modal-layout');
const wrapper = document.querySelector('.wrapper');
const wrapperVisible = wrapper.getAttribute('data-visible');

function formValidator(e) {
  const emailValue = inputEmail.value;
  let res;
  if (emailValue !== emailValue.toLowerCase() || emailValue.length === 0) {
    res = 'Email required in lower case';
    formResponse.innerHTML = res;
  } else if (inputMessage.length === 0 || inputName.length === 0) {
    res = 'Name and Message are required';
    formResponse.innerHTML = res;
  } else {
    e.preventDefault();
  }
}
console.log(submitForm);
const e = this;
submitForm.addEventListener('click', () => formValidator(e));

const popupMenu = [
  {
    id: 1,
    title: 'Tonic',
    list1: ['CANOPY', 'Back End Dev', '2025'],
    imgUrl: './images/snapshot1.png',
    projText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    visitLive: 'https://www.github.com/joeveloper',
    viewSrc: 'https://www.github.com/joeveloper',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    list1: ['CANOPY', 'Back End Dev', '2025'],
    imgUrl: 'images/snapshot2.png',
    projText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    visitLive: 'https://www.github.com/joeveloper',
    viewSrc: 'https://www.github.com/joeveloper',
  },
  {
    id: 3,
    title: 'Tonic',
    list1: ['CANOPY', 'Back End Dev', '2025'],
    imgUrl: 'images/snapshot3.png',
    projText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    visitLive: 'https://www.github.com/joeveloper',
    viewSrc: 'https://www.github.com/joeveloper'
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    list1: ['CANOPY', 'Back End Dev', '2025'],
    imgUrl: 'images/snapshot4.png',
    projText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    visitLive: 'https://www.github.com/joeveloper',
    viewSrc: 'https://www.github.com/joeveloper'
  },
];

const test = popupMenu.map((item) => {
  return `
   <button rel="noopener noreferrer" href="javascript:void(0)" id="close-modal">&times;</button>
  <div class="modal-heading">
        <h2>${item.title}</h2>
        <ul class="modal-card-ul">
            <li>${item.list1[0]}</li>
            <li><img alt="image" src="./images/counter.png" /></li>
            <li>${item.list1[1]}</li>
            <li><img alt="image" src="./images/counter.png" /></li>
            <li>${item.list1[2]}</li>
          </ul>
    </div>
    <div class="modal-image">
    <img alt="image" src="${item.imgUrl}" />
    </div>
    <div class="modal-body">
        <div>
            <p>${item.projText}</p>
        </div>
        <div class="modal-skill-list">
            <ul>
            ${item.langs.map((lang) => `<li>${lang}</li>`).join("")}
            </ul>
            <div class="modal-buttons">
                <button>Button1 <span><img src="./images/github.png"></span></button>
                <button>Button1 <span><img src="./images/blue-github.png"></span></button>
            </div>
        </div>
</div>`;
});

function dataVisible() {
  if (wrapperVisible === "false") {
    wrapper.setAttribute("data-visible", true);
  } else if (wrapperVisible === "true") {
    wrapper.setAttribute("data-visible", false);
  }
}

function showModal(i) {
  for (let index = 0; index < test.length; index++) {
    if (i === index) {
      modalBody.innerHTML = test[index];
    }
  }
}

function buttonClick(button, i) {
  button.addEventListener("click", () => {
    showModal(i);
    modalBody.classList.replace("hidden", "visible");
    dataVisible();
    const closeModal = ReadElement("#close-modal");
    function closeTheModal() {
      closeModal.addEventListener("click", () => {
        console.log("clicked");
        modalBody.classList.replace("visible", "hidden");
        modalBody.innerHTML = "";
        wrapper.setAttribute("data-visible", false);
      });
    }
    closeTheModal();
  });
}

buttonClick(modal1, 0);
buttonClick(modal2, 1);
buttonClick(modal3, 2);
buttonClick(modal4, 3);

document.getElementById("burger-parents").addEventListener("click", openNav);

document.getElementById("closebtn").addEventListener("click", closeNav);
