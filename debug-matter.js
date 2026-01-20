const matter = require('gray-matter');

const MOCK_FILE_CONTENT = `---
id: 5e9335dd-731e-43d6-8a02-6c38cf72ab8b
title: Valid Lesson Valid
translation:
  urduTitle: Urdu Title
---
# Content`;

console.log('--- Testing MOCK_FILE_CONTENT ---');
const result = matter(MOCK_FILE_CONTENT);
console.log('DATA:', result.data);
console.log('ID:', result.data.id);
console.log('ID Type:', typeof result.data.id);

const INVALID = `---
title: Short
---
Content`;

console.log('--- Testing INVALID ---');
const res2 = matter(INVALID);
console.log('DATA:', res2.data);
