export default async function TestPage() {
  const res = await fetch(
    "https://wordpress-973242-4168275.cloudwaysapps.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            posts {
              nodes {
                title
                slug
              }
            }
          }
        `,
      }),
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <pre style={{ padding: "40px", color: "white" }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}