# GPT Assistant Final (Flask API)

### ✅ الوظيفة:
مشروع Python Flask API يربط OpenAI GPT مع Google APIs (Gmail + Calendar).

---

## 📂 الملفات:
- `app.py`: سيرفر Flask بسيط
- `google_auth.py`: ربط Google OAuth
- `openai_helper.py`: ربط OpenAI GPT
- `requirements.txt`: مكتبات المشروع
- `.env.example`: ملفات الأسرار

---

## 🚀 طريقة التشغيل محليًا:
1. انسخ `.env.example` لـ `.env` واضف بياناتك:
    - OpenAI API Key
    - Google Client ID & Secret
    - Google Refresh Token

2. حمل المتطلبات:
```bash
pip install -r requirements.txt
