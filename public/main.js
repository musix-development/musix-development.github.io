getColors().then((colors) => {
  if (document.URL.includes("/guide")) {
    document.documentElement.style.setProperty("--main-accent", colors.green);
  }
});

async function getColors() {
  const res = await fetch("./public/colors.json");
  const final = await res.json();
  return final;
}
