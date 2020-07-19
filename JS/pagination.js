export default {
    props: ['pages'],
    template: `
    <nav aria-label="Page navigation example">
        <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item" v-for="i in pages.total_pages" :key="i">
            <a class="page-link" href="#" @click.prevent="clickPageNum(i)"> {{ i }} </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>`,
    methods: {
        clickPageNum(num){
            console.log("hi 頁碼", num)
            this.$emit('update-page-num', num)
        },
    },
}

// a 連結中的 click 事件盡量用 @click.prevent 避免預設事件干擾觸發