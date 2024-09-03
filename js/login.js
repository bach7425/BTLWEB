window.addEventListener('load',function(){
        document.querySelector('.login').addEventListener('click', function(event) {
        event.preventDefault();  // Ngăn chặn hành động mặc định của thẻ <a>
    
        // Lấy giá trị của email và password từ form
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
    
        // Kiểm tra email và password
        if (email === 'abc@gmail.com' && password === 'Abc123') {
            alert('Đăng nhập thành công!');
            window.location.href = 'https://www.facebook.com';  // Chuyển hướng đến Facebook
        } else {
            alert('Email hoặc mật khẩu không đúng!');
        }
    });
})
    