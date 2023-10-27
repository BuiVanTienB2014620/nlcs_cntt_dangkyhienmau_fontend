<template>
    <div>
        <!-- Editable table -->
        <div class="card">
            <h3 class="card-header text-center font-weight-bold text-uppercase py-4">
                Thống kê số lượng đăng ký
            </h3>
            <div class="card-body">
                <div id="table" class="table-editable">

                    <table class="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                            <tr>
                                <th class="text-center">Ông/Bà</th>
                                <th class="text-center">Tuổi</th>
                                <th class="text-center">Ngày hiến</th>
                                <th class="text-center">Thời gian hiến</th>
                                <th class="text-center">Nơi hiến</th>
                                <th class="text-center">Trạng thái</th>
                                <th class="text-center">Từ chối</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="pt-3-half" contenteditable="true">Aurelia Vega</td>
                                <td class="pt-3-half" contenteditable="true">30</td>
                                <td class="pt-3-half" contenteditable="true">22-12-2023</td>
                                <td class="pt-3-half" contenteditable="true">7:00 AM</td>
                                <td class="pt-3-half" contenteditable="true">Madrid</td>
                                <td class="pt-3-half text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg>
                                </td>
                                <td>
                                    <span class="table-remove"><button type="button"
                                            class="btn btn-danger btn-rounded btn-sm my-0">
                                            chọn
                                        </button></span>
                                </td>
                            </tr>
                            <!-- This is our clonable table line -->
                            <tr>
                                <td class="pt-3-half" contenteditable="true">Aurelia Vega</td>
                                <td class="pt-3-half" contenteditable="true">30</td>
                                <td class="pt-3-half" contenteditable="true">22-12-2023</td>
                                <td class="pt-3-half" contenteditable="true">7:00 AM</td>
                                <td class="pt-3-half" contenteditable="true">Madrid</td>
                                <td class="pt-3-half text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-pause"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922"></path>
                                        <path d="M12 7v5l2 2"></path>
                                        <path d="M17 17v5"></path>
                                        <path d="M21 17v5"></path>
                                    </svg>
                                </td>
                                <td>
                                    <span class="table-remove"><button type="button"
                                            class="btn btn-danger btn-rounded btn-sm my-0">
                                            chọn
                                        </button></span>
                                </td>
                            </tr>
                            <!-- This is our clonable table line -->
                            <tr>
                                <td class="pt-3-half" contenteditable="true">Aurelia Vega</td>
                                <td class="pt-3-half" contenteditable="true">30</td>
                                <td class="pt-3-half" contenteditable="true">22-12-2023</td>
                                <td class="pt-3-half" contenteditable="true">7:00 AM</td>
                                <td class="pt-3-half" contenteditable="true">Madrid</td>
                                <td class="pt-3-half text-warning" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-pause"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922"></path>
                                        <path d="M12 7v5l2 2"></path>
                                        <path d="M17 17v5"></path>
                                        <path d="M21 17v5"></path>
                                    </svg>
                                </td>
                                <td>
                                    <span class="table-remove"><button type="button"
                                            class="btn btn-danger btn-rounded btn-sm my-0">
                                            chọn
                                        </button></span>
                                </td>
                            </tr>
                            <!-- This is our clonable table line -->
                            <tr>
                                <td class="pt-3-half" contenteditable="true">Aurelia Vega</td>
                                <td class="pt-3-half" contenteditable="true">30</td>
                                <td class="pt-3-half" contenteditable="true">22-12-2023</td>
                                <td class="pt-3-half" contenteditable="true">7:00 AM</td>
                                <td class="pt-3-half" contenteditable="true">Madrid</td>
                                <td class="pt-3-half text-success">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-circle-check" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M9 12l2 2l4 -4"></path>
                                    </svg>
                                </td>
                                <td>
                                    <span class="table-remove"><button type="button"
                                            class="btn btn-danger btn-rounded btn-sm my-0">
                                            chọn
                                        </button></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Editable table -->
    </div>
</template>

<script>
export default {

}
</script>

<style></style>