console.log('Happy developing ✨')

// 页面加载完成后设置下载链接
document.addEventListener('DOMContentLoaded', function() {
    // 设置iOS下载链接
    const iosLinks = document.querySelectorAll('#ios-download-1, #ios-download-2');
    iosLinks.forEach(link => {
        link.href = DOWNLOAD_LINKS.IOS_APP_STORE;
    });

    // 设置安卓下载链接
    const androidLinks = document.querySelectorAll('#android-download-1, #android-download-3');
    androidLinks.forEach(link => {
        link.href = DOWNLOAD_LINKS.ANDROID_LEMON_WARDROBE;
    });

    console.log('下载链接已从配置文件加载完成 🔗');
});
