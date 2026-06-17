export default function decorate(block) {
  const [quoteWrapper, authorWrapper] = block.children;

  if (quoteWrapper) {
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = quoteWrapper.innerHTML.trim();
    quoteWrapper.replaceChildren(blockquote);
  }

  if (authorWrapper) {
    const cite = document.createElement('cite');
    cite.textContent = authorWrapper.textContent.trim();
    authorWrapper.replaceChildren(cite);
  }
}
