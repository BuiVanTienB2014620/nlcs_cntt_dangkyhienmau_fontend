<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary">
        <a href="" class="navbar-brand">
            <router-link :to="{name: 'hienmau'}" class="nav-link">
                   
                <img src="../assets/img/download.png" alt="" class="rounded-circle logo-img">
                <span class="logo-text">Hội Hiến Máu Việt Nam</span>

            </router-link>
          
        </a>
        <div class="logo-container">
            <img src="../assets/img/logo1.jpg" alt="" class="logo1">
            <img src="../assets/img/HCTD.png" alt="" class="logo">
        </div>
        <div class="navbar-user">
            <i class="fa-solid fa-user"></i> Đăng Nhập
        </div>
       
    </nav>
</template>
<style>
/* CSS để bo tròn ảnh và thu nhỏ nó */
.navbar {
    display: flex;
    justify-content: space-between;

}
.logo-img {
    border-radius: 50%; /* Bo tròn ảnh */
    width: 15%; /* Thu nhỏ ảnh thành 1/4 kích thước ban đầu */
}
.logo-container {
    display: flex;
    align-items: center; 
    justify-content: center; 
    margin-right: 25%;
}
.logo1{
    width: 30%;
    height: auto;
}



.navbar-brand {
    display: flex; /* Sử dụng flexbox để căn chỉnh các phần tử con */
    align-items: flex-end; /* Căn dưới cùng */
    justify-content: center; /* Căn giữa theo chiều ngang */
    text-decoration: none; /* Loại bỏ gạch chân khi hover */
}

/* CSS để định dạng văn bản */
.logo-text {
    font-size: 18px; /* Điều chỉnh kích thước font chữ */
    color: white; /* Điều chỉnh màu sắc của văn bản */
    text-align: center; /* Căn giữa văn bản */
    margin-top: 10px; /* Khoảng cách từ logo đến văn bản (điều chỉnh giá trị này theo nhu cầu) */
}


</style>