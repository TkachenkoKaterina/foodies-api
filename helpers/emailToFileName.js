function emailToFilename(email) {
  let safeName = email.replace(/[^a-zA-Z0-9\.\-_]/g, '_');

  if (safeName.startsWith('.')) {
    safeName = '_' + safeName.slice(1);
  }
  safeName = safeName.replace(/\.*$/, '');
  return safeName;
}

export default emailToFilename;
