// 下载链接配置文件 - 方便统一管理和替换下载链接

const DOWNLOAD_LINKS = {
    // iOS App Store 链接
    IOS_APP_STORE: "https://apps.apple.com/cn/app/%E6%9F%9A%E5%AD%90%E8%A1%A3%E6%A9%B1-%E6%99%BA%E8%83%BD%E7%A7%81%E4%BA%BA%E8%A1%A3%E6%A9%B1%E7%AE%A1%E5%AE%B6/id6504781666",
    
    // 安卓版下载链接
    ANDROID_LEMON_WARDROBE: "https://wwcu.lanzoub.com/iQ6Fi349f3qb",
    
    // 数据修复版下载链接
    ANDROID_DATA_REPAIR: "https://wwcu.lanzoub.com/i5ihF349dlzg"
};

// 如果在 Node.js 环境中使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DOWNLOAD_LINKS;
}