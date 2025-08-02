function addNum(num) {
    const input = document.getElementById('password');
    input.value += num;
}

function clearInput() {
    document.getElementById('password').value = '';
}

function checkPass() {
    const input = document.getElementById('password').value;
    if (input === '58') {
    window.location.href = 'letter.html'; // Link đến trang tiếp theo
    } else {
    alert('Sai mật khẩu rồi người đẹp!');
    clearInput();
    }
}
