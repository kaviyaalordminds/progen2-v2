/* ==========================================================================
   post.js
   Renders a single blog post on post.html based on the ?id= query
   parameter using a magazine-style layout with sidebar for meta/share
========================================================================== */

(function () {
  const articleEl = document.getElementById("postArticle");
  if (!articleEl) return; // not on the post detail page

  const notFoundEl = document.getElementById("postNotFound");
  const bannerTitleEl = document.getElementById("postBannerTitle");
  const bannerMetaEl = document.getElementById("postBannerMeta");
  const categoryTagEl = document.getElementById("postCategoryTag");
  const pageTitleEl = document.getElementById("postPageTitle");

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  }

  function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function renderPost(post) {
    pageTitleEl.textContent = post.title + " - Progen Solar Blog";
    bannerTitleEl.textContent = post.title;
    bannerMetaEl.textContent = formatDate(post.date);
    categoryTagEl.textContent = post.category;

    // Single-column layout: hero image + content, full width (no sidebar)
    articleEl.innerHTML = `
      <div class="post-content-wrapper post-content-wrapper--full">
        <div class="post-meta-row">
          <span class="post-meta-category">${post.category}</span>
          <span class="post-meta-date">${formatDate(post.date)}</span>
        </div>
        <div class="post-hero-image">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="post-content">
          ${post.content}
        </div>
      </div>
    `;
  }

  function renderNotFound() {
    articleEl.classList.add("d-none");
    notFoundEl.classList.remove("d-none");
    bannerTitleEl.textContent = "Article Not Found";
    bannerMetaEl.textContent = "";
    categoryTagEl.textContent = "Blog";
    pageTitleEl.textContent = "Article Not Found - Progen Solar Blog";
  }

  const postId = getPostIdFromUrl();
  const post = BLOG_POSTS.find((p) => p.id === postId);

  if (post) {
    renderPost(post);
  } else {
    renderNotFound();
  }
})();