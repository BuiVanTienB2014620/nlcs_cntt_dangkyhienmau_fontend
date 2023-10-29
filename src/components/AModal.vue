<template>
    <div>
        <div v-if="OpencloseA" class="modal fade show" aria-modal="true" role="dialog" style="display:block">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Chỉnh sửa thông tin cá nhân</h5>

                    <button type="button" class="close" @click="OpencloseFunA()" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <slot>


                    </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="OpencloseFunA()" :class="'btn btn-' + variant">Close</button>

                </div>
            </div>
        </div>
    </div>
    
    <button type="button" @click="OpencloseFunA()" :class="'btn btn-' + variant">
        Thay đổi thông tin


    </button>

    </div>
    
</template>

<script>
export default {
    name: 'AModal',
    props: {
        visible: Boolean,
        variant: String,


    },
    data() {
        return {
            OpencloseA: this.visible
        }
    },
    methods: {
        OpencloseFunA() {
            this.OpencloseA = !this.OpencloseA;

        },
        watch: {
            visible: function (newVal, oldVal) {
                this.OpencloseA = newVal; // Sửa thành "newVal"
                console.log('new ' + newVal + ' == ' + oldVal);
            },
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