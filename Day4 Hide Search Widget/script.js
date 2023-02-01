const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const lists = document.querySelector(".list-container");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  if (input.value) getYoutubeSearch(input.value);
  input.value = "";
});

function getYoutubeSearch(query) {
  const URL =
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAjR1y2nOlTgAGakiRoqREhQeswMa6R6IU&q=";
  const withQuery = URL + query + "&part=snippet&maxResults=10";
  fetch(withQuery)
    .then((res) => res.json())
    .then((data) => updateList(data));
}

function updateList(data) {
  lists.innerHTML = "";
  const ul = document.createElement("ul");
  // console.log(
  //   "Data",
  //   data.items,
  //   data.items.filter((d) => d.id.kind === "youtube#video")
  // );
  data.items
    .filter((d) => d.id.kind === "youtube#video")
    .forEach((item) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const img = document.createElement("img");
      const p = document.createElement("p");
      console.log(item?.snippet?.title);
      p.innerHTML = item.snippet.title;
      const { snippet, id } = item;
      const { url, width, height } = snippet.thumbnails.default;
      img.src = url;
      img.width = width;
      img.height = height;
      div.appendChild(img);
      div.appendChild(p);
      li.appendChild(div);
      li.classList.add("li");
      li.addEventListener("click", () => {
        openOnYoutube(id);
      });
      ul.appendChild(li);
    });

  lists.appendChild(ul);
}

function openOnYoutube(id) {
  const URL = "https://www.youtube.com/watch?v=";
  let targetURL = "https://www.youtube.com/watch?v=";
  targetURL += id.channelId || id.videoId || id.playlistId;
  // if (id.kind === "youtube#channel") {
  // } else {
  //   targetURL += id.videoId;
  // }

  window.open(targetURL, "_blank");
}
