// 保持原有的平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 新增：隨機的打字機錯誤效果或標題顫動
const heroName = document.querySelector('.hero-name');
setInterval(() => {
  if(Math.random() > 0.95) {
    heroName.style.transform = `translate(${Math.random()*10}px, ${Math.random()*10}px)`;
    setTimeout(() => {
        heroName.style.transform = `translate(0,0)`;
    }, 50);
  }
}, 100);
