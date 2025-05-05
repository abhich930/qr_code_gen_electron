'use strict'

let currentCanvas = null
const generateQrCode = function () {
    const linkFromGMaps = document.querySelector('#mapLink').value.trim()
    const qrCodeHolder = document.querySelector('#qrcode')
    const qrDownloadBtn = document.querySelector('#downloadBtn')
    qrCodeHolder.innerHTML = ''
    currentCanvas = null
    qrDownloadBtn.style.display = 'none'
    if (!linkFromGMaps || !linkFromGMaps.startsWith('http')) {
        alert('Please enter a valid link from Google Maps!!!')
        return
    }
    const qr = new QRCode(qrCodeHolder, {
        text: linkFromGMaps,
        width: 256,
        height: 256,
        quietZone: 1,
        correctLevel: QRCode.CorrectLevel.H,
        dotScale: 1,
        drawFunction: 'canvas',
        dotScale: 0.8
    });
    setTimeout(() => {
        currentCanvas = qrCodeHolder.querySelector('canvas');
        if (currentCanvas) {
            qrDownloadBtn.style.display = 'inline-block';
            document.querySelector('#resetBtn').style.display = 'inline-block';
        }
    }, 100)
}
const downloadQRcode = function () {
    if (!currentCanvas) return;
    const imageURL = currentCanvas.toDataURL("image/jpeg"); // Convert canvas to JPG data URL
    const link = document.createElement("a");               // Create a temporary download link
    link.href = imageURL;
    link.download = "google-maps-qr.jpg";
    link.click(); // Simulate clicking the link to start download
}
document.querySelector('#resetBtn').addEventListener('click', function () {
    document.querySelector('#mapLink').value = ''
    document.querySelector('#qrcode').innerHTML = ''
    document.querySelector('#downloadBtn').style.display = 'none'
    document.querySelector('#resetBtn').style.display = 'none';
})