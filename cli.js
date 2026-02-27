function copyOutput(btn) {
  var pre = btn.closest('.terminal').querySelector('pre');
  var text = pre ? pre.innerText.trim() : '';
  navigator.clipboard.writeText(text).then(function () {
    btn.textContent = 'copied!';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = 'copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}
