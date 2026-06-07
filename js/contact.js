const translations = {
  en: {
    contact_title: "Let's Scale Your Business Together",
    contact_desc: "Have questions about our plans or features? Contact our team to find the perfect solution for your growth.",
    info_email_title: "Email",
    info_chat_title: "Live Chat",
    info_chat_desc: "Available Mon-Fri, 9am-6pm",
    info_sales_title: "Talk to Sales",
    info_sales_desc: "Enterprise & custom plans",
    form_title: "Send us a message",
    form_first_name: "FIRST NAME",
    form_last_name: "LAST NAME",
    form_email: "WORK EMAIL",
    form_company: "COMPANY",
    form_message: "MESSAGE",
    form_placeholder: "How can we help you?",
    form_submit: "Send Message"
  },
  ko: {
    contact_title: "비즈니스를 함께 확장하세요",
    contact_desc: "플랜이나 기능에 대해 궁금한 점이 있으신가요? 팀에 문의하여 성장을 위한 완벽한 솔루션을 찾아보세요.",
    info_email_title: "이메일",
    info_chat_title: "라이브 채팅",
    info_chat_desc: "운영 시간: 월-금, 오전 9시-오후 6시",
    info_sales_title: "영업 문의",
    info_sales_desc: "엔터프라이즈 및 맞춤형 플랜",
    form_title: "메시지 보내기",
    form_first_name: "이름",
    form_last_name: "성",
    form_email: "업무용 이메일",
    form_company: "회사명",
    form_message: "메시지",
    form_placeholder: "어떻게 도와드릴까요?",
    form_submit: "메시지 전송"
  },
  ja: {
    contact_title: "ビジネスを共に成長させましょう",
    contact_desc: "プランや機能についてご質問がありますか？成長に最適なソリューションを見つけるため、お気軽にお問い合わせください。",
    info_email_title: "メール",
    info_chat_title: "ライブチャット",
    info_chat_desc: "受付時間：月〜金 9:00 - 18:00",
    info_sales_title: "営業へのお問い合わせ",
    info_sales_desc: "エンタープライズおよびカスタムプラン",
    form_title: "メッセージを送信",
    form_first_name: "名",
    form_last_name: "姓",
    form_email: "ビジネスメール",
    form_company: "会社名",
    form_message: "メッセージ",
    form_placeholder: "どのようなご用件でしょうか？",
    form_submit: "メッセージを送信"
  }
};


function setLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (t[key]) {
     el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    setLanguage(btn.dataset.lang);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang") || "en");
});