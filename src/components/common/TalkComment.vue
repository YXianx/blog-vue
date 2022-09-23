<template lang="">
    <div class="comment-input-wrapper">
        <img class="head" :src="IMG_URL + 'user_head.webp'" alt="">
        <div class="input-wrapper" :style="'margin-left: 20px'">
            <div class="comment-input" @click="isShowEmoji=false">
                <textarea ref="textarea" 
                          v-model="commentText" 
                          :placeholder="placeholder"
                          :style="{height:'205px'}">
                </textarea>
            </div>
            <div class="tool-bar">
                <i class="iconfont" @click="emojiBtnClick">&#xe6fc;</i>
                <div class="btns">
                    <el-button @click="saveClick">发布</el-button>
                </div>
                <transition name="emoji">
                    <div class="emoji-list" v-if="isShowEmoji">
                        <div class="emoji-item" 
                             v-for="(item,index) in list"
                             @click="emojiClick(item)">
                            <img :src="`https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif`" alt="">
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
import {IMG_URL} from '@const/index.js'
export default {
    props:{
        placeholder:{
            type:String,
            default(){return '留下点什么吧...'}
        }
    },
    setup(props,{emit}){
        // 1、评论框初始化内容
        const textarea = ref(null)
        const isShowEmoji = ref(false)
        const commentText = ref("")
        const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']

        const emojiBtnClick = ()=>{
            textarea.value.focus()
            isShowEmoji.value = !isShowEmoji.value
        }
        const emojiClick = (item)=>{
            commentText.value += `[${item}]`
        }
        // 发布评论
        const saveClick = ()=>{
            emit("commentSave",commentText.value)
            commentText.value = ""
        }


        return{
            textarea,
            isShowEmoji,
            commentText,
            list,

            emojiBtnClick,
            emojiClick,
            saveClick,

            IMG_URL
        }
    }
}
</script>
<style lang="less" scoped>
    .comment-input-wrapper{
        position: relative;
        display: flex;
        width: 100%;
        height: auto;
        padding: 10px;
        border: 1px solid rgba(144,147,153,.31);
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 20px;    

        .head{
            width: 40px;
            height: 40px;
            border-radius: 6px;
            transition: transform 300ms;
            &:hover{
                transform: scale(1.4);
            }
        }
        
        .input-wrapper{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            // margin-left: 20px;
            .comment-input{
                display: flex;
                flex: 1;
                margin-bottom: 10px;
                textarea{
                    width: 100%;
                    // height: 205px;
                    // height: auto;
                    padding: 10px 5px;
                    outline: none;
                    border: none;
                    resize: none;
                    line-height: 1.5;
                    color: @mainColor;
                    font-size: 0.9rem;
                    letter-spacing: 0.05em;
                    // position(x、y)/size(w、h)
                    background:url('@img/comment/commentBg2.gif')100% 50%/230px 230px no-repeat
                }
            }
            .tool-bar{
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                i{
                    font-size: 23px;
                    transition: color 300ms;
                    &:hover{
                        color: var(--color-high-text);
                    }
                }

                .emoji-list{
                    width: 75%;
                    height: 50px;
                    padding: 5px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    overflow: auto;
                    display: flex;
                    align-items: center;
                    background-color: #fff;
                    border-radius: 6px;
                    box-shadow: @shadowColor;
                    img{
                        width: 30px;
                        height:30px;

                        &:hover{
                            background-color: #F0F0F0;
                        }
                    }
                }
            }
        }
    }

    .emoji-enter-from,
    .emoji-leave-to{
        opacity: 0;
    }
    .emoji-enter-to,
    .emoji-leave-from{
        opacity: 1;
    }
    .emoji-enter-active,
    .emoji-leave-active{
        transition: all 200ms;
    }
</style>