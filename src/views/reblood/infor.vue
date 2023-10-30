<template>
    <div>
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th class="tht">Tên</th>
                    <th class="tht">Giới tính</th>
                    <th class="tht">Địa Điểm</th>
                    <th class="tht">Thời gian</th>
                    <th class="s">Nhóm máu</th>
                    <th class="tht">Chỉnh sửa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <p>Bùi Văn Tiền</p>
                        </div>
                    </td>
                    <td>
                        <p>Nam</p>
                    </td>
                    <td>
                        <p>106 Thiên Phước, Phường 9, Quận Tân Bình, TP.HCM</p>
                    </td>
                    <td>
                        <p>7:00 AM</p>
                    </td>
                    <td>
                        <p>A</p>
                    </td>
                    <td>
                        <bmodal :visible="isModalVisible" variant="secondary"></bmodal>
                    </td>
                </tr>
            </tbody>
        </table>
        









    </div>
</template>

<script>
import bmodal from './bmodal.vue';

export default {
   
    components: {
        bmodal,
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        openModal() {
            this.isModalVisible = true;
        },
    },
};
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
</style>
