/**
 * Shared test fixtures and utilities
 * Following DRY principles - all test data centralized here
 */

export const testCases = {
  essential: {
    // Input → Expected output pairs for essential mode
    basic: [
      { input: "Hello World", expected: "Hello World", escapedCount: 0 },
      { input: "Test's quote", expected: "Test&#39;s quote", escapedCount: 1 },
      { input: 'Say "hello"', expected: "Say &quot;hello&quot;", escapedCount: 2 },
      { input: "<script>", expected: "<script>", escapedCount: 0 },
      { input: "Tom & Jerry", expected: "Tom &amp; Jerry", escapedCount: 1 },
    ],
    combined: [
      {
        input: `It's a "test" with <tags> & symbols`,
        expected: `It&#39;s a &quot;test&quot; with &lt;tags&gt; &amp; symbols`,
        escapedCount: 6,
      },
    ],
    invalidTags: [
        { input: "Click <here>", expected: "Click &lt;here&gt;", escapedCount: 2 },
        { input: "I <3 You", expected: "I &lt;3 You", escapedCount: 1 },
        { input: "Invalid <tag>", expected: "Invalid &lt;tag&gt;", escapedCount: 2 },
        { input: "Valid <div>", expected: "Valid <div>", escapedCount: 0 },
        { input: "Self-closing <br/>", expected: "Self-closing <br/>", escapedCount: 0 },
        { input: "Custom <my-tag>", expected: "Custom <my-tag>", escapedCount: 0 },
        { input: "React <Component>", expected: "React <Component>", escapedCount: 0 },
        { input: "SVG <path d='...'>", expected: "SVG <path d='...'>", escapedCount: 0 },
        // XML Cases
        { input: "<book>Title</book>", expected: "<book>Title</book>", escapedCount: 0 },
        { input: "<self-closed />", expected: "<self-closed />", escapedCount: 0 },
        { input: "<open> but no close", expected: "&lt;open&gt; but no close", escapedCount: 2 },
    ],
    alreadyEscaped: [
      { input: "&amp;", expected: "&amp;", escapedCount: 0 },
      { input: "&lt;div&gt;", expected: "&lt;div&gt;", escapedCount: 0 },
      { input: "&#39;quoted&#39;", expected: "&#39;quoted&#39;", escapedCount: 0 },
      { input: "&quot;test&quot;", expected: "&quot;test&quot;", escapedCount: 0 },
    ],
    mixed: [
      {
        input: "Already &amp; but also &",
        expected: "Already &amp; but also &amp;",
        escapedCount: 1,
      },
    ],
  },
  extended: {
    basic: [
      { input: "© 2024", expected: "&copy; 2024", escapedCount: 1 },
      { input: "Trademark™", expected: "Trademark&trade;", escapedCount: 1 },
      { input: "Registered®", expected: "Registered&reg;", escapedCount: 1 },
      { input: "Em—dash", expected: "Em&mdash;dash", escapedCount: 1 },
      { input: "En–dash", expected: "En&ndash;dash", escapedCount: 1 },
    ],
  },
  noChanges: [
    { input: "", expected: "", escapedCount: 0 },
    { input: "Plain text without entities", expected: "Plain text without entities", escapedCount: 0 },
    { input: "Numbers 12345", expected: "Numbers 12345", escapedCount: 0 },
  ],
};

/**
 * Sample file content for integration tests
 */
export const sampleFiles = {
  htmlWithEntities: `<!DOCTYPE html>
<html>
<head><title>Test's Page</title></head>
<body>
  <p>Hello "World" & Friends</p>
</body>
</html>`,
  htmlFixed: `<!DOCTYPE html>
<html>
<head><title>Test&#39;s Page</title></head>
<body>
  <p>Hello &quot;World&quot; &amp; Friends</p>
</body>
</html>`,
  jsxWithEntities: `export const Component = () => {
  return <div>It's a "test" & more</div>;
};`,
  cleanFile: `// This is a clean file
const value = 42;
`,
};
