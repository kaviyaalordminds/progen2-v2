/* ==========================================================================
   post.js
   Renders a single blog post on post.html based on the ?id= query
   parameter, using the BLOG_POSTS array from posts.js. Also renders a
   small "Related Articles" grid (same category, excluding current post).
========================================================================== */

(function () {
  const articleEl = document.getElementById("postArticle");
  if (!articleEl) return; // not on the post detail page

  const notFoundEl = document.getElementById("postNotFound");
  const bannerTitleEl = document.getElementById("postBannerTitle");
  const bannerMetaEl = document.getElementById("postBannerMeta");
  const categoryTagEl = document.getElementById("postCategoryTag");
  const relatedSectionEl = document.getElementById("postRelated");
  const relatedGridEl = document.getElementById("postRelatedGrid");
  const pageTitleEl = document.getElementById("postPageTitle");

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  }

  function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function renderRelated(post) {
    const related = BLOG_POSTS.filter(
      (p) => p.id !== post.id && p.category === post.category
    ).slice(0, 3);

    if (related.length === 0) {
      relatedSectionEl.classList.add("d-none");
      return;
    }

    relatedGridEl.innerHTML = related
      .map(
        (p) => `
        <div class="col-12 col-md-4">
          <a href="post.html?id=${encodeURIComponent(p.id)}" class="post-related-card">
            <div class="post-related-image">
              <img src="${p.image}" alt="${p.title}" loading="lazy">
            </div>
            <div class="post-related-body">
              <span>${formatDate(p.date)}</span>
              <h4>${p.title}</h4>
            </div>
          </a>
        </div>
      `
      )
      .join("");
  }

  function renderPost(post) {
    pageTitleEl.textContent = post.title + " - Progen Solar Blog";
    bannerTitleEl.textContent = post.title;
    bannerMetaEl.textContent = `${formatDate(post.date)} • By ${post.author}`;
    categoryTagEl.textContent = post.category;

    articleEl.innerHTML = `
      <div class="post-hero-image">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="post-content">
        ${post.content}
      </div>

      <div class="post-share">
        <span>Share this article:</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}"
          target="_blank" rel="noopener" aria-label="Share on Facebook">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}"
          target="_blank" rel="noopener" aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    `;

    renderRelated(post);
  }

  function renderNotFound() {
    articleEl.classList.add("d-none");
    relatedSectionEl.classList.add("d-none");
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
