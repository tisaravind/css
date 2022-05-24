let text = document.querySelectorAll(".animate");

let observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("in-view");
    } else {
      e.target.classList.remove("in-view");
    }
  });
});

text.forEach((el) => {
  observer.observe(el);
});

let textAnimateUp = document.querySelectorAll(".animate-text-up");

let textObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("animate-text-up-normal");
    } else {
      e.target.classList.remove("animate-text-up-normal");
    }
  });
});

textAnimateUp.forEach((el) => {
  textObserver.observe(el);
});
//FOR CAROUSAL
// let p = document.getElementById('para');
// let offset = 0
// let original = p.style.backgroundPositionY;

// let lis = (event) => {
//     offset = offset || window.pageYOffset;
//     let parallaxOffset = offset - window.pageYOffset
//     console.log(parallaxOffset)
//     p.style.backgroundPositionY = parallaxOffset * 0.09 + 'px'
// }

// pObs = new IntersectionObserver(entries=> {
//     entries.forEach(e => {
//         if(e.isIntersecting) {
//             window.addEventListener('scroll', lis)
//         } else {
//             window.removeEventListener('scroll', lis)
//             offset = 0
//             // p.style.backgroundPositionY = original
//         }
//     })
// })

// pObs.observe(p)

//code to move carousal in x axis. Will work on first carousal

// let carousal = document.getElementById("carousal-test");

// let pageOffset = 0;
// const scrollCarousal = () => {
//   pageOffset = pageOffset || window.pageYOffset;
//   let carousalOffset = pageOffset - window.pageYOffset;
//   console.log(carousalOffset);
//   carousal.style.transform = `translateX(${carousalOffset}px)`;
// };

// carousalObserver = new IntersectionObserver((entries) => {
//   entries.forEach((el) => {
//     if (el.isIntersecting) {
//       console.log("intersect");
//       window.addEventListener("scroll", scrollCarousal);
//     } else {
//       console.log("not intersecting");
//       window.removeEventListener("scroll", scrollCarousal);
//     }
//   });
// });

// carousalObserver.observe(carousal);

let parallax_sections = document.querySelectorAll(".js-parallax-section");
for (let parallax_section of parallax_sections) {
  let _from = parallax_section.getAttribute("data-from") || "0px";
  let _to = parallax_section.getAttribute("data-to") || "100px";
  let instance = basicScroll.create({
    elem: parallax_section,
    from: "top-middle",
    to: "bottom-middle",
    direct: true,
    props: {
      "--ty": {
        from: _from,
        to: _to,
      },
    },
  });
  instance.start();
}

let carousalElems = document.querySelectorAll(".carousal");

carousalElems.forEach((elem) => {
  basicScroll
    .create({
      elem: elem,
      from: "top-bottom",
      to: "bottom-top",

      direct: true,

      props: {
        "--tx": {
          from: "0.5%",

          to: "-5%",
        },

        "--tx-2": {
          from: "0",

          to: "-8%",
        },

        "--txMb": {
          from: "50px",

          to: "-150px",
        },
      },
    })
    .start();
});
