/**
 * Torrema AI Engine v2.0
 * محرك الذكاء الاصطناعي الخاص بمنصة تورريما الفاخرة
 */

// ذاكرة المحادثة المستمرة
let conversationHistory = [
    { 
        role: "system", 
        content: "أنت المساعد والذكاء الاصطناعي الخبير المدمج داخل منصة Torrema الفاخرة. تستطيع الإجابة على كل الأسئلة في شتى المجالات (برمجة، تصميم، تقنية، ثقافة، معلومات عامة، نقاشات) بدقة بالغة. تجيب دائماً باللغة العربية الفصحى بأسلوب راقٍ، دقيق، ومنظم." 
    }
];

// دالة تنسيق النصوص والأكواد البرمجية بشكل عصري
function formatBotResponse(text) {
    // تحويل الأكواد البرمجية المحصورة بين ``` إلى صناديق أكواد منسقة
    let formatted = text.replace(/
```([\s\S]*?)```/g, function(match, code) {
        return `<pre style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; direction: ltr; text-align: left; overflow-x: auto; font-family: monospace; margin: 10px 0; color: #00ffff; font-size: 14px;"><code>${code.trim()}</code></pre>`;
    });
    
    // تحويل الأسطر الجديدة إلى وسوم بريك لتنظيم الفقرات
    return formatted.replace(/\n/g, '<br>');
}

// دالة إرسال الرسالة ومعالجتها
async function sendChatMessage() {
    const inputField = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');
    const messageText = inputField.value.trim();

    if (!messageText) return;

    // 1. إضافة رسالة المستخدم إلى الواجهة
    const userWrapper = document.createElement('div');
    userWrapper.className = 'msg-wrapper user-msg';
    userWrapper.innerHTML = `<div class="msg-bubble">${messageText}</div>`;
    chatBody.appendChild(userWrapper);

    // تنظيف الحقل وتمرير الشاشة لأسفل
    inputField.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // 2. حفظ الرسالة في ذاكرة النظام
    conversationHistory.push({ role: "user", content: messageText });

    // 3. إضافة فقاعة الانتظار والتحميل الفاخرة
    const botWrapper = document.createElement('div');
    botWrapper.className = 'msg-wrapper bot-msg';
    botWrapper.innerHTML = `
        <div class="msg-bubble" id="loading-bubble" style="color: var(--secondary);">
            <span class="ai-loading-dots">جاري التفكير ومعالجة طلبك</span>
        </div>
    `;
    chatBody.appendChild(botWrapper);
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
        // 4. الاتصال المباشر بالمحرك السحابي للذكاء الاصطناعي
        const response = await fetch("[https://openrouter.ai/api/v1/chat/completions](https://openrouter.ai/api/v1/chat/completions)", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "google/gemini-2.0-flash-exp:free",
                messages: conversationHistory,
                temperature: 0.7 // توازن مثالي بين الإبداع والدقة للإجابة على كل شيء
            })
        });

        const data = await response.json();
        const botReply = data.choices[0].message.content;

        // 5. تنسيق النص وعرض الرد النهائي وحفظه بالذاكرة
        const finalBubble = botWrapper.querySelector('.msg-bubble');
        finalBubble.removeAttribute('id');
        finalBubble.style.color = '#f1f5f9';
        finalBubble.innerHTML = formatBotResponse(botReply);
        
        conversationHistory.push({ role: "assistant", content: botReply });

    } catch (error) {
        console.error("AI Error:", error);
        botWrapper.querySelector('.msg-bubble').textContent = 'عذراً، واجهت الأنظمة صعوبة في الاتصال الفوري. يرجى التحقق من شبكة الإنترنت.';
    }

    // النزول التلقائي لأسفل المحادثة بعد اكتمال الرد
    chatBody.scrollTop = chatBody.scrollHeight;
}

// ربط مستمع الأحداث لتفعيل الإرسال عند الضغط على Enter في حقل الكتابة
document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById('chat-input');
    if (inputElement) {
        inputElement.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }
});
