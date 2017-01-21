

function LockScreenBannerAdsUtils() {

}

LockScreenBannerAdsUtils.prototype.applyTextBannerFilter = function (temp) {


    var processedOutput = {
        type: "text_banner",
        "imp_url": temp.imp_url,
        "title": temp.title,
        "icon_url": temp.icon_url,
        "description": temp.description,
        "action_button_icon": temp.action_button_icon,
        "action_button_title": temp.action_button_title,
        "click_url": temp.click_url,
        "banner_bg_color": temp.banner_bg_color,
        "cross_btn_img": temp.cross_btn_img,
        "title_color": temp.title_color,
        "action_button_title":temp.action_button_title
    };


    return processedOutput;
};

LockScreenBannerAdsUtils.prototype.applyBannerFilter = function (obj) {

    //Todo:check for type text_banner or image_banner and apply the specific filter
    return this.applyTextBannerFilter(obj);
};
module.exports = LockScreenBannerAdsUtils;