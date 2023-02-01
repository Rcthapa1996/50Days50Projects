const data = [
  {
    id: "1",
    title: "Day1 Expanding Cards",
    imgSrc: "./img/Day1.png",
    path: "./Day1 Expanding Cards/index.html",
  },
  {
    id: "2",
    title: "Day2 Progress Steps",
    imgSrc: "./img/Day2.png",
    path: "./Day2 Progress Steps/index.html",
  },
  {
    id: "3",
    title: "Day3 Rotating Navigation",
    imgSrc: "./img/Day3.png",
    path: "./Day3 Rotating Navigation/index.html",
  },
  {
    id: "4",
    title: "Day4 Work In Progress",
    imgSrc: "./img/wip.png",
    path: "./pageNotFound.html",
  },
  {
    id: "5",
    title: "Hand Written Digit Recognition",
    imgSrc: "./img/HandWrittenDigit.png",
    path: "https://publuu.com/flip-book/80543/226315/page/4",
  },
  {
    id: "6",
    title: "My Resume",
    imgSrc: "./img/Resume.png",
    path: "/doc/Ramchandra_Thapa_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit&pagemode=none&zoom=page-fit",
  },
];

const cardContainer = document.getElementById("card-container");
console.log(cardContainer);

data.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = item.id;

  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = item.title;

  const img = document.createElement("img");
  img.src = item.imgSrc;
  img.style.width = "100%";
  img.style.height = "70%";
  img.alt = item.title;

  card.appendChild(title);
  card.appendChild(img);

  cardContainer.appendChild(card);
});

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const modalHeader = document.querySelector("#headerTitle");
    const modal = document.querySelector("#myModal");
    const iframe = document.querySelector("iframe");
    const { title, path } = data.filter((d) => d.id === card.id)[0];
    console.log(title, path);
    modalHeader.innerHTML = title;
    iframe.src = path;
    iframe.title = title;

    modal.showModal();

    const closeBtn = document.querySelector("#closeBtn");
    closeBtn.addEventListener("click", () => {
      iframe.src = "./pageNotFound.html";
      iframe.title = "Page Not Found";
      modal.close();
      i;
    });
  });
});
