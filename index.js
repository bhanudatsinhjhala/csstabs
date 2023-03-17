const tabButtons = document.querySelector(".tab-buttons");
const tabTitle = document.querySelectorAll(".tab-title");
let lastContent = "content1";
tabButtons.addEventListener("click", (event) => {
  const root = document.documentElement;
  const translateTargetValue = event.target.dataset.translateValue;
  if (event.target.classList.contains("tab-title")) {
    const lastActiveContent = document.querySelector(`.${lastContent}`);
    lastActiveContent.classList.remove("content-active");
    const contentDisplay = document.querySelector(`.${event.target.id}`);
    contentDisplay.classList.add("content-active");
    lastContent = event.target.id;
    root.style.setProperty("--translate-tab-slider", translateTargetValue);
    handleActiveTab(tabTitle, event, "tab-active");
  }
});

function handleActiveTab(tabs, event, activeClass) {
  tabs.forEach((tab) => {
    tab.classList.remove(activeClass);
  });
  if (!event.target.classList.contains(activeClass)) {
    event.target.classList.add(activeClass);
  }
}
