// Portfolio v2.1 — 只有手機選單需要 JavaScript

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

// 按鈕文字跟著網頁語言：<html lang="en"> 顯示 Menu / Close，否則顯示 選單 / 關閉
const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
const LABEL = isEnglish ? { open: "Close", closed: "Menu" } : { open: "關閉", closed: "選單" };

function setMenu(open) {
  menu.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? LABEL.open : LABEL.closed;
}

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));

  // 點選單裡的連結、按 Esc、或點選單外面，都會關閉
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (menu.classList.contains("open") && !e.target.closest(".header nav")) setMenu(false);
  });
}
