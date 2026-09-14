import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://detacars.com.tr';

  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/arac-sat`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rehberler`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rehberler/arac-degerleme-nasil-yapilir`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehberler/ekspertiz-raporu-nasil-yorumlanir`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehberler/boyali-veya-degisenli-arac-alinir-mi`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehberler/filo-cikmasi-arac-alinir-mi`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehberler/aracinizi-takasa-vermeden-once-bilmeniz-gerekenler`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehberler/ikinci-el-arac-satarken-nelere-dikkat-edilmeli`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
