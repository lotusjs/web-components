import { getBasePath } from './utilities/basePath.js';

const observer = new MutationObserver(mutations => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        discover(node as Element);
      }
    }
  }
});

export async function discover(root: Element | ShadowRoot) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : '';

  const rootIsShoelaceElement = rootTagName?.startsWith('l-');
  const tags = [...root.querySelectorAll(':not(:defined)')]
    .map(el => el.tagName.toLowerCase())
    .filter(tag => tag.startsWith('l-'));

  if (rootIsShoelaceElement && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }

  const tagsToRegister = [...new Set(tags)];

  await Promise.allSettled(tagsToRegister.map(tagName => register(tagName)));
}

function register(tagName: string): Promise<void> {
  // If the element is already defined, there's nothing more to do
  if (customElements.get(tagName)) {
    return Promise.resolve();
  }

  const tagWithoutPrefix = tagName.replace(/^l-/i, '');
  const path = getBasePath(`components/${tagWithoutPrefix}/${tagWithoutPrefix}.js`);

  // Register it
  return new Promise((resolve, reject) => {
    import(path).then(() => resolve()).catch(() => reject(new Error(`Unable to autoload <${tagName}> from ${path}`)));
  });
}

discover(document.body);

observer.observe(document.documentElement, { subtree: true, childList: true });
