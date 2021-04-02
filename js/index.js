function generateQRCode(event) {
    event.preventDefault();

    let qrData = document.getElementById('qrData').value;
    let qrCodeSize;
    let errorCorrectionLevel = 'L';
    let typeNumber = 4;

    // Remoção da função selecionar o nível de correção, devido a 
    // não conseguir definir o tamanho máximo em bits do QRCode
    //
    // switch (document.getElementById('qrError').value) {
    //     case '2':
    //         errorCorrectionLevel = 'M';
    //         break;
    //     case '3':
    //         errorCorrectionLevel = 'Q';
    //         break;
    //     case '4':
    //         errorCorrectionLevel = 'H';
    //         break;
    //     default:
    //         errorCorrectionLevel = 'L';
    //         break;
    // }

    switch (document.getElementById('qrSize').value) {
        case '2':
            qrCodeSize = 4;
            break;
        case '3':
            qrCodeSize = 6;
            break;
        default:
            qrCodeSize = 2;
            break;
    }

    let qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(qrData);
    qr.make();
    document.getElementById('divQR').innerHTML = qr.createImgTag(qrCodeSize, 4);
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

function updateSlider(input, output) {
    let slider = document.getElementById(input);
    let span = document.getElementById(output);
    let retorno;

    if (slider.name === 'qrError') {
        switch (slider.value) {
            case '2':
                retorno = 'M';
                break;
            case '3':
                retorno = 'Q';
                break;
            case '4':
                retorno = 'H';
                break;
            default:
                retorno = 'L';
                break;
        }
    } else if (slider.name === 'qrSize') {
        switch (slider.value) {
            case '2':
                retorno = 'Médio';
                break;
            case '3':
                retorno = 'Grande';
                break;
            default:
                retorno = 'Pequeno'
                break;
        }
    }

    span.innerHTML = retorno;
}