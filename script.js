window.addEventListener("load", () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  document.querySelectorAll(".nav--btn").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // translation animations corrections
  const navAnchor1 = document.querySelector(".big--nav li:nth-child(1)");
  const navAnchor2 = document.querySelector(".big--nav li:nth-child(2)");
  const navAnchor3 = document.querySelector(".big--nav li:nth-child(3)");
  const navAnchor4 = document.querySelector(".big--nav li:nth-child(4)");
  const sec1FirstParagraph = document.querySelector("#home p:first-child");
  const header1 = document.querySelector("h1");
  const header2 = document.querySelector("h2");
  const sec1LastParagraph = document.querySelector("#home p:last-child");

  const elemApp = function (element, timing) {
    setTimeout(() => {
      element.style.opacity = "1";
    }, timing);
  };
  elemApp(navAnchor1, 100);
  elemApp(navAnchor2, 200);
  elemApp(navAnchor3, 300);
  elemApp(navAnchor4, 400);
  elemApp(sec1FirstParagraph, 2500);
  elemApp(header1, 3000);
  elemApp(header2, 3500);
  elemApp(sec1LastParagraph, 4000);

  // Background cloning
  const backgroundRow = document.querySelector("#row1");
  for (let i = 2; i < 15; i++) {
    let clone = backgroundRow.cloneNode(true);
    clone.id = `row${i}`;
    backgroundRow.after(clone);
  }

  // projects expand
  const projects = document.querySelectorAll(".project--bg");
  projects.forEach((project) => {
    project.addEventListener("mouseover", () => {
      project.style.height = "150%";
      project.style.transform = "translateY(-15%)";
      project.style.zIndex = "100";
      // Change img source on hover
      project.querySelector(".file").src = "./images/open-file.png";
    });
    project.addEventListener("mouseout", () => {
      project.style.height = "100%";
      project.style.transform = "translateY(0%)";
      project.style.zIndex = "1";
      project.querySelector(".file").src = "./images/file.png";
    });
  });

  const gitImages = document.querySelectorAll(".git--pic img");
  const externalSrcImages = document.querySelectorAll(".external--link img");
  const gitSrcRed = "./images/github-red.png";
  const externalSrcRed = "./images/exit-red.png";
  const gitSrcGreen = "./images/github-green.png";
  const externalSrcGreen = "./images/exit-green.png";
  const changeSource = function (array, src1, src2) {
    array.forEach((image) => {
      image.addEventListener("mouseover", () => {
        image.src = src1;
      });
      image.addEventListener("mouseout", () => {
        image.src = src2;
      });
    });
  };
  changeSource(gitImages, gitSrcGreen, gitSrcRed);
  changeSource(externalSrcImages, externalSrcGreen, externalSrcRed);

  // Form functionality
  const submitBtn = document.querySelector(".btn--cont input:first-child");
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");
  const messageDiv = document.querySelector(".ok--message");
  const messageText = document.querySelector(".ok--message p");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      firstName.validity.valid &&
      lastName.validity.valid &&
      subject.validity.valid &&
      message.validity.valid
    ) {
      messageDiv.style.backgroundColor = "var(--secondary-color)";
      messageDiv.style.height = "60px";
      messageText.style.transform = "translateY(0px)";
      messageText.innerHTML = `Thanks for contacting me, ${firstName.value}!`;
      firstName.value = "";
      lastName.value = "";
      subject.value = "";
      message.value = "";
      setTimeout(() => {
        messageText.style.transform = "translateY(40px)";
        messageDiv.style.height = "0px";
        setTimeout(() => {
          messageDiv.style.backgroundColor = "";
        }, 500);
      }, 2500);
    } else {
      messageDiv.style.backgroundColor = "var(--fill-color)";
      messageDiv.style.height = "60px";
      messageText.innerHTML = `
You forgot to fill in something😁`;
      messageText.style.transform = "translateY(0px)";
      setTimeout(() => {
        messageText.style.transform = "translateY(40px)";
        messageDiv.style.height = "0px";
        setTimeout(() => {
          messageDiv.style.backgroundColor = "";
        }, 500);
      }, 2500);
    }
  });

  // Logos color change
  const logoImg = document.querySelectorAll(".footer--logo");
  logoImg.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.src = `./images/${img.alt}-red.png`;
      img.style.transform = "scale(1.3)";
    });
    img.addEventListener("mouseout", () => {
      img.src = `./images/${img.alt}-green.png`;
      img.style.transform = "scale(1)";
    });
  });

  // Sections reveal on scroll
  window.addEventListener("scroll", () => {
    let revealClasses = document.querySelectorAll(".reveal");
    for (let i = 0; i < revealClasses.length; i++) {
      let windowHeight = window.innerHeight;
      let revealCoord = 200;
      let revealTop = revealClasses[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - revealCoord) {
        revealClasses[i].classList.add("active");
      }
    }
  });

  // Responsive nav
  const menu = document.querySelector(".sandwich--menu");
  const linksContainer = document.querySelector(".small--nav--links");
  menu.addEventListener("click", () => {
    menu.classList.toggle("openmenu");
    if (menu.classList.contains("openmenu")) {
      linksContainer.style.height = "320px";
    } else if (!menu.classList.contains("openmenu")) {
      linksContainer.style.height = "0px";
    }
  });

  const navLinksImg = document.querySelectorAll(".small--nav--links a img");
  navLinksImg.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.border = "2px solid var(--fill-color)";
      img.src = `./images/${img.alt}-red.png`;
    });
    img.addEventListener("mouseout", () => {
      img.style.border = "2px solid var(--secondary-color)";
      img.src = `./images/${img.alt}-green.png`;
    });
  });
});
