// copy url to clipboard
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const url = button.getAttribute('data-url');
    navigator.clipboard.writeText(url);
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
});

document.querySelectorAll('.open-btn').forEach(button=>{
    button.addEventListener('click',()=>{
        const url = button.getAttribute('data-url');
        window.open(url,'_blank');
    })
})