<template>
    <div>
        <div class="d-flex justify-content-center">
            <h1>Chỉnh Sửa Thông Tin Trung Tâm</h1>

        </div>
     

        <form  enctype="multipart/form-data">
            <div class="form-group">
                <label for="tenTrungTam">Tên Trung Tâm:</label>
                <input type="text" name="tenTrungTam" id="tenTrungTam" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="diaChi">Địa Chỉ:</label>
                <input type="text" name="diaChi" id="diaChi" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="ngayGio">Ngày và Giờ:</label>
                <input type="datetime-local" name="ngayGio" id="ngayGio" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="soLuong">Số Lượng:</label>
                <input type="number" name="soLuong" id="soLuong" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="anh">Ảnh:</label>
                <input type="file" name="anh" id="anh" class="form-control-file" accept="image/*">
            </div>

            <button type="submit" class="btn btn-primary">Cập Nhật Thông Tin</button>
        </form>
        <router-link :to="{name: 'admin-position' }" >
            <button class="exit-button">Thoát</button>
   

        </router-link>
        
        
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Improved styling */
h1 {
    font-size: 24px;
    color: #333;
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-control-file {
    font-size: 16px;
}

.btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.btn:hover {
    background-color: #0056b3;
}
.exit-button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 20px;
    cursor: pointer;
    float: right;
    /* Di chuyển nút lên trên */
    position: relative;
    top: -47px; /* Điều chỉnh giá trị theo ý muốn */
  }
</style>
