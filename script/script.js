async function modalApi() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const data = await response.json();
    // console.log(data);
    console.log(data[2]);
    fetchApi(data);
  } catch (error) {
    console.error("Ошибка", error);
  }
}
modalApi();

function fetchApi(data) {
  const shadows = document.createElement("div");
  shadows.classList.add("shadows");

  const modalWindow = document.createElement("div");
  modalWindow.classList.add("container__modal");

  const modalMainTitle = document.createElement("h2");
  modalMainTitle.textContent = `Fetch posts`;

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("container__post");

  data.forEach((element) => {
    const itemPost = document.createElement("div");
    itemPost.classList.add("item__post");

    const titlePost = document.createElement("div");
    titlePost.classList.add("title__post");

    const titleModalPost = document.createElement("p");
    titleModalPost.textContent = `Title: `;

    const titleText = document.createElement("p");
    titleText.textContent = `${element.title}`;

    const postTextBody = document.createElement("div");
    // postTextBody.textContent = "postText__body";

    const infoBody = document.createElement("p");
    infoBody.textContent = `Body:`;

    const textBody = document.createElement("p");
    textBody.textContent = `${element.body}`;

    titlePost.append(titleModalPost, titleText);
    postTextBody.append(infoBody, textBody);
    itemPost.append(titlePost, postTextBody);
    modalContainer.append(itemPost);
  });
  const modalWindowClose = document.createElement("div");
  modalWindowClose.classList.add("close");

  modalWindow.append(modalMainTitle, modalContainer, modalWindowClose);
  shadows.append(modalWindow);

  modalWindowClose.addEventListener("click", function () {
    shadows.remove();
  });
  document.body.append(shadows);
}

const modalButton = document.querySelector(".btn__fetch");
modalButton.addEventListener("click", function () {
  modalApi();
});
