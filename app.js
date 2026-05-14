const assets = {
  titleBg: "./titlemoziNG.png",
  quizBg: "./questionframemoziNG2.png",
  analyzingBg: "./bunsekityumoziNG.png",
  cardRevealVideo: "./カード演出.mp4",
  entpCard: "./cardensyutu3.png",
  cardRevealBg: "./cardensyutu2.png",
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
  INFJ: "./INFJ.jpeg",
  ISFP: "./ISFPkemono.jpeg",
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
  "INTJ": {
    "type": "INTJ",
    "cardName": "星架",
    "title": "星図の建築家",
    "attribute": "闇 × 知",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "未来は待つものではない。設計して迎えに行く。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "INTP": {
    "type": "INTP",
    "cardName": "碧理",
    "title": "蒼き論理術師",
    "attribute": "水 × 知",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "謎は解かれるために、世界の奥へ隠れている。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ENTJ": {
    "type": "ENTJ",
    "cardName": "王星",
    "title": "王冠の指揮官",
    "attribute": "火 × 権",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "迷う時間があるなら、次の一手を置く。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ENTP": {
    "type": "ENTP",
    "cardName": "月音子",
    "title": "蒼星の発明家",
    "attribute": "風 × 星",
    "guardianStar": "天王星",
    "goodStage": "アイデア会議",
    "badStage": "単純作業",
    "quote": "常識なんて、最高の遊び道具。",
    "subQuote": "新しい未来？もちろん、私が発明するよ！",
    "summary": "常識を“遊び道具”に変える発明家。\n会話の中からひらめきを拾い、場に知的な火花を散らす。",
    "stats": [
      {
        "label": "発想力",
        "value": "SS"
      },
      {
        "label": "即興力",
        "value": "S"
      },
      {
        "label": "継続力",
        "value": "C"
      },
      {
        "label": "巻き込み力",
        "value": "A"
      },
      {
        "label": "カオス耐性",
        "value": "SS"
      }
    ],
    "aruaru": [
      "話してる途中で別企画が生まれる",
      "興味ある時だけ集中力が異常",
      "ルールを見ると改善案を考える",
      "飽きた瞬間、急に電源が切れる"
    ],
    "impression": "「自由すぎるのに、なぜか憎めない人。\n場の空気を一瞬で“何か始まりそう”に変える。」",
    "seriousMode": [
      "面白い課題を見つけた時",
      "誰も思いつかない答えを探す時",
      "「それ無理じゃない？」と言われた時"
    ],
    "tired": [
      "急に全部つまらなく感じる",
      "刺激を探しすぎる",
      "途中のものを放置しがち",
      "でも一晩寝ると別案を持ってくる"
    ],
    "recovery": [
      "面白い会話",
      "新しいカフェ",
      "ひとり妄想タイム",
      "軽い散歩",
      "萩の月タイム"
    ],
    "matches": [
      "INTJ：戦略をくれる相棒",
      "INFJ：心の奥を見抜く理解者",
      "ENFP：一緒に世界を広げる冒険仲間"
    ],
    "roleSchool": "文化祭で急に新企画を出して、なぜか周りを巻き込むタイプ",
    "roleWork": "0→1のアイデア出し担当。停滞した場に新しい視点を入れる。",
    "strengths": [
      "0→1の発火力",
      "空気を動かす雑談力",
      "仮説を遊ぶ検証力"
    ],
    "cautions": [
      "面白さが切れると急に電池切れ",
      "正論パンチが強くなりすぎる時がある"
    ],
    "toutoi": "失敗しても、次の面白い案に変えられるところ",
    "lunaGauge": {
      "安心度": "40%",
      "好奇心": "120%",
      "疲労サイン": "目移りが激しくなる",
      "ときめき回復値": "80%"
    },
    "advice": "遊び心に、最後のひと結びだけ添えて。"
  },
  "INFJ": {
    "type": "INFJ",
    "cardName": "にゃんるな",
    "title": "終焉の眠り姫",
    "attribute": "闇 × 月",
    "guardianStar": "冥王星",
    "goodStage": "一対一で深く向き合う時間",
    "badStage": "表面的な雑談が続く場",
    "quote": "ねむれない夜も、わたしの月がそっと包むよ…",
    "subQuote": "言葉にならない心を、私はちゃんと聞こえてる。",
    "summary": "口数は少なくても、その瞳には世界の全てが映っている。\n誰よりも深く人を想い、そっと月明かりのように寄り添う予言者。",
    "stats": [
      {
        "label": "共感力",
        "value": "SS"
      },
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "継続力",
        "value": "A"
      },
      {
        "label": "社交力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "C"
      }
    ],
    "aruaru": [
      "初対面でも相手の本質を読んでしまう",
      "表面上は穏やかでも内側で激しく考えている",
      "悩んでいる人に気づいて自然と寄り添っている",
      "嘘や建前にはすぐ気づくが、あえて黙っている"
    ],
    "impression": "「近づきにくいけど、話すと絶対離れられなくなる人。\n言葉の温度が違う、という感じ。」",
    "seriousMode": [
      "大切な人が傷ついている時",
      "信念や価値観を踏みにじられた時",
      "誰も気づいていない問題を放置できない時"
    ],
    "tired": [
      "静かに姿を消す",
      "返信がゆっくりになる",
      "感情が表情に出なくなる",
      "ひたすら月を眺めている"
    ],
    "recovery": [
      "一人で静かな音楽を聴く",
      "感動できる物語に没頭する",
      "信頼できる一人とだけ話す",
      "月明かりの下を散歩する"
    ],
    "matches": [
      "ENFP：世界を広げてくれる相手",
      "ENTP：知的に刺激し合える相手",
      "INFP：心の深さを共鳴できる相手"
    ],
    "roleSchool": "クラスの空気を静かに整える、縁の下の調整役。",
    "roleWork": "チームの人間関係を把握し、方向性を誤らせない羅針盤。",
    "strengths": [
      "人の感情と動機を本能的に読む力",
      "長期的なビジョンを描く直感",
      "揺るぎない価値観と誠実さ"
    ],
    "cautions": [
      "感情を溜め込みすぎて急に限界が来る",
      "理想が高すぎて自分を追い詰める"
    ],
    "toutoi": "言葉にならない誰かの痛みを、そっと受け取れるところ",
    "lunaGauge": {
      "安心度": "40%",
      "好奇心": "80%",
      "疲労サイン": "静かに消えようとする",
      "ときめき回復値": "70%"
    },
    "advice": "あなたの月は、誰かの夜をいつも照らしている。"
  },
  "INFP": {
    "type": "INFP",
    "cardName": "夢璃",
    "title": "夢晶の詩人",
    "attribute": "夢 × 花",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "世界が硬すぎるなら、心の光で形を変えればいい。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ENFJ": {
    "type": "ENFJ",
    "cardName": "暁灯",
    "title": "暁光の導師",
    "attribute": "光 × 炎",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "一人の光が灯れば、夜はもう夜だけではない。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ENFP": {
    "type": "ENFP",
    "cardName": "星那",
    "title": "星屑の旅人",
    "attribute": "風 × 夢",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "面白そう、その一言で扉は開く。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ISTJ": {
    "type": "ISTJ",
    "cardName": "鐘真",
    "title": "金時計の守護者",
    "attribute": "土 × 時",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "積み重ねた事実だけが、嵐の中で道標になる。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ISFJ": {
    "type": "ISFJ",
    "cardName": "月守",
    "title": "月灯の庇護者",
    "attribute": "水 × 癒",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "小さな約束を守ることが、誰かの夜を照らす。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ESTJ": {
    "type": "ESTJ",
    "cardName": "燈令",
    "title": "王立天文台長",
    "attribute": "土 × 炎",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "秩序は冷たい鎖ではない。皆を前へ進める軌道だ。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ESFJ": {
    "type": "ESFJ",
    "cardName": "花星",
    "title": "星宴の調停者",
    "attribute": "花 × 癒",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "人が集う場所には、必ず温度が生まれる。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ISTP": {
    "type": "ISTP",
    "cardName": "錬久",
    "title": "機巧の錬成師",
    "attribute": "鉄 × 雷",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "仕組みが見えれば、どんな扉も開け方がある。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ISFP": {
    "type": "ISFP",
    "cardName": "ケモノ(♂)",
    "title": "幻花のトリックスター",
    "attribute": "花 × 風",
    "guardianStar": "金星",
    "goodStage": "自由に動き回れるフィールド",
    "badStage": "長い会議や細かいルール",
    "quote": "ざーんねん、僕オスでした〜",
    "subQuote": "今この瞬間が一番、生きてる気がするから。",
    "summary": "見た目は気まぐれな自由人。\nでも好きな人には誰よりも全力で、あふれる感性で世界を花畑に変えてしまう。",
    "stats": [
      {
        "label": "感受性",
        "value": "SS"
      },
      {
        "label": "行動力",
        "value": "S"
      },
      {
        "label": "共感力",
        "value": "A"
      },
      {
        "label": "継続力",
        "value": "C"
      },
      {
        "label": "カオス耐性",
        "value": "B"
      }
    ],
    "aruaru": [
      "好きなものへの熱量が急に爆発する",
      "ルールより自分のセンスを信じる",
      "その場の雰囲気を直感で読むのが得意",
      "予定より衝動、計画より出たとこ勝負"
    ],
    "impression": "「ふわっとしてるけど、なんか目が離せない。\n一緒にいると、なぜか楽しくなる。」",
    "seriousMode": [
      "大切な仲間が本気で困っている時",
      "自分の美学を全力でぶつけたい時",
      "守りたいものが危なくなった時"
    ],
    "tired": [
      "急にどこかへ消える",
      "いつもより静かになる",
      "やたら眠くなる",
      "ひたすら好きなことだけをする"
    ],
    "recovery": [
      "好きな音楽を爆音で聴く",
      "自然の中を何も考えず歩く",
      "好きなものに囲まれてぼーっとする",
      "ひとりで散歩する"
    ],
    "matches": [
      "ESFJ：温かく包んでくれる相手",
      "ENFJ：方向を示してくれる相手",
      "ISTP：黙って隣にいてくれる相手"
    ],
    "roleSchool": "場の雰囲気を瞬時に変える、ムードメーカー。",
    "roleWork": "感性でアイデアを出し、チームに新しい色を加える存在。",
    "strengths": [
      "瞬発的な感性と表現力",
      "今この瞬間への集中力",
      "人の気持ちへの素直な共鳴"
    ],
    "cautions": [
      "長期的な計画が苦手",
      "感情が前に出すぎる時がある"
    ],
    "toutoi": "その場の空気を一瞬で花に変えてしまう、生まれつきの感性",
    "lunaGauge": {
      "安心度": "70%",
      "好奇心": "90%",
      "疲労サイン": "急に静かになる",
      "ときめき回復値": "85%"
    },
    "advice": "今日もその気まぐれが、誰かの日常に花を咲かせている。"
  },
  "ESTP": {
    "type": "ESTP",
    "cardName": "雷雅",
    "title": "流星の挑戦者",
    "attribute": "雷 × 風",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "今ここで動ける者だけが、風向きを変えられる。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  },
  "ESFP": {
    "type": "ESFP",
    "cardName": "宝舞",
    "title": "宝石舞踏の表現者",
    "attribute": "星 × 踊",
    "guardianStar": "未知の星",
    "goodStage": "自分のペースで進める時",
    "badStage": "理不尽な制約",
    "quote": "人生が舞台なら、退屈な幕は私が上げる。",
    "subQuote": "私だけの輝きを見つける。",
    "summary": "独自の視点で世界を捉えるタイプ。\n内に秘めた情熱で道を切り開く。",
    "stats": [
      {
        "label": "直感力",
        "value": "S"
      },
      {
        "label": "行動力",
        "value": "A"
      },
      {
        "label": "共感力",
        "value": "B"
      },
      {
        "label": "継続力",
        "value": "B"
      },
      {
        "label": "カオス耐性",
        "value": "A"
      }
    ],
    "aruaru": [
      "独自のマイルールがある",
      "ハマった時の集中力がすごい",
      "時々周囲のペースを忘れる",
      "ふとした瞬間に真理を突く"
    ],
    "impression": "「ブレない軸を持っている人。\n独特の世界観に惹き込まれる。」",
    "seriousMode": [
      "本当に大切なものを守る時",
      "自分の美学が問われた時",
      "誰にも負けたくない勝負の時"
    ],
    "tired": [
      "無口になる",
      "一人の空間に逃げ込む",
      "普段しないミスをする",
      "甘いものをひたすら食べる"
    ],
    "recovery": [
      "好きな音楽を聴く",
      "自然に触れる",
      "信頼できる人とだけ話す",
      "たっぷり寝る",
      "趣味に没頭する"
    ],
    "matches": [
      "ENTP：刺激をくれる相手",
      "ISFJ：安心できる相手",
      "ENFJ：導いてくれる相手"
    ],
    "roleSchool": "いざという時に頼りになる存在。",
    "roleWork": "専門性を活かしてチームの課題を突破する。",
    "strengths": [
      "深い洞察力",
      "独自の美学",
      "いざという時の集中力"
    ],
    "cautions": [
      "周りが見えなくなる時がある",
      "説明を省略しがち"
    ],
    "toutoi": "自分の信じた道を不器用に突き進むところ",
    "lunaGauge": {
      "安心度": "60%",
      "好奇心": "70%",
      "疲労サイン": "連絡が遅くなる",
      "ときめき回復値": "60%"
    },
    "advice": "あなたの星は、そのままで十分美しい。"
  }
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
  if (state.screen === "cardAnimation") renderCardAnimation();
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
    state.screen = "cardAnimation";
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

function renderCardAnimation() {
  const type = state.resultType || calculateResultType();
  const profile = resultProfiles[type];
  const cardImage = resultCardImages[type];

  app.innerHTML = stageTemplate(
    assets.cardRevealBg,
    `
      <div class="stage-content card-animation-content">
        <div class="card-fade-in-wrap">
          <img class="fading-card" src="${cardImage || assets.fallbackCard}" alt="${profile.type}" />
        </div>
      </div>
    `,
    "animation-shell"
  );

  const container = app.querySelector('.animation-shell');
  const skip = () => {
    if (state.screen === "cardAnimation") {
      state.screen = "result";
      render();
    }
  };

  container.addEventListener('click', skip);
  setTimeout(skip, 4000);
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
          
          <div class="profile-basic">
            <p class="profile-title">${profile.title}</p>
            <div class="profile-tags">
              <span class="tag">属性: ${profile.attribute}</span>
              <span class="tag">守護星: ${profile.guardianStar}</span>
            </div>
            <p class="profile-quote">「${escapeHtml(profile.quote)}」<br><span class="sub-quote">${escapeHtml(profile.subQuote)}</span></p>
            <p class="result-summary">${escapeHtml(profile.summary).replace(/\n/g, "<br>")}</p>
          </div>

          <div class="detail-grid">
            <div class="detail-block">
              <h3>得意・苦手ステージ</h3>
              <ul>
                <li>得意: ${escapeHtml(profile.goodStage)}</li>
                <li>苦手: ${escapeHtml(profile.badStage)}</li>
              </ul>
            </div>
            
            <div class="detail-block stats-block">
              <h3>能力値ステータス</h3>
              <div class="stats-grid">
                ${profile.stats.map(s => `<div class="stat-item"><span class="stat-label">${escapeHtml(s.label)}</span><span class="stat-value rank-${s.value}">${s.value}</span></div>`).join("")}
              </div>
            </div>
          </div>

          <div class="detail-block aruaru-block" style="margin-top:20px;">
            <h3>あるある項目</h3>
            <ul class="aruaru-list">
              ${profile.aruaru.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </div>

          <div class="detail-grid">
            <div class="detail-block">
              <h3>光る才能</h3>
              <ul>${profile.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div class="detail-block">
              <h3>気をつけたい癖</h3>
              <ul>${profile.cautions.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>

          <div class="detail-block impression-block" style="margin-top:20px;">
            <h3>周囲からの印象</h3>
            <p>${escapeHtml(profile.impression).replace(/\n/g, "<br>")}</p>
          </div>

          <div class="detail-grid">
            <div class="detail-block">
              <h3>本気モード条件</h3>
              <ul>${profile.seriousMode.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div class="detail-block">
              <h3>疲れた時の変化</h3>
              <ul>${profile.tired.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>

          <div class="detail-grid">
            <div class="detail-block">
              <h3>充電方法</h3>
              <ul>${profile.recovery.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div class="detail-block">
              <h3>相性のよい星</h3>
              <ul>${profile.matches.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>

          <div class="detail-block role-block" style="margin-top:20px;">
            <h3>仕事・学校での役割</h3>
            <p><strong>学校:</strong> ${escapeHtml(profile.roleSchool)}</p>
            <p><strong>チーム:</strong> ${escapeHtml(profile.roleWork)}</p>
          </div>

          <div class="detail-grid">
            <div class="detail-block luna-gauge">
              <h3>心の満月ゲージ</h3>
              <ul>
                <li>安心度: ${profile.lunaGauge["安心度"]}</li>
                <li>好奇心: ${profile.lunaGauge["好奇心"]}</li>
                <li>疲労サイン: ${profile.lunaGauge["疲労サイン"]}</li>
                <li>回復値: ${profile.lunaGauge["ときめき回復値"]}</li>
              </ul>
            </div>
            <div class="detail-block toutoi-block">
              <h3>あなたのとうといポイント</h3>
              <p>${escapeHtml(profile.toutoi)}</p>
            </div>
          </div>



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
