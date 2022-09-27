import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:()=>import(/* webpackChunkName: "home-chunk" */"../view/Home/Home.vue")
    },
    {
        path:"/search",
        component:()=>import("../view/Search/Search.vue")
    },
    {
        path:"/articles/:id",
        component:()=>import(/* webpackChunkName: "articles-chunk" */"../view/Articles/Articles.vue")
    },
    {
        path:"/archives",
        component:()=>import("../view/Archives/Archives.vue")
    },
    {
        path:"/categories",
        component:()=>import("../view/Categories/Categories.vue"),
    },
    {
        path:"/categories/:id",
        component:()=>import("../components/content/ArticlesList.vue")
    },
    {
        path:"/tag",
        component:()=>import("../view/TagCloud/TagCloud.vue"),
    },
    {
        path:"/tag/:id",
        component:()=>import("../components/content/ArticlesList.vue")
    },
    {
        path:"/albums",
        component:()=>import("../view/Albums/Albums.vue"),
        children:[
            {
                path:":id",
                component:()=>import("../view/Albums/Albums.vue")
            }
        ]
    },
    {
        path:"/talks",
        component:()=>import("../view/Talks/Talks.vue")
    },
    {
        path:"/links",
        component:()=>import("../view/Links/Links.vue")
    },
    {
        path:"/about",
        component:()=>import("../view/About/About.vue")
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
router.afterEach((to,from)=>{
    // 当前路由为二级路由时不重新设置滚动条位置
    if(to.matched.length <= 1){
        // 跳转到新路由后滚动条位置回到顶部
        window.scrollTo(0,0)
    }
})

export default router