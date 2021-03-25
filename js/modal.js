/* Desktop Functions */
function openModal1() {
    document.getElementById('proj-1-expand').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function openModal2() {
    document.getElementById('proj-2-expand').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function openModal3() {
    document.getElementById('proj-3-expand').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function openModal4() {
    document.getElementById('proj-4-expand').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function openModal5() {
    document.getElementById('proj-5-expand').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function openModal6() {
    document.getElementById('proj-6-expand').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('proj-1-expand').style.display = 'none';
    document.getElementById('proj-2-expand').style.display = 'none';
    document.getElementById('proj-3-expand').style.display = 'none';
    document.getElementById('proj-4-expand').style.display = 'none';
    document.getElementById('proj-5-expand').style.display = 'none';
    document.getElementById('proj-6-expand').style.display = 'none';
    
    document.body.style.overflowY = 'visible';
}