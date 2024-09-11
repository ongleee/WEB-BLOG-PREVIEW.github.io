let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let autoSlideInterval;

// ฟังก์ชันสำหรับแสดงภาพที่เลือก
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// ฟังก์ชันสำหรับลูปภาพโดยอัตโนมัติ
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// ฟังก์ชันเพื่อเริ่มการเปลี่ยนภาพโดยอัตโนมัติ
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 3000);
}

// ฟังก์ชันเพื่อหยุดการเปลี่ยนภาพโดยอัตโนมัติ
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// เริ่มต้นแสดงภาพแรก
showSlide(currentIndex);
startAutoSlide(); // เริ่มการเปลี่ยนภาพโดยอัตโนมัติ

// จัดการการคลิกที่ปุ่มนำทาง
const navLinks = document.querySelectorAll('.slider-nav a');
navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // หยุดการทำงานปกติของ anchor
        stopAutoSlide(); // หยุดการเปลี่ยนภาพโดยอัตโนมัติ
        currentIndex = index; // อัปเดตค่า currentIndex
        showSlide(currentIndex); // แสดงภาพที่เลือก
        
        // เริ่มการเปลี่ยนภาพใหม่หลังจากรอ 10 วินาที
        setTimeout(() => {
            startAutoSlide(); // เริ่มการเปลี่ยนภาพโดยอัตโนมัติอีกครั้ง
        }, 10000); // รอ 10 วินาที (10000 มิลลิวินาที)
    });
});


//////

