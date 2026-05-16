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
  bgmTitle: "./title.mp3",
  bgmQuiz: "./sentaku.mp3",
  bgmResult: "./bunsekikekka.mp3",
};

const resultCardImages = {
  ENTP: assets.entpCard,
  INFJ: "./INFJnyanruna.jpeg",
  INFJaoi: "./INFJaoi.jpeg",
  ISFP: "./ISFPkemono.jpeg",
  ISTJ: "./ISTJshinjirou.jpeg",
  ESFP: "./ESFPnurse.jpeg",
  INTJ: "./INTJbuchi.jpeg",
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
    "cardName": "ブッチ・",
    "title": "最上級魔法使い",
    "attribute": "闇 × 智",
    "guardianStar": "冥王星",
    "goodStage": "一人で戦略を組み立て、完璧に実行できる時",
    "badStage": "非効率な感情論が場を支配している時",
    "quote": "アンタなんかに、優しくするわけないでしょ…///……でも、あたしだけを見ててよね。",
    "subQuote": "感情で動く人間が理解できない。でも、あなたのことは計算外だった。",
    "summary": "孤高の戦略眼を持つ最上級魔法使い。\n冷たい言葉の裏に誰よりも深い思考と、ほんの少しのツンデレを隠している。",
    "stats": [
      {
        "label": "戦略思考",
        "value": "SS"
      },
      {
        "label": "直感力",
        "value": "SS"
      },
      {
        "label": "実行力",
        "value": "S"
      },
      {
        "label": "社交性",
        "value": "D"
      },
      {
        "label": "感情表現",
        "value": "D"
      }
    ],
    "aruaru": [
      "会話より先に相手の思考パターンを分析している",
      "非効率な方法を目の前にすると黙っていられない",
      "感情で動く人間を理解しようとして疲弊する",
      "褒め言葉をどう受け取ればいいか毎回困る"
    ],
    "impression": "「近寄りがたいと思ったら、誰よりも核心を突いてくる人だった。\n一度信頼されると、永遠に頼られる。」",
    "seriousMode": [
      "自分の知性と戦略が試される場面",
      "誰かが理不尽に傷つけられた時（認めたくないが動く）",
      "完成させると決めたものが揺らいだ時"
    ],
    "tired": [
      "紫の炎が制御できなくなる",
      "返事が一文字になる",
      "誰とも目を合わせなくなる",
      "魔法陣を一人で書き続ける"
    ],
    "recovery": [
      "完全な孤独の中で思考を整理する",
      "難解な本や理論に没頭する",
      "計画を一から書き直す",
      "信頼できる唯一の相手と静かに話す"
    ],
    "matches": [
      "ENFP：計算外の視点で刺激をくれる相手",
      "ENTP：知的な火花を散らせる相手",
      "INFJ：深いところで共鳴できる相手"
    ],
    "roleSchool": "授業中に先生より先に答えを出している、静かな天才肌。",
    "roleWork": "全体の構造を俯瞰し、誰も気づかない盲点を塞ぐ戦略家。",
    "strengths": [
      "長期ビジョンを緻密に設計する戦略的思考",
      "感情に流されない冷徹な判断力",
      "一度決めたことをやり遂げる意志の強さ"
    ],
    "cautions": [
      "感情を後回しにしすぎて人間関係が壊れる",
      "完璧主義が高じて自分も他人も追い詰める"
    ],
    "toutoi": "クールな顔の裏で、誰よりも深く考え抜いているところ",
    "lunaGauge": {
      "安心度": "30%",
      "好奇心": "95%",
      "疲労サイン": "紫の炎が揺らぐ",
      "ときめき回復値": "55%"
    },
    "advice": "あたしの魔法は、あなたのためだけに使う。……たまに、だけど。"
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

  // 蒼依（INFJバリアント）
  "INFJ_aoi": {
    "type": "INFJ",
    "cardName": "蒼依",
    "title": "星詠みの賢者",
    "attribute": "魔法 × 星",
    "guardianStar": "山羊座",
    "goodStage": "一対一で深く向き合う時間",
    "badStage": "表面的な雑談が続く場",
    "quote": "君の光が、迷いの夜を照らすなら。僕の魔法は、いつでも君の味方だよ。",
    "subQuote": "言葉にならない心を、僕はちゃんと受け取れる。",
    "summary": "静けさの中に燃える知性を持つ賢者。\n誰かの痛みを処理する前に、すでに見抜いている。",
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
        "label": "知性",
        "value": "S"
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
      "慣れると突然、鋭い論証を内心で展開している",
      "散歩してるようで、実は全て計算済み"
    ],
    "impression": "「冷静に見えて、話すと絶対離れられなくなる人。\n言葉の温度が違う、という感じ。」",
    "seriousMode": [
      "大切な人が傷ついている時",
      "信念や価値観を踏みにじられた時",
      "誰も気づいていない問題を放置できない時"
    ],
    "tired": [
      "魔法陣を展開したまま完全に黙る",
      "返信がゆっくりになる",
      "真顔の笑顔が消える",
      "星図をぼんやり眺めている"
    ],
    "recovery": [
      "魔法書を一人で読み返す",
      "夜空の星座を追う",
      "信頼できる一人とだけ話す",
      "頭の中の論理式を全部解き切る"
    ],
    "matches": [
      "ENFP：世界を広げてくれる相手",
      "ENTP：知的に刺激し合える相手",
      "INFP：心の深さを共鳴できる相手"
    ],
    "roleSchool": "左脳で答えを出しつつ、クラスの流れを読む戦略家。",
    "roleWork": "チームの人間関係を把握し、方向性を誤らせない羅針盤。",
    "strengths": [
      "人の感情と動機を本能的に読む力",
      "魔法陣のように迷いのない論理的思考",
      "揺るぎない価値観と誠実さ"
    ],
    "cautions": [
      "感情を溜め込みすぎて急に限界が来る",
      "理想が高すぎて自分を追い詰める"
    ],
    "toutoi": "言葉にならない誰かの痛みを、魔法でそっと受け取れるところ",
    "lunaGauge": {
      "安心度": "35%",
      "好奇心": "85%",
      "疲労サイン": "魔法陣を展開したまま黙る",
      "ときめき回復値": "75%"
    },
    "advice": "君の魔法は、正しい方向にしか向かない。"
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
    "cardName": "Shinji狼",
    "title": "妄想防衛大臣",
    "attribute": "土 × 鋼",
    "guardianStar": "土星",
    "goodStage": "明確なルールと責任がある仕事",
    "badStage": "計画が崩れる混乱した状況",
    "quote": "おまえは信頼できるか？―できるなら、信頼してやる。",
    "subQuote": "無駄な飾りはいらない。結果だけが語る。",
    "summary": "信頼とルールを守り抜く守護者。\n無口で無表情でも、任された責任は最後まで絶対に手放さないタイプ。",
    "stats": [
      {
        "label": "責任感",
        "value": "SS"
      },
      {
        "label": "継続力",
        "value": "SS"
      },
      {
        "label": "実行力",
        "value": "S"
      },
      {
        "label": "柔軟性",
        "value": "D"
      },
      {
        "label": "カオス耐性",
        "value": "D"
      }
    ],
    "aruaru": [
      "マニュアル違反を見つけると黙って正す",
      "予定表は余白の予備まで埋め尽くす",
      "一度決めたことは簡単には変えない",
      "書類は必ずバックアップをとる"
    ],
    "impression": "「冷たいと思ったら、一番勤勉で一番信頼できる人だった。\n目が合った時の一言が、ずっと刺さっている。」",
    "seriousMode": [
      "不正やルール違反が生じた時",
      "責任を軽く見る人が現れた時",
      "自分が引き受けた仕事が上手くいかない時"
    ],
    "tired": [
      "立ったままサングラスを外さなくなる",
      "返信が文章ではなく既読のみになる",
      "必要以上に寡黙になる",
      "趣味の時間を倍に増やして一人になる"
    ],
    "recovery": [
      "扉を閉めて完全に一人になる",
      "いつもの決まったルーティンを繰り返す",
      "スケジュールや記録を整理し直す",
      "信頼できる少数の人と静かに過ごす"
    ],
    "matches": [
      "ESFP：明るさで場を和らげてくれる相手",
      "ESTP：同じ現実主義で信頼できる相手",
      "ISFJ：協力し合える安心の相手"
    ],
    "roleSchool": "課題を最後までやり切る、クラスの縁の下の力持ち。",
    "roleWork": "定められたルールと手順を守り通し、チームの実務を支える柱。",
    "strengths": [
      "一度引き受けた責任は必ず果たす",
      "細部のミスも見逃さない観察力",
      "長期的な計画を着実に実行する継続力"
    ],
    "cautions": [
      "計画外の変化に対して硬直しやすい",
      "ノーと言えず一人で抱え込んでしまう"
    ],
    "toutoi": "言葉にしなくても、背中で信頼を示し続けるところ",
    "lunaGauge": {
      "安心度": "55%",
      "好奇心": "40%",
      "疲労サイン": "サングラスを外さなくなる",
      "ときめき回復値": "65%"
    },
    "advice": "おまえのその堅さが、誰かの支えになっている。"
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
    "cardName": "凶悪マッチョナース",
    "title": "覚悟の救命者",
    "attribute": "炎 × 癒",
    "guardianStar": "火星",
    "goodStage": "現場の混乱を体一つで収める瞬間",
    "badStage": "書類仕事と長い会議",
    "quote": "私の注射は痛いぞ？だが、その分だけ効く。命を救うのは優しさじゃない、覚悟だ。",
    "subQuote": "理屈より先に体が動く。それが私のやり方だ。",
    "summary": "その場の空気を一瞬で読み、誰よりも早く動ける実行者。\n強面の裏に宿る面倒見のよさで、気づけば皆を引っ張っている。",
    "stats": [
      {
        "label": "社交性",
        "value": "SS"
      },
      {
        "label": "瞬発力",
        "value": "SS"
      },
      {
        "label": "共感力",
        "value": "S"
      },
      {
        "label": "計画性",
        "value": "D"
      },
      {
        "label": "一人耐性",
        "value": "D"
      }
    ],
    "aruaru": [
      "考えるより先に体が動いて後から後悔する",
      "初対面でも5分で打ち解ける",
      "退屈な会議中にどこかへ消えている",
      "感情がそのまま表情に出る"
    ],
    "impression": "「怖そうと思ったら、一番ノリがよくて一番頼りになる人だった。\n注射が痛くても、なぜか次も来たくなる。」",
    "seriousMode": [
      "誰かが今すぐ助けを必要としている時",
      "仲間が理不尽に傷つけられた時",
      "自分の覚悟を試される場面"
    ],
    "tired": [
      "誰とも話したくないのに話しかけてしまう",
      "いつもより注射が荒くなる",
      "パイプの煙が増える",
      "急に筋トレに逃げる"
    ],
    "recovery": [
      "にぎやかな場所に飛び込む",
      "誰かのために何かする",
      "体を動かして汗をかく",
      "気の置けない仲間と騒ぐ"
    ],
    "matches": [
      "ISTJ：信頼で支え合える相手",
      "ISFJ：温かさで補い合える相手",
      "ENFJ：一緒に場を盛り上げられる相手"
    ],
    "roleSchool": "文化祭や体育祭を誰よりも全力で楽しむ、クラスの起爆剤。",
    "roleWork": "現場の空気を瞬時に読んで動く、チームの即戦力。",
    "strengths": [
      "その場の雰囲気を一変させる存在感",
      "誰かの感情に即座に寄り添う共感力",
      "考える前に体が動く圧倒的な瞬発力"
    ],
    "cautions": [
      "衝動で動いて後から収拾がつかなくなる",
      "一人の時間が苦手で消耗しやすい"
    ],
    "toutoi": "怖い顔の裏で、誰よりも人のことを心配しているところ",
    "lunaGauge": {
      "安心度": "75%",
      "好奇心": "90%",
      "疲労サイン": "静かになる（異常事態）",
      "ときめき回復値": "85%"
    },
    "advice": "おまえの覚悟が、誰かの命綱になっている。"
  }
};

const bgmManager = {
  current: null,
  sounds: {},
  initialized: false,

  init() {
    if (this.initialized) return;
    this.sounds.title = new Audio(assets.bgmTitle);
    this.sounds.quiz = new Audio(assets.bgmQuiz);
    this.sounds.result = new Audio(assets.bgmResult);

    Object.values(this.sounds).forEach((audio) => {
      audio.loop = true;
      audio.volume = 0;
      audio.preload = "auto";
      // ブラウザの制限解除のためのプライミング（無音で再生・停止）
      audio
        .play()
        .then(() => {
          audio.pause();
          audio.currentTime = 0;
        })
        .catch(() => {});
    });
    this.initialized = true;
  },

  async play(key) {
    this.init();
    const next = key ? this.sounds[key] : null;

    // すでに指定された曲が再生中なら何もしない
    if (this.current === next && next && !next.paused) return;

    // 別の曲に切り替わる場合の処理
    if (this.current !== next) {
      if (this.current) {
        this.fadeOut(this.current);
      }
      if (next) {
        next.currentTime = 0;
      }
    }

    this.current = next;
    if (next) {
      try {
        // 停止中の場合（初回再生やブロック解除時）に再生を開始
        if (next.paused) {
          await next.play();
          this.fadeIn(next);
        }
      } catch (e) {
        console.warn("BGMの再生がブロックされました:", e);
      }
    }
  },

  fadeIn(audio, duration = 1200) {
    const targetVolume = 0.4; // 音量は控えめに設定
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      audio.volume = progress * targetVolume;
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  },

  fadeOut(audio, duration = 1000) {
    const startVolume = audio.volume;
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      audio.volume = Math.max(0, startVolume * (1 - progress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        audio.pause();
      }
    };
    requestAnimationFrame(animate);
  },
};

const app = document.querySelector("#app");

const state = {
  screen: "intro",
  currentIndex: 0,
  answers: [],
  resultType: null,
  isAoiVariant: false,
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

  if (state.screen === "intro") {
    renderIntro();
    bgmManager.play("title");
  }
  if (state.screen === "quiz") {
    renderQuiz();
    bgmManager.play("quiz");
  }
  if (state.screen === "analyzing") {
    renderAnalyzing();
    bgmManager.play(null); // 分析中は静寂
  }
  if (state.screen === "cardReveal") renderCardReveal();
  if (state.screen === "cardAnimation") renderCardAnimation();
  if (state.screen === "result") {
    renderResult();
    bgmManager.play("result");
  }
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
          <span>MBTI診断</span>
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
        </div>
      </div>
    </section>
  `;

  const video = app.querySelector("video");
  let resolved = false;
  const finish = () => {
    if (resolved) return;
    resolved = true;
    
    // 診断結果を確定させ、INFJの場合は蒼依バリアントか判定して保存
    state.resultType = calculateResultType();
    state.isAoiVariant = state.resultType === "INFJ" && Math.random() < 0.5;

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
  
  // 保存されたバリアント状態に基づいて画像とプロフィールを選択
  const profileKey = state.isAoiVariant ? "INFJ_aoi" : type;
  const cardImageKey = state.isAoiVariant ? "INFJaoi" : type;

  const profile = resultProfiles[profileKey];
  const cardImage = resultCardImages[cardImageKey];

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
const mbtiRoleNames = {
  INTJ: "建築家",
  INTP: "論理学者",
  ENTJ: "指揮官",
  ENTP: "討論者",
  INFJ: "提唱者",
  INFP: "仲介者",
  ENFJ: "主人公",
  ENFP: "運動家",
  ISTJ: "管理者",
  ISFJ: "擁護者",
  ESTJ: "幹部",
  ESFJ: "領事",
  ISTP: "巨匠",
  ISFP: "冒険家",
  ESTP: "起業家",
  ESFP: "エンターテイナー",
};

function renderResult() {
  const type = state.resultType || calculateResultType();

  // 保存されたバリアント状態に基づいて画像とプロフィールを選択
  const profileKey = state.isAoiVariant ? "INFJ_aoi" : type;
  const cardImageKey = state.isAoiVariant ? "INFJaoi" : type;

  const profile = resultProfiles[profileKey];
  const cardImage = resultCardImages[cardImageKey];

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
              <span class="tag">${mbtiRoleNames[profile.type]}</span>
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
            <button class="game-button secondary-button x-share-button" type="button" data-action="share">
              <svg class="x-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Xで共有
            </button>
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

function shareResult() {
  const type = state.resultType || calculateResultType();
  const profile = resultProfiles[type];
  const roleName = mbtiRoleNames[profile.type] ?? "";

  // X（旧Twitter）の投稿文を生成
  const tweetText = [
    `「MBTI診断」で${profile.type
    }（${roleName}）「${profile.cardName} / ${profile.title
    }」と判定されました！`,
    `「${profile.quote}」`,
    `${profile.summary.split("\n")[0]}`,
    ``,
    `#mbti診断ゲーム参加`,
  ].join("\n");

  const gameUrl = "https://lunaneco.github.io/mbti/";
  const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(gameUrl)}`;
  window.open(intentUrl, "_blank", "noopener,noreferrer");
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
  if (action === "share") shareResult();
  if (action === "restart") restart();
});

// 画面のどこかをタップ・クリックした瞬間にBGMを開始する（オートプレイ制限解除）
const unlockAudio = () => {
  bgmManager.init();
  // 現在の画面に応じたBGMを再生
  if (state.screen === "intro") bgmManager.play("title");
  else if (state.screen === "quiz") bgmManager.play("quiz");
  else if (state.screen === "result") bgmManager.play("result");
};

document.addEventListener("pointerdown", unlockAudio, { once: true });
document.addEventListener("click", unlockAudio, { once: true });

render();
