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