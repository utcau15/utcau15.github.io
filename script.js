"use strict";
// kiểm tra email nhâp vào có hợp lệ không
const outEmail = document.querySelector(".submit");
const adHidden = document.querySelector(".hide");
const reHidden = document.querySelector(".seach");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const openInfo = function () {
  adHidden.classList.remove("hidden");
};

const cloInfo = function () {
  reHidden.classList.add("hidden");
};

outEmail.addEventListener("click", function () {
  let inEmail = document.getElementById("emails").value;
  if (!regex.test(inEmail)) {
    alert("khong hop le");
  } else if (adHidden.classList.contains("hidden")) {
    openInfo();
    cloInfo();
    // console.log(inEmail);
  }
});

// phan 10
// tạo view more và view less trong class job
const job = [
  "experience",
  "education",
  "work",
  "interests",
  "language",
  "skill",
];
const jobDiv = [
  "experience-div",
  "education-div",
  "work-div",
  "interests-div",
  "language-div",
  "skill-div",
];

const viewMore = document.querySelectorAll(".viewMore");

for (let i = 0; i < job.length; i++) {
  let viewDis = document.querySelector(`.${job[i]}`);
  // console.log(a);
  // khi di chuột lên phần tử thì nó sẽ xuất hiện view more
  viewDis.addEventListener("mouseover", function () {
    const viewMain = document.querySelector(`.${jobDiv[i]}`);
    viewMore[i].classList.remove("hidden");

    // kiểm tra và them display none hay bỏ
    if (viewMain.classList.contains("hidden")) {
      viewMore[i].addEventListener("click", function () {
        viewMore[i].textContent = "view less";
        viewMain.classList.remove("hidden");
      });
    } else if (!viewMain.classList.contains("hidden")) {
      viewMore[i].addEventListener("click", function () {
        viewMore[i].textContent = "view more";
        viewMain.classList.add("hidden");
      });
    }
  });
  viewDis.addEventListener("mouseout", function () {
    if (!viewMore[i].classList.contains("hidden")) {
      viewMore[i].classList.add("hidden");
    }
  });
}
