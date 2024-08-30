window.addEventListener("load",function(){
    let fix=this.document.querySelector(".fix")
    let hide =this.document.querySelectorAll(".hide")
    fix.addEventListener("click",function(){
        for( let e of edsc){
        e.classList.toggle("show");
        }
    })
    let search=document.querySelector("input[type=search]")
    search.onchange=function(){
        if(search.value !== ''){
            //tìm ngành
            // tắt hết hiệu ứng
            let major =document.querySelectorAll(".major h3")
            for(let m of major )
                m.style="initial"
            // tìm
            let texts=document.querySelectorAll(".major h3")
            for(let t of texts)
                if(t.innerText.toUpperCase().includes(this.value.toUpperCase()) === true)
                    t.style.color="red"
            // tìm giảng viên

            let teacher =document.querySelectorAll(".major a")
            for(let t of teacher )
                t.style="initial"
            // tìm
            let texts_T=document.querySelectorAll(".major a")
            for(let t of texts_T)
                if(t.innerText.toUpperCase().includes(this.value.toUpperCase()) === true)
                    t.style.color="red"
        }
    }
    // Hàm này sẽ được gọi khi người dùng nhấn nút "Sửa"
    function enableEdit(pr){
        let name=pr.querySelector('.name');

        // Ẩn nút "Sửa" và "Xóa"
        pr.querySelector('.edit').style.display='none';
        pr.querySelector('.delete').style.display='none';
        pr.querySelector('.save').style.display='inline-block';
        pr.querySelector('.cancel').style.display='inline-block';
        
        name.outerHTML = `<input type="text" class="edit-name" value="${name.innerText}">`;
    }
    // Hàm này sẽ được gọi khi người dùng nhấn nút "Lưu"
    function saveEdit(pr) {
        let save = pr.querySelector('.edit-name');

        // Cập nhật tên và chuyển đổi input field trở lại thành một thẻ <a>
        save.outerHTML = `<a href="#" class="name">${save.value}</a>`;

        // Hiện lại nút "Sửa" và "Xóa"
        pr.querySelector('.edit').style.display = 'inline-block';
        pr.querySelector('.delete').style.display = 'inline-block';
        pr.querySelector('.save').style.display = 'none';
        pr.querySelector('.cancel').style.display = 'none';
    }

    // Hàm này sẽ được gọi khi người dùng nhấn nút "Hủy"
    function cancelEdit(pr) {
        let input = pr.querySelector('.edit-name');

        // Khôi phục tên ban đầu và chuyển đổi input field trở lại thành một thẻ <a>
        input.outerHTML = `<a href="#" class="name">${input.defaultValue}</a>`;

        // Hiện lại nút "Sửa" và "Xóa", ẩn nút "Lưu" và "Hủy"
        pr.querySelector('.edit').style.display = 'inline-block';
        pr.querySelector('.delete').style.display = 'inline-block';
        pr.querySelector('.save').style.display = 'none';
        pr.querySelector('.cancel').style.display = 'none';
    }

    // Thêm sự kiện cho các nút "Sửa","Xóa","Lưu", "Hủy"
    this.document.querySelectorAll('.edit').forEach(button =>{
        button.addEventListener('click',function(){
            const pr=this.parentElement.parentElement;
            enableEdit(pr);
        })
    })
    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', function(){
            if (confirm("Bạn có chắc chắn xóa không?") === true) {
                const pr = this.closest('.user');
                pr.remove();
            }
        });
    });
    this.document.querySelectorAll('.save').forEach(button =>{
        button.addEventListener('click',function(){
            const pr=this.parentElement.parentElement;
            saveEdit(pr);
        })
    })
    this.document.querySelectorAll('.cancel').forEach(button =>{
        button.addEventListener('click',function(){
            const pr=this.parentElement.parentElement;
            cancelEdit(pr);
        })
    })
})