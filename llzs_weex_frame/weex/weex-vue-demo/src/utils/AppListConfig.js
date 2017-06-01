//身高
function getHeights() {
    var list = ["145cm","146cm","147cm","148cm","149cm","150cm","151cm","152cm","153cm","154cm",
        "155cm","156cm","157cm","158cm","159cm","160cm","161cm","162cm","163cm","164cm","165cm",
        "166cm","167cm","168cm","169cm","170cm","171cm","172cm","173cm","174cm","175cm","176cm","177cm",
        "178cm","179cm","180cm", "181cm","182cm","183cm","184cm","185cm","186cm","187cm","188cm","189cm","190cm",
        "191cm","192cm","193cm","194cm","195cm","196cm","197cm","198cm","199cm","200cm"];
    return list;
}

//血型
function getBloodType() {
    var list = ["A型","B型","AB型","O型"];
    return list;
}

//地区（只包含省份）
function getProvince() {
    var list = ["北京","上海","天津","重庆","河北","山西","河南","辽宁","吉林","黑龙江",
        "内蒙古","江苏","山东","安徽","浙江","福建","湖北","湖南","广东","广西",
        "江西","四川","海南","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆"];
    return list;
}

export {getHeights,getBloodType,getProvince};
