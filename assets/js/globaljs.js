// 树节点选中
function treeClick() {
    $('input').click(function () {
        console.log("执行子节点选中", $(this).next().find('input'))

        $(this).next().find('input').each(function () {
            console.log($(this))
            if ($(this).is(":checked")) {
                $(this).prop("checked", false)
            } else {
                $(this).prop("checked", true)
            }
        })
    })
}

/**
 * 连点工具
 * @param {number} clickNum 鼠标点击次数
 * @param {number} seconds 时间范围限制
 * @param {number} allNum 点击多少次触发
 */
function mouseClick(clickNum,seconds,allNum){
    var result = {
        status: true, // 返回是否成功触发
        clickNum: 0 // 点击次数初始化
    }
    if(clickNum == 1){
        setTimeout(function(){
            if(clickNum >= allNum){
                return result
            }
        },seconds)
    }
}