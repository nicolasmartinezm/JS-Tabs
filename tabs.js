const tabs = document.querySelector(".tabs");
const tabBtns = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
const clickHandler = (e) => {
  tabBtns.forEach((btn) => btn.setAttribute("aria-selected", false));
  tabPanels.forEach((tab) => (tab.hidden = true));
  const { id } = e.target;
  const panelSelected = tabs.querySelector(`[aria-labelledby="${id}"]`);
  e.target.setAttribute("aria-selected", true);
  panelSelected.hidden = false;
};
tabBtns.forEach((btn) => btn.addEventListener("click", clickHandler));
