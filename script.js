// ===== วันที่ข่าว (แก้ได้ตามฉากในหนัง) =====
document.getElementById("pubDate").textContent = "11 ก.ค. 2569 เวลา 17:30 น.";

// ===== ถ้าหารูปไม่เจอ ให้โชว์กล่องเทาบอกชื่อไฟล์ =====
document.querySelectorAll("figure img").forEach(img => {
  img.addEventListener("error", () => {
    const box = document.createElement("div");
    box.className = "img-missing";
    box.textContent = "ไม่พบรูป: " + img.getAttribute("src");
    img.replaceWith(box);
  });
});

// ===== ปุ่มแชร์ =====
const url = encodeURIComponent(location.href);
const title = encodeURIComponent(document.title);
const set = (id, href) => {
  const a = document.getElementById(id);
  a.href = href;
  a.target = "_blank";
};
set("shFb", "https://www.facebook.com/sharer/sharer.php?u=" + url);
set("shX", "https://twitter.com/intent/tweet?url=" + url + "&text=" + title);
set("shLn", "https://social-plugins.line.me/lineit/share?url=" + url);

// ===== ปุ่มคัดลอกลิงก์ =====
document.getElementById("shCp").addEventListener("click", e => {
  e.preventDefault();
  navigator.clipboard?.writeText(location.href);
  const b = e.currentTarget, old = b.textContent;
  b.textContent = "✓";
  setTimeout(() => (b.textContent = old), 1200);
});