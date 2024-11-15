function toggleBio() {
    const bioFull = document.getElementById('bio-full');
    const bioShort = document.getElementById('bio-short');
    const toggleBtn = document.getElementById('toggle-btn');
    

    if (bioFull.style.display === 'none') {
        bioFull.style.display = 'inline';
        bioShort.style.display = 'none';
        toggleBtn.textContent = 'Daha Az Gör';
    } else {
        bioFull.style.display = 'none';
        bioShort.style.display = 'inline';
        toggleBtn.textContent = 'Daha Fazla Gör';
    }
}
