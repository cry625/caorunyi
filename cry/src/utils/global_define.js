const gallery_card_label = {
    // 0~99    分类
    0 :"个人",
    1 :"团体",
    // 100~199 时期
    101 :"大学",
    102 :"在职",
    103 :"业余",
}

function get_label_with_id(id) {
    return gallery_card_label[id]
}
function get_color_with_id(id) {
    if (id < 100) {
        return 'var(--primary-tag-pink)'
    } else if (100 <= id < 200) {
        return "var(--primary-tag-orange)"
    } else {
        return
    }
}
export {
    get_label_with_id,
    get_color_with_id
}