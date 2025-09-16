document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('salamBtn');
  const namaInput = document.getElementById('nama');
  const hasil = document.getElementById('hasil');

  btn.addEventListener('click', () => {
    const nama = (namaInput.value || 'Teman').trim();
    const waktu = new Date();
    const jam = waktu.getHours();
    let salam = 'Selamat malam';

    if (jam >= 4 && jam < 12) salam = 'Selamat pagi';
    else if (jam >= 12 && jam < 15) salam = 'Selamat siang';
    else if (jam >= 15 && jam < 18) salam = 'Selamat sore';

    hasil.innerHTML = `<strong>${salam}, ${escapeHtml(nama)}!</strong> Terima kasih sudah mampir ke repo ini. 💫`;
  });

  // sederhana: mencegah XSS untuk demo
  function escapeHtml(str){
    return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
});
