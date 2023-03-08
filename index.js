function openNav() {
  document.getElementById('mobile-menu').classList.add('visible');
}

function closeNav() {
  document.getElementById('mobile-menu').classList.replace('visible', 'hidden');
}

function ReadElement(selector) {
  return document.querySelector(selector);
}

const modal1 = ReadElement('#modal1');
const modal2 = ReadElement('#modal2');
const modal3 = ReadElement('#modal3');
const modal4 = ReadElement('#modal4');
const modalMain = ReadElement('modal-main')
const modalBody = ReadElement("modal-layout")


const popupMenu = [
  {
    id: 1,
    title: 'Tonic',
    list1: ['CANOPY','Back End Dev','2025'],
    imgUrl: 'images/Snapshoot-Portfolio.png',
    projText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    visitLive: 'https://www.github.com/joeveloper',
    viewSrc: 'https://www.github.com/joeveloper',
  }, {
    id: 2,
    title: 'Multi-Post Stories',
    list1: ['CANOPY','Back End Dev','2025'],
    imgUrl: 'images/Snapshoot-Portfolio4.png',
    projText: "A daily selection of privately personalized reads; no accounts or sign-ups required. ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    visitLive: 'https://www.github.com/joeveloper',
    viewSrc: 'https://www.github.com/joeveloper',
  }, {
    id: 3,
    title: 'Tonic',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imgUrl: 'images/Snapshoot-Portfolio2.png',
    projText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    visitLive: 'https://www.github.com/joeveloper',
    viewSrc: 'https://www.github.com/joeveloper',
  }, {
    id: 4,
    title: 'Multi-Post Stories',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imgUrl: 'images/Snapshoot-Portfolio3.png',
    projText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    visitLive: 'https://www.github.com/joeveloper',
    viewSrc: 'https://www.github.com/joeveloper',
  }
]

function modalOpen(i) {
  const modalll = popupMenu[i];
  const modalView = `<div class="modal-heading">
          <h2>${modalll.title}</h2>
          <ul class="modal-card-ul">
              <li>${modalll.list1[0]}</li>
              <li><img alt="image" src="./images/counter.png" /></li>
              <li>${modalll.list1[1]}</li>
              <li><img alt="image" src="./images/counter.png" /></li>
              <li>${modalll.list1[2]}</li>
            </ul>
      </div>
      <div class="modal-image">
      <img alt="image" src="${popupMenu.imgUrl}" />
      </div>
      <div class="modal-body">
          <div>
              <p>${modalll.projText}</p>
          </div>
          <div class="modal-skill-list">
              <ul>
              ${modalll.langs.map((lang) => `<li>${lang}</li>`).join("")}
              </ul>
              <div class="modal-buttons">
                  <button>Button1 <span><img src="./images/github.png"></span></button>
                  <button>Button1 <span><img src="./images/blue-github.png"></span></button>
              </div>
          </div>
  </div>`;

  modalBody.innerHTML = modalView;
}

// function openModal() {
//   document.querySelector('modal-layout').classList.add('visible');
// }


function displayModal(button, i) {
  return button.addEventListener('click', () => {
    modalBody.classList.add('visible');

    if (i) {
      modalOpen(i);
    }
  });
}


displayModal(modal1, 0);
displayModal(modal2, 1);
displayModal(modal3, 2);
displayModal(modal4, 3);



document.getElementById('burger-parents').addEventListener('click', openNav);

document.getElementById('closebtn').addEventListener('click', closeNav);
