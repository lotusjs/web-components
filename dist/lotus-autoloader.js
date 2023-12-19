import {
  getBasePath
} from "./chunks/chunk.KP2BOXAL.js";
import "./chunks/chunk.PM7NIY3M.js";

// src/lotus-autoloader.ts
var observer = new MutationObserver((mutations) => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        discover(node);
      }
    }
  }
});
async function discover(root) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const rootIsShoelaceElement = rootTagName == null ? void 0 : rootTagName.startsWith("l-");
  const tags = [...root.querySelectorAll(":not(:defined)")].map((el) => el.tagName.toLowerCase()).filter((tag) => tag.startsWith("l-"));
  if (rootIsShoelaceElement && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }
  const tagsToRegister = [...new Set(tags)];
  await Promise.allSettled(tagsToRegister.map((tagName) => register(tagName)));
}
function register(tagName) {
  if (customElements.get(tagName)) {
    return Promise.resolve();
  }
  const tagWithoutPrefix = tagName.replace(/^l-/i, "");
  const path = getBasePath(`components/${tagWithoutPrefix}/${tagWithoutPrefix}.js`);
  return new Promise((resolve, reject) => {
    import(path).then(() => resolve()).catch(() => reject(new Error(`Unable to autoload <${tagName}> from ${path}`)));
  });
}
discover(document.body);
observer.observe(document.documentElement, { subtree: true, childList: true });
export {
  discover
};
