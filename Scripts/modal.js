const tableau = [
  {
    id: "modal-booki",
    name: "Booki",
    image: "Images/image.png",
    text: "booki",
    logo: "Images/BEM.png",
    github: "https://github.com/theo-martin",
    rendu: "https://github.com/theo-martin-rendu",
  },
  {
    id: "modal-Print-it-JS-main",
    name: "Print-it-JS-main",
    image: "Images/image.png",
    text: "Print-it-JS-main",
    logo: "Images/BEM.png",
    github: "https://github.com/theo-martin",
    rendu: "https://github.com/theo-martin-rendu",
  },
  {
    id: "modal-ohmyfood",
    name: "OhMyFood",
    image: "Images/image.png",
    text: "ohmyfood",
    logo: "Images/BEM.png",
    github: "https://github.com/theo-martin",
    rendu: "https://github.com/theo-martin-rendu",
  },
  {
    id: "modal-Portfolio-Sophie-Bluel",
    name: "Portfolio-Sophie-Bluel",
    image: "Images/image.png",
    text: "Sophie-Bluel",
    logo: "Images/BEM.png",
    github: "https://github.com/theo-martin",
    rendu: "https://github.com/theo-martin-rendu",
  },
];

const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const modalId = trigger.dataset.modalId;
    const modal = document.getElementById(modalId);

    const matchingObject = tableau.find((item) => item.id === modalId);

    if (matchingObject) {
      const modalBox = document.getElementById(modalId);
      modalBox.innerHTML = "";
      const sectionModal = document.createElement("section");
      sectionModal.classList.add("section-modal");
      const close_icon = document.createElement("div");
      close_icon.classList.add("section-modal_close");
      modalBox.appendChild(sectionModal);
      modalBox.appendChild(sectionModal);
      document.body.appendChild(sectionModal);

      console.log(modalTriggers);
      console.log(matchingObject);
      console.log(modalId);

      close_icon.classList.add("xmark");
      close_icon.innerHTML = `<i class="fa-solid fa-xmark section-modal__close_i"></i>`;
      modalBox.appendChild(sectionModal);
      sectionModal.appendChild(close_icon);
      sectionModal.appendChild(close_icon);

      const h2modal = document.createElement("h2");
      h2modal.innerHTML = matchingObject.name;
      sectionModal.appendChild(h2modal);

      const img = document.createElement("img");
      img.src = matchingObject.image;
      sectionModal.appendChild(img);

      const p = document.createElement("p");
      p.textContent = matchingObject.text;
      sectionModal.appendChild(p);

      // Afficher la modal

      const closeIcon = document.querySelector(".section-modal__close_i");
      closeIcon.addEventListener("click", closeModal);
      function closeModal() {
        modalBox.close();
        // sectionModal.innerHTML = ""; //efface le contenu
      }

      modalBox.addEventListener("click", (event) => {
        if (event.target === modalBox) {
          closeModal();
        }
      });

      modalBox.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          closeModal();
        }
      });

      modal.showModal();
    } else {
      console.warn(
        `pas d'object trouvé dans le "tableau" avec l'ID: ${modalId}`
      );
    }
  });
});
