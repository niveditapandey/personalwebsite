---
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  
  return rss({
    title: 'Nivedita Pandey - Articles',
    description: 'Long-form writing on technology, institutions, and systems',
    site: context.site,
    items: articles
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((article) => ({
        title: article.data.title,
        description: article.data.description,
        pubDate: article.data.publishDate,
        link: `/articles/${article.slug}/`,
      })),
  });
}
