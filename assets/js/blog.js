/* ==========================================================================
   blog.js
   Renders the blog listing grid on blog.html dynamically from BLOG_POSTS
   (defined in posts.js). Handles search, category filtering, and pagination.
========================================================================== */

(function () {
  const POSTS_PER_PAGE = 6;

  const gridEl = document.getElementById("blogCardGrid");
  const paginationEl = document.getElementById("blogPagination");
  const categoryFiltersEl = document.getElementById("blogCategoryFilters");
  const noResultsEl = document.getElementById("blogNoResults");

  if (!gridEl) return; // not on the blog listing page

  let currentPage = 1;
  let activeCategory = "All";

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
  }

  function getFilteredPosts() {
    return BLOG_POSTS.filter((post) => {
      return activeCategory === "All" || post.category === activeCategory;
    });
  }

  function renderCategoryFilters() {
    const categories = ["All", ...new Set(BLOG_POSTS.map((p) => p.category))];
    categoryFiltersEl.innerHTML = categories
      .map(
        (cat) => `
        <button type="button"
          class="blog-cat-btn${cat === activeCategory ? " active" : ""}"
          data-category="${cat}">${cat}</button>
      `
      )
      .join("");

    categoryFiltersEl.querySelectorAll(".blog-cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.category;
        currentPage = 1;
        renderCategoryFilters();
        renderGrid();
      });
    });
  }

  function renderCard(post) {
    return `
      <div class="col-12 col-md-6 col-lg-6">
        <a href="post.html?id=${encodeURIComponent(post.id)}" class="blog-card">
          <div class="blog-card-image">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <span class="blog-card-category">${post.category}</span>
          </div>
          <div class="blog-card-body">
            <h4 class="blog-card-title">${post.title}</h4>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <span class="blog-card-readmore">Read More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </a>
      </div>
    `;
  }

  function renderPagination(totalPosts) {
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
    if (totalPages <= 1) {
      paginationEl.innerHTML = "";
      return;
    }

    let html = "";
    html += `<li class="page-item ${currentPage === 1 ? "disabled" : ""}">
      <button class="page-link" data-page="${currentPage - 1}" aria-label="Previous">&laquo;</button>
    </li>`;

    for (let i = 1; i <= totalPages; i++) {
      html += `<li class="page-item ${i === currentPage ? "active" : ""}">
        <button class="page-link" data-page="${i}">${i}</button>
      </li>`;
    }

    html += `<li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
      <button class="page-link" data-page="${currentPage + 1}" aria-label="Next">&raquo;</button>
    </li>`;

    paginationEl.innerHTML = html;

    paginationEl.querySelectorAll(".page-link").forEach((btn) => {
      btn.addEventListener("click", () => {
        const page = parseInt(btn.dataset.page, 10);
        const max = Math.ceil(getFilteredPosts().length / POSTS_PER_PAGE);
        if (page < 1 || page > max) return;
        currentPage = page;
        renderGrid();
        gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderGrid() {
    const filtered = getFilteredPosts();

    if (filtered.length === 0) {
      gridEl.innerHTML = "";
      noResultsEl.classList.remove("d-none");
      paginationEl.innerHTML = "";
      return;
    }
    noResultsEl.classList.add("d-none");

    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const pagePosts = filtered.slice(start, start + POSTS_PER_PAGE);

    gridEl.innerHTML = pagePosts.map(renderCard).join("");
    renderPagination(filtered.length);
  }

  renderCategoryFilters();
  renderGrid();
})();