        // 钢琴键交互效果
        const keys = document.querySelectorAll('.key');
        
        function playKey(key) {
            key.classList.add('piano-play');
            setTimeout(() => {
                key.classList.remove('piano-play');
            }, 500);
        }
        
        keys.forEach(key => {
            key.addEventListener('click', () => playKey(key));
        });
        
        // 自动播放钢琴键效果
        function autoPlayKeys() {
            keys.forEach((key, index) => {
                setTimeout(() => {
                    playKey(key);
                }, index * 200);
            });
        }
        
        // 页面加载时播放一次
        window.addEventListener('load', autoPlayKeys);
        
        // 每10秒自动播放一次
        setInterval(autoPlayKeys, 5000);
        
        // 导航栏滚动效果
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            }
        });