const body = document.body;

const showMenu = () => {
  const hambourgerBtn = document.querySelector(".open-menu");
  const header = document.querySelector("header");

  hambourgerBtn.addEventListener("click", () => {
    header.classList.toggle("show-menu");

    header.style.transform = header.classList.contains("show-menu")
      ? "none"
      : "";

    body.style.overflow = header.classList.contains("show-menu")
      ? "hidden"
      : "auto";
  });
};

showMenu();

const onScrollUpdate = () => {
  let lastScroll = 0;
  const scrollThreshold = 300; // 300px

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // Activer uniquement si le scroll dépasse 300px
    if (currentScroll >= scrollThreshold) {
      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
      }
      lastScroll = currentScroll;
    }
  });
};

onScrollUpdate();

const openAnswerFaq = () => {
  const questionsBox = document.querySelectorAll(".question-box");
  questionsBox.forEach((question) => {
    question.addEventListener("click", () => {
      const faq = question.closest(".faq");
      // const answer = faq.querySelector('.answer');

      if (faq.classList.contains("open-answer")) {
        faq.classList.remove("open-answer");
      } else {
        document.querySelectorAll(".faq").forEach((faq) => {
          faq.classList.remove("open-answer");
        });
        faq.classList.add("open-answer");
      }
    });
  });
};
openAnswerFaq();

(function () {
  emailjs.init("r1gYJ7V0toGvqNr3Z"); // Remplacez YOUR_USER_ID par votre identifiant EmailJS
})();

document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher le comportement de soumission par défaut

    // Modifier le texte du bouton "Envoyer" en "En cours d'envoi"
    let submitButton = this.querySelector('input[type="submit"]');
    submitButton.value = "Envoi en cours...";
    submitButton.disabled = true;

    // Obtenez les données du formulaire
    let formData = {
      name: this.name.value,
      email: this.email.value,
      dev_web: this.dev_web.checked,
      dev_mob_and_desk: this.dev_mob_and_desk.checked,
      colab: this.colab.checked,
      other: this.other.checked,
      minValue: this.minValue.value,
      maxValue: this.maxValue.value,
      message: this.querySelector('textarea[name="message"]').value,
    };

    // Créer le corps de l'e-mail en utilisant toutes les données du formulaire
    let messageContent = `
    Nom : ${formData.name}\n
    Email : ${formData.email}\n
    Développement Web : ${formData.dev_web}\n
    Développement App Mobile ou Desktop : ${formData.dev_mob_and_desk}\n
    Collaboration : ${formData.colab}\n
    Autres : ${formData.other}\n
    Votre fourchette budgétaire (Min) : ${formData.minValue}\n
    Votre fourchette budgétaire (Max) : ${formData.maxValue}\n
    Message : ${formData.message}`;

    // Envoyez l'e-mail via EmailJS avec le corps de l'e-mail formaté
    emailjs
      .send("service_ra3cb5t", "template_6q6amlt", {
        from_name: formData.name,
        email: formData.email,
        reply_to: formData.email,
        message: messageContent,
      })
      .then(
        function (response) {
          console.log("E-mail envoyé avec succès !", response);
          document.querySelector(".cta-start-project a").style.display = "none";
          document.querySelector("form").style.display = "none";
          document.querySelector(".form-send .true").style.display = "block";
          document.querySelector(".form-send .false").style.display = "none";
        },
        function (error) {
          console.log("Erreur lors de l'envoi de l'e-mail :", error);
          document.querySelector(".cta-start-project a").style.display =
            "block";
          document.querySelector("form").style.display = "block";
          document.querySelector(".form-send .true").style.display = "none";
          document.querySelector(".form-send .false").style.display = "block";
          submitButton.value = "Envoyer";
          submitButton.disabled = false;
        },
      );
  });
