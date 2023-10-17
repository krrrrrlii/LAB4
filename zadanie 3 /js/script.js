const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

if (ctx) {
    function drawRandomLine() {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
        
        ctx.strokeStyle = 'blue'
        Math.floor(Math.random()*256)+','+
        Math.floor(Math.random()*256)+','+
        Math.floor(Math.random()*256)+')'; // Цвет штуки
        ctx.beginPath();
        ctx.moveTo(0, canvas.height/2);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = "1";
        ctx.stroke();

    }


    for (let i = 0; i<= 1800; i++ ) {
        drawRandomLine()
    }
}
