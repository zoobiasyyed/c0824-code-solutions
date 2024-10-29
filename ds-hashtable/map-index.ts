export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const index = new Map<string, Set<Document>>();
  for (let i = 0; i < docs.length; i++) {
    const document = docs[i];
    const words = document.content.match(/\b(\w+)\b/g);
    if (words) {
      for (let x = 0; x < words?.length; x++) {
        const word = words[x].toLowerCase();
        if (index.has(word)) {
          const doc = index.get(word);
          doc?.add(document);
        } else {
          const docs = new Set<Document>();
          docs.add(document);
          index.set(word, docs);
        }
      }
    }
  }
  return index;
}
