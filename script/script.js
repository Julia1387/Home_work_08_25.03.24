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

//----//   Результат фильтрации в вывести на страницу во втором модальном окне на вашем сайте pallas cat studio. результат выложить на гитхаб в прошлый проект, но разделите новый код комментариями!!

//   // Display the filtered names
//   const filteredEmployeesDiv = document.getElementById("filteredEmployees");
//   filteredEmployeesDiv.innerHTML = filteredNames.join(", ");
// }

class Employee {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  get() {
    return `Имя сотрудника: ${this.name}, Возвраст сотрудника: ${this.age}, должность сотрудника: ${this.position}`;
  }
}

const employees = [
  new Employee("Боб", 26, "Инженер"),
  new Employee("Алла", 28, "Врачь"),
  new Employee("Скай", 31, "Системный администратор"),
];

function filteredEmployeesPosition(employees, position) {
  const filteredEmployees = employees.filter((employee) => {
    return employee.position === position;
  });
  const names = filteredEmployees.map(function (employee) {
    return employee.name;
  });
  return names;
}

const buttonEmployee = document.querySelector(".btn__employee");

buttonEmployee.addEventListener("click", function () {
  const filteredNames = filteredEmployeesPosition(employees, "Врачь");
  console.log(filteredNames);
  modalEmployer(filteredNames);
});

function modalEmployer(filteredNames) {
  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modalW");

  const modalCloseWindow = document.createElement("div");
  modalCloseWindow.classList.add("modalW__close");

  const modalTitleWindow = document.createElement("h3");
  modalTitleWindow.textContent = "Employee information:";

  const modalWindowContent = document.createElement("div");
  modalWindowContent.classList.add("modalWindow__content");

  const nameList = document.createElement("ul");

  filteredNames.forEach((name) => {
    const listName = document.createElement("li");
    listName.textContent = name;
    nameList.append(listName);
  });

  modalWindowContent.append(nameList);
  modalWindow.append(modalCloseWindow, modalTitleWindow, modalWindowContent);

  const backgroundWindow = document.createElement("div");
  backgroundWindow.classList.add("background__window");
  backgroundWindow.append(modalWindow);

  const positionModal = document.querySelector(".position__modal");
  positionModal.append(backgroundWindow);

  modalCloseWindow.addEventListener("click", function () {
    backgroundWindow.remove();
  });
}
