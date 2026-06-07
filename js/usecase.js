const translations = {
  en: {
    cta_main_title: "From Data Collection to Automation,<br>All Core Features at a Glance",
    cta_main_desc: "Explore the core infrastructure built to automate, unify, and scale your customer data stack.",
    get_started: "Start Free Trial",
    contact_sales: "Contact Sales",
    feat_title: "How FinTech Pioneer \"Nova\" Boosted<br>Retention by 40% with Veltrix",
    feat_desc: "Nova faced declining customer satisfaction due to bottlenecks in real-time data processing. By integrating Veltrix's high-performance analytics engine and rebuilding their data pipeline, they were able to instantly identify user behavior and deliver personalized services. As a result, customer retention improved dramatically.",
    read_case: "Read Case Study →",
    stat_conversion_title: "Conversion Lift",
    stat_saved_title: "Saved Weekly",
    stat_roi_title: "ROI Within 1yr",
    mini_title1: "Optimizing Global Checkout Flow for Scale",
    mini_title2: "Securing Large-Scale Transaction Data",
    mini_title3: "Automating Infrastructure at Enterprise Scale",
    view_details: "View Details →"
  },
  ko: {
    cta_main_title: "데이터 수집부터 자동화까지, 모든 핵심 기능을 한눈에",
    cta_main_desc: "고객 데이터 스택을 자동화하고 통합하며 확장하기 위해 구축된 핵심 인프라를 살펴보세요.",
    get_started: "무료 체험 시작",
    contact_sales: "영업 문의",
    feat_title: "FinTech 선두주자 \"Nova\"가 Veltrix로<br>고객 유지율을 40% 높인 방법",
    feat_desc: "Nova는 실시간 데이터 처리 병목 현상으로 고객 만족도 저하를 겪었습니다. Veltrix의 고성능 분석 엔진을 도입하고 데이터 파이프라인을 재구축하여 사용자 행동을 즉각 파악하고 개인화된 서비스를 제공함으로써 고객 유지율을 극적으로 개선했습니다.",
    read_case: "사례 연구 보기 →",
    stat_conversion_title: "전환율 상승",
    stat_saved_title: "매주 절약되는 시간",
    stat_roi_title: "1년 이내 ROI 달성",
    mini_title1: "글로벌 결제 흐름 최적화 및 확장",
    mini_title2: "대규모 거래 데이터 보안 강화",
    mini_title3: "엔터프라이즈 규모의 인프라 자동화",
    view_details: "자세히 보기 →"
  },
  ja: {
    cta_main_title: "データ収集から自動化まで、すべてのコア機能を一目で",
    cta_main_desc: "顧客データスタックを自動化、統合、拡張するために構築されたコアインフラストラクチャをご覧ください。",
    get_started: "無料トライアル",
    contact_sales: "お問い合わせ",
    feat_title: "FinTechのパイオニア「Nova」がVeltrixで<br>継続率を40%向上させた方法",
    feat_desc: "Novaはリアルタイムデータ処理のボトルネックにより顧客満足度の低下に直面していました。Veltrixの高性能分析エンジンを統合し、データパイプラインを再構築することで、ユーザー行動を即座に特定し、パーソナライズされたサービスを提供。その結果、顧客維持率は劇的に改善しました。",
    read_case: "事例を読む →",
    stat_conversion_title: "コンバージョン率向上",
    stat_saved_title: "毎週の削減時間",
    stat_roi_title: "1年以内のROI",
    mini_title1: "グローバルチェックアウトフローの最適化",
    mini_title2: "大規模トランザクションデータの保護",
    mini_title3: "エンタープライズ規模のインフラ自動化",
    view_details: "詳細を見る →"
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