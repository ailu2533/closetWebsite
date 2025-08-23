// 柠檬衣橱官网主要JavaScript功能

// 显示下载区域的提取码提示
function showPassword() {
    const tip = document.getElementById('password-tip');
    if (!tip) return;
    
    tip.style.display = 'block';
    
    // 添加显示动画
    tip.style.opacity = '0';
    tip.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        tip.style.transition = 'all 0.3s ease';
        tip.style.opacity = '1';
        tip.style.transform = 'translateY(0)';
    }, 10);

    copyPasswordToClipboard();
}

// 显示顶部下载区域的提取码提示
function showTopPassword() {
    const tip = document.getElementById('top-password-tip');
    if (!tip) return;

    tip.style.display = 'block';

    // 添加显示动画
    tip.style.opacity = '0';
    tip.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        tip.style.transition = 'all 0.3s ease';
        tip.style.opacity = '1';
        tip.style.transform = 'translateY(0)';
    }, 10);

    copyPasswordToClipboard();

    // 3秒后自动隐藏提示
    setTimeout(() => {
        tip.style.opacity = '0';
        tip.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            tip.style.display = 'none';
        }, 300);
    }, 3000);
}

// 显示柚子衣橱下载的提取码提示
function showYuzuPassword() {
    const tip = document.getElementById('yuzu-password-tip');
    if (!tip) return;

    tip.style.display = 'block';

    // 添加显示动画
    tip.style.opacity = '0';
    tip.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        tip.style.transition = 'all 0.3s ease';
        tip.style.opacity = '1';
        tip.style.transform = 'translateY(0)';
    }, 10);

    copyPasswordToClipboard();

    // 4秒后自动隐藏提示（柚子衣橱提示显示时间稍长）
    setTimeout(() => {
        tip.style.opacity = '0';
        tip.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            tip.style.display = 'none';
        }, 300);
    }, 4000);
}

// 复制提取码到剪贴板
function copyPasswordToClipboard() {
    const password = 'cxmd';
    
    // 现代浏览器的复制方法
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(password).then(() => {
            console.log('提取码已复制到剪贴板');
        }).catch((err) => {
            console.error('复制失败:', err);
            // 降级方案
            fallbackCopyTextToClipboard(password);
        });
    } else {
        // 降级方案
        fallbackCopyTextToClipboard(password);
    }
}

// 降级复制方案（兼容老旧浏览器）
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            console.log('提取码已复制到剪贴板（降级方案）');
        } else {
            console.error('复制失败');
        }
    } catch (err) {
        console.error('复制失败:', err);
    }
    
    document.body.removeChild(textArea);
}

// 平滑滚动功能
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 滚动动画观察器
function initScrollAnimations() {
    // 检查浏览器是否支持 IntersectionObserver
    if (!window.IntersectionObserver) {
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有功能卡片
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// 移动端优化
function initMobileOptimizations() {
    // 防止iOS Safari的橡皮筋效果
    document.addEventListener('touchmove', function(e) {
        if (e.target.closest('.top-download-section') || 
            e.target.closest('.hero') || 
            e.target.closest('.download-section')) {
            // 允许这些区域的滚动
            return;
        }
    }, { passive: true });

    // 优化移动端点击体验
    document.addEventListener('touchstart', function() {}, { passive: true });
}

// 错误处理
function handleErrors() {
    window.addEventListener('error', function(e) {
        console.error('页面错误:', e.error);
    });

    window.addEventListener('unhandledrejection', function(e) {
        console.error('未处理的Promise错误:', e.reason);
    });
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    try {
        // 初始化各种功能
        initSmoothScroll();
        initScrollAnimations();
        initMobileOptimizations();
        handleErrors();
        
        console.log('柠檬衣橱官网初始化完成');
    } catch (error) {
        console.error('初始化失败:', error);
    }
});

// 页面完全加载后的优化
window.addEventListener('load', function() {
    // 预加载关键资源
    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    preloadLinks.forEach(link => {
        if (link.href) {
            const img = new Image();
            img.src = link.href;
        }
    });
});
