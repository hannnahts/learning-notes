// 1. 定义图片数组（替换为你的图片路径）
const images = [
  'image/xyzlight.jpg',
  'image/xyzdark.jpg'
];

// 2. 获取图片元素
const imgElement = document.getElementById('switchImage');

// 3. 初始化当前图片索引
let currentIndex = 0;

// 4. 添加点击事件
imgElement.addEventListener('click', function() {
  // 切换下一张（循环）
  currentIndex = (currentIndex + 1) % images.length;
  
  // 添加淡出动画类
  this.classList.add('fade-out');
  
  // 等待过渡结束后切换图片
  setTimeout(() => {
    this.src = images[currentIndex];
    this.classList.remove('fade-out');
  }, 300); // 时间需与 CSS 过渡时间一致
});