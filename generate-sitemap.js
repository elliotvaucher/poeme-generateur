const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

// Define the set of links to include in the sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 0.7 },
  { url: '/blog', changefreq: 'weekly', priority: 0.6 },
  { url: '/about', changefreq: 'monthly', priority: 0.5 }
];

// Create a new sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });

// Convert the sitemap stream to a promise that resolves with the complete XML string
const sitemapPromise = streamToPromise(sitemap).then(sitemapContent => sitemapContent.toString());

// Write each link to the sitemap stream
links.forEach(link => sitemap.write(link));

// End the sitemap stream
sitemap.end();

// Wait for the sitemap stream to complete, then write the XML to a file
sitemapPromise.then(sitemapXML => {
  fs.writeFileSync('./public/sitemap.xml', sitemapXML);
}).catch(error => {
  console.error("Failed to generate sitemap:", error);
});
