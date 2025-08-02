const letter = `
Thân gửi Xuân Nhi 💌,
Chúc mừng sinh nhật người anh thương! Mặc dù chúng ta cách nhau 346 km(chắc chắn em chọn nơi "xa vời" tránh mặt anh ấy mà 😆), nhưng anh vẫn muốn gửi đến em những lời chúc tốt đẹp nhất trong ngày đặc biệt này.
và anh muốn lên lá thư đầy ấm áp trân tình này để anh dành gửi cho em và chút hài huớc nữa.
Anh biết yêu xa nơi mà không có anh để em nhõng nhẽo và đi chơi cùng em và hay mua đồ ăn cho em lúc đói,và thuốc khi em ốm ... nhiều thứ nữa(đừng lo anh vẫn luôn bên em dù anh vẫn không có quà).Nhưng em biết không thề dễ dàng
chút nào như cơm không có canh, như bánh mì không có pate, như anh không có em vậy. Đối với anh em là gia vị đặc biệt là ánh
sáng giúp anh bùng lên khoảng khắc.Dù anh không thể nắm tay em hay ôm em lúc buồn hay vui,nhưng mỗi lời nhắn
và cuộc gọi mà chưa thành công lần gọi nào 😢 nhưng đó là điều thuốc tuyệt vời nhất với anh
Hôm nay là 1 ngày đặc biệt của em.Dù chúng ta không tổ chức sinh nhật cùng nhau.Anh muốn em cảm
nhận tình yêu của anh dành cho em.Mừng sinh nhật em yêu.Chúc em luôn khỏe mạnh sinh đẹp,và hạnh phúc.!Mong
rằng 1 ngày nào đó chúng ta sẽ tổ chức sinh nhật cùng nhau và anh sẽ có mặt bên em cùng ăn bánh kem cùng nhau
chứ không phải qua tin nhắn.Thư dài rồi anh chúc em  có một ngày thật tuyệt vời, và đừng quên: "Dù có xa nhau, anh vẫn yêu em như ngày đầu tiên!"
Mãi yêu em 💖
Duy của Nhi
Ấn vào nút dưới để nhận món quà nhỏ nhé! 🎁
`;

let i = 0;
const speed = 50; // tốc độ viết (ms)
const element = document.getElementById("letter");

function typeWriter() {
if (i < letter.length) {
    element.innerHTML += letter.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}

function nextPage() {
window.location.href = "gift.html";
}

window.onload = typeWriter;
