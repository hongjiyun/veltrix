const translations = {
  en: {

pricing_title: "Pricing For Growing Businesses",
    pricing_desc: "Choose the perfect tier to accelerate your enterprise data workflows with<br>Veltrix's institutional-grade infrastructure.",

    plansTitle: "Plans that scale with you",
    plansDesc: "Choose the perfect plan for your business",
    per_month: "/mo",
    get_started: "Get Started",
    starter_events: "10,000 Monthly Events",
    basic_dashboards: "Basic Dashboards",
    core_integrations: "Core Integrations",
    email_support: "Email Support",
    growth_title: "Growth",
    growth_events: "20,000 Monthly Events",
    ai_insights: "AI Predictive Insights",
    advanced_workflows: "Advanced Multi-step Workflows",
    unlimited_integrations: "Unlimited Integrations",
    priority_support: "Priority Chat Support",
  
    enterprise_title: "Enterprise",
    enterprise_events: "1,000,000 Monthly Events",
    enterprise_security: "Enterprise Security",
    custom_pipelines: "Custom Data Pipelines",
    access_control: "Fine-grained Access Control",
    dedicated_manager: "Dedicated Success Manager",
      cta_title: "Ready to grow faster?",
    cta_description: "Start with a 7-day free trial.<br>Upgrade, downgrade, or cancel anytime after your free trial.",
    btn_trial: "Start Free Trial",
    btn_contact: "Contact Sales"
  },
   ko: {

   pricing_title: "성장하는 기업을 위한 요금제",
    pricing_desc: "Veltrix의 기업용 인프라를 통해 데이터 워크플로우를 <br>가속화할 최적의 요금제를 선택하세요.",


     plansTitle: "비즈니스와 함께 성장하는 요금제",
    plansDesc: "비즈니스에 적합한 플랜을 선택하세요.",
    per_month: "/월",
    get_started: "시작하기",
    // Starter
    starter_events: "월간 이벤트 10,000건",
    basic_dashboards: "기본 대시보드",
    core_integrations: "핵심 연동 기능",
    email_support: "이메일 지원",
    // Growth
    growth_events: "월간 이벤트 20,000건",
    ai_insights: "AI 예측 인사이트",
    advanced_workflows: "고급 다단계 워크플로우",
    unlimited_integrations: "무제한 연동",
    priority_support: "우선 순위 채팅 지원",
    // Enterprise
    enterprise_title: "엔터프라이즈",
    enterprise_events: "월간 이벤트 1,000,000건",
    enterprise_security: "기업급 보안 보장",
    custom_pipelines: "맞춤형 데이터 파이프라인",
    access_control: "정밀한 접근 권한 제어",
    dedicated_manager: "전담 성공 매니저 배정",

    cta_title: "더 빠르게 성장할 준비가 되셨나요?",
    cta_description: "7일 무료 체험을 시작하세요.<br>무료 체험 후 언제든지 업그레이드, 다운그레이드 또는 취소가 가능합니다.",
    btn_trial: "무료 체험 시작",
    btn_contact: "영업 문의"
   },
ja: {
   pricing_title: "成長する企業向けプラン",
    pricing_desc: "Veltrixのエンタープライズグレードなインフラを活用し、<br>データワークフローを加速させる最適なプランをお選びください。",


    plansTitle: "成長に合わせた料金プラン",
    plansDesc: "最適なプランを選択してください。",
    per_month: "/月",
    get_started: "始める",
    // Starter
    starter_events: "月間イベント 10,000件",
    basic_dashboards: "基本ダッシュボード",
    core_integrations: "コアインテグレーション",
    email_support: "メールサポート",
    // Growth
    growth_events: "月間イベント 20,000件",
    ai_insights: "AI予測インサイト",
    advanced_workflows: "高度なマルチステップワークフロー",
    unlimited_integrations: " 無制限インテグレーション",
    priority_support: "優先チャットサポート",
    // Enterprise
    enterprise_events: "月間イベント 1,000,000件",
    enterprise_security: "エンタープライズセキュリティ",
    custom_pipelines: "カスタムデータパイプライン",
    access_control: "きめ細かなアクセス制御",
    dedicated_manager: "専任サクセスマネージャー",

    cta_title: "より速く成長する準備はできていますか？",
    cta_description: "7日間の無料トライアルから始めましょう。<br>トライアル期間終了後は、いつでもアップグレード、ダウングレード、キャンセルが可能です。",
    btn_trial: "無料トライアルを開始",
    btn_contact: "営業にお問い合わせ"

  
  }
};






document.getElementById('pricing_checkbox').addEventListener('change', function() {
    const isYearly = this.checked;
    
    document.getElementById('label_monthly').classList.toggle('active', !isYearly);
    document.getElementById('label_yearly').classList.toggle('active', isYearly);
    
    const originalElements = document.querySelectorAll('.original_price');
    const priceElements = document.querySelectorAll('.price_num');
    const periodElements = document.querySelectorAll('.price_period');
    
    const monthlyPrices = [49, 499, 1999];
    
    priceElements.forEach((el, index) => {
        if (isYearly) {
            const fullPrice = monthlyPrices[index] * 12;
            const discountedPrice = Math.floor(fullPrice * 0.8);
            
            originalElements[index].textContent = fullPrice.toLocaleString() + " ";
            originalElements[index].style.textDecoration = "line-through";
            originalElements[index].style.opacity = "0.5";
            originalElements[index].style.marginRight = "8px";
            
            el.textContent = discountedPrice.toLocaleString();
            periodElements[index].textContent = 'yr';
        } else {
            originalElements[index].textContent = "";
            originalElements[index].style.textDecoration = "none";
            
            el.textContent = monthlyPrices[index].toLocaleString();
            periodElements[index].textContent = 'mo';
        }
    });
});


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