window.notebookStylesData = [
    {
        "id": "style-01",
        "tag": "活力數位",
        "name": "💥 數位普普風格 (Digital Pop)",
        "description": "採用有機形狀與高彩度配色，消除科技冰冷感，極具社群親和力。",
        "applicable": "年輕族群行銷提案、創意發想會議、新創募資簡報、教育培訓",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：數位普普風格 (Digital Pop)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Digital Pop Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    organic_shapes: true\n    avoid_perfect_shapes: \"嚴禁使用完美的正方形、長方形或正圓形色塊\"\n    key_elements: [\"變形蟲（Amoeba）\", \"不規則雲朵\", \"帶有微小手繪抖動感（Hand-drawn Jittery）的粗線條\"]\n  styling:\n    border_rules: \"所有文字框、圖片容器與卡片邊緣，必須加上 2px - 3px 的粗黑色實線邊框\"\n    shadow_effect: \"啟用重影黑影（Hard Drop Shadows），使視覺元件呈現如同復古貼紙堆疊的物理感\"\n    vibes: \"模擬 Instagram 限時動態、手寫便利貼（Post-it）與拼貼塗鴉，營造親切、不妥協、活力充沛的氛圍\"\n  color_palette:\n    primary: \"高彩度糖果色 (High-Chroma Candy Colors)\"\n    accent: \"螢光黃 (Fluorescent Yellow)、酸橙綠 (Lime Green)\"\n    neutral: \"米白底色搭配碳黑框線，拒絕死板純白\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 40\n  prohibited_elements: [\"長篇大論\", \"學術官腔\", \"冰冷硬直的數據羅列\"]\n  writing_style: \"口語化、具高度煽動力與情緒渲染力的對話感。句首與關鍵處必須適度穿插 Emoji（例如：💥, 🎨, 🚀, 👀）\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 痛點大吐槽：用幽默好笑的例子切入目前市面上的不合理現狀\"\n    - \"2. 創意點子大爆發：一頁展示一個顛覆傳統的瘋狂好點子\"\n    - \"3. 成果與未來願景：用高彩度圖形模組展示我們對未來的想像\"\n    - \"4. 行動呼籲：給觀眾一個極具社群感的 Call to Action（CTA）\""
    },
    {
        "id": "style-02",
        "tag": "活力數位",
        "name": "⚡ 運動能量風格 (Sports Energy)",
        "description": "利用傾斜幾何與強烈高能對比色，創造極致的速度感與視覺張力。",
        "applicable": "業務團隊目標大會、競爭對手分析、健身/遊戲/科技新品提案",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：運動能量風格 (Sports Energy)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Sports Energy Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    dynamic_shapes: true\n    tilted_angle: \"所有色塊、圖片容器與裝飾元素必須強制右傾斜 15 度，或使用平行四邊形（Parallelogram）\"\n    split_lines: \"使用粗獷、銳利的斜向分割線（Slashed Cuts）來區分各個資訊欄位\"\n  styling:\n    motion_blur: \"背景與點綴條紋需呈現動態條紋感，引導觀眾視線向前延伸\"\n    vibes: \"運動跑道、賽車場上的瞬息萬變，強烈激發團隊成員的戰鬥力與危機意識\"\n  color_palette:\n    primary: \"極速黃 (Speed Yellow)、火焰橙 (Blaze Orange)\"\n    background: \"碳黑 (Carbon Black) 或 深邃灰 (Deep Charcoal)，營造暗色系的高級競技感\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 40\n  prohibited_elements: [\"被動句式\", \"冗長鋪陳\", \"委婉推託之詞\"]\n  writing_style: \"高能量、爆發式文案。大量使用高強度、指向明確的主動動詞（例如：擊碎、突破、超越、碾壓、狂飆）。避免多餘的助詞\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 危機/目標宣告：指出不得不突破的燃眉之急與絕對死線\"\n    - \"2. 戰術解鎖：一頁一戰術，以強烈的傾斜卡片展示核心突圍手段\"\n    - \"3. 競爭力對決：使用高對比雙欄，一針見血對抗主要競爭對手\"\n    - \"4. 全力衝刺：終極目標數據的具象化，號召團隊全員全速前進\""
    },
    {
        "id": "style-03",
        "tag": "活力數位",
        "name": "🏛️ 古典普普風格 (Classical Pop)",
        "description": "將希臘羅馬古典藝術與現代消費符號強制碰撞，形成高記憶點的違和趣味。",
        "applicable": "廣告創意提案、Z 世代趨勢報告、新舊融合主題、尾牙/競賽開場",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：古典普普風格 (Classical Pop)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Classical Pop Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    collage_style: \"極限違和感拼貼 (Anachronistic Collage)\"\n    visual_clash: \"將莊嚴優雅的希臘羅馬大理石雕像、文藝復興名畫，強行搭配現代叛逆消費符號（如：墨鏡、泡泡糖、玩自拍、喝汽水）\"\n  styling:\n    background_patterns: \"使用半調網點（Halftone Dots）或孟菲斯（Memphis）幾何圖案作為點綴底紋\"\n    vibes: \"藝術感與荒謬惡搞並存，利用高級藝術與街頭文化的強烈反差，營造過目難忘的視覺幽默與前衛美感\"\n  color_palette:\n    primary: \"古典大理石灰 (Statue Grey)\"\n    accent: \"螢光桃紅 (Shocking Pink)、酸性藍 (Acid Blue)\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 45\n  prohibited_elements: [\"死板的純技術說明\", \"照本宣科的簡報\"]\n  writing_style: \"『一本正經地講幹話』。標題必須顯得極為莊嚴宏大、富含歷史感；但內文與數據說明卻要直白、辛辣、富含 Z 世代的自嘲與幽默\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 古老包袱：列出傳統思維中沉重、令人昏昏欲睡的古板現狀\"\n    - \"2. 荒謬吐槽：揭露當前痛點在現代人眼中有多麼荒謬可笑\"\n    - \"3. 顛覆性創新解法：將新技術/新創意包裝為『新古典啟蒙』展示\"\n    - \"4. 破圈宣言：呼籲大膽打破框架，跨界狂歡\""
    },
    {
        "id": "style-04",
        "tag": "文青質感",
        "name": "📖 現代雜誌風格 (Modern Magazine)",
        "description": "模擬高級生活雜誌排版，捨棄一切多餘邊框，以高雅留白與精美比例取勝。",
        "applicable": "品牌形象手冊、香氛家居行銷企劃、人資文化手冊、藝術展覽導覽",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：現代雜誌風格 (Modern Magazine)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Modern Magazine Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    layout_type: \"極簡無邊框 (Editorial Sans-Border)\"\n    whitespace_ratio: \"幻燈片四周保留至少 15%-20% 的『呼吸留白』，嚴禁使用任何實線邊框或明顯的表格隔線\"\n  styling:\n    typography_contrast: \"完全依靠超大字體（模擬雜誌頭條）與極小註解文字的強烈比例對比，來引導閱讀視線\"\n    vibes: \"散發類似《Vogue》、《Kinfolk》或《Cereal》的高端實體印刷品氛圍，強調高級感、慢步調、從容不迫\"\n  color_palette:\n    background: \"暖乳白色 (Warm Milk)、純淨燕麥色 (Oatmeal)\"\n    primary: \"深炭灰 (Charcoal Black)\"\n    accent: \"柔和鼠尾草綠 (Sage Green) 或 乾枯玫瑰粉 (Dusty Rose)\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 35\n  prohibited_elements: [\"硬性推銷文句\", \"過度飽和的圖表\", \"重複堆砌的條列句\"]\n  writing_style: \"優雅、克制、極具生活品味。用字遣詞需溫和知性，多用描繪生活型態或品牌哲學的詞彙，少用冰冷硬實的推銷字眼\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 哲學導入：以一句富含詩意與生活啟發的話作為前言，勾勒願景\"\n    - \"2. 經典剖析：用極簡的『一頁一核心』，展示產品/方案的最美細節\"\n    - \"3. 空間/生活型態：將方案融入日常，展示其在實際情境中的鬆弛美感\"\n    - \"4. 溫和致謝：以簡約留白和優雅文句收尾\""
    },
    {
        "id": "style-05",
        "tag": "文青質感",
        "name": "🧱 材質風格 (Texture Style)",
        "description": "強調厚重觸覺美感，融入清水模、磨砂玻璃與金屬壓鑄刻痕。",
        "applicable": "建築室內設計作品集、房產開發案介紹、高階硬體發表、高階財管服務",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：材質風格 (Texture Style)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Texture Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    grid: \"穩重、結構化的對稱格線系統，傳達嚴謹與安定感\"\n  styling:\n    tactile_textures: \"背景絕非單純平塗，必須帶有『清水模（Exposed Concrete）』、『細沙磨砂玻璃』或『拉絲金屬（Brushed Metal）』的微米級實體質感\"\n    depth_effect: \"文字與卡片物件需融入微弱的內陰影（Inner Shadows），營造出彷彿在石材、鋼板上『深雕拓印』或『金屬壓鑄』的立體凹陷層次\"\n    vibes: \"沉穩、不輕浮、具備匠人手作的實體物理分量，令人聯想到高級美術館建築或頂奢工藝品\"\n  color_palette:\n    background: \"清水模深灰 (Concrete Grey) 或 礦物暖灰 (Mineral Grey)\"\n    text: \"蝕刻古銅金 (Etched Bronze) 或 鋼琴烤漆黑\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 45\n  prohibited_elements: [\"華而不實的修飾\", \"情緒化的驚嘆號\", \"跳躍的口俗俚語\"]\n  writing_style: \"專業、理性、權威。語氣需散發著無懈可擊的信任感與頂級工程學美感，用字精確洗鍊，直接用結構化陳述來說服觀眾\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 基石起源：介紹堅不可摧的核心基礎、初心與歷史脈絡\"\n    - \"2. 硬核工藝細節：一頁專注剖析一個關鍵材質、結構 or 技術指標\"\n    - \"3. 物理/商業實證：用穩健的大方塊展示經得起考驗的數據成果\"\n    - \"4. 永恆承諾：重申對品質、安全與長期耐用性的無上追求\""
    },
    {
        "id": "style-06",
        "tag": "文青質感",
        "name": "🖌️ 一筆畫水彩風格 (One-Line Art Watercolor)",
        "description": "極簡連續鋼筆線條與低飽和度莫蘭迪色系結合，展現成熟知性美。",
        "applicable": "保養香氛品牌、瑜伽身心靈課程、心理諮商教育、優雅知性女性向主題",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：一筆畫水彩風格 (One-Line Art Watercolor)\n# ==========================================\n\nstyle_config:\n  theme_name: \"One-Line Art Watercolor Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    lines: \"所有裝飾性圖示、人物輪廓或邊框，僅能使用單一連續、不中斷的細黑色鋼筆線（One-Line Art）勾勒\"\n  styling:\n    watercolor_wash: \"背景或卡片底色點綴低飽和度、半透明、邊緣帶有暈染水漬效果的水彩塊（Watercolor Wash）\"\n    vibes: \"無任何侵略性與生硬直角，極度溫柔、安靜、知性。散發成熟大人的生活美學與內在自我沉澱氛圍\"\n  color_palette:\n    background: \"微透粉的象牙白\"\n    watercolor: \"莫蘭迪粉 (Dusty Pink)、溫潤灰綠 (Sage)、薄霧藍 (Mist Blue)\"\n    strokes: \"極細木炭灰線\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 40\n  prohibited_elements: [\"生硬冷僻的IT黑話\", \"侵略性的業務話術\", \"咆哮式的標題\"]\n  writing_style: \"溫暖、具備同理心與情感共鳴。文案要像一篇輕柔的手寫信，注重人性的溫度，循序漸進地引導與撫慰讀者\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 溫柔傾聽：點出我們內心深處被忽視的疲憊、痛點或渴望\"\n    - \"2. 療癒之光：引入能夠帶來舒緩、轉機或優雅提升的核心概念\"\n    - \"3. 漸進改變：用柔和的水彩塊承載步驟，輕柔地說明改善流程\"\n    - \"4. 平靜歸處：以優雅平靜的一句話，邀請觀眾共同踏上旅程\""
    },
    {
        "id": "style-07",
        "tag": "文青質感",
        "name": "🌸 日式和風風格 (Traditional Japanese)",
        "description": "傳統和紙金箔質感，打破對稱西洋格網，營造枯山水般的不對稱流動。",
        "applicable": "觀光旅遊、日式餐飲行銷、地方創生專案、跨國商務文化交流",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：日式和風風格 (Traditional Japanese)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Traditional Japanese Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    assymmetry: \"打破歐美教條式的絕對對稱與網格，採用『枯山水』般的不對稱美學，刻意保留空白角落\"\n    flow: \"排版引導線條應如和服衣褶、隨風飄散的櫻花，或流水般柔美不規則的『流動感』\"\n  styling:\n    textures: \"背景與物件卡片必須融入『手作和紙（Washi）』、偶爾穿插象徵尊貴的『金箔（Gold Leaf）』與『友禪染布料』細緻紋理\"\n    vibes: \"內斂、富有禪意、對細節懷有極致職人精神。大自然與人文歷史的和諧共生\"\n  color_palette:\n    background: \"極淡米和紙白\"\n    accents: \"緋紅 (Scarlet Red)、靛青 (Indigo Blue)、微亮箔金\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 40\n  prohibited_elements: [\"王婆賣瓜的自我吹噓\", \"毫無意境的字眼\", \"雜亂無章的英文縮寫\"]\n  writing_style: \"謙遜、優雅、富有哲理深度。話不說滿，利用『留白美學（Ma）』讓讀者在字裡行間自行品味、感受產品或文化的厚度\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 緣起/致禮：謙和地帶出歷史由來、文化傳承或事物美好的緣起\"\n    - \"2. 職人造物：聚焦單一產品/方案，極致細膩地訴說背後的打磨工序\"\n    - \"3. 自然交融：展示本方案如何為使用者帶來和諧、平衡與心靈滿足\"\n    - \"4. 餘韻悠長：以一句充滿東方智慧或感謝之詞，留下不盡的餘韻\""
    },
    {
        "id": "style-08",
        "tag": "商務科技",
        "name": "👾 霓虹拼貼風格 (Neon Collage)",
        "description": "懷舊稿紙溫暖底色撞擊極現代螢光幾何圖形，呈現超現實未來科技感。",
        "applicable": "AI與區塊鏈技術白皮書發表、時尚趨勢預測、前衛學術演講(TED Talk)",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：霓虹拼貼風格 (Neon Collage)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Neon Collage Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    contrast: \"強烈的新舊材質、復古未來碰撞 (Retro-futuristic Clash)\"\n  styling:\n    clash_pattern: \"最底層背景使用溫暖、微泛黃的『懷舊米色九宮格稿紙』或『老報紙/牛皮紙底紋』，但上方物件與標記必須使用高亮度、刺眼的『螢光霓虹色幾何色塊與指示箭頭』\"\n    vibes: \"傳達『立足於深厚經典智慧，大膽進行顛覆性科技創新』的超現實賽博朋克美學\"\n  color_palette:\n    background: \"復古稿紙黃 (Warm Paper Beige)\"\n    neon: \"螢光黃 (Fluorescent Neon Yellow)、電子藍 (Cyber Blue)\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 45\n  prohibited_elements: [\"無趣的平庸文案\", \"保守中庸的商業套話\"]\n  writing_style: \"前衛、實驗性、極富科技洞察力。語氣冷峻而自信，敢於宣告新時代的到來，使用富有技術張力、思想領袖感的詞彙\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 智慧基石：引述經典傳統理論、手稿 or 歷史悠久的難題作為基石\"\n    - \"2. 科技變異：一頁介紹霓虹前沿技術如何粗暴而完美地打破上述瓶頸\"\n    - \"3. 數位拼貼藍圖：展示大數據、複雜演算法交融後生成的超現實新藍圖\"\n    - \"4. 未來啟航：號召敢於冒險的人共同進入下一個霓虹數位世代\""
    },
    {
        "id": "style-09",
        "tag": "商務科技",
        "name": "📱 裝置模型風格 (Device Mockup)",
        "description": "數位硬體視角置頂，純白或純黑背景，極限突出 App/SaaS 的 UI/UX 設計。",
        "applicable": "SaaS產品發表會、UI/UX設計師作品集、科技新創募資、數位行銷工具介紹",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：裝置模型風格 (Device Mockup)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Device Mockup Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    device_ratio: \"幻燈片核心必須有數位硬體（如：iPhone, iPad, MacBook, Apple Watch）的極致高精密度邊框模型，裝置畫面必須佔據版面 70% ~ 80%\"\n  styling:\n    backdrop: \"背景限定為極致乾淨的『無暇影棚白 (Studio White)』或『暗室無光黑 (Studio Black)』\"\n    focus: \"徹底消除一切不必要的裝飾、斑點或多餘線條。讓觀眾的視線完全聚焦於硬體螢幕中所呈現的 UI 界面細節與流暢操作\"\n    vibes: \"宛如 Apple 新品發表會的 Keynote 投影片，強調絕對的專注、科技工藝的無瑕與純粹\"\n  color_palette:\n    background: \"極致灰白 (Studio Grey-White)\"\n    accent: \"深沉科技黑\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 40\n  prohibited_elements: [\"不著邊際的空泛修飾\", \"大段落文字\", \"花俏無意義的裝飾貼圖\"]\n  writing_style: \"產品與功能導向。極其乾淨利落，使用指引式的文案。多使用『點擊、一鍵流轉、無縫串接、即時呈現』等指向具體操作的詞語\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 舞台開口：裝置首頁震撼呈現，展示主介面美學與產品的核心價值主張\"\n    - \"2. 核心功能卡：將畫面聚焦在 iPhone/Mac 內部核心 UI，展示最亮眼的功能\"\n    - \"3. 無縫工作流：連續展示用戶從步驟 A ➜ 步驟 B 的絲滑無縫操作體驗\"\n    - \"4. 極致數據：在大螢幕裝置中顯示最終的轉換率、效率飆升指標\""
    },
    {
        "id": "style-10",
        "tag": "商務科技",
        "name": "🏙️ 3D 數位城市風格 (3D Digital Urban)",
        "description": "等角 45 度立體微縮模型，將抽象的物聯網與智慧系統轉化為精密數位孿生。",
        "applicable": "物聯網(IoT)解決方案、物流供應鏈管理、大型軟體系統架構、智慧城市開發",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：3D 數位城市風格 (3D Digital Urban)\n# ==========================================\n\nstyle_config:\n  theme_name: \"3D Digital Urban Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  geometry:\n    perspective: \"強制採用 3D 等角投影視圖（Isometric 45-degree Perspective），使版面具備高度立體空間感\"\n    components: \"將抽象數據、伺服器節點、物流通道具象化為精緻、發光的『3D 微縮建築積木』、並使用立體連線（Neon Cables）相互連結\"\n  styling:\n    glow: \"暗色背景下，線條與節點自帶微弱的霓虹發光效果（Cyber Glow）\"\n    vibes: \"宛如經典遊戲《SimCity（模擬城市）》高科技版或頂級 3D CAD 建模系統，展現數位孿生（Digital Twin）的精準、複雜系統與掌控感\"\n  color_palette:\n    background: \"極深幽邃藍 (Midnight Blue)\"\n    glowing: \"螢光綠 (Fluorescent Green)、電光藍 (Electric Blue)\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 45\n  prohibited_elements: [\"雜亂的生活化口語\", \"過於感性的修飾\", \"大塊毫無結構的長句\"]\n  writing_style: \"宏觀、客觀、系統化。專注於闡述『節點、網絡、傳輸、反饋、同步、優化』。用字遣詞需充滿架構師、系統分析師的宏觀與精確\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 全域沙盤：展示城市/系統的 3D 全景等角視圖，定義宏觀框架與核心規模\"\n    - \"2. 骨幹網絡分解：剖析底層物理管線與數據中心『核心』，指出目前的瓶頸\"\n    - \"3. 智慧調度引擎：聚焦介紹智慧演算法/新系統接入後的運作變化\"\n    - \"4. 高效運轉實證：展示全面互聯、即時反饋後的系統高效率、低能耗數據\""
    },
    {
        "id": "style-11",
        "tag": "麥肯錫高階",
        "name": "🔺 高階顧問風 (The Minto Pyramid Principle)",
        "description": "金字塔原理結論先行，強制完整句子行動標題，呈現專業理性的戰略諮詢高數據密度排版。",
        "applicable": "2026年度營運策略、市場擴展方案、高階主管決策匯報、投資人回報",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：高階顧問風 (The Minto Pyramid Principle)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Minto Pyramid Strategy\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎯 2. 金字塔原理與行動標題約束 (Logic & Headers)\nlogic_constraints:\n  top_down_approach: \"每頁資訊架構必須遵循結論先行。先給出最核心決策結論，再條列支持該結論的關鍵子論據，遵循 MECE（相互獨立，完全窮盡）原則\"\n  action_titles: \"【強制要求】每張幻燈片的大標題『必須是一個完整、帶有動作或因果關係的句子』，直接陳述該頁的核心洞察或決策依據，嚴禁使用無意義的單純名詞。\"\n  examples:\n    correct: \"因供應鏈中斷，導致第二季市佔率下滑 5%，需啟動本土替代方案\"\n    incorrect: \"第二季市佔率分析與探討\"\n\n# 📊 3. 顧問式佈局與高數據密度 (Layout & Alignment)\nlayout_constraints:\n  layout_type: \"結構化對齊 (Structured Layout)，版面必須極致整潔，體現專業理性\"\n  grid: \"優先採用『左側文字核心邏輯，右側關鍵數據/圖表指標』或『三欄式戰略對策對比（方案一/方案二/方案三）』的並排結構\"\n  alignment: \"所有內文清單一律靠左對齊，絕不居中。每頁內容底部請務必預留空間，以 [資料來源：來源文件名稱] 的格式嚴格標示數據出處\"\n  tags:\n    key_insight: \"[關鍵洞察]\"\n    risk_indicator: \"[風險提示]\"\n\n# ✍️ 4. 文字精煉與專業語氣 (Text & Tone Constraints)\ntext_rules:\n  word_count_limit_per_slide: 60\n  prohibited_elements: [\"任何感性敘述\", \"故事性鋪陳\", \"非必要的裝飾性文句\"]\n  tone: \"語氣必須如同手術刀般冷靜精確、高度理性、決策導向。多使用『優化、提升、減緩、轉型、驅動、重組』等高階經理人商務語彙\""
    },
    {
        "id": "style-12",
        "tag": "麥肯錫高階",
        "name": "🧊 2.5D 立體風 (The Digital Sandbox)",
        "description": "積木模組化玩具精密感，極高留白與低密度文字，適合展現分層流向。",
        "applicable": "智慧城市物流網格架構、系統流程優化、複雜數據依賴關係展示",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：2.5D 立體風 (The Digital Sandbox)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Digital Sandbox Style\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🧱 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  modular_components: \"請將每個系統物件、節點或步驟，視為一個獨立的『積木零件』。每一頁幻燈片必須有清晰的幾何邊界感，資訊區塊要像方塊般整齊排列，拒絕雜亂無章的任意排版\"\n  layered_pipeline: \"本風格極度適合呈現流程與架構。在展示系統時，請依照『由上至下（Top-Down 層次）』或『由左至右（Pipeline 流向）』的邏輯推進，讓觀眾一眼能看出各部件之間的依賴與串聯關係\"\n  environmental_labels:\n    core_path: \"[核心]\"\n    success_path: \"[成功]\"\n    risk_point: \"[警示]\"\n\n# 🎯 3. 內容精簡與精確度規則 (Precision Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 40\n  prohibited_elements: [\"長篇大論的複雜長句\", \"非結構化的段落\", \"故事化敘述\"]\n  layout_density: \"如同精緻的 3D 模型零件，文字必須極度精煉，留出大量空間以營造空間深度感。說明必須拆解成『短句』或『精準的步驟節點（例如：步驟 1 ➜ 步驟 2 ➜ 步驟 3）』\"\n  copywriting_style: \"文案語氣需具備工程、科技與結構感。標題應具備空間與元件質感（例如：使用『全域物流網格節點』而非傳統的『物流配送流程介紹』）\"\n\n# 📐 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 全域視角首頁 (Global Overview)：精煉的標題與一句話定義的系統架構核心\"\n    - \"2. 底層痛點 (Infrastructure Flaws)：條列式列出目前架構、流程或物流存在的瓶頸點 [警示]\"\n    - \"3. 分層解析 (Layer-by-Layer Modules)：每一頁只專注介紹一個核心層次（如：基礎硬體層 ➜ 數據傳輸層 ➜ 應用表現層）或一個流程節點\"\n    - \"4. 流暢運行效益 (Optimized Flow)：以具備對比性的精準短句，呈現優化後的流暢路徑 [成功]\""
    },
    {
        "id": "style-13",
        "tag": "麥肯錫高階",
        "name": "🗂️ 軟體服務風 (Soft UI / Card-Based)",
        "description": "極致留白的App介面質感，儀表板式雙欄佈局，操作導向的介面化文案。",
        "applicable": "企業內部簽核系統優化方案、CRM與管理後台升級展示、SaaS平台功能介紹",
        "instructions": "# ==========================================\n# NotebookLM 簡報風格配置文件：軟體服務風 (Soft UI / Card-Based)\n# ==========================================\n\nstyle_config:\n  theme_name: \"Soft UI Card System\"\n  version: \"2026.1\"\n\n# 🛠️ 1. 簡報基本資訊\npresentation_info:\n  title: \"{{THEME_TITLE}}\"\n  target_pages: \"{{TARGET_PAGES}}\"\n  language: \"zh-TW\"\n\n# 🎨 2. 簡報視覺佈局約束 (Layout Constraints)\nvisual_constraints:\n  card_based_structure: \"請將每張幻燈片視為一個乾淨的 App 介面。資訊必須『模組化』拆解，一個區塊只講一件事情，各區塊之間要保持明顯的留白（Whitespace），視覺上絕不擁擠\"\n  dashboard_layout: \"在展示功能或流程時，優先採用『左側核心標題/短句，右側核心數據或條列組件』的左右雙欄結構，來模擬現代 SaaS 軟體後台的層次感\"\n  pill_labels: \"若遇到重要關鍵字、步驟狀態（如：高效、安全、全新上線、已完成），請一律使用 [標籤：文字] 的格式獨立標示\"\n\n# ✍️ 3. 內容精簡與文案規則 (Text Rules)\ncontent_rules:\n  word_count_limit_per_slide: 50\n  prohibited_elements: [\"長篇段落\", \"感性的故事鋪陳\", \"起承轉合的虛言\"]\n  text_density: \"每張幻燈片的總字數請嚴格控制在 40 到 50 字以內。過多的文字會破壞軟體介面的秩序感。所有說明必須拆解成精簡的『短句』或『條列式清單（Bullet Points）』\"\n  copywriting_style: \"標題與內文請使用現代軟體服務的精準、操作導向語氣。例如：使用『全方位數據監測』而非傳統的『系統監控功能介紹』\"\n\n# 📑 4. 簡報推進邏輯 (Slide Flow)\nflow_logic:\n  sequence:\n    - \"1. 產品/方案首頁 (Dashboard Home)：精煉的標題與核心一句話價值主張\"\n    - \"2. 核心痛點 (System Issues)：條列式列出目前面臨的問題或系統痛點\"\n    - \"3. 功能與流程展示 (Features & Modules)：每一頁只專注介紹一個核心功能卡片或流程節點\"\n    - \"4. 預期效益 (Metrics Dashboard)：以具備對比性的短句呈現優化後的數據 or 效益\""
    },
];