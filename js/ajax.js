/**
 * 簡易 jQuery Ajax
 * 
 * @param url 網址 / 檔案
 * @param type 類型 (e.g. POST, GET)
 * @param data 值 (需使用陣列)
 * @param callback Ajax 回傳的值
 */
function simpleAjax(url, type, data, callback) {
    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function (response) {
            if (callback && typeof callback === "function") {
                callback(response);
            }
        },
        error: function (xhr, status, error) {
            console.error("Ajax Error:", status, error);
        }
    });
}
