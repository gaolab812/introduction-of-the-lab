(function () {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) return;

  const $ = (id) => document.getElementById(id);
  const esc = (value) =>
    String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[ch]);

  // 头像：有图片用图片，否则用姓名首字
  function avatarHtml(name, src, extraClass) {
    const label = esc(String(name || "?").trim().charAt(0));
    const cls = "avatar" + (extraClass ? " " + extraClass : "");
    if (src) {
      return '<div class="' + cls + '"><img src="' + esc(src) + '" alt="' + esc(name) + '"></div>';
    }
    return '<div class="' + cls + '" aria-hidden="true">' + label + "</div>";
  }

  // ---------- 基本信息 ----------
  document.title = (data.name || "实验室") + " - 实验室主页";
  $("brand-name").textContent = data.name || "实验室";
  $("hero-eyebrow").textContent = data.eyebrow || "";
  $("hero-title").textContent = data.heroTitle || data.name || "实验室名称";
  $("hero-title-en").textContent = data.heroTitleEn || "";
  $("hero-subtitle").textContent = data.heroSubtitle || "";

  // ---------- 首屏数字 ----------
  $("stats").innerHTML = (data.stats || [])
    .map((s) => "<div><dt>" + esc(s.value) + "</dt><dd>" + esc(s.label) + "</dd></div>")
    .join("");

  // ---------- 简介 ----------
  $("about-text").innerHTML = (data.about || [])
    .map((p) => "<p>" + esc(p) + "</p>")
    .join("");

  $("quick-info").innerHTML = (data.quickInfo || [])
    .map((i) => "<div><dt>" + esc(i.label) + "</dt><dd>" + esc(i.value) + "</dd></div>")
    .join("");

  // ---------- PI 介绍 ----------
  if (data.pi) {
    const pi = data.pi;
    const bioHtml = (pi.bio || [])
      .map((p) => "<p>" + esc(p) + "</p>")
      .join("");

    const timelineHtml = (pi.timeline || [])
      .map(
        (t) =>
          '<li class="tl-item">' +
            '<span class="tl-period">' + esc(t.period) + "</span>" +
            '<span class="tl-text">' + esc(t.text) + "</span>" +
          "</li>"
      )
      .join("");

    const honorsHtml = (pi.honors || [])
      .map((h) => '<li class="tag-item">' + esc(h) + "</li>")
      .join("");

    const affHtml = (pi.affiliations || [])
      .map((a) => '<li class="tag-item tag-item-plain">' + esc(a) + "</li>")
      .join("");

    $("pi-layout").innerHTML =
      '<div class="pi-profile">' +
        '<div class="pi-head">' +
          avatarHtml(pi.name, pi.avatar, "avatar-pi") +
          "<div>" +
            '<h3 class="pi-name">' + esc(pi.name) + "</h3>" +
            (pi.nameEn ? '<p class="pi-name-en">' + esc(pi.nameEn) + "</p>" : "") +
            '<p class="pi-role">' + esc(pi.role) + "</p>" +
          "</div>" +
        "</div>" +
        '<div class="pi-bio prose">' + bioHtml + "</div>" +
      "</div>" +
      '<aside class="pi-details">' +
        '<div class="pi-block">' +
          '<h4>学习工作经历</h4>' +
          '<ul class="timeline">' + timelineHtml + "</ul>" +
        "</div>" +
        '<div class="pi-block">' +
          '<h4>荣誉与人才项目</h4>' +
          '<ul class="tag-list">' + honorsHtml + "</ul>" +
        "</div>" +
        '<div class="pi-block">' +
          '<h4>学术兼职</h4>' +
          '<ul class="tag-list">' + affHtml + "</ul>" +
        "</div>" +
      "</aside>";
  }

  // ---------- 研究骨干（PI 下方） ----------
  if (data.faculty && data.faculty.length) {
    $("faculty-wrap").innerHTML =
      '<h3 class="faculty-heading">研究骨干</h3>' +
      '<div class="faculty-grid">' +
      data.faculty
        .map((f) => {
          const bioHtml = (f.bio || [])
            .map((p) => "<p>" + esc(p) + "</p>")
            .join("");
          const timelineHtml = (f.timeline || [])
            .map(
              (t) =>
                '<li class="tl-item">' +
                  '<span class="tl-period">' + esc(t.period) + "</span>" +
                  '<span class="tl-text">' + esc(t.text) + "</span>" +
                "</li>"
            )
            .join("");
          return (
            '<article class="faculty-card">' +
              '<div class="faculty-profile">' +
                '<div class="faculty-head">' +
                  avatarHtml(f.name, f.avatar, "avatar-faculty") +
                  "<div>" +
                    '<h4 class="faculty-name">' + esc(f.name) + "</h4>" +
                    '<p class="faculty-role">' + esc(f.role) + "</p>" +
                    (f.unit ? '<p class="faculty-unit">' + esc(f.unit) + "</p>" : "") +
                  "</div>" +
                "</div>" +
                (bioHtml ? '<div class="faculty-bio prose">' + bioHtml + "</div>" : "") +
              "</div>" +
              '<div class="faculty-details">' +
                '<h5>学习工作经历</h5>' +
                '<ul class="timeline">' + timelineHtml + "</ul>" +
              "</div>" +
            "</article>"
          );
        })
        .join("") +
      "</div>";
  }

  // ---------- 研究方向 ----------
  $("research-grid").innerHTML = (data.research || [])
    .map((r) =>
      '<article class="feature-card">' +
        '<div class="feature-icon" aria-hidden="true">' + esc(r.icon || "◈") + "</div>" +
        "<h3>" + esc(r.title) + "</h3>" +
        "<p>" + esc(r.desc) + "</p>" +
      "</article>"
    )
    .join("");

  // ---------- 团队成员 ----------
  const members = data.members || [];
  if (members.length) {
    $("team-grid").innerHTML = members
      .map((m) => {
        const noteHtml = m.note ? '<p class="member-note">' + esc(m.note) + "</p>" : "";
        const emailHtml = m.email
          ? '<a class="member-email" href="mailto:' + esc(m.email) + '">' + esc(m.email) + "</a>"
          : "";
        return (
          '<article class="member-card">' +
            avatarHtml(m.name, m.avatar) +
            "<h3>" + esc(m.name) + "</h3>" +
            '<p class="member-role">' + esc(m.role) + "</p>" +
            noteHtml +
            emailHtml +
          "</article>"
        );
      })
      .join("");
  } else {
    $("team-grid").innerHTML =
      '<p class="team-empty">团队成员信息待补充。请在 data.js 的 <code>members</code> 数组中添加成员。</p>';
  }

  // ---------- 论文：按年份筛选 ----------
  const pubs = (data.publications || []).slice().sort((a, b) => b.year - a.year);
  const years = Array.from(new Set(pubs.map((p) => p.year)));

  function renderPubs(filter) {
    $("pub-list").innerHTML = pubs
      .filter((p) => filter === "全部" || String(p.year) === String(filter))
      .map((p) => {
        const title = p.link
          ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>"
          : esc(p.title);
        const tag = p.tag ? '<span class="pub-tag">' + esc(p.tag) + "</span>" : "";
        return (
          '<li class="pub-item">' +
            '<span class="pub-year">' + esc(p.year) + "</span>" +
            "<div>" +
              '<p class="pub-title">' + title + tag + "</p>" +
              '<p class="pub-meta"><span class="pub-authors">' + esc(p.authors) + "</span> · " + esc(p.venue) + "</p>" +
            "</div>" +
          "</li>"
        );
      })
      .join("");
  }

  $("pub-filters").innerHTML = ["全部"].concat(years)
    .map((y) => '<button class="filter-btn' + (y === "全部" ? " active" : "") + '" type="button" data-year="' + esc(y) + '">' + esc(y) + "</button>")
    .join("");

  $("pub-filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $("pub-filters").querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPubs(btn.dataset.year);
  });

  renderPubs("全部");
  $("pub-note").textContent = data.pubNote || "";

  // ---------- 动态 ----------
  $("news-list").innerHTML = (data.news || [])
    .map((n) =>
      '<div class="news-item"><time class="news-date">' + esc(n.date) + "</time><p class=\"news-text\">" + esc(n.text) + "</p></div>"
    )
    .join("");

  // ---------- 联系 ----------
  $("contact-lines").innerHTML = (data.contact || [])
    .map((c) => '<div class="contact-line"><strong>' + esc(c.label) + "</strong>" + esc(c.value) + "</div>")
    .join("");
  $("join-text").textContent = data.joinText || "";
  if (data.email) $("join-link").href = "mailto:" + data.email;

  $("footer-text").textContent = data.footer || "";

  // ---------- 移动端菜单 ----------
  const toggle = $("navToggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
