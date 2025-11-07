export default async function handler(req, res) {
  const apiKey = "851bdcb35c914ef78c3eb1b139d71a4e"; // Ganti dengan API key NewsAPI milikmu
  const category = req.query.category || 'general';
  const q = req.query.q || '';
  const baseUrl = 'https://newsapi.org/v2';

  let url = q
    ? `${baseUrl}/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&apiKey=${apiKey}`
    : `${baseUrl}/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
