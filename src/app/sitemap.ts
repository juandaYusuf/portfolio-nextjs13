import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'yusufjuanda.vercel.app/'

  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString()
    },
    {
      url: `${baseURL}portfolio`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${baseURL}skill`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${baseURL}introducing`,
      lastModified: new Date().toISOString()
    },
    {
      url: `${baseURL}about`,
      lastModified: new Date().toISOString()
    }
  ]

}


