const image = document.querySelector(".image");
const scan = document.querySelector(".scan-line");
const percent = document.querySelector(".percent");

let progress = { value: 0 };

gsap.to(progress, {
  value: 100,
  duration: 4,
  ease: "none", // 👈 REAL-TIME feel
  onUpdate: () => {
    percent.textContent = Math.floor(progress.value) + "%";

    gsap.set(image, {
      clipPath: `inset(${100 - progress.value}% 0 0 0)`
    });

    gsap.set(scan, {
      y: window.innerHeight * (progress.value / 100)
    });
  }
});
