const labels = document.querySelectorAll(".label");
const contents = document.querySelectorAll(".content");

const handleToggleConetnt = (targetIndex) => {
  contents.forEach((contentItem) => {
    contentItem.classList.remove("active");
  });
  contents[targetIndex].classList.add("active");
};

const handleToggleLabel = (targetIndex) => {
  labels.forEach((contentItem) => {
    contentItem.classList.remove("active");
  });
  labels[targetIndex].classList.add("active");
};

labels.forEach((labelItem, index) => {
  labelItem.addEventListener("click", () => {
    handleToggleConetnt(index);
    handleToggleLabel(index);
  });
});
