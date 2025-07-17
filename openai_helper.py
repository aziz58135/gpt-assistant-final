import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("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")

def generate_email(subject, body):
    prompt = f"اكتب لي إيميل رسمي بعنوان: {subject}\nمحتوى الإيميل: {body}"
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content
