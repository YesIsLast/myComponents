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