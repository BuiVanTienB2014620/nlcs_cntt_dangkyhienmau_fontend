<template>
    <div class="row">
        <div class="col-sm-3">
            <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                    <tr>
                        <th style="text-align:  center;">
                            Đặt lịch hiến máu


                        </th>


                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>



                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                                </path>
                                <path d="M16 3l0 4"></path>
                                <path d="M8 3l0 4"></path>
                                <path d="M4 11l16 0"></path>
                                <path d="M8 15h2v2h-2z"></path>
                            </svg>
                            <router-link :to="{ name: 'tap' }" style="text-decoration: none; " class="textp">
                                Thời gian và địa điểm

                            </router-link>

                        </td>

                    </tr>
                    <tr>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-hospital"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21l18 0"></path>
                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                                <path d="M10 9l4 0"></path>
                                <path d="M12 7l0 4"></path>
                            </svg>
                            <router-link :to="{ name: 'medical' }" style="text-decoration: none;  " class="textp">
                                Khai báo y tế

                            </router-link>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-heart"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
                                <path
                                    d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z">
                                </path>
                            </svg>

                            <router-link :to="{ name: 'infor' }" style="text-decoration: none;  " 
                                class="textp">
                                Thông tin người hiến máu

                            </router-link>
                        </td>

                    </tr>
                    

                </tbody>
            </table>

        </div>
        <div class="col-sm-9">
           <router-view></router-view>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.row{
    margin-bottom: 30px;
}
</style>