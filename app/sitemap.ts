export default function sitemap() {
  return [
    {
      url: 'https://detacars.com.tr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://detacars.com.tr/arac-sat',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
