import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let date, month, year, hours, mins, timerHours, timerMinutes, timerSeconds;
    let bean = /* @__PURE__ */ new Date();
    setInterval(
      () => {
        bean = /* @__PURE__ */ new Date();
      },
      1e3
    );
    let timerTime = 0;
    date = bean.getDate();
    month = bean.getMonth();
    year = bean.getFullYear();
    hours = bean.getHours();
    mins = bean.getMinutes();
    timerHours = Math.floor(timerTime / 3600).toString().padStart(2, "0");
    timerMinutes = Math.floor(timerTime % 3600 / 60).toString().padStart(2, "0");
    timerSeconds = (timerTime % 60).toString().padStart(2, "0");
    $$renderer2.push(`<link rel="preconnect" href="https://fonts.gstatic.com"/> <link href="https://fonts.googleapis.com/css2?family=BBH+Bogle&amp;family=Quicksand:wght@300..700&amp;display=swap" rel="stylesheet"/> <div class="centerdiv"><h2>${escape_html(date)}/${escape_html(month)}/${escape_html(year)}</h2> <h1>${escape_html(hours.toString().padStart(2, "0"))}:${escape_html(mins.toString().padStart(2, "0"))}</h1> <p>${escape_html(timerHours)}:${escape_html(timerMinutes)}:${escape_html(timerSeconds)}</p> <div class="row"><button>Start</button> <button class="pause">Pause</button> <button class="stop">Reset</button></div></div>`);
  });
}
export {
  _page as default
};
