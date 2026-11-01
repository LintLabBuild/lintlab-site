// Turn any form with data-mailto into a pre-filled email. No server needed.
document.querySelectorAll<HTMLFormElement>('form[data-mailto]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lines: string[] = [];
    new FormData(form).forEach((value, key) => lines.push(`${key}: ${value}`));
    const subject = encodeURIComponent(form.dataset.subject || 'Hello Lint');
    const body = encodeURIComponent(lines.join('\n\n'));
    window.location.href = `mailto:${form.dataset.mailto}?subject=${subject}&body=${body}`;
  });
});
