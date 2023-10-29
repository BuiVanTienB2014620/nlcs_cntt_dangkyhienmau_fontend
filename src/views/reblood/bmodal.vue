<template>
    <div>
        <div v-if="Openclose" class="modal fade show" aria-modal="true" role="dialog" style="display:block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Chỉnh sửa thông tin</h5>

                        <button type="button" class="close" @click="OpencloseFun()" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <slot>
                            <table class="table align-middle mb-0 bg-white">
                                <thead class="bg-light">
                                    <tr>
                                        <th class="tht">Tên</th>
                                        <th class="tht">Giới tính</th>
                                        <th class="tht">Địa Điểm</th>
                                        <th class="tht">Thời gian</th>
                                        <th class="s">Nhóm máu</th>

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

                                    </tr>
                                </tbody>
                            </table>


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
</style>