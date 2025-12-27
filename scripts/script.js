// user-menu popovers
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.user-menu')?.addEventListener('click', (e) => {
    const clickedLink = e.target.closest('.user-menu-link');

    if (clickedLink) {
      e.preventDefault();

      const links = e.currentTarget.querySelectorAll('.user-menu-link');

      if (clickedLink.classList.contains('user-menu-link--active')) {
        clickedLink.classList.remove('user-menu-link--active');
        clickedLink.blur();
      } else {
        links.forEach(link => {
          link.classList.remove('user-menu-link--active');
          link.blur();
        });
        clickedLink.classList.add('user-menu-link--active');
      }
    }
  });
});

// modal
document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector(".contacts-button");
  const overlay = document.querySelector(".modal-overlay");
  const closeButton = document.querySelector(".modal-close-button");
  const form = document.querySelector(".feedback-form");
  const body = document.body;

  const HIDDEN_CLASS = "modal-overlay--hidden";
  const BODY_LOCK_CLASS = "page-body--locked";

  let isOpen = !overlay.classList.contains(HIDDEN_CLASS);

  function openModal(event) {
    event.preventDefault();
    if (isOpen) return;

    overlay.classList.remove(HIDDEN_CLASS);
    body.classList.add(BODY_LOCK_CLASS);
    document.addEventListener("keydown", onEscPress);
    isOpen = true;
  }

  function closeModal() {
    if (!isOpen) return;

    overlay.classList.add(HIDDEN_CLASS);
    body.classList.remove(BODY_LOCK_CLASS);
    document.removeEventListener("keydown", onEscPress);

    if (form) {
      form.reset();
    }

    isOpen = false;
  }

  function onEscPress(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  if (openButton && overlay) {
    openButton.addEventListener("click", openModal);

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        closeModal();
      }
    });

    if (closeButton) {
      closeButton.addEventListener("click", closeModal);
    }
  }
});
