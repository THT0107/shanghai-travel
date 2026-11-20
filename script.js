/**
 * SHANGHAI GUIDE · 上海旅行指南 / 상하이 여행 가이드
 * Urban Trendy Editorial Travel Guide Application
 * Vanilla JavaScript (No frameworks, runs directly in browser)
 */

(function () {
  'use strict';

  // --- 1. Comprehensive Bilingual Dataset ---
  const ATTRACTIONS_DATA = [
    {
      id: 'bund',
      type: 'attraction',
      category: 'landmark',
      categoryNameCN: '城市地标',
      categoryNameKR: '도시 랜드마크',
      titleCN: '外滩 (The Bund)',
      titleKR: '와이탄 (더 번드)',
      titleEN: 'The Bund Historical Waterfront',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2015_The_Bund%2C_Shanghai-_Hong_Kong_and_Shanghai_Bank%2C_1923_%28left%29_%26_Customs_House%2C_1927_%28right%29.jpg/960px-2015_The_Bund%2C_Shanghai-_Hong_Kong_and_Shanghai_Bank%2C_1923_%28left%29_%26_Customs_House%2C_1927_%28right%29.jpg',
      altText: '上海外滩万国历史建筑群(海关大楼与汇丰银行大楼) / 상하이 와이탄 만국 건축물 (해관대루 & HSBC 빌딩)',
      descCN: '百年万国建筑博览群与黄浦江对岸陆家嘴摩天大楼隔江相望，是上海最具标志性的城市风景线，暮色降临后华灯初上格外震撼。',
      descKR: '100년 역사의 만국 건축 박람회이자 황푸강 맞은편 루자쭈이 현대 마천루와 마주보는 상하이 최고의 상징적 명소. 환상적인 야경을 자랑합니다.',
      metroCN: '地铁2号线 / 10号线 南京东路站 (步行约10分钟)',
      metroKR: '지하철 2호선 / 10호선 난징둥루역 (도보 약 10분)',
      tipsCN: '推荐傍晚18:30-19:00前往，可同时拍摄日落与亮灯瞬间。',
      tipsKR: '일몰과 조명이 켜지는 순간을 모두 담으려면 18:30~19:00 방문을 추천합니다.',
      noticeCN: '* 景观照明开启时间随季节变动，请以官方现场通告为准。',
      noticeKR: '* 야간 경관 조명 점등 시간은 계절에 따라 상이하므로 공식 안내를 확인하세요.'
    },
    {
      id: 'oriental_pearl',
      type: 'attraction',
      category: 'landmark',
      categoryNameCN: '城市地标',
      categoryNameKR: '도시 랜드마크',
      titleCN: '东方明珠广播电视塔',
      titleKR: '동방명주 방송탑',
      titleEN: 'Oriental Pearl TV Tower',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Oriental_Pearl_Tower_20251126.jpg/960px-Oriental_Pearl_Tower_20251126.jpg',
      altText: '上海陆家嘴东方明珠广播电视塔全景 / 상하이 푸둥 루자쭈이 동방명주 방송탑 전경',
      descCN: '高468米耸立于陆家嘴，拥有259米全透明悬空观光廊、旋转餐厅与老上海历史陈列馆，能360度饱览浦江两岸壮阔盛景。',
      descKR: '높이 468m의 루자쭈이 랜드마크. 259m 투명 유리 스카이워크와 상하이 역사박물관이 있어 도시 전경을 360도로 한눈에 조망할 수 있습니다.',
      metroCN: '地铁2号线 / 14号线 陆家嘴站 (2号口直达)',
      metroKR: '지하철 2호선 / 14호선 루자쭈이역 (2번 출구 직통)',
      tipsCN: '悬空玻璃回廊拍照效果极佳，建议避开周末高峰排队。',
      tipsKR: '투명 유리 회랑 포토존이 인기이며, 주말 인파를 피해 평일 낮이나 늦은 오후 방문을 추천합니다.',
      noticeCN: '* 观光各球体票价及高空项目开放状态需提前在官方渠道确认。',
      noticeKR: '* 전망대 층별 티켓 요금 및 체험 시설 운영 여부는 공식 예매처 확인 필요.'
    },
    {
      id: 'yu_garden',
      type: 'attraction',
      category: 'history',
      categoryNameCN: '历史人文',
      categoryNameKR: '역사·문화',
      titleCN: '豫园与老城隍庙',
      titleKR: '예원 및 옛 성황묘',
      titleEN: 'Yu Garden & City God Temple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Shanghai_-_Yu_Garden_-_0035.jpg/960px-Shanghai_-_Yu_Garden_-_0035.jpg',
      altText: '上海豫园古典江南园林亭台楼阁与假山池沼 / 상하이 예원 강남 고전 정원 누각과 연못',
      descCN: '始建于明代的江南古典园林，亭台楼阁参差、奇石池鱼相映，紧邻热闹的九曲桥与老城隍庙特色小吃街区，洋溢浓厚老上海烟火气。',
      descKR: '명나라 시대에 조성된 강남 고전 정원으로 수려한 누각과 연못이 어우러진 곳입니다. 활기찬 구곡교와 성황묘 전통 먹거리 골목이 바로 인접해 있습니다.',
      metroCN: '地铁10号线 / 14号线 豫园站 (7号口出站即达)',
      metroKR: '지하철 10호선 / 14호선 예원역 (7번 출구 도보 3분)',
      tipsCN: '园林内部建议清晨开园时游览，九曲桥湖心亭茶楼值得驻足品茗。',
      tipsKR: '예원 내부 정원은 한적한 아침 시간대에 방문하고, 구곡교 호심정 찻집에서 차 한잔의 여유를 즐겨보세요.',
      noticeCN: '* 豫园内园逢周一闭园保养，节假日开放时间请以官方公示为准。',
      noticeKR: '* 예원 내부 정원은 매주 월요일 휴관할 수 있으며 명절 운영 일정은 공식 공지를 참조하세요.'
    },
    {
      id: 'disneyland',
      type: 'attraction',
      category: 'leisure',
      categoryNameCN: '休闲娱乐',
      categoryNameKR: '테마파크·레저',
      titleCN: '上海迪士尼乐园',
      titleKR: '상하이 디즈니랜드',
      titleEN: 'Shanghai Disneyland Resort',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Shanghai_Disneyland_Enchanted_Storybook_Castle.jpg/960px-Shanghai_Disneyland_Enchanted_Storybook_Castle.jpg',
      altText: '上海迪士尼度假区奇幻童话城堡实景 / 상하이 디즈니랜드 기환동화성 캐슬 전경',
      descCN: '中国大陆首座迪士尼度假区，拥有世界最大的奇幻童话城堡、全球首发“创极速光轮”与震撼的加勒比海盗主题区，奇妙梦幻不容错过。',
      descKR: '중국 본토 최초의 디즈니 리조트. 세계 최대 크기의 디즈니 캐슬, 압도적 속도감의 트론(TRON)과 캐리비안의 해적 어트랙션이 백미입니다.',
      metroCN: '地铁11号线 迪士尼站 (1/2/4号口直通乐园入口)',
      metroKR: '지하철 11호선 디즈니역 (1/2/4번 출구 파크 직통)',
      tipsCN: '务必提前下载官方App绑定门票，早享卡或预约排队等候卡能省大量时间。',
      tipsKR: '공식 상하이 디즈니 앱을 미리 다운받아 티켓을 등록하면 대기 시간 확인 및 패스 예약에 필수적입니다.',
      noticeCN: '* 门票采取实名制预订，城堡幻影秀及演出时刻受天气与安全管控调整。',
      noticeKR: '* 티켓은 실명 사전 예약 필수이며, 나이트 불꽃쇼 시간은 당일 날씨에 따라 변동될 수 있습니다.'
    },
    {
      id: 'wukang_road',
      type: 'attraction',
      category: 'trend',
      categoryNameCN: '潮流街区',
      categoryNameKR: '트렌디 거리',
      titleCN: '武康路与梧桐区',
      titleKR: '우캉루 & 플라타너스 거리',
      titleEN: 'Wukang Road & Former Concession',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Wukang_Mansion_20251128.jpg/960px-Wukang_Mansion_20251128.jpg',
      altText: '上海武康路与淮海中路交汇处标志性武康大楼 / 상하이 우캉루 랜드마크 우캉맨션 (노르망디 아파트)',
      descCN: '被誉为“浓缩了百年近代史”的名人路，熨斗形武康大楼是城市经典地标。沿途法国梧桐绿意盎然，聚集众多买手店与独立精品咖啡。',
      descKR: '근대 100년 역사를 품은 우캉루. 다리미 모양의 우캉맨션(노르망디 아파트)과 울창한 플라타너스 가로수길, 감성 카페와 셀렉트숍이 즐비합니다.',
      metroCN: '地铁10号线 / 11号线 交通大学站 (7号口步行5分钟)',
      metroKR: '지하철 10호선 / 11호선 자오퉁대학역 (7번 출구 도보 5분)',
      tipsCN: '淮海中路与武康路交叉口的经典角度是最佳取景地，下午光线最柔和。',
      tipsKR: '화이하이중루와 우캉루 교차로 코너가 우캉맨션의 대표 포토존이며 오후 햇살 아래 사진이 가장 예쁩니다.',
      noticeCN: '* 沿线多为居民住宅与保护建筑，漫步拍照时请轻声细语保持礼貌。',
      noticeKR: '* 거리 내 다수가 실제 주거 구역이므로 관람 및 사진 촬영 시 정숙을 지켜주세요.'
    },
    {
      id: 'shanghai_museum',
      type: 'attraction',
      category: 'history',
      categoryNameCN: '历史人文',
      categoryNameKR: '역사·문화',
      titleCN: '上海博物馆 (人民广场馆/东馆)',
      titleKR: '상하이 박물관 (인민광장관 / 동관)',
      titleEN: 'Shanghai Museum',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2008_Shanghai_People%27s_Square-_Shanghai_Museum_1.jpg/960px-2008_Shanghai_People%27s_Square-_Shanghai_Museum_1.jpg',
      altText: '上海人民广场上海博物馆天圆地方青铜器鼎形建筑 / 상하이 인민광장 상하이 박물관 딩(鼎) 형태 외관',
      descCN: '享誉海内外的顶级古代中国艺术殿堂，青铜器、古陶瓷与历代书画珍藏冠绝全国。“天圆地方”的建筑构造体现东方深邃哲学。',
      descKR: '세계적 명성의 중국 고대 예술품을 소장한 국립 박물관. 청동기, 도자기, 서화 등 국보급 유물이 가득하며 인민광장 중심부에 위치합니다.',
      metroCN: '地铁1号线 / 2号线 / 8号线 人民广场站 (1号口)',
      metroKR: '지하철 1호선 / 2호선 / 8호선 인민광장역 (1번 출구)',
      tipsCN: '常设展免费，但人气特展极为热门，建议提前一周在官方小程序实名预约。',
      tipsKR: '상설전은 무료 관람이나 인기가 많으므로 방문 3~7일 전 공식 미니프로그램 사전 실명 예약 필수입니다.',
      noticeCN: '* 逢周一全天闭馆（国家法定节假日除外），入馆需核验有效身份证件或护照。',
      noticeKR: '* 매주 월요일 정기 휴관(공휴일 제외)이며, 입장 시 여권 등 신분증 확인이 필요합니다.'
    },
    {
      id: 'xintiandi',
      type: 'attraction',
      category: 'trend',
      categoryNameCN: '潮流街区',
      categoryNameKR: '트렌디 거리',
      titleCN: '新天地与石库门',
      titleKR: '신천지 & 스쿠먼 골목',
      titleEN: 'Xintiandi & Shikumen Heritage',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Xintiandi5.jpg/960px-Xintiandi5.jpg',
      altText: '上海新天地传统石库门青砖弄堂建筑 / 상하이 신천지 전통 스쿠먼 벽돌 건축 거리',
      descCN: '以上海近代独特的石库门建筑为基础，结合现代商业与时尚餐饮改造而成。青砖黑门与露天欧陆餐厅相融，尽显海派摩登生活方式。',
      descKR: '상하이 전통 스쿠먼 벽돌 건축과 현대적인 세련된 다이닝이 공존하는 거리. 낮에는 테라스 카페, 밤에는 활기찬 라운지 바 거리로 변모합니다.',
      metroCN: '地铁10号线 / 13号线 一大会址·新天地站 (6号口)',
      metroKR: '지하철 10호선 / 13호선 신천지역 (6번 출구)',
      tipsCN: '附近紧邻中共一大会址与太平桥公园，适合悠闲步行与品尝下午茶。',
      tipsKR: '인근에 타이핑차오 공원과 대한민국 임시정부 청사 유적지가 가까워 도보 연계 코스로 훌륭합니다.',
      noticeCN: '* 开放式公共街区无门票，各独立餐厅与店铺营业时间请参考商户公示。',
      noticeKR: '* 개방형 상업 거리로 별도 입장료가 없으며, 식당 및 매장별 운영 시간이 상이합니다.'
    },
    {
      id: 'jingan_temple',
      type: 'attraction',
      category: 'landmark',
      categoryNameCN: '城市地标',
      categoryNameKR: '도시 랜드마크',
      titleCN: '静安寺与南京西路',
      titleKR: '징안쓰 (정안사) & 난징시루',
      titleEN: 'Jing\'an Temple & West Nanjing Rd',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/%E9%9D%99%E5%AE%89%E5%AF%BA%C2%B7%E4%B8%8A%E6%B5%B7%E9%9D%99%E5%AE%89.jpg/960px-%E9%9D%99%E5%AE%89%E5%AF%BA%C2%B7%E4%B8%8A%E6%B5%B7%E9%9D%99%E5%AE%89.jpg',
      altText: '上海静安寺金碧辉煌的金顶殿堂与现代化商圈摩天楼 / 상하이 정안사 황금빛 전각과 도심 마천루',
      descCN: '坐落于繁华市中心的千年古刹，金顶飞檐在摩天大楼森林中璀璨夺目。入夜灯光映照下金碧辉煌，古今建筑形成震撼的超现实视觉反差。',
      descKR: '현대적인 초고층 빌딩 숲 한가운데 황금빛으로 번쩍이는 유서 깊은 사찰. 상하이의 고대와 현대가 공존하는 극적인 풍경을 선사합니다.',
      metroCN: '地铁2号线 / 7号线 / 14号线 静安寺站 (1号口)',
      metroKR: '지하철 2호선 / 7호선 / 14호선 정안사역 (1번 출구)',
      tipsCN: '晚上站在寺庙对面的过街天桥或商场露台，能拍到最震撼的金顶夜景。',
      tipsKR: '밤에 맞은편 육교나 쇼핑몰 테라스에서 바라보는 정안사의 황금빛 야경이 가장 화려합니다.',
      noticeCN: '* 进寺需购买香花券，重大佛事节日期间客流较大，请遵守现场安检指引。',
      noticeKR: '* 사찰 내부 입장 시 향화권 티켓 구매가 필요하며, 행사 시 통제가 있을 수 있습니다.'
    }
  ];

  const FOODS_DATA = [
    {
      id: 'xiaolongbao',
      type: 'food',
      category: 'dimsum',
      categoryNameCN: '经典点心',
      categoryNameKR: '전통 만두·딤섬',
      titleCN: '南翔小笼包',
      titleKR: '난샹 샤오롱바오 (소롱포)',
      titleEN: 'Nanxiang Soup Dumplings',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Xiaolongbao_Shanghai.jpg/960px-Xiaolongbao_Shanghai.jpg',
      altText: '竹蒸笼内皮薄多汁的传统上海南翔小笼包 / 대나무 찜기에 담긴 정통 상하이 샤오롱바오 (소롱포)',
      descCN: '皮薄如纸、褶纹精致，轻咬破皮即可吸出滚烫鲜醇的浓郁肉汁。蘸上镇江香醋与嫩姜丝，鲜而不腻，回味悠长。',
      descKR: '얇은 만두피 속에 뜨겁고 진한 육즙이 가득 찬 상하이 대표 딤섬. 만두피를 살짝 찢어 육즙을 먼저 음미한 후 생강채 식초를 곁들입니다.',
      flavorTagsCN: ['皮薄汁多', '肉馅紧实', '鲜咸适口'],
      flavorTagsKR: ['얇은 피', '육즙 가득', '단짠 감칠맛'],
      recommendSpotCN: '推荐品尝：豫园南翔馒头店 / 莱莱小笼 / 富春小笼',
      recommendSpotKR: '추천 맛집: 예원 난샹만두점 / 라이라이 샤오롱 / 푸춘 샤오롱',
      proTipCN: '吃法口诀：“轻轻提，慢慢移，先开窗，后喝汤，一吸了之”。',
      proTipKR: '맛있게 먹는 꿀팁: 만두를 살짝 들어 숟가락에 옮긴 뒤 피를 찢어 육즙을 먼저 마신 후 식초를 찍어드세요.'
    },
    {
      id: 'shengjianbao',
      type: 'food',
      category: 'dimsum',
      categoryNameCN: '经典点心',
      categoryNameKR: '전통 만두·딤섬',
      titleCN: '老上海生煎包',
      titleKR: '상하이 성지엔바오 (군만두)',
      titleEN: 'Pan-fried Pork Buns',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sheng_Jian_Bao_on_a_pan.jpg/960px-Sheng_Jian_Bao_on_a_pan.jpg',
      altText: '平底铸铁大锅里刚出炉底部金黄酥脆的生煎包 / 철판에 노릇하게 구워낸 바삭한 상하이식 군만두 (성지엔바오)',
      descCN: '平底铸铁锅煎至底部金黄焦脆，表皮撒满黑芝麻与翠绿香葱。肉馅饱满汤汁迸发，一口咬下外脆内嫩，焦香扑鼻。',
      descKR: '바닥은 황금빛으로 바삭하게 굽고 윗면은 흑깨와 파를 얹어 쪄낸 상하이식 군만두. 바삭함과 육즙의 환상적인 조합을 선사합니다.',
      flavorTagsCN: ['底部金黄酥脆', '爆汁鲜香', '葱芝麻香'],
      flavorTagsKR: ['바삭한 바닥', '터지는 육즙', '고소한 풍미'],
      recommendSpotCN: '推荐品尝：大壶春 (清水派老字号) / 小杨生煎 (混水派连锁)',
      recommendSpotKR: '추천 맛집: 다후춘(전통 바삭식) / 샤오양성지엔(육즙 팡팡 체인)',
      proTipCN: '刚出锅汤汁极其烫口，切忌整颗大口咬，先咬小口吹凉汤汁再食。',
      proTipKR: '주의: 갓 구워낸 만두 속 육즙은 매우 뜨거우니 베어 물기 전 살짝 구멍을 내 식혀 드세요.'
    },
    {
      id: 'congyoubanmian',
      type: 'food',
      category: 'noodles',
      categoryNameCN: '面食主食',
      categoryNameKR: '면류 및 식사',
      titleCN: '开洋葱油拌面',
      titleKR: '카이양 파기름 비빔면',
      titleEN: 'Scallion Oil Noodles with Dried Shrimp',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Shanghai_oil_noodle.jpg',
      altText: '熬出浓香焦葱拌匀的上海经典开洋葱油拌面 / 파기름 향이 듬뿍 밴 상하이 전통 비빔국수 (총요우반미엔)',
      descCN: '将细小香葱用小火慢熬至焦褐酥脆，激发出浓郁复合葱油香，与生抽老抽及开洋（鲜小虾米）均匀包裹劲道面条，简单却极其勾魂。',
      descKR: '노릇하게 태우듯 볶아낸 파기름의 깊은 풍미에 간장 소스와 말린 새우를 버무린 심플하지만 중독성 강한 상하이의 소울 푸드.',
      flavorTagsCN: ['焦葱浓郁', '酱香醇厚', '面条劲道'],
      flavorTagsKR: ['파기름 풍미', '단짠 소스', '쫄깃한 면발'],
      recommendSpotCN: '推荐品尝：沧浪亭 / 顺风港丽 / 逸桂阁老浇头面',
      recommendSpotKR: '추천 맛집: 창랑팅 / 순펑강리 / 이구이거 국수전문점',
      proTipCN: '面条上桌务必在30秒内趁热彻底拌开，让每根面条都裹匀亮泽葱油。',
      proTipKR: '면이 나오면 30초 이내에 빠르게 비벼야 파기름이 면발에 코팅되어 최상의 맛을 냅니다.'
    },
    {
      id: 'hongshaorou',
      type: 'food',
      category: 'cuisine',
      categoryNameCN: '本帮名菜',
      categoryNameKR: '상하이 전통 요리',
      titleCN: '本帮秘制红烧肉',
      titleKR: '상하이 정통 홍소육',
      titleEN: 'Shanghai Braised Pork Belly',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Food_%E8%80%81%E5%90%89%E5%A3%AB%2C_%E4%B8%8A%E6%B5%B7%E8%8F%9C%2C_%E6%BB%AC%E8%8F%9C%2C_%E6%9C%AC%E5%B9%AB%E8%8F%9C%2C_%E4%B8%8A%E6%B5%B7%2C_%E4%B8%AD%E8%8F%AF%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9C%8B%2C_%E4%B8%AD%E5%9C%8B%2C_Shanghai%2C_People%27s_Republic_of_China%2C_PRC%2C_China_%2830166079710%29.jpg/960px-Food_%E8%80%81%E5%90%89%E5%A3%AB%2C_%E4%B8%8A%E6%B5%B7%E8%8F%9C%2C_%E6%BB%AC%E8%8F%9C%2C_%E6%9C%AC%E5%B9%AB%E8%8F%9C%2C_%E4%B8%8A%E6%B5%B7%2C_%E4%B8%AD%E8%8F%AF%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9C%8B%2C_%E4%B8%AD%E5%9C%8B%2C_Shanghai%2C_People%27s_Republic_of_China%2C_PRC%2C_China_%2830166079710%29.jpg',
      altText: '老吉士本帮菜馆秘制浓油赤酱红烧肉 / 상하이 라오지스 식당 정통 홍소육',
      descCN: '“浓油赤酱、肥而不腻、入口即化”的本帮菜灵魂。精选五花肉以老抽、冰糖与黄酒微火慢炖，肉色如红玉琥珀，常搭配吸满肉汁的百叶结。',
      descKR: '진한 소스와 붉은 윤기, 기름지지 않고 입안에서 녹아내리는 상하이 요리의 정수. 푹 조린 삼겹살과 양념을 듬뿍 머금은 건두부 매듭이 조화롭습니다.',
      flavorTagsCN: ['肥瘦相间', '甜咸适口', '软糯浓稠'],
      flavorTagsKR: ['입안에서 살살', '단짠의 정석', '부드러운 식감'],
      recommendSpotCN: '推荐品尝：老吉士酒家 / 圆苑酒家 / 兰亭餐厅',
      recommendSpotKR: '추천 맛집: 라오지스 / 위안위안 / 란팅 레스토랑',
      proTipCN: '一定要配一碗东北优质白米饭，浓郁酱汁浇在米饭上堪称人间至味。',
      proTipKR: '달콤 짭조름한 소스를 따뜻한 흰쌀밥에 얹어 비벼 먹으면 밥 한 공기 순식간에 비워집니다.'
    },
    {
      id: 'paigu_niangao',
      type: 'food',
      category: 'snacks',
      categoryNameCN: '街头甜点',
      categoryNameKR: '길거리 간식·디저트',
      titleCN: '鲜得来排骨年糕',
      titleKR: '상하이 갈비 떡구이 (파이구 니엔가오)',
      titleEN: 'Fried Pork Chop with Rice Cakes',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Xiandelai_Pork_chop_with_Nian_gao-20240106.jpg/960px-Xiandelai_Pork_chop_with_Nian_gao-20240106.jpg',
      altText: '上海老字号鲜得来大排骨配水磨年糕 / 상하이 노포 시엔더라이 튀김 갈비와 쫄깃한 찰떡',
      descCN: '大排经秘料腌制后外皮炸至金黄酥松，配上软糯滑韧的手工水磨年糕，浇上特制甜面酱与上海老牌辣酱油，甜中带辣，回味无穷。',
      descKR: '바삭하게 튀겨낸 두툼한 돼지갈비와 쫄깃한 찰떡을 함께 담아 특제 달콤 칠리 소스(라장유)를 뿌려 먹는 상하이의 유서 깊은 간식.',
      flavorTagsCN: ['外酥里嫩', '软糯弹牙', '辣酱油绝配'],
      flavorTagsKR: ['겉바속촉 갈비', '쫄깃한 찰떡', '특제 소스'],
      recommendSpotCN: '推荐品尝：鲜得来排骨年糕 (云南南路总店)',
      recommendSpotKR: '추천 맛집: 시엔더라이 갈비떡구이 (윈난난루 본점)',
      proTipCN: '一定要淋上上海独有的“泰康黄牌辣酱油”（类似伍斯特酱），酸香开胃。',
      proTipKR: '상하이 명물 노란 라벨의 \'우스터풍 라장유\'를 뿌려 먹으면 느끼함을 잡아줍니다.'
    },
    {
      id: 'crab_noodles',
      type: 'food',
      category: 'noodles',
      categoryNameCN: '面食主食',
      categoryNameKR: '면류 및 식사',
      titleCN: '现拆蟹黄面与蟹粉小笼',
      titleKR: '생 게살 탕바오 & 게살 비빔면',
      titleEN: 'Crab Roe Noodles & Tangbao',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/%E8%8B%8F%E5%B7%9E%E8%9F%B9%E7%B2%89%E9%9D%A2.jpg/960px-%E8%8B%8F%E5%B7%9E%E8%9F%B9%E7%B2%89%E9%9D%A2.jpg',
      altText: '金黄蟹粉蟹黄满满浇在面条上的蟹粉面 / 신선한 게알과 게살이 듬뿍 얹어진 황금빛 게살 비빔면',
      descCN: '人工手拆数只大闸蟹的鲜浓蟹膏与紧实蟹肉，以猪油姜汁炒出金黄透亮的蟹粉，满满浇在劲道细面上，满口尽是湖鲜极致暴击。',
      descKR: '신선한 민물 참게에서 일일이 발라낸 진한 게알과 게살을 듬뿍 올린 호화로운 국수. 입안 가득 고소하고 녹진한 풍미가 가득합니다.',
      flavorTagsCN: ['真材实料', '鲜浓膏黄', '金黄诱人'],
      flavorTagsKR: ['녹진한 게알', '진한 감칠맛', '환상적인 비주얼'],
      recommendSpotCN: '推荐品尝：蟹家大院 (外滩店) / 庄氏隆兴·蟹粉面馆',
      recommendSpotKR: '추천 맛집: 시에지아다위안 (와이탄점) / 좡스롱싱 게살면관',
      proTipCN: '滴入几滴店家特调姜醋，既能衬托蟹黄的清甜，又能温润驱寒。',
      proTipKR: '매장의 특제 생강 식초를 서너 방울 떨어뜨리면 게의 풍미가 더욱 깊어집니다.'
    },
    {
      id: 'guihua_tango',
      type: 'food',
      category: 'snacks',
      categoryNameCN: '街头甜点',
      categoryNameKR: '길거리 간식·디저트',
      titleCN: '桂花糖藕与条头糕',
      titleKR: '계화 연근 조림 & 팥 찰떡',
      titleEN: 'Sweet Osmanthus Lotus Root & Sticky Rice Cake',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Stuffed_lotus_root_with_sticky_rice.jpg/960px-Stuffed_lotus_root_with_sticky_rice.jpg',
      altText: '糯米灌孔浇淋金黄桂花蜜的传统糯米糖藕 / 찹쌀을 채워 달콤하게 조려낸 계화 연근 조림',
      descCN: '清甜莲藕孔中塞满软糯糯米慢煮数小时，淋上金黄芬芳的桂花蜜汁；条头糕软糯拉丝包覆细密豆沙，是江南水乡最温存的甜蜜符号。',
      descKR: '연근 구멍에 찹쌀을 채워 달콤하게 조린 후 은은한 계화(금목서) 꿀을 뿌린 디저트. 팥앙금이 든 쫄깃한 찰떡과 함께 즐기는 전통 후식입니다.',
      flavorTagsCN: ['桂花芬芳', '软糯香甜', '传统茶点'],
      flavorTagsKR: ['은은한 꽃향', '달콤 쫄깃', '전통 디저트'],
      recommendSpotCN: '推荐品尝：沈大成 (南京东路步行街总店) / 王家沙点心店',
      recommendSpotKR: '추천 맛집: 선다청 (난징둥루 본점) / 왕지아샤 딤섬',
      proTipCN: '沈大成的青团与条头糕常需排队，保质期较短建议当日新鲜品尝。',
      proTipKR: '선다청의 떡류는 방부제가 적어 구입 당일 드시는 것이 가장 부드럽고 맛있습니다.'
    },
    {
      id: 'xunyu',
      type: 'food',
      category: 'cuisine',
      categoryNameCN: '本帮名菜',
      categoryNameKR: '상하이 전통 요리',
      titleCN: '老上海本帮熏鱼 (爆鱼)',
      titleKR: '상하이식 훈제 생선 조림 (쉰위)',
      titleEN: 'Shanghai Crispy Smoked Fish',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Deep-fried_fish_fillets_with_sweet_soy_sauce_%281%29.jpg/960px-Deep-fried_fish_fillets_with_sweet_soy_sauce_%281%29.jpg',
      altText: '大火炸脆浸入甜咸秘汁的上海本帮传统熏鱼(爆鱼) / 바삭하게 튀겨 특제 간장 양념에 절인 상하이식 훈제 생선(쉰위)',
      descCN: '并非烟熏，而是将鲜鱼块大火炸至外表焦脆，趁极热瞬间浸入秘制甜咸五香酱汁中。外脆里嫩，酱汁透骨，冷热皆宜。',
      descKR: '생선 토막을 겉바속촉으로 튀긴 즉시 특제 오향 달콤 간장 양념에 담가 속까지 간이 배게 만든 요리. 상하이 식탁의 대표 전채요리입니다.',
      flavorTagsCN: ['外脆里嫩', '五香甜咸', '下酒头盘'],
      flavorTagsKR: ['겉바속촉', '달콤 짭조름', '최고의 전채요리'],
      recommendSpotCN: '推荐品尝：保罗酒楼 / 上海老饭店 / 绿波廊',
      recommendSpotKR: '추천 맛집: 바오뤄 주루 / 상하이 라오판디엔 / 뤼보랑',
      proTipCN: '可作为本帮冷菜首选，鱼刺较酥但食用时仍需稍微留意细刺。',
      proTipKR: '차가운 전채(에피타이저)로 주문하면 입맛을 돋우기에 매우 좋습니다.'
    }
  ];

  // Combine items for easy lookup
  const ALL_ITEMS = [...ATTRACTIONS_DATA, ...FOODS_DATA];

  // SVG Fallback Placeholder Generator for Offline / Image Loading Errors
  function getSvgFallback(title, categoryName) {
    const encodedTitle = encodeURIComponent(title || 'SHANGHAI GUIDE');
    const encodedCat = encodeURIComponent(categoryName || 'Shanghai');
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" fill="%231E2128"><rect width="800" height="500" fill="%231E2128"/><rect x="40" y="40" width="720" height="420" fill="none" stroke="%23E63920" stroke-width="2" stroke-dasharray="8 8"/><text x="400" y="230" fill="%23E63920" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">${encodedTitle}</text><text x="400" y="280" fill="%23A0A4B0" font-family="sans-serif" font-size="18" text-anchor="middle">${encodedCat} · SHANGHAI GUIDE</text></svg>`;
  }

  // --- 2. State Management ---
  const STATE = {
    favorites: [],
    attractionSearch: '',
    attractionCategory: 'all',
    foodSearch: '',
    foodCategory: 'all',
    favoritesFilter: 'all',
    activeItinerary: 'day1'
  };

  // LocalStorage Persistence Key
  const STORAGE_KEY = 'shanghai_guide_favorites_v1';

  function loadFavorites() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        STATE.favorites = JSON.parse(stored);
      } else {
        // Pre-fill a couple of inspiring favorites for immediate rich experience
        STATE.favorites = ['bund', 'xiaolongbao'];
        saveFavorites();
      }
    } catch (e) {
      console.error('Failed to load favorites from localStorage', e);
      STATE.favorites = ['bund', 'xiaolongbao'];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE.favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
    updateFavoritesUI();
  }

  function isFavorited(id) {
    return STATE.favorites.includes(id);
  }

  function toggleFavorite(id) {
    const item = ALL_ITEMS.find(function(it) { return it.id === id; });
    const titleStr = item ? item.titleCN + ' / ' + item.titleKR : '项目 / 항목';

    if (isFavorited(id)) {
      STATE.favorites = STATE.favorites.filter(function(favId) { return favId !== id; });
      showToast('已从收藏夹移除 / 즐겨찾기에서 제거되었습니다: ' + titleStr, 'remove');
    } else {
      STATE.favorites.push(id);
      showToast('已成功收藏 / 즐겨찾기에 추가되었습니다: ' + titleStr, 'add');
    }
    saveFavorites();
    renderAttractions();
    renderFoods();
  }

  function clearAllFavorites() {
    if (STATE.favorites.length === 0) return;
    if (window.confirm('确定要清空所有收藏吗？ / 모든 즐겨찾기를 삭제하시겠습니까?')) {
      STATE.favorites = [];
      saveFavorites();
      renderAttractions();
      renderFoods();
      showToast('已清空全部收藏 / 모든 즐겨찾기가 삭제되었습니다.', 'remove');
    }
  }

  // --- 3. Toast Notifications ---
  function showToast(message, type) {
    var container = document.getElementById('toastContainer');
    if (!container) return;

    var toast = document.createElement('div');
    toast.className = 'toast-message';

    var heartIcon = type === 'add'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="#E63920" stroke="#E63920" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9C6BC" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>';

    var parts = message.split(' / ');
    var cnText = parts[0] || message;
    var krText = parts[1] || '';

    toast.innerHTML = [
      '<div class="toast-icon">' + heartIcon + '</div>',
      '<div class="toast-text">',
      '  <span class="toast-text-cn">' + escapeHtml(cnText) + '</span>',
      krText ? '  <span class="toast-text-kr">' + escapeHtml(krText) + '</span>' : '',
      '</div>'
    ].join('');

    container.appendChild(toast);

    // Trigger animation
    setTimeout(function () {
      toast.classList.add('show');
    }, 20);

    // Auto dismiss after 3.2s
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 400);
    }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- 4. Render Attractions ---
  function renderAttractions() {
    var grid = document.getElementById('attractionsGrid');
    var countEl = document.getElementById('attractionsCount');
    if (!grid) return;

    var filtered = ATTRACTIONS_DATA.filter(function (item) {
      // Category filter
      if (STATE.attractionCategory !== 'all' && item.category !== STATE.attractionCategory) {
        return false;
      }
      // Search query filter
      if (STATE.attractionSearch.trim() !== '') {
        var q = STATE.attractionSearch.toLowerCase().trim();
        var matchTitleCN = item.titleCN.toLowerCase().indexOf(q) !== -1;
        var matchTitleKR = item.titleKR.toLowerCase().indexOf(q) !== -1;
        var matchTitleEN = item.titleEN.toLowerCase().indexOf(q) !== -1;
        var matchDescCN = item.descCN.toLowerCase().indexOf(q) !== -1;
        var matchDescKR = item.descKR.toLowerCase().indexOf(q) !== -1;
        var matchMetro = (item.metroCN + ' ' + item.metroKR).toLowerCase().indexOf(q) !== -1;
        return matchTitleCN || matchTitleKR || matchTitleEN || matchDescCN || matchDescKR || matchMetro;
      }
      return true;
    });

    if (countEl) {
      countEl.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      grid.innerHTML = [
        '<div style="grid-column: 1/-1; padding: 48px 24px; text-align: center; background: #FFFFFF; border: 1px dashed #C9C6BC; border-radius: 12px;">',
        '  <p style="font-size: 1.15rem; font-weight: 800; color: #141517; margin-bottom: 4px;">未找到匹配的景点 / 일치하는 관광명소가 없습니다</p>',
        '  <p style="font-size: 0.85rem; color: #5E6066; margin-bottom: 16px;">请尝试其他搜索词或重置筛选条件 / 다른 검색어를 입력하거나 필터를 재설정해 보세요.</p>',
        '  <button id="resetAttractionFilterBtn" class="btn-secondary" style="padding: 8px 20px; font-size: 0.82rem;">重置筛选 / 필터 초기화</button>',
        '</div>'
      ].join('');

      var resetBtn = document.getElementById('resetAttractionFilterBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          STATE.attractionSearch = '';
          STATE.attractionCategory = 'all';
          var searchInput = document.getElementById('attractionSearchInput');
          if (searchInput) searchInput.value = '';
          updatePillActive('attractionPills', 'all');
          renderAttractions();
          showToast('已重置景点筛选 / 명소 필터가 초기화되었습니다', 'add');
        });
      }
      return;
    }

    var html = filtered.map(function (item) {
      var favClass = isFavorited(item.id) ? 'favorited' : '';
      var favAria = isFavorited(item.id) ? '已收藏 / 즐겨찾기 해제' : '未收藏 / 즐겨찾기 추가';

      return [
        '<article class="attraction-card" data-id="' + item.id + '">',
        '  <div class="card-media-wrapper">',
        '    <span class="card-category-badge">' + item.categoryNameCN + ' / ' + item.categoryNameKR + '</span>',
        '    <button class="card-fav-btn ' + favClass + '" data-fav-id="' + item.id + '" title="' + favAria + '" aria-label="' + favAria + '">',
        '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
        '        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
        '      </svg>',
        '    </button>',
        '    <img class="card-img" src="' + item.image + '" alt="' + (item.altText || (item.titleCN + ' / ' + item.titleKR)) + '" loading="lazy" onerror="this.onerror=null; this.src=\'' + getSvgFallback(item.titleCN, item.categoryNameCN) + '\';" />',
        '  </div>',
        '  <div class="card-body">',
        '    <div class="card-title-group">',
        '      <div class="card-title-en">' + item.titleEN + '</div>',
        '      <h3 class="card-title-cn">' + item.titleCN + '</h3>',
        '      <div class="card-title-kr">' + item.titleKR + '</div>',
        '    </div>',
        '    <div class="card-desc-box">',
        '      <p class="card-desc-cn">' + item.descCN + '</p>',
        '      <p class="card-desc-kr">' + item.descKR + '</p>',
        '    </div>',
        '    <div class="card-meta-list">',
        '      <div class="meta-row metro-row">',
        '        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="16" rx="2"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><path d="m8 19-2 3"></path><path d="m16 19 2 3"></path></svg>',
        '        <span><strong>交通 / 교통:</strong> ' + item.metroCN + ' (' + item.metroKR + ')</span>',
        '      </div>',
        '      <div class="meta-row">',
        '        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        '        <span><strong>游览提示 / 관람 팁:</strong> ' + item.tipsCN + ' (' + item.tipsKR + ')</span>',
        '      </div>',
        '      <div class="verification-badge">',
        '        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
        '        <span>' + item.noticeCN + ' / ' + item.noticeKR + '</span>',
        '      </div>',
        '    </div>',
        '  </div>',
        '</article>'
      ].join('');
    }).join('');

    grid.innerHTML = html;

    // Attach click events to heart buttons
    grid.querySelectorAll('.card-fav-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = this.getAttribute('data-fav-id');
        toggleFavorite(id);
      });
    });
  }

  // --- 5. Render Foods ---
  function renderFoods() {
    var grid = document.getElementById('foodGrid');
    var countEl = document.getElementById('foodCount');
    if (!grid) return;

    var filtered = FOODS_DATA.filter(function (item) {
      // Category filter
      if (STATE.foodCategory !== 'all' && item.category !== STATE.foodCategory) {
        return false;
      }
      // Search query filter
      if (STATE.foodSearch.trim() !== '') {
        var q = STATE.foodSearch.toLowerCase().trim();
        var matchTitleCN = item.titleCN.toLowerCase().indexOf(q) !== -1;
        var matchTitleKR = item.titleKR.toLowerCase().indexOf(q) !== -1;
        var matchTitleEN = item.titleEN.toLowerCase().indexOf(q) !== -1;
        var matchDescCN = item.descCN.toLowerCase().indexOf(q) !== -1;
        var matchDescKR = item.descKR.toLowerCase().indexOf(q) !== -1;
        var matchSpot = (item.recommendSpotCN + ' ' + item.recommendSpotKR).toLowerCase().indexOf(q) !== -1;
        return matchTitleCN || matchTitleKR || matchTitleEN || matchDescCN || matchDescKR || matchSpot;
      }
      return true;
    });

    if (countEl) {
      countEl.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      grid.innerHTML = [
        '<div style="grid-column: 1/-1; padding: 48px 24px; text-align: center; background: #FFFFFF; border: 1px dashed #C9C6BC; border-radius: 12px;">',
        '  <p style="font-size: 1.15rem; font-weight: 800; color: #141517; margin-bottom: 4px;">未找到匹配的美食 / 일치하는 미식이 없습니다</p>',
        '  <p style="font-size: 0.85rem; color: #5E6066; margin-bottom: 16px;">请尝试其他美食关键词或重置筛选 / 다른 키워드를 검색하거나 필터를 재설정해 보세요.</p>',
        '  <button id="resetFoodFilterBtn" class="btn-secondary" style="padding: 8px 20px; font-size: 0.82rem;">重置筛选 / 필터 초기화</button>',
        '</div>'
      ].join('');

      var resetBtn = document.getElementById('resetFoodFilterBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          STATE.foodSearch = '';
          STATE.foodCategory = 'all';
          var searchInput = document.getElementById('foodSearchInput');
          if (searchInput) searchInput.value = '';
          updatePillActive('foodPills', 'all');
          renderFoods();
          showToast('已重置美食筛选 / 미식 필터가 초기화되었습니다', 'add');
        });
      }
      return;
    }

    var html = filtered.map(function (item) {
      var favClass = isFavorited(item.id) ? 'favorited' : '';
      var favAria = isFavorited(item.id) ? '已收藏 / 즐겨찾기 해제' : '未收藏 / 즐겨찾기 추가';

      var tagsHtml = item.flavorTagsCN.map(function (tCN, idx) {
        var tKR = item.flavorTagsKR[idx] || '';
        return '<span class="flavor-tag">' + tCN + ' / ' + tKR + '</span>';
      }).join('');

      return [
        '<article class="food-card" data-id="' + item.id + '">',
        '  <div class="card-media-wrapper">',
        '    <span class="card-category-badge">' + item.categoryNameCN + ' / ' + item.categoryNameKR + '</span>',
        '    <button class="card-fav-btn ' + favClass + '" data-fav-id="' + item.id + '" title="' + favAria + '" aria-label="' + favAria + '">',
        '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
        '        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
        '      </svg>',
        '    </button>',
        '    <img class="card-img" src="' + item.image + '" alt="' + (item.altText || (item.titleCN + ' / ' + item.titleKR)) + '" loading="lazy" onerror="this.onerror=null; this.src=\'' + getSvgFallback(item.titleCN, item.categoryNameCN) + '\';" />',
        '  </div>',
        '  <div class="card-body">',
        '    <div class="flavor-tags-wrap">' + tagsHtml + '</div>',
        '    <div class="card-title-group">',
        '      <div class="card-title-en">' + item.titleEN + '</div>',
        '      <h3 class="card-title-cn">' + item.titleCN + '</h3>',
        '      <div class="card-title-kr">' + item.titleKR + '</div>',
        '    </div>',
        '    <div class="card-desc-box">',
        '      <p class="card-desc-cn">' + item.descCN + '</p>',
        '      <p class="card-desc-kr">' + item.descKR + '</p>',
        '    </div>',
        '    <div class="card-meta-list">',
        '      <div class="meta-row">',
        '        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
        '        <span><strong>' + item.recommendSpotCN + '</strong><br/><span style="color:#8C8E94">' + item.recommendSpotKR + '</span></span>',
        '      </div>',
        '      <div class="food-pro-tip">',
        '        <strong>💡 品味秘诀 / 맛 팁:</strong>',
        '        <div>' + item.proTipCN + '</div>',
        '        <div style="color: #6E7075; margin-top: 2px;">' + item.proTipKR + '</div>',
        '      </div>',
        '    </div>',
        '  </div>',
        '</article>'
      ].join('');
    }).join('');

    grid.innerHTML = html;

    // Attach click events
    grid.querySelectorAll('.card-fav-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = this.getAttribute('data-fav-id');
        toggleFavorite(id);
      });
    });
  }

  // --- 6. Render Favorites (Section & Drawer) ---
  function updateFavoritesUI() {
    var count = STATE.favorites.length;

    // 1. Update all counter badges in header & section
    document.querySelectorAll('.fav-counter-badge').forEach(function (badge) {
      badge.textContent = count;
    });

    // 2. Render Drawer List
    var drawerList = document.getElementById('drawerFavList');
    var drawerEmpty = document.getElementById('drawerEmptyMsg');
    if (drawerList && drawerEmpty) {
      if (count === 0) {
        drawerList.innerHTML = '';
        drawerEmpty.style.display = 'block';
      } else {
        drawerEmpty.style.display = 'none';
        var drawerHtml = STATE.favorites.map(function (id) {
          var item = ALL_ITEMS.find(function (it) { return it.id === id; });
          if (!item) return '';

          var tag = item.type === 'attraction' ? '景点 / 명소' : '美食 / 맛집';
          return [
            '<div class="drawer-item-card" data-id="' + item.id + '">',
            '  <img class="drawer-item-img" src="' + item.image + '" alt="' + (item.altText || item.titleCN) + '" onerror="this.onerror=null; this.src=\'' + getSvgFallback(item.titleCN, tag) + '\';" />',
            '  <div class="drawer-item-content">',
            '    <span class="drawer-item-badge">' + tag + '</span>',
            '    <div class="drawer-item-name-cn">' + item.titleCN + '</div>',
            '    <div class="drawer-item-name-kr">' + item.titleKR + '</div>',
            '  </div>',
            '  <button class="drawer-remove-btn" data-remove-id="' + item.id + '" title="移除 / 삭제" aria-label="移除 / 삭제">',
            '    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
            '  </button>',
            '</div>'
          ].join('');
        }).join('');
        drawerList.innerHTML = drawerHtml;

        drawerList.querySelectorAll('.drawer-remove-btn').forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var id = this.getAttribute('data-remove-id');
            toggleFavorite(id);
          });
        });
      }
    }

    // 3. Render Dedicated Page Section Favorites Grid
    var secGrid = document.getElementById('favoritesSectionGrid');
    var secEmpty = document.getElementById('favoritesSectionEmpty');
    var secCount = document.getElementById('favoritesSectionCount');

    if (secCount) {
      secCount.textContent = count;
    }

    if (secGrid && secEmpty) {
      var favItems = STATE.favorites.map(function (id) {
        return ALL_ITEMS.find(function (it) { return it.id === id; });
      }).filter(Boolean);

      // Filter by favorites filter pill
      if (STATE.favoritesFilter === 'attraction') {
        favItems = favItems.filter(function (it) { return it.type === 'attraction'; });
      } else if (STATE.favoritesFilter === 'food') {
        favItems = favItems.filter(function (it) { return it.type === 'food'; });
      }

      if (favItems.length === 0) {
        secGrid.style.display = 'none';
        secEmpty.classList.add('visible');
      } else {
        secGrid.style.display = 'grid';
        secEmpty.classList.remove('visible');

        var gridHtml = favItems.map(function (item) {
          var typeTag = item.type === 'attraction' ? '景点 / 관광명소' : '美食 / 특색맛집';
          return [
            '<div class="attraction-card" style="box-shadow: 0 4px 16px rgba(0,0,0,0.06);">' +
            '  <div class="card-media-wrapper" style="aspect-ratio: 16/9;">' +
            '    <span class="card-category-badge">' + typeTag + '</span>' +
            '    <button class="card-fav-btn favorited" data-fav-id="' + item.id + '" title="移除收藏 / 즐겨찾기 해제">' +
            '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>' +
            '    </button>' +
            '    <img class="card-img" src="' + item.image + '" alt="' + (item.altText || item.titleCN) + '" loading="lazy" onerror="this.onerror=null; this.src=\'' + getSvgFallback(item.titleCN, typeTag) + '\';" />' +
            '  </div>' +
            '  <div class="card-body">' +
            '    <h3 class="card-title-cn" style="font-size: 1.15rem;">' + item.titleCN + '</h3>' +
            '    <div class="card-title-kr" style="margin-bottom: 10px;">' + item.titleKR + '</div>' +
            '    <p class="card-desc-cn" style="font-size: 0.82rem; margin-bottom: 4px;">' + item.descCN + '</p>' +
            '    <p class="card-desc-kr" style="font-size: 0.78rem; color: #5E6066;">' + item.descKR + '</p>' +
            '  </div>' +
            '</div>'
          ].join('');
        }).join('');

        secGrid.innerHTML = gridHtml;

        secGrid.querySelectorAll('.card-fav-btn').forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var id = this.getAttribute('data-fav-id');
            toggleFavorite(id);
          });
        });
      }
    }
  }

  // --- 7. Helper: Update Category Pills Active State ---
  function updatePillActive(containerId, activeValue) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll('.filter-pill').forEach(function (pill) {
      if (pill.getAttribute('data-category') === activeValue) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // --- 8. Setup Controls & Event Listeners ---
  function setupControls() {
    // 1. Attractions Search
    var attrSearch = document.getElementById('attractionSearchInput');
    var attrClear = document.getElementById('attractionSearchClear');
    if (attrSearch) {
      attrSearch.addEventListener('input', function (e) {
        STATE.attractionSearch = e.target.value;
        if (attrClear) {
          if (e.target.value.length > 0) {
            attrClear.classList.add('visible');
          } else {
            attrClear.classList.remove('visible');
          }
        }
        renderAttractions();
      });
    }
    if (attrClear) {
      attrClear.addEventListener('click', function () {
        if (attrSearch) attrSearch.value = '';
        STATE.attractionSearch = '';
        attrClear.classList.remove('visible');
        renderAttractions();
      });
    }

    // 2. Attractions Category Pills
    var attrPills = document.getElementById('attractionPills');
    if (attrPills) {
      attrPills.querySelectorAll('.filter-pill').forEach(function (pill) {
        pill.addEventListener('click', function () {
          var cat = this.getAttribute('data-category');
          STATE.attractionCategory = cat;
          updatePillActive('attractionPills', cat);
          renderAttractions();
        });
      });
    }

    // 3. Food Search
    var foodSearch = document.getElementById('foodSearchInput');
    var foodClear = document.getElementById('foodSearchClear');
    if (foodSearch) {
      foodSearch.addEventListener('input', function (e) {
        STATE.foodSearch = e.target.value;
        if (foodClear) {
          if (e.target.value.length > 0) {
            foodClear.classList.add('visible');
          } else {
            foodClear.classList.remove('visible');
          }
        }
        renderFoods();
      });
    }
    if (foodClear) {
      foodClear.addEventListener('click', function () {
        if (foodSearch) foodSearch.value = '';
        STATE.foodSearch = '';
        foodClear.classList.remove('visible');
        renderFoods();
      });
    }

    // 4. Food Category Pills
    var foodPills = document.getElementById('foodPills');
    if (foodPills) {
      foodPills.querySelectorAll('.filter-pill').forEach(function (pill) {
        pill.addEventListener('click', function () {
          var cat = this.getAttribute('data-category');
          STATE.foodCategory = cat;
          updatePillActive('foodPills', cat);
          renderFoods();
        });
      });
    }

    // 5. Itineraries Tab Switcher
    var itinNav = document.getElementById('itineraryTabsNav');
    if (itinNav) {
      itinNav.querySelectorAll('.itinerary-tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var targetTab = this.getAttribute('data-tab');
          itinNav.querySelectorAll('.itinerary-tab-btn').forEach(function (b) {
            b.classList.remove('active');
          });
          this.classList.add('active');

          document.querySelectorAll('.itinerary-content-card').forEach(function (card) {
            if (card.getAttribute('id') === targetTab) {
              card.classList.add('active');
            } else {
              card.classList.remove('active');
            }
          });
        });
      });
    }

    // 6. Favorites Filter in Section
    var favPills = document.getElementById('favoritesPills');
    if (favPills) {
      favPills.querySelectorAll('.filter-pill').forEach(function (pill) {
        pill.addEventListener('click', function () {
          var filter = this.getAttribute('data-filter');
          STATE.favoritesFilter = filter;
          favPills.querySelectorAll('.filter-pill').forEach(function (p) {
            p.classList.remove('active');
          });
          this.classList.add('active');
          updateFavoritesUI();
        });
      });
    }

    // 7. Clear All Favorites Buttons
    var clearBtns = [
      document.getElementById('clearAllFavsBtn'),
      document.getElementById('drawerClearAllBtn')
    ];
    clearBtns.forEach(function (btn) {
      if (btn) {
        btn.addEventListener('click', function () {
          clearAllFavorites();
        });
      }
    });

    // 8. Drawer Open & Close
    var openDrawerBtn = document.getElementById('openFavoritesDrawerBtn');
    var drawer = document.getElementById('favoritesDrawer');
    var backdrop = document.getElementById('favoritesBackdrop');
    var closeDrawerBtn = document.getElementById('closeFavoritesDrawerBtn');

    function openDrawer() {
      if (drawer && backdrop) {
        drawer.classList.add('active');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeDrawer() {
      if (drawer && backdrop) {
        drawer.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    if (openDrawerBtn) {
      openDrawerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openDrawer();
      });
    }
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeDrawer);
    }
    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    // ESC key closes drawer
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });

    // 9. Mobile Menu Toggle
    var menuToggle = document.getElementById('menuToggle');
    var navMenu = document.getElementById('navMenu');
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function () {
        var isOpen = navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close mobile menu when a nav link is clicked
      navMenu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          navMenu.classList.remove('active');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // 10. Sticky Header & Scroll Spy for Active Navigation Link
    var header = document.querySelector('.site-header');
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-menu .nav-link');

    window.addEventListener('scroll', function () {
      var scrollPos = window.scrollY;

      // Header shadow toggle
      if (header) {
        if (scrollPos > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Scroll spy
      var currentSectionId = '';
      sections.forEach(function (sec) {
        var top = sec.offsetTop - 120;
        var height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    // 11. Back to Top Button
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // --- 9. Initializer ---
  function init() {
    loadFavorites();
    renderAttractions();
    renderFoods();
    setupControls();
    updateFavoritesUI();
    console.log('SHANGHAI GUIDE · 上海旅行指南 / 상하이 여행 가이드 initialized successfully.');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

