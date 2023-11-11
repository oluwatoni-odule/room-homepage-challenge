//Variables

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar-1");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");
const rightAngle = document.getElementById("right-angle");
const leftAngle = document.getElementById("left-angle");

const headerImage1 = "mobile-image-hero-1.jpg";
const headerImage2 = "mobile-image-hero-2.jpg";
const headerImage3 = "mobile-image-hero-3.jpg";

const headerImageDesktop1 = "desktop-image-hero-1.jpg";
const headerImageDesktop2 = "desktop-image-hero-2.jpg";
const headerImageDesktop3 = "desktop-image-hero-3.jpg";

const shopHeaderText = document.getElementById("shop-h1");
const shopParagraph = document.getElementById("shop-paragraph");

//Event listeners

hamburger.addEventListener("click", (event) => {
  if (navbar.style.visibility === "hidden" || navbar.style.visibility === "") {
    navbar.style.visibility = "visible";
    navbar.classList.add("open");
    hamburger.style.visibility = "hidden";
    overlay.style.visibility = "visible";
  } else {
    navbar.style.visibility = "hidden";
    hamburger.style.visibility = "visible";
  }
});

close.addEventListener("click", (event) => {
  if (navbar.style.visibility === "visible") {
    navbar.style.visibility = "hidden";
    navbar.classList.remove("open");
    hamburger.style.visibility = "visible";
    overlay.style.visibility = "hidden";
  }
});

rightAngle.addEventListener("click", (event) => {
  if (window.innerWidth < 900) {
    let computedHeaderStyle = window.getComputedStyle(header);
    let currentImageUrl = computedHeaderStyle.backgroundImage;

    if (currentImageUrl.includes(headerImage1)) {
      header.style.backgroundImage = `url(${headerImage2})`;

    } else if (currentImageUrl.includes(headerImage2)) {
      header.style.backgroundImage = `url(${headerImage3})`;
    } else {
      header.style.backgroundImage = `url(${headerImage1})`;
    }
  } else {
    let computedHeaderStyle = window.getComputedStyle(header);
    let currentImageUrl = computedHeaderStyle.backgroundImage;

    if (currentImageUrl.includes(headerImageDesktop1)) {
      header.style.backgroundImage = `url(${headerImageDesktop2})`;
      shopHeaderText.textContent = "We are available all across the globe";
      shopParagraph.textContent = `With stores all over the world, it's
    easy for you to find furniture for your home or place of business. Locally,
    we’re in most major cities throughout the country. Find the branch nearest
    you using our store locator. Any questions? Don't hesitate to contact us
    today.`;
    } else if (currentImageUrl.includes(headerImageDesktop2)) {
      header.style.backgroundImage = `url(${headerImageDesktop3})`;
      shopHeaderText.textContent = "Manufactured with the best materials";
      shopParagraph.textContent = `Our company has invested in advanced
    technology to ensure that every product is made as perfect and as consistent
    as possible. With three decades of experience in this industry, we
    understand what customers want for their home and office.`;
    } else {
      header.style.backgroundImage = `url(${headerImageDesktop1})`;
      shopHeaderText.textContent = "Discover innovative ways to decorate";
      shopParagraph.textContent = `We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.`;
    }
  }
});

leftAngle.addEventListener("click", (event) => {
  if (window.innerWidth < 900) {
    let computedHeaderStyle = window.getComputedStyle(header);
    let currentImageUrl = computedHeaderStyle.backgroundImage;

    if (currentImageUrl.includes(headerImage1)) {
      header.style.backgroundImage = `url(${headerImage3})`;
    } else if (currentImageUrl.includes(headerImage2)) {
      header.style.backgroundImage = `url(${headerImage1})`;
    } else {
      header.style.backgroundImage = `url(${headerImage2})`;
    }
  } else {
    let computedHeaderStyle = window.getComputedStyle(header);
    let currentImageUrl = computedHeaderStyle.backgroundImage;

    if (currentImageUrl.includes(headerImageDesktop1)) {
      header.style.backgroundImage = `url(${headerImageDesktop3})`;
      shopHeaderText.textContent = "We are available all across the globe";
      shopParagraph.textContent = `With stores all over the world, it's
    easy for you to find furniture for your home or place of business. Locally,
    we’re in most major cities throughout the country. Find the branch nearest
    you using our store locator. Any questions? Don't hesitate to contact us
    today.`;
    } else if (currentImageUrl.includes(headerImageDesktop2)) {
      header.style.backgroundImage = `url(${headerImageDesktop1})`;
      shopHeaderText.textContent = "Manufactured with the best materials";
      shopParagraph.textContent = `Our company has invested in advanced
    technology to ensure that every product is made as perfect and as consistent
    as possible. With three decades of experience in this industry, we
    understand what customers want for their home and office.`;
    } else {
      header.style.backgroundImage = `url(${headerImageDesktop2})`;
      shopHeaderText.textContent = "Discover innovative ways to decorate";
      shopParagraph.textContent = `We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.`;
    }
  }
});
