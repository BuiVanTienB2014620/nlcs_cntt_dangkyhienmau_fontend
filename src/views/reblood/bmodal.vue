<template>
    <div>
        <div v-if="Openclose" class="modal fade show" aria-modal="true" role="dialog" style="display:block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"></h5>

                        <button type="button" class="btn btn-danger" @click="OpencloseFun()" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <slot>
                            <div class="profile-form">
                                <h4 style="color: #333;">Thay đổi thông tin đăng ký</h4>
                                <form>
                                    <div class="form-group">
                                        <label for="name">Tên:</label>
                                        <input type="text" id="name" name="name" placeholder="Nhập tên của bạn" />
                                    </div>
                                    <div class="form-group">
                                        <label for="gender">Giới tính:</label>
                                        <select id="gender" name="gender">
                                            <option value="male">Nam</option>
                                            <option value="female">Nữ</option>
                                            <option value="other">Khác</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="location">Địa điểm:</label>
                                        <input type="text" id="location" name="location"
                                            placeholder="Nhập địa điểm của bạn" />
                                    </div>
                                    <div class="form-group">
                                        <label for="birthday">Ngày sinh:</label>
                                        <input type="date" id="birthday" name="birthday" />
                                    </div>
                                    <div class="form-group">
                                        <label for="blood-group">Nhóm máu:</label>
                                        <input type="text" id="blood-group" name="blood-group"
                                            placeholder="Nhập nhóm máu của bạn" />
                                    </div>
                                    <button type="submit">Lưu thông tin</button>
                                </form>
                            </div>


                        </slot>
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="OpencloseFun()" :class="'btn btn-' + variant">Close</button>

                    </div>
                </div>
            </div>
        </div>
        <button type="button" @click="OpencloseFun()" :class="'btn btn-' + variant">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
            </svg>

        </button>

    </div>
</template>

<script>
export default {
    name: 'bmodal',
    props: {
        visible: Boolean,
        variant: String,


    },
    data() {
        return {
            Openclose: this.visible
        }
    },
    methods: {
        OpencloseFun() {
            this.Openclose = !this.Openclose;

        },
        watch: {
            visible: function (newVal, oldVal) {
                this.Openclose = newVal; // Sửa thành "newVal"
                console.log('new ' + newVal + ' == ' + oldVal);
            },
            // isible: function (newVal, oldVal) {
            //     if (newVal === false) {
            //         this.Openclose = false;
            //     }
            // },
        }


    }

}
</script>

<style scoped>
td:nth-child(1) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
}

.tht {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
}

.edit {
    display: flex;
    align-items: center;
}
.profile-form {
            max-width: 400px;
            margin: 0 auto;
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            font-weight: bold;
            color: #333;
        }

        input[type="text"],
        select {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button[type="submit"] {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
</style>