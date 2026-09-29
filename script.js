const imgs = [...document.querySelectorAll(".gallery img")], box = document.getElementById("lightbox"), preview = document.getElementById("preview"); let visible = imgs, current = 0;
function open(i) { current = i; preview.src = visible[current].src; preview.alt = visible[current].alt; box.classList.add("show") }
function change(n) { current = (current + n + visible.length) % visible.length; preview.src = visible[current].src; preview.alt = visible[current].alt }
imgs.forEach(img => img.onclick = () => open(visible.indexOf(img)));
document.getElementById("close").onclick = () => box.classList.remove("show");
document.getElementById("prev").onclick = () => change(-1);
document.getElementById("next").onclick = () => change(1);
document.addEventListener("keydown", e => { if (!box.classList.contains("show")) return; if (e.key === "Escape") box.classList.remove("show"); if (e.key === "ArrowLeft") change(-1); if (e.key === "ArrowRight") change(1) });
document.querySelectorAll(".filters button").forEach(btn => btn.onclick = () => { document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active")); btn.classList.add("active"); let f = btn.dataset.filter; imgs.forEach(img => img.style.display = f === "all" || img.dataset.cat === f ? "block" : "none"); visible = imgs.filter(img => img.style.display !== "none") });