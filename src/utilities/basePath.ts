let basePath = '';

export function setBasePath(path: string) {
  basePath = path;
}

export function getBasePath(subpath = '') {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName('script')] as HTMLScriptElement[];
    const configScript = scripts.find(script => script.hasAttribute('data-shoelace'));

    if (configScript) {
      setBasePath(configScript.getAttribute('data-shoelace')!);
    } else {
      const fallbackScript = scripts.find(s => {
        return /lotus(\.min)?\.js($|\?)/.test(s.src) || /lotus-autoloader(\.min)?\.js($|\?)/.test(s.src);
      });

      let path = '';

      if (fallbackScript) {
        path = fallbackScript.getAttribute('src')!;
      }

      setBasePath(path.split('/').slice(0, -1).join('/'));
    }
  }

  return basePath.replace(/\/$/, '') + (subpath ? `/${subpath.replace(/^\//, '')}` : ``);
}
