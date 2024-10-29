import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const result = new Set<Document>();
  for (let i = 0; i < query.length; i++) {
    const words = query.match(/\b(\w+)\b/g);
    if (words) {
      for (let x = 0; x < words.length; x++) {
        const word = words[x].toLowerCase();
        if (index.has(word)) {
          const doc = index.get(word);
          doc?.forEach((document) => result.add(document));
        }
      }
    }
  }

  return result;
}
