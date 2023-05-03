import { useRouter } from 'next/router';
import notion from '../notion';
import { NOTION_DATABASE_ID } from '../config'; // Import the constant from config.js
import Link from 'next/link';
import styles from './newsItem.module.css'; // Import the CSS module

// Helper function to format date and time
const formatDateAndTime = (dateString) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
};

export async function getServerSideProps(context) {
  const selectedTag = context.query.tag; // Get the selected tag from the query parameter
  const databaseId = NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  // Filter the results based on the selected tag (if provided)
  const filteredResults = selectedTag
    ? response.results.filter((page) => {
        const tags = page.properties.Tags?.multi_select.map((tag) => tag.name) || [];
        return tags.includes(selectedTag);
      })
    : response.results;

  const results = filteredResults.map((page) => {
    // Extract and format data from the Notion page
    const name = page.properties.Name?.title[0]?.plain_text || '';
    const tags = page.properties.Tags?.multi_select.map((tag) => tag.name) || [];
    const url = page.properties.URL?.url || '';
    const publishedDate = page.properties['Published Date']?.date?.start;
    const formattedPublishedDate = publishedDate ? formatDateAndTime(publishedDate) : '';
    const bookmarkedDate = page.created_time;
    const formattedBookmarkedDate = formatDateAndTime(bookmarkedDate);

    return { name, tags, url, publishedDate: formattedPublishedDate, bookmarkedDate: formattedBookmarkedDate };
  });

  return {
    props: {
      results,
    },
  };
}

export default function Home({ results }) {
  const router = useRouter();
  const selectedTag = router.query.tag; // Get the selected tag from the query parameter

  // Extract all unique tags from the results
  const uniqueTags = new Set();
  results.forEach((result) => {
    result.tags.forEach((tag) => uniqueTags.add(tag));
  });

  return (
    <div>
      <h1>AI News</h1>

      {/* Conditionally render the list of all unique tags as links based on the absence of the selectedTag */}
      {!selectedTag && (
        <div className="tagsList">
          {Array.from(uniqueTags).map((tag, index) => (
            <span key={index}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/?tag=${encodeURIComponent(tag)}`);
                }}
              >
                {tag}
              </a>
              {index < uniqueTags.size - 1 && ', '}
            </span>
          ))}
        </div>
      )}

      {/* Conditionally render the "Show All" link based on the presence of the selectedTag */}
      {selectedTag && (
        <div className="showAll">
          <Link href="/">
            Show All
          </Link>
        </div>
      )}
        {results.map((result, index) => (
    <div key={index} className={styles.newsItem}>
      <div className="bmDate">{result.bookmarkedDate}</div>
      <div>{result.name}</div>
      <div>
        {result.tags.map((tag, tagIndex) => (
          <span key={tagIndex}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push(`/?tag=${encodeURIComponent(tag)}`);
              }}
            >
              {tag}
            </a>
            {tagIndex < result.tags.length - 1 && ', '}
          </span>
        ))}
      </div>
      <div>
        <a href={result.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
      <div>Published: {result.publishedDate}</div>
    </div>
  ))}
</div>
);
}
           
