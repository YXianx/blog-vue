import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        redirect:"/articles"
    },
    {
        path:"/home",
        component:()=>import(/* webpackChunkName: "home-chunk" */"../view/Home/Home.vue")
    },
    {
        path:"/search",
        component:()=>import(/* webpackChunkName: "search-chunk" */"../view/Search/Search.vue")
    },
    {
        path:"/articles",
        component:()=>import(/* webpackChunkName: "articles-chunk" */"../view/Articles/Articles.vue")
    },
    {
        path:"/:pathMatch(.*)",
        component:()=>import("../view/NotFound/NotFound.vue")
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

// 导航守卫
router.afterEach(()=>{
    // 跳转到新路由后滚动条位置回到顶部
    window.scrollTo(0,0)
})

export default router