let m1 = document.getElementById('math');
let m2 = document.getElementById('english');
let m3 = document.getElementById('biology');
let m4 = document.getElementById('chemistry');
let m5 = document.getElementById('computer');
let m6 = document.getElementById('physics');
let m7 = document.getElementById('cre');
let m8 = document.getElementById('history');

let res = document.getElementById('res'); // Get the result button element
let mean = document.getElementById('mean'); // Get the mean button element

function sum() {
    const s1 = parseFloat(m1.value);
    const s2 = parseFloat(m2.value);
    const s3 = parseFloat(m3.value);
    const s4 = parseFloat(m4.value);
    const s5 = parseFloat(m5.value);
    const s6 = parseFloat(m6.value);
    const s7 = parseFloat(m7.value);
    const s8 = parseFloat(m8.value);
    const total = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8;
    res.textContent = total;
    
    // Calculate and display the average
    let average = total / 8;
    mean.textContent = average;
}

// Add a single event listener for the click event on the process button
process.addEventListener('click', sum);
