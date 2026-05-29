<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Torrema | الفخامة والذكاء العصري</title>

<style>
:root {
  --primary-gradient: linear-gradient(45deg, #ff00cc, #3333ff, #00ffff, #ff00cc);
  --secondary: #94a3b8;
  --bg-dark: #0a0a0c;
  --card-bg: rgba(25, 25, 28, 0.6);
  --text-muted: #64748b;
  --border-color: rgba(255, 255, 255, 0.1);
  --white: #ffffff;
}

*{
  margin: 0; padding: 0; box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  scroll-behavior: smooth;
}

body{ background: var(--bg-dark); color: white; overflow-x: hidden; }

body::before{
  content: ""; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 0, 204, 0.05), transparent 70%), radial-gradient(circle, rgba(51, 51, 255, 0.05) 1px, transparent 1px);
  background-size: 100% 100%, 40px 40px; z-index: -1;
}

nav{
  position: fixed; top: 0; width: 100%; display: flex; justify-content: space-between; align-items: center;
  padding: 20px 8%; background: rgba(10, 10, 12, 0.8); backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-color); z-index: 1000;
}

nav h1{
  font-size: 28px; font-weight: 800; background: var(--primary-gradient); background-size: 300%;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: gradientShift 5s infinite linear;
  letter-spacing: 1px;
}

.nav-links { display: flex; gap: 25px; }
nav a{ color: var(--secondary); text-decoration: none; font-size: 16px; font-weight: 500; transition: 0.3s ease; position: relative; }
nav a::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -5px; right: 0; background: var(--white); transition: 0.3s ease; }
nav a:hover::after { width: 100%; }
nav a:hover{ color: var(--white); }

.menu-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
.menu-toggle span { width: 25px; height: 3px; background: var(--white); border-radius: 2px; transition: 0.3s; }

.hero{ height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; padding: 0 20px; }
.hero-content { max-width: 800px; opacity: 0; animation: fadeInUp 1s ease-out forwards; animation-delay: 0.5s; }
.hero h1{ font-size: clamp(40px, 8vw, 75px); font-weight: 800; color: var(--white); text-shadow: 0 0 30px rgba(255, 255, 255, 0.2); margin-bottom: 20px; height: 90px; }
.hero p{ color: var(--secondary); font-size: clamp(16px, 3vw, 20px); margin-bottom: 35px; line-height: 1.6; }

.btn-cyber {
  padding: 14px 35px; background: var(--primary-gradient); background-size: 300%; border: none;
  border-radius: 50px; color: var(--white); font-size: 16px; font-weight: 700; cursor: pointer;
  transition: all 0.3s ease, background-position 0.5s ease; box-shadow: 0 4px 20px rgba(255, 0, 204, 0.3);
  animation: neonPulse 2s infinite, gradientShift 5s infinite linear;
}
.btn-cyber:hover{ transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 30px rgba(0, 255, 255, 0.5); }

section{ padding: 100px 8% 60px; }
section h2 { font-size: 36px; text-align: center; margin-bottom: 50px; position: relative; color: var(--white); }
section h2::after { content: ''; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 40px; height: 2px; background: var(--primary-gradient); background-size: 300%; animation: gradientShift 5s infinite linear; }

/* ---- تصميم واجهة الشات العصري المدمج ---- */
.chat-section { max-width: 900px; margin: 0 auto; }
.chat-window {
  background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 24px;
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  display: flex; flex-direction: column; height: 600px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.chat-header { padding: 20px; background: rgba(255, 255, 255, 0.03); border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 12px; }
.status-dot { width: 8px; height: 8px; background-color: #00ffff; border-radius: 50%; box-shadow: 0 0 10px #00ffff; animation: blink 1.5s infinite; }
.chat-body { flex: 1; overflow-y: auto; padding: 25px; display: flex; flex-direction: column; gap: 20px; }
.msg-wrapper { display: flex; width: 100%; }
.msg-wrapper.user-msg { justify-content: flex-start; }
.msg-wrapper.bot-msg { justify-content: flex-end; }
.msg-bubble { max-width: 80%; padding: 14px 20px; border-radius: 18px; font-size: 15px; line-height: 1.6; position: relative; word-wrap: break-word; }
.user-msg .msg-bubble { background: linear-gradient(135deg, #3333ff, #2563eb); color: var(--white); border-bottom-right-radius: 4px; box-shadow: 0 4px 15px rgba(51, 51, 255, 0.2); }
.bot-msg .msg-bubble { background: rgba(255, 255, 255, 0.05); color: #f1f5f9; border-bottom-left-radius: 4px; border: 1px solid var(--border-color); }
.chat-footer { padding: 20px; background: rgba(0, 0, 0, 0.2); border-top: 1px solid var(--border-color); display: flex; gap: 15px; align-items: center; }
.chat-footer textarea { flex: 1; background: rgba(20, 20, 25, 0.8); border: 1px solid var(--border-color); border-radius: 14px; padding: 14px 20px; color: white; font-size: 15px; outline: none; resize: none; height: 50px; transition: 0.3s; }
.chat-footer textarea:focus { border-color: rgba(0, 255, 255, 0.5); box-shadow: 0 0 15px rgba(0, 255, 255, 0.1); }
.btn-send { padding: 0 25px; height: 50px; border-radius: 14px; }

.ai-loading-dots::after { content: '...'; display: inline-block; animation: dotPulse 1.5s infinite steps(4, start); width: 0px; margin-right: 5px; letter-spacing: 2px; }

.grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 20px; }
.card-wrapper { text-decoration: none; color: inherit; display: block; }
.card{ background: var(--card-bg); border: 1px solid var(--border-color); padding: 40px 30px; border-radius: 16px; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); transition: all 0.3s ease; text-align: center; opacity: 0; animation: fadeInUp 1s ease-out forwards; }
.grid-container .card-wrapper:nth-child(1) .card { animation-delay: 0.2s; }
.grid-container .card-wrapper:nth-child(2) .card { animation-delay: 0.4s; }
.grid-container .card-wrapper:nth-child(3) .card { animation-delay: 0.6s; }
.card h3 { color: var(--white); font-size: 20px; font-weight: 600; }
.card:hover{ transform: translateY(-8px); border-color: rgba(255, 255, 255, 0.4); background: rgba(30, 30, 35, 0.8); box-shadow: 0 10px 30px rgba(51, 51, 255, 0.2); }

.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.gallery-item { height: 250px; background: linear-gradient(135deg, #16161a, #232329); border: 1px solid var(--border-color); display: flex; justify-content: center; align-items: center; border-radius: 15px; color: var(--secondary); cursor: pointer; transition: 0.3s; }
.gallery-item:hover { border-color: var(--white); color: var(--white); box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2); }

.contact-container { max-width: 600px; margin: 0 auto; }
.form-group { margin-bottom: 20px; }
.form-group input, .form-group textarea { width: 100%; padding: 16px 20px; background: rgba(20, 20, 25, 0.8); border: 1px solid var(--border-color); border-radius: 12px; color: white; font-size: 15px; outline: none; transition: 0.3s ease; }
.form-group input:focus, .form-group textarea:focus { border-color: var(--white); }
.form-group textarea { height: 150px; resize: vertical; }

#topBtn{ position: fixed; bottom: 30px; left: 30px; width: 50px; height: 50px; background: var(--primary-gradient); background-size: 300%; border: none; border-radius: 50%; color: var(--white); font-size: 22px; font-weight: bold; cursor: pointer; display: none; justify-content: center; align-items: center; box-shadow: 0 4px 15px rgba(255, 0, 204, 0.4); transition: 0.3s; z-index: 99; animation: gradientShift 5s infinite linear; }
#topBtn:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0, 255, 255, 0.6); }

@media (max-width: 768px) {
  nav { padding: 15px 5%; }
  .menu-toggle { display: flex; }
  .nav-links { position: absolute; top: 70px; left: 0; width: 100%; height: 0; background: rgba(10, 10, 12, 0.98); backdrop-filter: blur(15px); flex-direction: column; align-items: center; justify-content: center; overflow: hidden; transition: 0.4s ease; border-bottom: 0px solid var(--border-color); }
  .nav-links.active { height: 250px; border-bottom-width: 1px; }
  section { padding: 80px 5% 40px; }
}

@keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes neonPulse { 0% { box-shadow: 0 4px 20px rgba(255, 0, 204, 0.3); } 50% { box-shadow: 0 4px 30px rgba(0, 255, 255, 0.6), 0 0 10px rgba(255, 0, 204, 0.4); } 100% { box-shadow: 0 4px 20px rgba(255, 0, 204, 0.3); } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes dotPulse { 0% { width: 0px; } 35% { width: 4px; } 70% { width: 8px; } 100% { width: 12px; } }
</style>
</head>

<body>

<nav>
  <h1>Torrema</h1>
  <div class="menu-toggle" id="mobile-menu">
    <span></span><span></span><span></span>
  </div>
  <div class="nav-links" id="nav-links">
    <a href="#home">الرئيسية</a>
    <a href="#ai-assistant">المساعد الذكي</a>
    <a href="#services">الخدمات</a>
    <a href="#gallery">المعرض</a>
    <a href="#contact">التواصل</a>
  </div>
</nav>

<section class="hero" id="home">
  <div class="hero-content">
    <h1 id="title"></h1>
    <p>بساطة متناهية تعكس دقة العمل. نصنع لك تجارب رقمية فاخرة تعتمد على الأداء العالي والتصميم المينيماليست النظيف.</p>
    <a href="#ai-assistant" class="btn-cyber" style="text-decoration:none; display:inline-block;">تحدث مع المساعد الشامل</a>
  </div>
</section>

<!-- قسم المساعد الذكي المدمج الفاخر -->
<section id="ai-assistant" class="chat-section">
  <h2>مساعد Torrema المطور</h2>
  <div class="chat-window">
    <div class="chat-header">
      <div class="status-dot"></div>
      <div style="font-size: 16px; font-weight: 600;">مستشار الأنظمة الفوري والشامل</div>
    </div>
    
    <div class="chat-body" id="chat-body">
      <div class="msg-wrapper bot-msg">
        <div class="msg-bubble">مرحباً بك في فضاء Torrema! أنا مستشارك الذكي المحدث، اسألني في البرمجة، كتابة المحتوى، النقاش العام، أو أي شيء تريده وسأجيبك فوراً.</div>
      </div>
    </div>
    
    <div class="chat-footer">
      <textarea id="chat-input" placeholder="اسألني عن أي شيء..."></textarea>
      <button onclick="sendChatMessage()" class="btn-cyber btn-send">إرسال</button>
    </div>
  </div>
</section>

<section id="services">
  <h2>خدماتنا</h2>
  <div class="grid-container">
    <a href="web.html" class="card-wrapper">
      <div class="card">
        <div style="font-size:35px; margin-bottom:15px;">🌐</div>
        <h3>تصميم مواقع حديثة</h3>
        <p style="font-size:14px; color:var(--secondary); font-weight:400; margin-top:10px;">واجهات متجاوبة ومتوافقة مع جميع الشاشات المتطورة.</p>
      </div>
    </a>
    <a href="dev.html" class="card-wrapper">
      <div class="card">
        <div style="font-size:35px; margin-bottom:15px;">💻</div>
        <h3>برمجة احترافية</h3>
        <p style="font-size:14px; color:var(--secondary); font-weight:400; margin-top:10px;">بناء برمجيات سريعة، مستقرة، وآمنة تماماً.</p>
      </div>
    </a>
    <a href="uiux.html" class="card-wrapper">
      <div class="card">
        <div style="font-size:35px; margin-bottom:15px;">✨</div>
        <h3>تجربة مستخدم UI/UX</h3>
        <p style="font-size:14px; color:var(--secondary); font-weight:400; margin-top:10px;">هندسة رحلة مستخدم سلسة خالية من التعقيد البصري.</p>
      </div>
    </a>
  </div>
</section>

<section id="gallery">
  <h2>معرض الأعمال</h2>
  <div class="gallery-grid">
    <div class="gallery-item">لوحة تحكم مونوكروم [قريباً]</div>
    <div class="gallery-item">موقع أعمال فاخر [قريباً]</div>
    <div class="gallery-item">تطبيق الهوية البصرية [قريباً]</div>
  </div>
</section>

<section id="contact">
  <h2>تواصل معنا حقيقياً</h2>
  <div class="card contact-container">
    <form action="[https://formspree.io/f/YOUR_ENDPOINT_HERE](https://formspree.io/f/YOUR_ENDPOINT_HERE)" method="POST">
      <div class="form-group">
        <input type="text" name="name" placeholder="الاسم الكريم" required>
      </div>
      <div class="form-group">
        <input type="email" name="email" placeholder="البريد الإلكتروني" required>
      </div>
      <div class="form-group">
        <textarea name="message" placeholder="تفاصيل مشروعك أو رسالتك..." required></textarea>
      </div>
      <button type="submit" class="btn-cyber" style="width: 100%;">إرسال الرسالة فوراً</button>
    </form>
  </div>
</section>

<button id="topBtn" onclick="scrollTopPage()">↑</button>

<!-- استدعاء ملف الذكاء الاصطناعي المستقل المحدث -->
<script src="ai.js"></script>

<script>
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => { navLinks.classList.toggle('active'); });
document.querySelectorAll('.nav-links a').forEach(link => { link.addEventListener('click', () => { navLinks.classList.remove('active'); }); });

window.onscroll = function(){
  let btn = document.getElementById("topBtn");
  if(document.documentElement.scrollTop > 400){ btn.style.display = "flex"; } else { btn.style.display = "none"; }
};
function scrollTopPage(){ window.scrollTo({top:0, behavior:"smooth"}); }

let text = "Torrema"; let i = 0; let titleElement = document.getElementById("title");
function typing(){
  if(i < text.length){
    titleElement.innerHTML = text.substring(0, i + 1) + '<span style="color:var(--white); animation: blink 0.7s infinite;">|</span>';
    i++; setTimeout(typing, 200);
  } else { titleElement.innerHTML = text; }
}
window.onload = typing;
</script>
</body>
</html>
