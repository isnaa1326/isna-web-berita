function fetchNews(category, searchTerm = '') {
  newsContainer.html(`
    <div class="loading">
      <i class="fas fa-spinner"></i>
      <p>Memuat berita...</p>
    </div>
  `);

  let url = searchTerm
    ? `/api/news?q=${encodeURIComponent(searchTerm)}`
    : `/api/news?category=${category}`;

  $.getJSON(url, function(data) {
    if (data.articles && data.articles.length > 0) {
      displayNews(data.articles);
    } else {
      newsContainer.html(`
        <div class="text-center text-muted py-5">
          <i class="fas fa-newspaper fa-2x mb-2"></i>
          <p>Tidak ada berita ditemukan.</p>
        </div>
      `);
    }
  }).fail(function() {
    newsContainer.html(`
      <div class="text-center text-danger py-5">
        <i class="fas fa-exclamation-triangle fa-2x mb-2"></i>
        <p>Gagal memuat berita. Periksa koneksi atau API key Anda.</p>
      </div>
    `);
  });
}
