document.querySelectorAll(".toggle").forEach(card=>{
  card.addEventListener("click",()=>{
    let hidden = card.querySelector(".hidden");
    hidden.style.display =
      hidden.style.display === "block" ? "none" : "block";
  });
});
