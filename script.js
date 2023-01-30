const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const modalHeader = document.querySelector("#headerTitle");
    const modal = document.querySelector("#myModal");
    const iframe = document.querySelector("iframe");
    console.log(card);
    const cardText = card.childNodes[1].innerText;
    modalHeader.innerHTML = cardText;
    iframe.src = `./${cardText}/index.html`;
    iframe.title = cardText;

    modal.showModal();

    const closeBtn = document.querySelector("#closeBtn");
    closeBtn.addEventListener("click", () => {
      iframe.src = "./pageNotFound.html";
      iframe.title = "Page Not Found";
      modal.close();
    });
  });
});
