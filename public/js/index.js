function generateQRCode(event) {
    event.preventDefault();

    let qrData = document.getElementById('qrData').value;

    let typeNumber = 4;
    let errorCorrectionLevel = 'L';
    let qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(qrData);
    qr.make();
    document.getElementById('divQR').innerHTML = qr.createImgTag(6, 4);
    document.getElementById('divHid').hidden = false;
}


function getQRCode() {
    let imgSrc = document.getElementsByTagName('img')[0].src;
    let srcReplace = imgSrc.replace('image/gif', 'image/png');
    download(srcReplace, 'qrcode.png');
}

function download(dataurl, filename) {
    let a = document.createElement("a");
    a.href = dataurl;
    a.setAttribute("download", filename);
    a.click();
}