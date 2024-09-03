    //Sử dụng cho li
    //"Sửa" user
    function enableEdit(e) {
      let pr = e.parentElement.parentElement;
      let name = pr.querySelector(".name");
  
      // Ẩn nút "Sửa" và "Xóa"
      pr.querySelector(".edit").style.display = "none";
      pr.querySelector(".delete").style.display = "none";
      pr.querySelector(".save").style.display = "inline-block";
      pr.querySelector(".cancel").style.display = "inline-block";
  
      name.outerHTML = `<input type="text" class="edit-name" value="${name.innerText}">`;
    }
    //"Xóa" user
    function deleteLi(e){
      if (confirm("Bạn có chắc chắn xóa không?") === true) {
        const pr = e.closest(".user");
        pr.remove();
      }
    }
    //"Lưu" user
    function saveEdit(e) {
      let pr = e.parentElement.parentElement;
      let save = pr.querySelector(".edit-name");
  
      // Cập nhật tên và chuyển đổi input field trở lại thành một thẻ <a>
      save.outerHTML = `<a href="#" class="name">${save.value}</a>`;
  
      // Hiện lại nút "Sửa" và "Xóa"
      pr.querySelector(".edit").style.display = "inline-block";
      pr.querySelector(".delete").style.display = "inline-block";
      pr.querySelector(".save").style.display = "none";
      pr.querySelector(".cancel").style.display = "none";
    }
    
    //"Hủy" user
    function cancelEdit(e) {
      let pr = e.parentElement.parentElement;
      let cancel = pr.querySelector(".edit-name");
  
      // Khôi phục tên ban đầu và chuyển đổi input field trở lại thành một thẻ <a>
      cancel.outerHTML = `<a href="#" class="name">${cancel.defaultValue}</a>`;
  
      // Hiện lại nút "Sửa" và "Xóa", ẩn nút "Lưu" và "Hủy"
      pr.querySelector(".edit").style.display = "inline-block";
      pr.querySelector(".delete").style.display = "inline-block";
      pr.querySelector(".save").style.display = "none";
      pr.querySelector(".cancel").style.display = "none";
    }
    //Sử dụng cho h3
    // h3: "Sửa"
    function enableEdith3(p) {
      let e = p.parentElement.parentElement;
      let name = e.querySelector(".name");
  
      // Ẩn và hiện các chức năng
      e.querySelector(".edit_h3").style.display = "none";
      e.querySelector(".delete_h3").style.display = "none";
      e.querySelector(".save_h3").style.display = "inline-block";
      e.querySelector(".cancel_h3").style.display = "inline-block";
      e.querySelector(".add_h3").style.display = "inline_block";
  
      name.outerHTML = `<input type="text" class="edit-nameh3" value="${name.innerText}">`;
    }
    //h3:"Xóa"
    function deleteH3(e){
      let pr = e.closest(".major");
      if (confirm("Bạn có chắc chắn xóa không?") === true) {
        pr.remove();
      }
    }
    // h3: "Lưu"
    function saveEdith3(p) {
      let e = p.parentElement.parentElement;
      let save = e.querySelector(".edit-nameh3");
  
      save.outerHTML = `<h3 class="name">${save.value}</h3>`;
      // Ẩn và hiện các chức năng
      e.querySelector(".edit_h3").style.display = "inline-block";
      e.querySelector(".delete_h3").style.display = "inline-block";
      e.querySelector(".save_h3").style.display = "none";
      e.querySelector(".cancel_h3").style.display = "none";
      e.querySelector(".add_h3").style.display = "inline_block";
    }
    // h3: "Hủy"
    function cancelEdith3(p) {
      let e = p.parentElement.parentElement;
      let cancel = e.querySelector(".edit-nameh3");
  
      cancel.outerHTML = `<h3 class="name">${cancel.defaultValue}</h3>`;
      // Ẩn và hiện các chức năng
      e.querySelector(".edit_h3").style.display = "inline-block";
      e.querySelector(".delete_h3").style.display = "inline-block";
      e.querySelector(".save_h3").style.display = "none";
      e.querySelector(".cancel_h3").style.display = "none";
      e.querySelector(".add_h3").style.display = "inline_block";
    }
    // h3:"Thêm" user
    
    function addUser(p) {
      let e = p.closest(".major").querySelector(".users");
      let h = `<li class="user">
                      <input type="text" class="edit-name" value=" ABC" placeholder="Họ và tên">
                      <div class="edsc show">
                          <button onclick="enableEdit(this)" class="edit" style="display: none;" ><i class="fa-solid fa-pen"></i></button>
                          <button onclick="deleteLi(this)" class="delete" style="display: none;"><i class="fa-solid fa-trash"></i></button>
                          <button onclick="saveEdit(this)" class="save" style="display: inline-block;"><i class="fa-solid fa-floppy-disk"></i></button>
                          <button onclick="cancelEdit(this)" class="cancel" style="display: inline-block;"><i class="fa-solid fa-ban"></i></button>
                      </div>
                  </li>`;
      let last = e.querySelector(".user:last-child");
      last.insertAdjacentHTML('afterend',h)
      
      
    }
    // hàm sử dụng cho h2
    // h2 "Sửa"
    function enableEdith2(p){
      let e=p.parentElement.parentElement;
      let  name =e.querySelector('.name');

      name.outerHTML = `<input type="text" class="edit-nameh2" value="${name.innerText}">`
      e.querySelector(".edit_h2").style.display='none';
      e.querySelector(".delete_h2").style.display='none';
      e.querySelector(".save_h2").style.display='inline-block';
      e.querySelector(".cancel_h2").style.display='inline-block';
      e.querySelector(".add_h2").style.display='inline-block';
    }
    //h2:"Xóa"
    function deleteH2(e){
      let p=e.parentElement.parentElement.parentElement;
      if (confirm("Bạn có chắc chắn xóa không?") === true) {
        p.remove();
      }
    }
    // h2 "Lưu"
    function saveEdith2(p) {
      let e= p.parentElement.parentElement;
      let save= e.querySelector('.edit-nameh2')
      save.outerHTML = `<h2 class="name">${save.value}</h2>`;
      e.querySelector(".edit_h2").style.display = "inline-block";
      e.querySelector(".delete_h2").style.display = "inline-block";
      e.querySelector(".save_h2").style.display = "none";
      e.querySelector(".cancel_h2").style.display = "none";
      e.querySelector(".add_h2").style.display = "inline_block";
    }
    // h2 "Hủy"
    function cancelEdith2(p){
      let e= p.parentElement.parentElement;
      let cancel= e.querySelector('.edit-nameh2')
      cancel.outerHTML = `<h2 class="name">${cancel.defaultValue}</h2>`;
      e.querySelector(".edit_h2").style.display = "inline-block";
      e.querySelector(".delete_h2").style.display = "inline-block";
      e.querySelector(".save_h2").style.display = "none";
      e.querySelector(".cancel_h2").style.display = "none";
      e.querySelector(".add_h2").style.display = "inline_block";
    }
    // h2 "Thêm" major(h3)
    function addMajor(p){
      let e = p.closest(".major-list").querySelector(".flex-major");
      let h=`<div class="major">
                            <div class="major_h3">
                                <input type="text" class="edit-nameh3" value=" ABC" placeholder="Tên ngành">
                                <div class="edsc show">
                                    <button onclick="enableEdith3(this)" class="edit_h3" style="display: none;"><i class="fa-solid fa-pen"  ></i></button>
                                    <button onclick="deleteH3(this)" class="delete_h3" style="display: none;"><i class="fa-solid fa-trash"  ></i></button>
                                    <button onclick="saveEdith3(this)" class="save_h3" style="display: inline-block;"><i class="fa-solid fa-floppy-disk"></i></button>
                                    <button onclick="cancelEdith3(this)" class="cancel_h3" style="display: inline-block;"><i class="fa-solid fa-ban"></i></button>
                                    <button onclick="addUser(this)" class="add_h3" style="display: inline-block;"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                    <ul class="users">
                        <li class="user">
                            <input type="text" class="edit-name" value=" ABC" placeholder="Họ và tên">
                            <div class="edsc show">
                                    <button onclick="enableEdit(this)" class="edit" style="display: none;"><i class="fa-solid fa-pen"  ></i></button>
                                    <button onclick="deleteLi(this)" class="delete" style="display: none;"><i class="fa-solid fa-trash"  ></i></button>
                                    <button onclick="saveEdit(this)" class="save" style="display: inline-block;"><i class="fa-solid fa-floppy-disk"></i></button>
                                    <button onclick="cancelEdit(this)" class="cancel" style="display: inline-block;"><i class="fa-solid fa-ban"></i></button>
                              </div>
                        </li>
                    </ul>
                </div>`
        let last = e.querySelector('.major:last-child')
        last.insertAdjacentHTML('afterend',h)
        
      }
window.addEventListener("load", function () {
    
    // Bật chế độ tạo thì  show ra
    let creat = document.querySelector(".creat");
    let c = document.querySelector(".creat-bonus");
    creat.addEventListener("click", function () {
      c.classList.toggle("show-creat");
    });

    //Tìm
    let search = document.querySelector("input[type=search]");
    search.onchange = function () {
      if (search.value !== "") {
        //tìm ngành
        // tắt hết hiệu ứng
        let major = document.querySelectorAll(".major h3");
        for (let m of major) m.style = "initial";
        // tìm
        let texts = document.querySelectorAll(".major h3");
        for (let t of texts)
          if (
            t.innerText.toUpperCase().includes(this.value.toUpperCase()) === true
          )
            t.style.color = "red";
        // tìm giảng viên
        // tắt hết hiệu ứng
        let teacher = document.querySelectorAll(".major a");
        for (let t of teacher) t.style = "initial";
        // tìm
        let texts_T = document.querySelectorAll(".major a");
        for (let t of texts_T)
          if (
            t.innerText.toUpperCase().includes(this.value.toUpperCase()) === true
          )
            t.style.color = "red";
      } else {
        // tắt hết hiệu ứng
        let major = document.querySelectorAll(".major h3");
        for (let m of major) m.style = "initial";
        let teacher = document.querySelectorAll(".major a");
        for (let t of teacher) t.style = "initial";
      }
    };

     // Thêm sự kiện li cho các nút "Sửa","Xóa","Lưu", "Hủy"
    let el = document.querySelectorAll(".edit");
      for (let e of el) {
        e.addEventListener("click", function () {
          enableEdit(this);
        });
    }
    let dl = document.querySelectorAll(".delete");
    for (let d of dl) {
      d.addEventListener("click", function () {
        deleteLi(this);
        
      });
    }
    let sl = this.document.querySelectorAll(".save");
    for (let s of sl) {
      sl = this.document.querySelectorAll(".save");
      s.addEventListener("click", function () {
        saveEdit(this);
      });
    }
    let cl = this.document.querySelectorAll(".cancel");
    for (let c of cl) {
      c.addEventListener("click", function () {
        
        cancelEdit(this);
      });
    }
    
    // h3:Thêm sự kiện cho các nút "Sửa","Xóa","Lưu", "Hủy", "Thêm"
  
    let e3 = document.querySelectorAll(".edit_h3");
    for (let e of e3) {
      e.addEventListener("click", function () {
        enableEdith3(this);
      });
    }
    let d3 = document.querySelectorAll(".delete_h3");
    for (let d of d3) {
      d.addEventListener("click", function () {
        deleteH3(this);
      });
    }
    let s3 = document.querySelectorAll(".save_h3");
    for (let s of s3) {
      s.addEventListener("click", function () {
        saveEdith3(this);
      });
    }
    let c3 = document.querySelectorAll(".cancel_h3");
    for (let c of c3) {
      c.addEventListener("click", function () {
        cancelEdith3(this);
      });
    }
    let add3 = document.querySelectorAll(".add_h3");
    for (let a of add3) {
      a.addEventListener("click", function () {
        addUser(this);
      });
    }
    
    
    // Sự kiện 
    let e2 = document.querySelectorAll(".edit_h2")
    for(let e of e2){
      e.addEventListener('click',function(){
        enableEdith2(this);
      })
    }
    let d2 = document.querySelectorAll(".delete_h2")
    for(let d of d2){
      d.addEventListener('click',function(){
        deleteH2(this);
      })
    }
    let s2 =document.querySelectorAll(".save_h2")
    for(let s of s2){
      s.addEventListener('click',function(){
        saveEdith2(this);
      })
    }
    let c2 =document.querySelectorAll(".cancel_h2")
    for(let c of c2){
      c.addEventListener('click',function(){
        cancelEdith2(this);
      })
    }
    let add2 = document.querySelectorAll(".add_h2");
    for (let a of add2) {
      a.addEventListener("click", function () {
        addMajor(this);
      });
    }
    //Nút BTN thêm h2 
    let btn= this.document.querySelector('.btn');
    btn.addEventListener('click',function(){
      let name = document.getElementById('NameGroup').value
      let h=`<div class="major-list">
            <div class="title-h2">
                <h2 class="name">${name}</h2>
                <div class="edsc show" >
                    <button onclick="enableEdith2(this)" class="edit_h2"><i class="fa-solid fa-pen"></i></button>
                    <button onclick="deleteH2(this)" class="delete_h2"><i class="fa-solid fa-trash"></i></button>
                    <button onclick="saveEdith2(this)" class="save_h2" style="display: none;"><i class="fa-solid fa-floppy-disk"></i></button>
                    <button onclick="cancelEdith2(this)" class="cancel_h2" style="display: none;"><i class="fa-solid fa-ban"></i></button>
                    <button onclick="addMajor(this)" class="add_h2"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div class="flex-major">
                <div class="major">
                            <div class="major_h3">
                                <input type="text" class="edit-nameh3" value=" ABC" placeholder="Tên ngành">
                                <div class="edsc show">
                                    <button onclick="enableEdith3(this)" class="edit_h3" style="display: none;"><i class="fa-solid fa-pen"  ></i></button>
                                    <button onclick="deleteH3(this)" class="delete_h3" style="display: none;"><i class="fa-solid fa-trash"  ></i></button>
                                    <button onclick="saveEdith3(this)" class="save_h3" style="display: inline-block;"><i class="fa-solid fa-floppy-disk"></i></button>
                                    <button onclick="cancelEdith3(this)" class="cancel_h3" style="display: inline-block;"><i class="fa-solid fa-ban"></i></button>
                                    <button onclick="addUser(this)" class="add_h3" style="display: inline-block;"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                    <ul class="users">
                        <li class="user">
                            <input type="text" class="edit-name" value=" ABC" placeholder="Họ và tên">
                            <div class="edsc show">
                                    <button onclick="enableEdit(this)" class="edit" style="display: none;"><i class="fa-solid fa-pen"  ></i></button>
                                    <button onclick="deleteLi(this)" class="delete" style="display: none;"><i class="fa-solid fa-trash"  ></i></button>
                                    <button onclick="saveEdit(this)" class="save" style="display: inline-block;"><i class="fa-solid fa-floppy-disk"></i></button>
                                    <button onclick="cancelEdit(this)" class="cancel" style="display: inline-block;"><i class="fa-solid fa-ban"></i></button>
                              </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
      let last= document.querySelector('.major-list:last-child')
      last.insertAdjacentHTML('afterend',h)
     
      
  });
})

