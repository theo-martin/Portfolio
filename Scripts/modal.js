const tableau = [
  {
    id: "modal-booki",
    name: "Booki",
    image1: "Images/Booki.png",
    // image2: "Images/Booki.png",
    // image3: "Images/Booki.png",
    text: "Ce projet est mon deuxième projet en HTML CSS mais c'est le premier gros projet. J'ai découvert les FlexBox sur ce projet",
    // logo: "Images/BEM.png",
    github: "",
    rendu: "https://theomartinweb.fr/Booki/accueil",
  },
  {
    id: "modal-Print-it",
    name: "Print-it",
    image1: "Images/Print-it.png",
    // image2: "Images/Print-it.png",
    // image3: "Images/Print-it.png",
    text: "Ce projet est mon premier projet en JavaScript, la base du code été déjà présente. J'ai dû ajouter un carrousel sur la bannière",
    // logo: "Images/BEM.png",
    github: "https://github.com/theo-martin/Print-it-JS-main",
    rendu: "https://theomartinweb.fr/Print-it-JS-main/accueil",
  },
  {
    id: "modal-ohmyfood",
    name: "OhMyFood",
    image1: "Images/Ohmyfood.png",
    // image2: "Images/Ohmyfood.png",
    // image3: "Images/Ohmyfood.png",
    text: "Sur ce projet, j'ai découvert les animations en CSS et l'utilisation de Sass pour écrire le CSS",
    // logo: "Images/BEM.png",
    github: "https://github.com/theo-martin/OhMyFood",
    rendu: "https://theomartinweb.fr/OhMyFood/accueil",
  },
  {
    id: "modal-Portfolio-Sophie-Bluel",
    name: "Portfolio-Sophie-Bluel",
    image1: "Images/Sophie_Bluel.png",
    // image2: "Images/Sophie_Bluel.png",
    // image3: "Images/Sophie_Bluel.png",
    text: "Dans ce projet, j'ai utilisé L'API pour récupérer dynamiquement les projets, ajouté des projets, filtrer des projets... Le HTML est autorisé pour créer une page de connexion (la page de connexion est géré dynamiquement ensuite avec du JavaScript).    ",
    // logo: "Images/BEM.png",
    github: "https://github.com/theo-martin/Portfolio-Sophie-Bluel",
    rendu: "",
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
      modalBox.innerHTML = ""; /* efface le contenu */
      const sectionModal = document.createElement("section");
      sectionModal.classList.add("section-modal");

      document.body.appendChild(sectionModal);

      console.log(modalTriggers);
      console.log(matchingObject);
      console.log(modalId);

      const close_icon = document.createElement("div");
      close_icon.classList.add("section-modal__close");
      close_icon.classList.add("xmark");
      close_icon.innerHTML = `<i class="fa-solid fa-xmark section-modal__close__i"></i>`;
      modalBox.appendChild(sectionModal);

      sectionModal.appendChild(close_icon);

      // titre
      const h2modal = document.createElement("h2");
      h2modal.innerHTML = matchingObject.name;
      h2modal.classList.add("section-modal__h2");
      sectionModal.appendChild(h2modal);

      // groupes images
      const modal_groupe_img = document.createElement("div");
      modal_groupe_img.classList.add("section-modal__groupe-img");
      sectionModal.appendChild(modal_groupe_img);

      // partie images
      const img1 = document.createElement("img");
      img1.src = matchingObject.image1;
      img1.classList.add("section-modal__groupe-img__img");
      modal_groupe_img.appendChild(img1);

      /*       const img2 = document.createElement("img");
      img2.src = matchingObject.image2;
      img2.classList.add("section-modal__groupe-img__img");
      modal_groupe_img.appendChild(img2);

      const img3 = document.createElement("img");
      img3.src = matchingObject.image3;
      img3.classList.add("section-modal__groupe-img__img");
      modal_groupe_img.appendChild(img3);

      // partie point du carrousell
      const groupe_dots = document.createElement("div");
      groupe_dots.classList.add("section-modal__dots");
      sectionModal.appendChild(groupe_dots);
      // point1
      const dot1 = document.createElement("div");
      dot1.classList.add("section-modal__dots__dot");
      groupe_dots.appendChild(dot1);
      //point 2
      const dot2 = document.createElement("div");
      dot2.classList.add("section-modal__dots__dot");
      groupe_dots.appendChild(dot2);
      // point 3
      const dot3 = document.createElement("div");
      dot3.classList.add("section-modal__dots__dot");
      groupe_dots.appendChild(dot3);
 */
      // texte
      const p = document.createElement("p");
      p.textContent = matchingObject.text;
      p.classList.add("section-modal__p");
      sectionModal.appendChild(p);

      // groupe bouton
      const groupe_btn = document.createElement("div");
      groupe_btn.classList.add("section-modal__groupe-btn");
      sectionModal.appendChild(groupe_btn);
      // btn github
      const btn_github = document.createElement("a");
      btn_github.classList.add("section-modal__groupe-btn__btn");
      btn_github.href = matchingObject.github;
      function affichagegithub() {
        matchingObject.github === "" ? (btn_github.style = "display:none") : "";
      }
      affichagegithub();

      groupe_btn.appendChild(btn_github);
      const i_github = document.createElement("i");
      i_github.classList.add(
        "fa-brands",
        "fa-github",
        "section-modal__groupe-btn__btn__i"
      );
      btn_github.appendChild(i_github);
      const p_github = document.createElement("p");
      p_github.innerHTML = "Github";
      p_github.classList.add("section-modal__groupe-btn__btn__p");
      btn_github.appendChild(p_github);

      // btn rendu
      const btn_rendu = document.createElement("a");
      btn_rendu.classList.add("section-modal__groupe-btn__btn");
      btn_rendu.href = matchingObject.rendu;
      function affichagerendu() {
        matchingObject.rendu === "" ? (btn_rendu.style = "display:none") : "";
      }
      affichagerendu();
      groupe_btn.appendChild(btn_rendu);
      const p_rendu = document.createElement("p");
      p_rendu.innerHTML = "Voir le rendu";
      p_rendu.classList.add("section-modal__groupe-btn__btn__p");
      btn_rendu.appendChild(p_rendu);

      // ferme la modal
      const closeIcon = document.querySelector(".section-modal__close__i");
      closeIcon.addEventListener("click", closeModal);
      function closeModal() {
        modalBox.close();
        sectionModal.innerHTML = ""; //efface le contenu
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
      // Afficher la modal
      modal.showModal();
    } else {
      console.warn(
        `pas d'object trouvé dans le "tableau" avec l'ID: ${modalId}`
      );
    }
  });
});
