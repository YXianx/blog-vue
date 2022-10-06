// 文章内容模块
import {
    getArticlesList,
    getArticlesDetail,
    getArticlesComment
} from '@network/articles/articles.js'

export const articlesModule = {
    namespaced:true,
    state:{
        articlesList:[],
        articleDetail:{},
        articleComment:[]
    },

    getters:{
        getArticlesList(state,getters){
            return state.articlesList
        },
        getArticlesDetail(state,getters){
            return state.articleDetail
        },
        getArticlesComment(state,getters){
            return state.articleComment
        }
    },

    mutations:{
        setArticleDetail(state,payload){
            state.articleDetail = payload
        },

        setArticleComment(state,payload){
            state.articleComment = payload
            state.articleComment.push('')
            state.articleComment.pop()
        },

        setArticleList(state,payload){
            state.articlesList = payload
        }
    },

    actions:{
        setupArticleList({commit},payload){
            getArticlesList()
            .then(res=>{
                commit("setArticleList",res.data.data)
            })
        },
        setupArticleDetail({commit},payload){
            getArticlesDetail(payload)
            .then(res=>{
                commit("setArticleDetail",res.data.data)
            })
        }, 
        setupArticleComment({commit},payload){
            return new Promise((resolve,reject)=>{
                getArticlesComment(payload)
                .then(res=>{
                    commit("setArticleComment",res.data.data)
                    resolve()
                })
                .catch(err=>{
                    reject()
                })
            })
        }
    }
}