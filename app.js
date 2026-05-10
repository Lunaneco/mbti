const assets = {
  titleBg: "./titlemoziNG.png",
  quizBg: "./questionframemoziNG2.png",
  analyzingBg: "./bunsekityumoziNG.png",
  cardRevealVideo: "./カード演出.mp4",
  entpCard: "./mbtishindan.png",
  fallbackCard: "./mbtishindancardura.png",
  guideFull: "./IMG-10.png",
  guideFaces: "./IMG-09.png",
  speechBubbles: "./IMG-11.png",
  frame: "./freamasset.png",
  icons: "./iconassets.png",
  lineSmall: "./line1.png",
  lineDecor: "./line2.png",
  star: "./starasset.png",
  titleAsset1: "./titleasset1.png",
  titleAsset2: "./titleasset2.png",
  titleAsset3: "./titleasset3.png",
  titleBotton: "./titlebotton.png",
  questionAsset1: "./questionframe1.png",
  questionAsset2: "./questionframe2.png",
  questionAsset3: "./questionframe3.png",
  questionAsset4: "./questionframe4.png",
};

const resultCardImages = {
  ENTP: assets.entpCard,
};

const questions = [
  {
    id: "Q01",
    axis: "EI",
    text: "夜の魔導図書館で難問に出会った。あなたはまずどうする？",
    options: [
      { key: "A", label: "静かな席で一人、仮説を深く編む", letter: "I" },
      { key: "B", label: "仲間を呼び、思いつきをぶつけ合う", letter: "E" },
    ],
  },
  {
    id: "Q02",
    axis: "SN",
    text: "古い星図に欠けた印がある。頼りにするのは？",
    options: [
      { key: "A", label: "紙質、年代、既存の記録など確かな手がかり", letter: "S" },
      { key: "B", label: "印の配置から浮かぶ未来のパターン", letter: "N" },
    ],
  },
  {
    id: "Q03",
    axis: "TF",
    text: "チームの計画が感情的な理由で崩れそう。あなたは？",
    options: [
      { key: "A", label: "まず原因と優先順位を整理する", letter: "T" },
      { key: "B", label: "まず全員の不安や本音を受け止める", letter: "F" },
    ],
  },
  {
    id: "Q04",
    axis: "JP",
    text: "明日の儀式までに準備が必要。あなたの動き方は？",
    options: [
      { key: "A", label: "手順を決め、必要な道具を先に揃える", letter: "J" },
      { key: "B", label: "その場の流れを見て、最適な形に変える", letter: "P" },
    ],
  },
  {
    id: "Q05",
    axis: "EI",
    text: "大広間の舞踏会に招かれた。あなたが輝く瞬間は？",
    options: [
      { key: "A", label: "信頼できる少人数と濃い話をしている時", letter: "I" },
      { key: "B", label: "初対面の人とも会話が広がっていく時", letter: "E" },
    ],
  },
  {
    id: "Q06",
    axis: "SN",
    text: "新しい魔法装置を受け取った。最初に見るのは？",
    options: [
      { key: "A", label: "使い方、部品、注意書き、実際の動作", letter: "S" },
      { key: "B", label: "何に応用できるか、どんな可能性があるか", letter: "N" },
    ],
  },
  {
    id: "Q07",
    axis: "TF",
    text: "親友が危険な挑戦をしたいと言う。あなたは？",
    options: [
      { key: "A", label: "成功率とリスクを正直に伝える", letter: "T" },
      { key: "B", label: "その挑戦に込めた気持ちを聞く", letter: "F" },
    ],
  },
  {
    id: "Q08",
    axis: "JP",
    text: "旅の行程表を作るなら？",
    options: [
      { key: "A", label: "時間、宿、目的地を決めて安心したい", letter: "J" },
      { key: "B", label: "余白を残し、偶然の出会いを楽しみたい", letter: "P" },
    ],
  },
  {
    id: "Q09",
    axis: "EI",
    text: "長い任務を終えた夜、回復する場所は？",
    options: [
      { key: "A", label: "誰にも邪魔されない自室や屋上", letter: "I" },
      { key: "B", label: "誰かと語れる酒場や談話室", letter: "E" },
    ],
  },
  {
    id: "Q10",
    axis: "SN",
    text: "謎の予言を解く時、あなたの強みは？",
    options: [
      { key: "A", label: "文章の矛盾や具体的な証拠を拾う", letter: "S" },
      { key: "B", label: "象徴の意味や隠れたテーマを読む", letter: "N" },
    ],
  },
  {
    id: "Q11",
    axis: "TF",
    text: "公平な決断が必要になった。重視するのは？",
    options: [
      { key: "A", label: "一貫した基準で判断すること", letter: "T" },
      { key: "B", label: "関係者への影響を丁寧に見ること", letter: "F" },
    ],
  },
  {
    id: "Q12",
    axis: "JP",
    text: "突然、予定外の流星雨が始まった。あなたは？",
    options: [
      { key: "A", label: "予定を組み替え、観測手順を整える", letter: "J" },
      { key: "B", label: "予定を手放し、今だけの兆しを追う", letter: "P" },
    ],
  },
  {
    id: "Q13",
    axis: "EI",
    text: "新しい研究会に入った初日。あなたは？",
    options: [
      { key: "A", label: "まず場の空気を観察し、必要な時に話す", letter: "I" },
      { key: "B", label: "自分から話しかけ、場を動かしてみる", letter: "E" },
    ],
  },
  {
    id: "Q14",
    axis: "SN",
    text: "魔導書の余白に未知の記号を見つけた。気になるのは？",
    options: [
      { key: "A", label: "どこで誰が書いたのか、由来と事実", letter: "S" },
      { key: "B", label: "それが示す概念や未来への接続", letter: "N" },
    ],
  },
  {
    id: "Q15",
    axis: "TF",
    text: "仲間内で意見が割れた。あなたの調停は？",
    options: [
      { key: "A", label: "論点を分け、最も合理的な案を選ぶ", letter: "T" },
      { key: "B", label: "それぞれが納得できる落とし所を探す", letter: "F" },
    ],
  },
  {
    id: "Q16",
    axis: "JP",
    text: "あなたの机の上はどちらに近い？",
    options: [
      { key: "A", label: "道具の場所が決まり、すぐ作業できる", letter: "J" },
      { key: "B", label: "途中の発想や素材が広がり、変化している", letter: "P" },
    ],
  },
];

const resultProfiles = {
  INTJ: {
    type: "INTJ",
    cardName: "星架",
    title: "星図の建築家",
    quote: "未来は待つものではない。設計して迎えに行く。",
    summary:
      "遠くの未来を見据え、複雑な物事を設計図に変えるタイプ。感情に流されるより、構造・戦略・長期的な勝ち筋を重視する。孤高に見えても、内側では理想の完成形を静かに燃やしている。",
    strengths: ["長期戦略", "本質を抜き出す力", "独自の美学"],
    cautions: ["結論を急ぎやすい", "共有が遅れることがある"],
    matches: ["ENFP", "ENTP"],
    advice: "完成図だけでなく、途中の星明かりも少し見せて。",
  },
  INTP: {
    type: "INTP",
    cardName: "碧理",
    title: "蒼き論理術師",
    quote: "謎は解かれるために、世界の奥へ隠れている。",
    summary:
      "世界の裏側にある法則を探すタイプ。疑問を放置できず、複雑な概念を分解し、自分なりの理論へ組み替える。興味が灯った瞬間の集中力は、星盤の奥まで届く。",
    strengths: ["分析力", "抽象思考", "独創的な仮説"],
    cautions: ["実行が後回しになりやすい", "感情の合図を見落とすことがある"],
    matches: ["ENTJ", "ENFJ"],
    advice: "その美しい仮説を、一度だけ地上に降ろしてみて。",
  },
  ENTJ: {
    type: "ENTJ",
    cardName: "王星",
    title: "王冠の指揮官",
    quote: "迷う時間があるなら、次の一手を置く。",
    summary:
      "目的を定め、人と資源を動かし、結果へ向かって進むタイプ。判断が早く、混乱した場でも方向を示せる。強い意志の裏には、もっと良くできるはずという高い基準がある。",
    strengths: ["決断力", "組織化", "目標達成"],
    cautions: ["速度が速すぎることがある", "弱さや迷いを切り捨てやすい"],
    matches: ["INTP", "INFP"],
    advice: "進軍の前に、仲間の呼吸も一度だけ聞いて。",
  },
  ENTP: {
    type: "ENTP",
    cardName: "月音子",
    title: "蒼星の発明家",
    quote: "常識なんて、最高の遊び道具。新しい未来？もちろん、私が発明するよ！",
    summary:
      "ひらめきと議論で世界を揺らすタイプ。常識を固定された壁ではなく、遊びながら壊せる仕掛けとして見る。新しい発想を生み、場に知的な火花を散らすムードメーカー。",
    strengths: ["発想力", "即興力", "議論と検証"],
    cautions: ["継続が苦手になりやすい", "相手の前提まで壊してしまうことがある"],
    matches: ["INTJ", "INFJ"],
    advice: "遊び心に、最後のひと結びだけ添えて。",
  },
  INFJ: {
    type: "INFJ",
    cardName: "深月",
    title: "静謐の予言者",
    quote: "まだ言葉になる前の願いを、私は聞いている。",
    summary:
      "人の奥にある願いや痛みに気づき、未来の可能性を静かに読むタイプ。表面の会話より、その背後にある意味を大切にする。少数の大切な人や理想に深く力を注ぐ。",
    strengths: ["洞察", "共感", "長期的なビジョン"],
    cautions: ["理想が高く自分を責めやすい", "抱え込みすぎる"],
    matches: ["ENTP", "ENFP"],
    advice: "すべてを救う前に、あなた自身の灯を守って。",
  },
  INFP: {
    type: "INFP",
    cardName: "夢璃",
    title: "夢晶の詩人",
    quote: "世界が硬すぎるなら、心の光で形を変えればいい。",
    summary:
      "自分だけの価値観と美しい理想を大切にするタイプ。外側の評価より、心が本当に震えるかどうかを信じる。やわらかく見えて、譲れない願いには驚くほど強い。",
    strengths: ["想像力", "誠実さ", "価値観への忠実さ"],
    cautions: ["理想と現実の差に傷つきやすい", "決断を先延ばしにしやすい"],
    matches: ["ENTJ", "ENFJ"],
    advice: "その夢は、守るだけでなく少しずつ使っていい。",
  },
  ENFJ: {
    type: "ENFJ",
    cardName: "暁灯",
    title: "暁光の導師",
    quote: "一人の光が灯れば、夜はもう夜だけではない。",
    summary:
      "人の可能性を見つけ、場を温めながら前へ導くタイプ。誰かの成長や喜びに強く反応し、自然と中心で声をかける。理想と現実の橋を、人との関係から作っていく。",
    strengths: ["人を励ます力", "場作り", "ビジョン共有"],
    cautions: ["自分の本音が遅れやすい", "背負いすぎることがある"],
    matches: ["INFP", "INTP"],
    advice: "導く手を伸ばす前に、自分の足元にも光を。",
  },
  ENFP: {
    type: "ENFP",
    cardName: "星那",
    title: "星屑の旅人",
    quote: "面白そう、その一言で扉は開く。",
    summary:
      "新しい可能性、人、物語へ飛び込むタイプ。好奇心が強く、場に自由な風を運ぶ。退屈な日常の中から面白い兆しを見つけ、周囲まで巻き込んでいく。",
    strengths: ["好奇心", "共感的な発想", "人を巻き込む明るさ"],
    cautions: ["完了が苦手になりやすい", "可能性が多すぎて選べなくなる"],
    matches: ["INTJ", "INFJ"],
    advice: "開いた扉のうち、一つだけ最後まで歩いてみて。",
  },
  ISTJ: {
    type: "ISTJ",
    cardName: "鐘真",
    title: "金時計の守護者",
    quote: "積み重ねた事実だけが、嵐の中で道標になる。",
    summary:
      "事実、手順、責任を大切にするタイプ。派手な言葉より、積み上げた実績で信頼を築く。混乱した状況でも、確かな記録と現実的な手段から道を整える。",
    strengths: ["継続力", "正確さ", "責任感"],
    cautions: ["変化に慎重になりすぎる", "自分にも他人にも厳しくなりやすい"],
    matches: ["ESFP", "ESTP"],
    advice: "守ってきた秩序の中に、新しい星を一つ置いて。",
  },
  ISFJ: {
    type: "ISFJ",
    cardName: "月守",
    title: "月灯の庇護者",
    quote: "小さな約束を守ることが、誰かの夜を照らす。",
    summary:
      "大切な人や場所を、細やかな気配りで守るタイプ。派手に目立つより、必要な時に確かに支える。過去の記憶や約束を大切にし、安心できる居場所を作る。",
    strengths: ["配慮", "記憶力", "安定した支援"],
    cautions: ["背負いすぎる", "安全を選びすぎることがある"],
    matches: ["ESFP", "ESTP"],
    advice: "誰かを守る月灯で、自分の夜も照らして。",
  },
  ESTJ: {
    type: "ESTJ",
    cardName: "燈令",
    title: "王立天文台長",
    quote: "秩序は冷たい鎖ではない。皆を前へ進める軌道だ。",
    summary:
      "目的達成のためにルール、役割、段取りを整えるタイプ。物事を現実的に進める力が強く、混乱した場でも何からやるかを示せる。信頼は行動と成果で築く。",
    strengths: ["実行管理", "責任ある判断", "仕組み化"],
    cautions: ["感情表現を後回しにする", "基準を周囲に強く求めやすい"],
    matches: ["ISFP", "ISTP"],
    advice: "正しい軌道にも、星が遊ぶ余白を残して。",
  },
  ESFJ: {
    type: "ESFJ",
    cardName: "花星",
    title: "星宴の調停者",
    quote: "人が集う場所には、必ず温度が生まれる。",
    summary:
      "人と人の間に生まれる空気を読み、あたたかな場を整えるタイプ。気配りが自然で、集団の安心感を大切にする。誰かの喜びが、自分の力にもなりやすい。",
    strengths: ["社交性", "調整力", "面倒見のよさ"],
    cautions: ["周囲の評価に揺れやすい", "本音を後回しにしやすい"],
    matches: ["ISFP", "ISTP"],
    advice: "みんなの星座を結ぶ時、自分の星も中心に入れて。",
  },
  ISTP: {
    type: "ISTP",
    cardName: "錬久",
    title: "機巧の錬成師",
    quote: "仕組みが見えれば、どんな扉も開け方がある。",
    summary:
      "仕組みを理解し、必要な時に的確に手を動かすタイプ。言葉で飾るより、実際に試して解決する。冷静で独立心があり、危機ほど観察力と対応力が光る。",
    strengths: ["実践的な問題解決", "観察力", "手を動かす分析"],
    cautions: ["感情の説明を省略しやすい", "細かい管理を窮屈に感じる"],
    matches: ["ESTJ", "ESFJ"],
    advice: "直した仕組みのそばで、誰が安心したかも見て。",
  },
  ISFP: {
    type: "ISFP",
    cardName: "硝月",
    title: "硝子月の芸術家",
    quote: "言葉にできない光ほど、形にする価値がある。",
    summary:
      "繊細な感性と自分らしさを大切にするタイプ。言葉より色、音、空気、手触りで世界を理解する。静かでも内側には強い美意識があり、自然体の魅力を放つ。",
    strengths: ["感性", "柔軟さ", "今この瞬間を味わう力"],
    cautions: ["対立や管理を避けすぎる", "才能を過小評価しやすい"],
    matches: ["ESTJ", "ESFJ"],
    advice: "あなたの静かな美しさは、隠さなくても壊れない。",
  },
  ESTP: {
    type: "ESTP",
    cardName: "雷雅",
    title: "流星の挑戦者",
    quote: "今ここで動ける者だけが、風向きを変えられる。",
    summary:
      "目の前のチャンスに素早く反応し、現場で流れを変えるタイプ。考えすぎる前に動き、体験から学ぶ。危機や勝負どころで、周囲を驚かせる大胆さを見せる。",
    strengths: ["行動力", "現場判断", "度胸"],
    cautions: ["長期的な影響を軽く見やすい", "刺激がないと飽きやすい"],
    matches: ["ISFJ", "ISTJ"],
    advice: "流星の速さに、帰る星座を一つ持って。",
  },
  ESFP: {
    type: "ESFP",
    cardName: "宝舞",
    title: "宝石舞踏の表現者",
    quote: "人生が舞台なら、退屈な幕は私が上げる。",
    summary:
      "場に華やぎと生命力をもたらすタイプ。人の反応を感じ取りながら、今この瞬間を楽しませる。感情表現が豊かで、周囲の空気を一気に明るくできる。",
    strengths: ["表現力", "場を明るくする力", "実体験から学ぶ力"],
    cautions: ["後回しが増えやすい", "一人で深く考える時間が不足しやすい"],
    matches: ["ISTJ", "ISFJ"],
    advice: "舞台の幕が下りた後、心の音も聞いてあげて。",
  },
};

const app = document.querySelector("#app");

const state = {
  screen: "result",
  currentIndex: 0,
  answers: Array(questions.length).fill(null),
  resultType: "ENTP",
  toastTimer: null,
  advanceTimer: null,
};

function setAssetVariables() {
  const root = document.documentElement;
  root.style.setProperty("--line-small", `url("${assets.lineSmall}")`);
  root.style.setProperty("--star", `url("${assets.star}")`);
  root.style.setProperty("--guide-full", `url("${assets.guideFull}")`);
  root.style.setProperty("--guide-faces", `url("${assets.guideFaces}")`);
  root.style.setProperty("--speech-bubbles", `url("${assets.speechBubbles}")`);
  root.style.setProperty("--fallback-card", `url("${assets.fallbackCard}")`);
  root.style.setProperty("--frame", `url("${assets.frame}")`);
  root.style.setProperty("--icons", `url("${assets.icons}")`);
  root.style.setProperty("--line-decor", `url("${assets.lineDecor}")`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  setAssetVariables();

  if (state.screen === "intro") renderIntro();
  if (state.screen === "quiz") renderQuiz();
  if (state.screen === "analyzing") renderAnalyzing();
  if (state.screen === "cardReveal") renderCardReveal();
  if (state.screen === "result") renderResult();
}

function stageTemplate(bg, content, extraClass = "") {
  return `
    <section class="app-shell ${extraClass}">
      <div class="stage">
        ${bg ? `<img class="screen-bg" src="${bg}" alt="" />` : ""}
        <div class="screen-vignette"></div>
        ${content}
      </div>
    </section>
  `;
}

function renderIntro() {
  app.innerHTML = stageTemplate(
    assets.titleBg,
    `
      <div class="stage-content hero-content">
        <img class="title-asset1" src="${assets.titleAsset1}" alt="" aria-hidden="true" />
        <h1 class="intro-title">
          <span class="intro-type">Celestial Persona</span>
          <span>星詠み</span>
          <span class="intro-title-sub">16タイプ診断</span>
        </h1>
        <img class="title-asset2" src="${assets.titleAsset2}" alt="" aria-hidden="true" />
        <p class="intro-copy">あなたの内側に眠る、<br/>星術師のカードを開く</p>
        <img class="title-asset3" src="${assets.titleAsset3}" alt="" aria-hidden="true" />
        <div class="intro-actions">
          <button class="title-start-button" type="button" data-action="start">
            <img class="title-button-bg" src="${assets.titleBotton}" alt="" aria-hidden="true" />
            <span class="title-button-text">診断をはじめる</span>
          </button>
          <p class="sub-note">全16問 / 約2分 / MBTI風エンタメ診断</p>
        </div>
      </div>
    `,
  );
}

function renderQuiz() {
  const question = questions[state.currentIndex];
  const selected = state.answers[state.currentIndex];

  app.innerHTML = stageTemplate(
    assets.quizBg,
    `
      <div class="stage-content quiz-content">
        <div class="progress-row" aria-label="進捗 ${state.currentIndex + 1} / ${questions.length}">
          ${questions
            .map((_, index) => `<span class="progress-star ${index <= state.currentIndex ? "done" : ""}"></span>`)
            .join("")}
        </div>
        <p class="quiz-number">${question.id.replace("Q", "Q.")} / ${String(questions.length).padStart(2, "0")}</p>
        <img class="question-separator" src="${assets.questionAsset4}" alt="" aria-hidden="true" />
        
        <section class="question-card">
          <h2 class="question-text">${escapeHtml(question.text)}</h2>
          <div class="choices">
            ${question.options
              .map(
                (option, index) => `
                  <button
                    class="choice-button ${selected === option.letter ? "selected" : ""}"
                    type="button"
                    data-action="choose"
                    data-letter="${option.letter}"
                    aria-pressed="${selected === option.letter}"
                  >
                    <img class="choice-bg" src="${index === 0 ? assets.questionAsset1 : assets.questionAsset2}" alt="" aria-hidden="true" />
                    <div class="choice-content">
                      <span class="choice-letter">${option.key}</span>
                      <span class="choice-label">${escapeHtml(option.label)}</span>
                    </div>
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
        <div class="nav-row">
          <button class="nav-button" type="button" data-action="back" ${state.currentIndex === 0 ? "disabled" : ""}>
            <img class="nav-bg" src="${assets.questionAsset3}" alt="" aria-hidden="true" />
            <span class="nav-text">戻る</span>
          </button>
        </div>
      </div>
    `,
  );
}

function renderAnalyzing() {
  app.innerHTML = stageTemplate(
    assets.analyzingBg,
    `
      <div class="stage-content analyzing-text-layer">
        <p class="analyzing-top-text">あなたの性格を分析しています…</p>
        <div class="analyzing-bottom-text">
          <p>星はあなたの中に、すでに答えを映しています。</p>
          <p>心を静かに、光にゆだねて……</p>
        </div>
      </div>
    `,
  );

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.setTimeout(() => {
    state.screen = reducedMotion ? "result" : "cardReveal";
    render();
  }, reducedMotion ? 700 : 1600);
}

function renderCardReveal() {
  app.innerHTML = `
    <section class="app-shell reveal-shell">
      <div class="stage">
        <video class="reveal-video" autoplay muted playsinline preload="auto">
          <source src="${assets.cardRevealVideo}" type="video/mp4" />
        </video>
        <div class="reveal-overlay">
          <p>星術カードを召喚しています...</p>
          <button class="game-button skip-button" type="button" data-action="skip-reveal">結果を見る</button>
        </div>
      </div>
    </section>
  `;

  const video = app.querySelector("video");
  let resolved = false;
  const finish = () => {
    if (resolved) return;
    resolved = true;
    state.screen = "result";
    render();
  };

  video.addEventListener("ended", finish, { once: true });
  video.addEventListener("error", finish, { once: true });
  window.setTimeout(finish, 9000);

  const playPromise = video.play();
  if (playPromise) {
    playPromise.catch(() => {
      window.setTimeout(finish, 1600);
    });
  }
}

function renderResult() {
  const type = state.resultType || calculateResultType();
  const profile = resultProfiles[type];
  const cardImage = resultCardImages[type];

  app.innerHTML = `
    <section class="app-shell result-shell">
      <div class="result-layout">
        <div class="result-card-wrap">
          ${cardImage ? renderOfficialCard(cardImage, profile) : renderFallbackCard(profile)}
        </div>
        <section class="result-panel">
          <div class="result-title-row">
            <div>
              <p class="result-eyebrow">Your Celestial Card</p>
              <h2 class="result-heading">${profile.type} ${profile.cardName}</h2>
            </div>
          </div>
          <p class="result-subtitle">${profile.title}</p>
          <p class="result-summary">${escapeHtml(profile.summary)}</p>
          <div class="badge-row">
            ${profile.strengths.map((item) => `<span class="badge">${escapeHtml(item)}</span>`).join("")}
          </div>
          <div class="detail-grid">
            <div class="detail-block">
              <h3>光る才能</h3>
              <ul>${profile.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div class="detail-block">
              <h3>影になりやすい癖</h3>
              <ul>${profile.cautions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div class="detail-block">
              <h3>相性のよい星</h3>
              <ul>${profile.matches.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
            <div class="detail-block">
              <h3>カードの言葉</h3>
              <ul><li>${escapeHtml(profile.quote)}</li></ul>
            </div>
          </div>
          <p class="advice">${escapeHtml(profile.advice)}</p>
          <div class="action-row">
            <button class="game-button secondary-button" type="button" data-action="share">結果を共有</button>
            <button class="game-button secondary-button" type="button" data-action="restart">もう一度、星を読む</button>
          </div>
        </section>
      </div>
    </section>
    <div class="toast" role="status"></div>
  `;
}

function renderOfficialCard(cardImage, profile) {
  return `
    <figure class="official-card" aria-label="${profile.type} ${profile.cardName} ${profile.title}">
      <img src="${cardImage}" alt="${profile.type} ${profile.cardName} ${profile.title}" />
    </figure>
  `;
}

function renderFallbackCard(profile) {
  return `
    <article class="fallback-card" aria-label="${profile.type} ${profile.cardName} ${profile.title}">
      <div class="fallback-frame" aria-hidden="true"></div>
      <div class="fallback-card-content">
        <p class="fallback-type">${profile.type}</p>
        <p class="fallback-name">${profile.cardName}</p>
        <p class="fallback-title">${profile.type} - ${profile.title}</p>
        <p class="fallback-quote">「${escapeHtml(profile.quote)}」</p>
      </div>
    </article>
  `;
}

function choose(letter) {
  window.clearTimeout(state.advanceTimer);
  state.answers[state.currentIndex] = letter;
  renderQuiz();
  state.advanceTimer = window.setTimeout(() => {
    nextQuestion();
  }, 260);
}

function nextQuestion() {
  if (!state.answers[state.currentIndex]) return;

  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuiz();
    return;
  }

  state.resultType = calculateResultType();
  state.screen = "analyzing";
  render();
}

function previousQuestion() {
  window.clearTimeout(state.advanceTimer);
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  renderQuiz();
}

function calculateResultType() {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  state.answers.forEach((letter) => {
    if (letter && Object.prototype.hasOwnProperty.call(scores, letter)) scores[letter] += 1;
  });

  return `${scores.E >= scores.I ? "E" : "I"}${scores.N >= scores.S ? "N" : "S"}${
    scores.T >= scores.F ? "T" : "F"
  }${scores.J >= scores.P ? "J" : "P"}`;
}

async function shareResult() {
  const type = state.resultType || calculateResultType();
  const profile = resultProfiles[type];
  const text = `星詠み16タイプ診断の結果は ${profile.type}「${profile.cardName} / ${profile.title}」でした。${profile.quote}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "星詠み16タイプ診断",
        text,
      });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("結果テキストをコピーしました");
  } catch {
    showToast("共有テキストをコピーできませんでした");
  }
}

function showToast(message) {
  const toast = app.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function restart() {
  window.clearTimeout(state.advanceTimer);
  state.screen = "intro";
  state.currentIndex = 0;
  state.answers = Array(questions.length).fill(null);
  state.resultType = null;
  render();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "start") {
    state.screen = "quiz";
    state.currentIndex = 0;
    render();
  }
  if (action === "choose") choose(target.dataset.letter);
  if (action === "next") nextQuestion();
  if (action === "back") previousQuestion();
  if (action === "skip-reveal") {
    state.screen = "result";
    render();
  }
  if (action === "share") shareResult();
  if (action === "restart") restart();
});

render();
