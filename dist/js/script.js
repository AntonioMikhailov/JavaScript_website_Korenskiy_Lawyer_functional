"use strict";

(() => {
  "use strict";

  let e = window.innerWidth - document.body.clientWidth;

  function t() {
    setTimeout(() => {
      document.body.style.marginRight = "0px", document.body.classList.remove("lock"), document.querySelector(".anchor-wrapper").style.display = "";
    }, 300);
  }

  window.addEventListener("DOMContentLoaded", () => {
    (function () {
      const e = document.querySelector(".anchor-wrapper");
      let t = 0;

      function s(e) {
        const t = document.querySelector(e);
        let s = window.pageYOffset,
            i = t.offsetTop - s,
            n = null;
        window.requestAnimationFrame(function e(t) {
          n || (n = t);
          let o = t - n;
          var c, a;
          window.scrollTo(0, (c = o, a = s, -i / 2 * (Math.cos(Math.PI * c / 1e3) - 1) + a)), o < 1e3 && window.requestAnimationFrame(e);
        });
      }

      window.addEventListener("scroll", function () {
        let s = window.pageYOffset,
            i = window.innerHeight;
        Math.floor(document.body.getBoundingClientRect().top) > t && s >= i ? e.classList.add("anchor-active") : e.classList.remove("anchor-active"), t = document.body.getBoundingClientRect().top;
      }), e.addEventListener("click", function () {
        s(".header-wrapper"), e.classList.remove("anchor-active"), i.forEach(e => {
          e.classList.remove("active-navMenu");
        });
      });
      const i = document.querySelectorAll("a");
      i.forEach(e => {
        e.addEventListener("click", function (t) {
          t.preventDefault(), e.hasAttribute("data-link") && (e.hasAttribute("data-noTitleChange") || (document.querySelector("title").innerHTML = `${e.innerHTML} - Адвокат Коренский`), s(`${e.getAttribute("href")}`), i.forEach(e => {
            e.classList.remove("active-navMenu", "active-mobile");
          }), e.hasAttribute("data-nav") ? e.classList.add("active-navMenu") : e.hasAttribute("data-mobile") && e.classList.add("active-mobile"));
        });
      });
    })(), function (s, i) {
      const n = document.querySelector(i),
            o = document.querySelector(s);
      o.addEventListener("click", () => {
        o.classList.toggle("active-burger"), n.classList.toggle("showMobileMenu"), document.body.style.marginRight = e + "px", document.querySelector(".anchor-wrapper").style.display = "none", document.body.classList.add("lock");
      }), n.addEventListener("click", e => {
        e.target == n && (n.classList.remove("showMobileMenu"), o.classList.remove("active-burger"), t());
      }), document.querySelectorAll(".mobile-menu__item").forEach(e => {
        e.addEventListener("click", () => {
          setTimeout(() => {
            n.classList.remove("showMobileMenu"), o.classList.remove("active-burger"), t();
          }, 500);
        });
      });
    }(".s0-burger__button", ".mobile-menu"), function () {
      const e = document.querySelectorAll(".s1-slideBlock "),
            t = document.querySelectorAll(".s1-indicator__item"),
            s = document.querySelectorAll(".s1-textRow ");
      e[0].classList.add("s1-slideBlock__active"), setTimeout(() => {
        s.forEach(e => {
          e.classList.remove("oneTextRow__show"), s[n - 1].classList.add("oneTextRow__show");
        });
      }, 500);
      let i,
          n = 1;

      function o() {
        i = setInterval(() => {
          var i;
          (i = n += 1) > e.length && (n = 1), i < 1 && (n = e.length), e.forEach(t => {
            t.classList.remove("s1-slideBlock__active"), e[n - 1].classList.add("s1-slideBlock__active"), setTimeout(() => {
              s.forEach(e => {
                e.classList.remove("oneTextRow__show"), s[n - 1].classList.add("oneTextRow__show");
              });
            }, 500);
          }), t.forEach(e => {
            e.classList.remove("s1-indicator__active"), t[n - 1].classList.add("s1-indicator__active");
          });
        }, 7e3);
      }

      o(), t.forEach((n, o) => {
        n.addEventListener("click", () => {
          clearInterval(i), e.forEach(s => {
            s.classList.remove("s1-slideBlock__active"), e[o].classList.add("s1-slideBlock__active"), t.forEach(e => {
              e.classList.remove("s1-indicator__active"), t[o].classList.add("s1-indicator__active");
            });
          }), setTimeout(() => {
            s.forEach(e => {
              e.classList.remove("oneTextRow__show"), s[o].classList.add("oneTextRow__show");
            });
          }, 500);
        });
      });
      const c = document.querySelector(".s1-slideBlock"),
            a = document.querySelector(".s1 "),
            l = getComputedStyle(c);

      function r() {
        a.style.height = l.height;
      }

      r(), window.addEventListener("resize", () => {
        r();
      }), a.addEventListener("mouseenter", () => {
        clearInterval(i);
      }), a.addEventListener("mouseleave", () => {
        o();
      });
    }(), function () {
      const e = document.querySelector(".s5-right"),
            t = document.querySelectorAll(".s5-item__timeline");
      window.addEventListener("scroll", () => {
        e.getBoundingClientRect().top < window.innerHeight - 100 && t.forEach(e => {
          e.classList.add("timeline-active");
        });
      });
    }(), function (e) {
      const t = document.querySelector(".container"),
            s = getComputedStyle(t),
            i = document.querySelector(".s6-left__row");

      function n() {
        i.style.marginLeft = s.marginLeft;
      }

      n(), window.addEventListener("resize", () => {
        n();
      });
    }(), function () {
      const e = document.querySelectorAll(".s9-item__titleRow");
      e.forEach(t => {
        e[0].nextElementSibling.style.maxHeight = e[0].nextElementSibling.scrollHeight + "px", e[0].classList.add("s9-showText"), e[0].firstElementChild.firstElementChild.classList.add("s9-item_activeIcon"), t.addEventListener("click", function () {
          this.classList.toggle("s9-showText"), this.firstElementChild.firstElementChild.classList.toggle("s9-item_activeIcon"), console.log(this.firstElementChild), this.classList.contains("s9-showText") ? this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px" : this.nextElementSibling.style.maxHeight = "0px";
        });
      });
    }(), function () {
      const e = document.querySelector(".s11-row "),
            t = document.querySelectorAll(".s11-indicator__item"),
            s = window.matchMedia("(max-width: 768px)");

      function i() {
        s.matches ? t.forEach(e => {
          e.classList.remove("s11-hide__indicator");
        }) : t.forEach((e, s) => {
          t[3].classList.add("s11-hide__indicator"), t[4].classList.add("s11-hide__indicator"), t[5].classList.add("s11-hide__indicator");
        });
      }

      i(), window.addEventListener("resize", () => {
        i();
      }), t.forEach((i, n) => {
        let o = +(getComputedStyle(e).width + "px").replace(/\D/g, ""),
            c = n;
        i.addEventListener("click", () => {
          s.matches ? (e.style.transform = `translate(-${o * c}px)`, t.forEach(e => {
            e.classList.remove("s11-indicator__active"), t[n].classList.add("s11-indicator__active");
          })) : (0 == n && (e.style.transform = `translate(-${o * c}px)`, t.forEach(e => {
            e.classList.remove("s11-indicator__active"), t[0].classList.add("s11-indicator__active");
          })), 1 == n && (e.style.transform = `translate(-${2 * o / 3}px)`, t.forEach(e => {
            e.classList.remove("s11-indicator__active"), t[1].classList.add("s11-indicator__active");
          })), 2 == n && (e.style.transform = `translate(-${o}px)`, t.forEach(e => {
            e.classList.remove("s11-indicator__active"), t[2].classList.add("s11-indicator__active");
          })));
        });
      });
    }(), function (e, t, s) {
      const i = document.querySelector("form"),
            n = document.querySelectorAll("input"),
            o = document.querySelector("textarea");
      i.addEventListener("submit", e => {
        e.preventDefault();
        let t = 0;
        n.forEach(e => {
          e.value.length > 0 && o.value.length > 0 && (t++, console.log(t), t == n.length && (i.lastElementChild.classList.remove("active-warn"), i.lastElementChild.classList.add("active-form"), i.lastElementChild.innerHTML = "сообщение отправлено", console.log(t), setTimeout(() => {
            i.reset();
          }, 1500)));
        }), n.forEach(e => {
          0 != e.value.length && 0 != o.value.length || (i.lastElementChild.innerHTML = "заполните все поля", i.lastElementChild.classList.add("active-warn"));
        }), i.addEventListener("input", e => {
          e.preventDefault(), i.lastElementChild.classList.remove("active-form"), i.lastElementChild.classList.remove("active-warn"), i.lastElementChild.innerHTML = "отправить сообщение";
        });
      });
    }();
  });
})();