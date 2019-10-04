

let topOfSite = document.getElementById("top-of-site-pixel-anchor");





function observeScroll() {
if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    document.body.classList.add("header-not-at-top");
  } else {
    document.body.classList.remove("header-not-at-top");
  }
});
observer.observe(topOfSite);
}

}



observeScroll();