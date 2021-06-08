function accordian(e) {
  const id = e.id;
  const childrenCount = e?.parentElement?.parentElement?.childElementCount;
  for (let i = 1; i <= childrenCount; i++) {
    if (id != i) CollapseAll(i);
  }
  modifyDom(id);
}

function modifyDom(id) {
  const accIcon = document.getElementById("accIcon" + id);
  const dom = document.getElementById("trans" + id);
  const question = document.getElementById(id);
  if (dom.style.display == "block") {
    dom.style.display = "none";
    accIcon.style.transform = "rotateX(0deg)";
    question.style.fontWeight = "normal";
    // question.style.display = "inline";
  } else {
    dom.style.display = "block";
    accIcon.style.transform = "rotateX(180deg)";
    question.style.fontWeight = "bold";
    // question.style.display = "inline";
  }
}

function CollapseAll(id) {
  const accIcon = document.getElementById("accIcon" + id);
  const dom = document.getElementById("trans" + id);
  const question = document.getElementById(id);
  if (accIcon && dom && question) {
    dom.style.display = "none";
    accIcon.style.transform = "rotateX(0deg)";
    question.style.fontWeight = "normal";
  }
}
