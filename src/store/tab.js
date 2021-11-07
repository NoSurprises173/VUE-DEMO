export default{
    state:{
        isCollapse:false,
        currentMenu:null,
        tabsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home',
            }
        ],
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        SelectMenu(state,val){
            // val.name === 'home' ? (state.currentMenu = null):state.currentMenu=val;
            if(val.name == 'home')
            {
                state.currentMenu = null;
            }else{
                state.currentMenu=val
                //新增tabList
                let result = state.tabsList.findIndex(item => item.name == val.name)
                result === -1 ? state.tabsList.push(val) : ''
            }
        },
        closeTag ( state , val ) {
            let result = state.tabsList.findIndex(item => item.name == val.name)
            state.tabsList.splice(result,1)
        }
    }
}//跨组件传值，状态管理