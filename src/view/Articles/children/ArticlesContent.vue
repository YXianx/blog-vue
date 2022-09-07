<!-- 
    mavon-editor回显渲染 参考：https://chenjunan.top/detail/Detail?id=25 
        加了行号DOM后改变了这个文件 import hljs from "mavon-editor/dist/highlightjs/highlight.min.js";
        所以得取消富文本自己import调用hljs，还得把原本的:ishljs设置为false，不然就会冲突出现行号不显示的情况！！
-->
<template lang="">
    <article>
        <mavon-editor
        v-model="contentData"
        defaultOpen="preview"
        :previewBackground="getThemeConfig('mainCardBg')"

        :ishljs="false"
        :editable="false"
        :subfield="false"
        :toolbarsFlag="false">
        </mavon-editor>
    </article>
</template>
<script>
import {onMounted,ref,nextTick,inject} from 'vue'
import {ElMessage} from 'element-plus'

import {useGetters} from '../../../hook/common/useGetters'
import hljs from "mavon-editor/dist/highlightjs/highlight.min.js";
// TODO:代码框会出现scroll滚动条，需要解决，且tool栏宽度是死的，在移动端回出现显示不全的问题
export default {
    setup(){
        // 接受Articles.vue传递的md数据
        const contentData = inject('content') 

        // 自定义代码块显示
        const codes = ref(null)
        const codeELHeight = ref(0)
        const getCodes = ()=>{
            codes.value = document.querySelectorAll("pre code")
            init()
        }
        const init = ()=>{
            nextTick(()=>{
                if(codes.value === null) return

                codes.value.forEach((item) => {
                    if(item.offsetHeight === 0)return 
                    
                    // 1、获取代码code标签的父元素节点
                    let pre = item.parentElement
                    
                    // 2、计算tool栏的宽度及code代码容器高度
                    let preWidth = pre.clientWidth+1
                    let codeHeight = item.offsetHeight

                    // 3、创建codeView新的自定义代码容器
                    const codeView = document.createElement("div")
                    codeView.className = "code-view"
                    codeELHeight.value = codeView.offsetHeight

                    // 4、实现行号 
                    const lineNumEL = document.createElement("div")
                    for(let i = 1;i < Math.ceil(codeHeight / 20)+2;i++){
                        let spanEL = document.createElement('span')
                        spanEL.innerText = i
                        lineNumEL.appendChild(spanEL)
                    }
                    lineNumEL.className = "el-line-num"
                    codeView.appendChild(lineNumEL)
                    
                    // 5、自定义新的代码区域 从原本的pre->code层级关系变成pre->.code-view，放入自定义的代码容器
                    const codeBox = document.createElement("div")
                    codeBox.className = "code-box"
                    codeBox.innerHTML = item.innerHTML
                    item.innerHTML = ""
                    codeBox.appendChild(item)   // code标签放入自定义codeBox
                    codeView.appendChild(codeBox)

                    // 6、自定义tool工具栏 (如果采用模版字符串方式创建会导致事件加不上！)
                    const macToolEL = document.createElement('div')
                    macToolEL.className = "mac-tool"
                    // macToolEL.setAttribute("style",`width:${preWidth}px`)
                    // 6-1、自定义mac-icon样式按钮及复制按钮
                    const iconRedEL = document.createElement('span')
                    const iconYellowEL = document.createElement('span')
                    const iconGreenEL = document.createElement('span')
                    const copyEL = document.createElement('i')
                    iconRedEL.className = "mac-icon-red"
                    iconYellowEL.className = "mac-icon-yellow"
                    iconGreenEL.className = "mac-icon-green"
                    copyEL.className = "iconfont copy-icon"
                    copyEL.innerHTML = '&#xe631;'
                    // 6-2、DOM合并
                    macToolEL.appendChild(iconRedEL)
                    macToolEL.appendChild(iconYellowEL)
                    macToolEL.appendChild(iconGreenEL)
                    macToolEL.appendChild(copyEL)
                    codeView.appendChild(macToolEL)
     
                    // 7、自定义代码容器放入pre下完成一个代码块的展示
                    pre.appendChild(codeView)

                    // 8、给容器添加代码高亮 (在组件设置了ishljs为false后样式就需要自己导入)
                    hljs.highlightBlock(codeView);

                    // 9、实现复制 (此处元素事件需要放在codeView被挂载之后执行，否则复制i标签的点击事件加不上)
                    codeView.lastElementChild.lastElementChild.onclick = ()=>{
                        const copyPromise = navigator.clipboard.writeText(
                            codeBox.innerText
                        ).then(()=>{
                            ElMessage({
                                message:"代码复制成功",
                                type:'success'
                            })
                        }).catch(()=>{
                            ElMessage({
                                message:"代码复制失败",
                                type:'error'
                            })
                        })
                    }
                });
            })
        }

        onMounted(()=>{
            nextTick(()=>{
                getCodes()
            })
        })

        return {
            contentData,
            ...useGetters("themeModule",['getThemeConfig'])
        }
    }
}
</script>
<style lang="less">
    // 取消mardown回显区域的默认样式
    .v-note-wrapper {
        box-shadow: none !important;
        z-index: 888;
        // background-color: red !important;
    }

    // 博客md内容文字运用动态样式
    .markdown-body{
        h1,h2,h3,h4,h5,h6,ul,li,p{
            color: @mainColor !important;
        }
    }

    // 自定义代码块
    pre{
        border-radius: 7px !important;
        padding: 0 !important;
        box-shadow: @shadowColor !important;
        margin-bottom: 24px !important;
        background-color: transparent !important;
    }
    .code-view{
        position: relative !important;
        background-color: @macBg !important;
        color: @macColor !important;

        .hljs-function{
            color:#6182b8 !important;
        }
        .hljs-tag{
            color: #39adb5;
        }
        .hljs-name{
            color: #e53935 !important;
        }
        .hljs-attr{
            color: #9e74b8 !important;
        }
        .hljs-string{
            color: #91b859 !important;
        }

        .el-line-num{
            margin: 2.5em 0 1em 0;
            display: inline-block !important;
            line-height: 20px !important;
            padding: 0 10px;
            color: @macLineColor !important;
            span{
                display: block;
            }
            .hljs-number{
                color: @macLineColor !important;
            }
        }

        .code-box{
            // 内容可选中
            user-select: text !important;

            position:absolute;
            top: 3em;
            padding: 0 10px;
            line-height: 20px;
            
            display:inline-block !important;
            width:calc(100%-50px)!important;
            vertical-align: top !important;
        }

        .mac-tool{
            position: absolute !important;
            left: 0;
            top: 0;


            display: inline-block !important;
            width: 100%;
            height: 2.15em !important;
            background-color: @macToolBg !important;

            span{
                position: absolute !important;
                transform: translate(-50%,-50%);
                top: 50%;
                width: 12px;
                height: 12px;
                border-radius: 50%;
            }
            .mac-icon-red {
                left: 20px;
                background-color: #fc625d !important;
            }
            .mac-icon-yellow {
                left: 40px;       
                background-color: #F3BF59 !important;
            }

            .mac-icon-green {
                left: 60px;
                background-color: #68CA5D !important;
            }
            .copy-icon{
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translate(-50%,-50%);
                transition: color 300ms;
                font-weight: 700;
                cursor: pointer;

                &:hover{
                    color: var(--color-high-text);
                }
            }
        }
    }
</style>
