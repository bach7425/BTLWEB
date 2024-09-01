window.addEventListener("load",function(){
    // Bật chế độ tạo thì  show ra
    let creat = document.querySelector('.creat');
    let c = document.querySelector('.creat-bonus');
    creat.addEventListener('click', function() {
            c.classList.toggle('show-creat');
    })
    // Bật chế độ sửa thì các edsc show ra
    let fix=this.document.querySelector(".fix")
    let edsc =this.document.querySelectorAll(".edsc")
    fix.addEventListener("click",function(){
        for( let e of edsc){
        e.classList.toggle("show");
        }
    })
    
    //Tìm
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
            // tắt hết hiệu ứng
            let teacher =document.querySelectorAll(".major a")
            for(let t of teacher )
                t.style="initial"
            // tìm
            let texts_T=document.querySelectorAll(".major a")
            for(let t of texts_T)
                if(t.innerText.toUpperCase().includes(this.value.toUpperCase()) === true)
                    t.style.color="red"
        }
        else{
            // tắt hết hiệu ứng
            let major =document.querySelectorAll(".major h3")
            for(let m of major )
                m.style="initial"
            let teacher =document.querySelectorAll(".major a")
            for(let t of teacher )
                t.style="initial"
        }
        
    }
    //Sử dụng cho li
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
        let cancel = pr.querySelector('.edit-name');

        // Khôi phục tên ban đầu và chuyển đổi input field trở lại thành một thẻ <a>
        cancel.outerHTML = `<a href="#" class="name">${cancel.defaultValue}</a>`;

        // Hiện lại nút "Sửa" và "Xóa", ẩn nút "Lưu" và "Hủy"
        pr.querySelector('.edit').style.display = 'inline-block';
        pr.querySelector('.delete').style.display = 'inline-block';
        pr.querySelector('.save').style.display = 'none';
        pr.querySelector('.cancel').style.display = 'none';
    }

    // Thêm sự kiện li cho các nút "Sửa","Xóa","Lưu", "Hủy"
    let el = document.querySelectorAll('.edit')
    for(let e of el){
        e.addEventListener('click',function(){
            let pr=this.parentElement.parentElement;
            enableEdit(pr);
        })
    }
    let dl=document.querySelectorAll('.delete')
    for(let d of dl) {
        d.addEventListener('click', function(){
            if (confirm("Bạn có chắc chắn xóa không?") === true) {
                const pr = this.closest('.user');
                pr.remove();
            }
        });
    }
    let sl= this.document.querySelectorAll('.save')
    for(let s of sl){
        sl= this.document.querySelectorAll('.save')
        s.addEventListener('click',function(){
            alert('Lưu thành công!');
            let pr=this.parentElement.parentElement;
            saveEdit(pr);

        })
    }
    let cl=this.document.querySelectorAll('.cancel')
    for(let c of cl){
        c.addEventListener('click',function(){
            let pr=this.parentElement.parentElement;
            cancelEdit(pr);
        })
    }
    
    //Sử dụng cho h3
    // Hàm này sẽ được gọi khi người dùng nhấn nút "Sửa
    function enableEdith3(e){
        let name =e.querySelector('.name')

        // Ẩn và hiện các chức năng
        e.querySelector('.edit_h3').style.display='none';
        e.querySelector('.delete_h3').style.display='none';
        e.querySelector('.save_h3').style.display='inline-block';
        e.querySelector('.cancel_h3').style.display='inline-block';
        e.querySelector('.add_h3').style.display='inline_block';
        
        name.outerHTML=`<input type="text" class="edit-nameh3" value="${name.innerText}">`;
    }
    // h3:Hàm này sẽ được gọi khi người dùng nhấn nút "Lưu"
    function saveEdith3(e){
        let save=e.querySelector('.edit-nameh3')

        save.outerHTML = `<h3 class="name">${save.value}</h3>`;
    // Ẩn và hiện các chức năng
    e.querySelector('.edit_h3').style.display='inline-block';
    e.querySelector('.delete_h3').style.display='inline-block';
    e.querySelector('.save_h3').style.display='none';
    e.querySelector('.cancel_h3').style.display='none';
    e.querySelector('.add_h3').style.display='inline_block';

    }
    // h3:Hàm này sẽ được gọi khi người dùng nhấn nút "Hủy"
    function cancelEdith3(e){
        let cancel =e.querySelector('.edit-nameh3')

        cancel.outerHTML=`<h3 class="name">${cancel.defaultValue}</h3>`
        // Ẩn và hiện các chức năng
        e.querySelector('.edit_h3').style.display='inline-block';
        e.querySelector('.delete_h3').style.display='inline-block';
        e.querySelector('.save_h3').style.display='none';
        e.querySelector('.cancel_h3').style.display='none';
        e.querySelector('.add_h3').style.display='inline_block';
        
        
    }
    // h3:Hàm này sẽ được gọi khi người dùng nhấn nút "Thêm"
    function addUser(e){
        let h=`<li class="user">
                    <input type="text" class="edit-name" value=" ABC" placeholder="Họ và tên">
                    <div class="edsc show">
                        <button class="edit" style="display: none;" ><i class="fa-solid fa-pen"></i></button>
                        <button class="delete" style="display: none;"><i class="fa-solid fa-trash"></i></button>
                        <button class="save" style="display: inline-block;"><i class="fa-solid fa-floppy-disk"></i></button>
                        <button class="cancel" style="display: inline-block;"><i class="fa-solid fa-ban"></i></button>
                    </div>
                </li>`
            let last =e.querySelector(".user:last-child")
            last.insertAdjacentHTML("afterend",h)
    }
    // h3:Thêm sự kiện h2 cho các nút "Sửa","Xóa","Lưu", "Hủy", "Thêm"

    let e3= this.document.querySelectorAll('.edit_h3')
    for(let e of e3){
        e.addEventListener('click',function(){
            let pr=this.parentElement.parentElement;
            enableEdith3(pr);
        })
    }

    let d3=this.document.querySelectorAll('.delete_h3')
    for(let d of d3){
        d.addEventListener('click',function(){
            let pr=this.closest('.major');
            pr.remove();
        })
    }
    let s3=this.document.querySelectorAll('.save_h3')
    for(let s of s3){
        s.addEventListener('click',function(){
            let pr=this.parentElement.parentElement;
            saveEdith3(pr);
        }
    )
    }
    let c3 =this.document.querySelectorAll('.cancel_h3')
    for(let c of c3){
        c.addEventListener('click',function(){
            let pr=this.parentElement.parentElement;
            cancelEdith3(pr);
        })
    }
    let add3= this.document.querySelectorAll('.add_h3')
    for(let a of add3){
        a.addEventListener('click',function(){
            let p=this.closest('.major').querySelector('.users')
            addUser(p);
        })
    }
    // Sử dụng cho h2 
    // Hàm này sẽ được gọi khi người dùng nhấn nút "Sửa

    // Hàm này sẽ được gọi khi người dùng nhấn nút "Lưu"

    // Hàm này sẽ được gọi khi người dùng nhấn nút "Hủy"
    
    // Hàm này sẽ được gọi khi người dùng nhấn nút "Thêm" h3


})