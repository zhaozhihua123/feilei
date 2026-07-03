const categories = {
    'measurement': { name: '测量工具', icon: 'fa-ruler-combined', subCategories: ['长度测量', '角度测量', '水准测量', '激光测量', '定位测量'] },
    'cutting': { name: '切割工具', icon: 'fa-cut', subCategories: ['手动切割', '电动切割', '火焰切割', '水切割', '等离子切割'] },
    'masonry': { name: '砌筑工具', icon: 'fa-bricks', subCategories: ['砌砖工具', '抹灰工具', '勾缝工具', '振捣工具', '搅拌工具'] },
    'concrete': { name: '混凝土工具', icon: 'fa-box', subCategories: ['浇筑工具', '振捣工具', '抹平工具', '切割工具', '养护工具'] },
    'steel': { name: '钢筋工具', icon: 'fa-bolt', subCategories: ['绑扎工具', '切割工具', '弯曲工具', '焊接工具', '连接工具'] },
    'decoration': { name: '装修工具', icon: 'fa-paint-roller', subCategories: ['涂料工具', '木工工具', '瓷砖工具', '地板工具', '吊顶工具'] },
    'electrical': { name: '电气工具', icon: 'fa-battery-full', subCategories: ['布线工具', '接线工具', '检测工具', '安装工具', '安全工具'] },
    'plumbing': { name: '管道工具', icon: 'fa-pipe', subCategories: ['切割工具', '连接工具', '疏通工具', '试压工具', '安装工具'] },
    'scaffold': { name: '脚手架', icon: 'fa-ladder', subCategories: ['扣件式', '碗扣式', '门式', '铝合金', '移动平台'] },
    'safety': { name: '安全防护', icon: 'fa-shield', subCategories: ['个人防护', '消防器材', '警示设备', '照明设备', '应急工具'] },
    'machinery': { name: '机械设备', icon: 'fa-truck', subCategories: ['起重设备', '运输设备', '挖掘设备', '压实设备', '搅拌设备'] },
    'adhesive': { name: '粘接密封', icon: 'fa-glue', subCategories: ['胶粘剂', '密封胶', '防水涂料', '瓷砖胶', '结构胶'] }
};

const categoryColors = [
    'linear-gradient(135deg, #6366f1, #8b5cf6)',
    'linear-gradient(135deg, #f472b6, #fb7185)',
    'linear-gradient(135deg, #06b6d4, #22d3ee)',
    'linear-gradient(135deg, #10b981, #34d399)',
    'linear-gradient(135deg, #f59e0b, #fbbf24)',
    'linear-gradient(135deg, #ef4444, #f87171)',
    'linear-gradient(135deg, #84cc16, #a3e635)',
    'linear-gradient(135deg, #a855f7, #c084fc)',
    'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    'linear-gradient(135deg, #ec4899, #f43f5e)',
    'linear-gradient(135deg, #14b8a6, #2dd4bf)',
    'linear-gradient(135deg, #f97316, #fb923c)'
];

const autoClassifyKeywords = {
    'measurement': ['卷尺', '直尺', '角度尺', '水准仪', '经纬仪', '全站仪', '激光', '测距仪', '水平仪'],
    'cutting': ['切割机', '锯', '刀片', '割刀', '剪刀', '火焰', '等离子', '水刀'],
    'masonry': ['瓦刀', '灰刀', '砖刀', '抹子', '振捣', '搅拌', '勾缝'],
    'concrete': ['混凝土', '振捣棒', '抹光机', '砼', '浇筑', '坍落度', '养护'],
    'steel': ['钢筋', '绑扎', '箍筋', '焊接', '弯曲机', '切割机', '套筒'],
    'decoration': ['涂料', '油漆', '刷子', '滚筒', '木工', '瓷砖', '地板', '吊顶'],
    'electrical': ['电线', '电缆', '开关', '插座', '万用表', '电笔', '接线'],
    'plumbing': ['水管', '管道', '阀门', '弯头', '三通', '疏通', '试压'],
    'scaffold': ['脚手架', '扣件', '钢管', '脚手板', '梯子', '平台'],
    'safety': ['安全帽', '安全带', '灭火器', '防护服', '警示', '应急'],
    'machinery': ['塔吊', '电梯', '挖掘机', '装载机', '压路机', '搅拌机'],
    'adhesive': ['胶水', '密封胶', '防水', '瓷砖胶', '结构胶', '硅胶']
};

const defaultTools = [
    { id: 1, name: '钢卷尺', category: 'measurement', subCategory: '长度测量', description: '用于测量长度、宽度等尺寸，建筑施工中最常用的测量工具', usage: '测量墙体尺寸、门窗洞口、管线长度等，使用时保持卷尺平直，读数精确到毫米', tags: ['常用', '便携'], location: '工具箱A层', notes: '' },
    { id: 2, name: '水准仪', category: 'measurement', subCategory: '水准测量', description: '用于测量两点间的高差，建立水平视线，测量地面高程', usage: '场地平整、基础标高控制、楼层标高传递，配合水准尺使用', tags: ['专业'], location: '测量仪器室', notes: '' },
    { id: 3, name: '全站仪', category: 'measurement', subCategory: '定位测量', description: '集测角、测距、测高差功能于一体的精密测量仪器', usage: '坐标放样、地形测量、建筑物定位、变形监测，精度可达毫米级', tags: ['专业'], location: '测量仪器室', notes: '' },
    { id: 4, name: '激光测距仪', category: 'measurement', subCategory: '激光测量', description: '利用激光进行距离测量，测量速度快、精度高', usage: '室内外距离测量、面积计算、体积估算，最大测量距离可达100米以上', tags: ['常用', '推荐'], location: '工具箱A层', notes: '' },
    { id: 5, name: '水平尺', category: 'measurement', subCategory: '水准测量', description: '用于检测物体是否水平或垂直，带有气泡指示', usage: '墙面找平、门窗安装、家具组装，确保水平垂直度', tags: ['常用', '便携'], location: '工具箱B层', notes: '' },
    { id: 6, name: '角度尺', category: 'measurement', subCategory: '角度测量', description: '用于测量和绘制角度，可固定角度进行划线', usage: '钢结构加工、模板制作、装饰线条角度测量', tags: ['常用'], location: '工具箱B层', notes: '' },
    { id: 7, name: '切割机', category: 'cutting', subCategory: '电动切割', description: '电动工具，用于切割石材、瓷砖、金属等材料', usage: '瓷砖切割、石材加工、金属型材切割，注意佩戴防护眼镜', tags: ['常用'], location: '车间', notes: '' },
    { id: 8, name: '电锯', category: 'cutting', subCategory: '电动切割', description: '用于切割木材、塑料等材料，切割效率高', usage: '木模板制作、木材加工、脚手架木板切割', tags: ['常用'], location: '车间', notes: '' },
    { id: 9, name: '割炬', category: 'cutting', subCategory: '火焰切割', description: '利用氧气和乙炔火焰进行金属切割', usage: '钢板切割、钢结构加工、废旧材料切割，注意防火防爆', tags: ['专业'], location: '车间', notes: '' },
    { id: 10, name: '瓦刀', category: 'masonry', subCategory: '砌砖工具', description: '砌筑砖块用的工具，用于涂抹砂浆和砌砖', usage: '砖墙砌筑、砌块安装，配合砂浆桶使用', tags: ['常用'], location: '工具房', notes: '' },
    { id: 11, name: '抹子', category: 'masonry', subCategory: '抹灰工具', description: '用于涂抹和抹平砂浆、混凝土表面', usage: '墙面抹灰、地面找平、混凝土表面收光', tags: ['常用'], location: '工具房', notes: '' },
    { id: 12, name: '振捣棒', category: 'concrete', subCategory: '振捣工具', description: '插入式振动器，用于振捣混凝土，排除气泡', usage: '混凝土浇筑时插入振捣，确保混凝土密实，防止蜂窝麻面', tags: ['常用'], location: '机械库', notes: '' },
    { id: 13, name: '抹光机', category: 'concrete', subCategory: '抹平工具', description: '用于抹平混凝土表面，提高表面平整度', usage: '混凝土地面浇筑后进行表面抹光，达到光滑平整效果', tags: ['常用'], location: '机械库', notes: '' },
    { id: 14, name: '钢筋绑扎丝', category: 'steel', subCategory: '绑扎工具', description: '用于绑扎钢筋，固定钢筋位置', usage: '钢筋骨架绑扎、箍筋固定，配合绑扎钩使用', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 15, name: '钢筋弯曲机', category: 'steel', subCategory: '弯曲工具', description: '用于弯曲钢筋，制作箍筋和钢筋弯钩', usage: '箍筋加工、钢筋端部弯钩、预应力钢筋弯曲', tags: ['专业'], location: '钢筋加工场', notes: '' },
    { id: 16, name: '电焊机', category: 'steel', subCategory: '焊接工具', description: '用于焊接钢筋、钢板等金属材料', usage: '钢筋连接、钢结构焊接、金属构件修复，注意安全用电', tags: ['专业'], location: '车间', notes: '' },
    { id: 17, name: '涂料刷', category: 'decoration', subCategory: '涂料工具', description: '用于涂刷涂料、油漆等装饰材料', usage: '墙面涂料施工、家具油漆、金属防腐涂层', tags: ['常用'], location: '装修工具房', notes: '' },
    { id: 18, name: '油漆滚筒', category: 'decoration', subCategory: '涂料工具', description: '用于大面积涂刷涂料，提高施工效率', usage: '墙面乳胶漆施工、天花板涂装、大面积底漆涂刷', tags: ['常用'], location: '装修工具房', notes: '' },
    { id: 19, name: '瓷砖切割机', category: 'decoration', subCategory: '瓷砖工具', description: '用于切割瓷砖，可进行直线和倒角切割', usage: '瓷砖铺贴前切割，配合手动或电动操作', tags: ['常用'], location: '装修工具房', notes: '' },
    { id: 20, name: '万用表', category: 'electrical', subCategory: '检测工具', description: '用于测量电压、电流、电阻等电气参数', usage: '电路故障排查、电器检测、电压测量，选择合适量程', tags: ['常用'], location: '电工工具箱', notes: '' },
    { id: 21, name: '电笔', category: 'electrical', subCategory: '检测工具', description: '用于检测物体是否带电，简单实用', usage: '验电、电路检测、电器维修，确认断电后再操作', tags: ['常用', '便携'], location: '电工工具箱', notes: '' },
    { id: 22, name: '剥线钳', category: 'electrical', subCategory: '接线工具', description: '用于剥除电线绝缘皮，方便接线', usage: '电线连接、电缆剥皮、电器安装', tags: ['常用'], location: '电工工具箱', notes: '' },
    { id: 23, name: '管钳', category: 'plumbing', subCategory: '连接工具', description: '用于拧紧或松开管道及管件', usage: '水管安装、管道维修、阀门更换', tags: ['常用'], location: '水暖工具箱', notes: '' },
    { id: 24, name: '管道切割机', category: 'plumbing', subCategory: '切割工具', description: '用于切割各种管道，切口平整', usage: '水管切割、钢管切断、PVC管切割', tags: ['常用'], location: '水暖工具箱', notes: '' },
    { id: 25, name: '疏通机', category: 'plumbing', subCategory: '疏通工具', description: '用于疏通下水道、管道堵塞', usage: '管道疏通、马桶疏通、地漏清理', tags: ['常用'], location: '物业工具房', notes: '' },
    { id: 26, name: '脚手架钢管', category: 'scaffold', subCategory: '扣件式', description: '用于搭建脚手架的主要材料', usage: '建筑施工脚手架搭建、模板支撑、临时平台', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 27, name: '扣件', category: 'scaffold', subCategory: '扣件式', description: '用于连接脚手架钢管的连接件', usage: '脚手架节点连接、钢管固定，确保脚手架稳定性', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 28, name: '安全帽', category: 'safety', subCategory: '个人防护', description: '用于保护头部安全的防护装备', usage: '进入施工现场必须佩戴，防止高空坠物伤害', tags: ['常用', '重要'], location: '安全器材室', notes: '' },
    { id: 29, name: '安全带', category: 'safety', subCategory: '个人防护', description: '用于高空作业时的安全防护', usage: '高空作业、外墙施工、脚手架作业，必须正确佩戴', tags: ['重要'], location: '安全器材室', notes: '' },
    { id: 30, name: '灭火器', category: 'safety', subCategory: '消防器材', description: '用于灭火的消防设备', usage: '火灾初期扑救，选择合适类型的灭火器', tags: ['常用', '重要'], location: '各楼层消防栓', notes: '' },
    { id: 31, name: '塔吊', category: 'machinery', subCategory: '起重设备', description: '塔式起重机，用于建筑施工中的物料吊运', usage: '钢筋、模板、混凝土等物料的垂直运输，需专业人员操作', tags: ['专业'], location: '施工现场', notes: '' },
    { id: 32, name: '施工电梯', category: 'machinery', subCategory: '运输设备', description: '用于施工人员和物料的垂直运输', usage: '楼层间人员运输、小型物料吊运，载重限制严格遵守', tags: ['专业'], location: '施工现场', notes: '' },
    { id: 33, name: '挖掘机', category: 'machinery', subCategory: '挖掘设备', description: '用于土方开挖、装载的工程机械', usage: '基础开挖、场地平整、土方转运，注意安全距离', tags: ['专业'], location: '施工现场', notes: '' },
    { id: 34, name: '压路机', category: 'machinery', subCategory: '压实设备', description: '用于道路、地基压实的工程机械', usage: '路基压实、路面压实、场地平整，分层压实', tags: ['专业'], location: '施工现场', notes: '' },
    { id: 35, name: '混凝土搅拌机', category: 'machinery', subCategory: '搅拌设备', description: '用于搅拌混凝土，混合水泥、砂石、水', usage: '混凝土拌制、砂浆搅拌，控制配合比和搅拌时间', tags: ['专业'], location: '搅拌站', notes: '' },
    { id: 36, name: '密封胶', category: 'adhesive', subCategory: '密封胶', description: '用于密封缝隙，防水防潮', usage: '门窗密封、幕墙接缝、管道接口密封', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 37, name: '防水涂料', category: 'adhesive', subCategory: '防水涂料', description: '用于防水施工，形成防水涂层', usage: '屋面防水、卫生间防水、地下室防水，多遍涂刷', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 38, name: '瓷砖胶', category: 'adhesive', subCategory: '瓷砖胶', description: '用于粘贴瓷砖的专用胶粘剂', usage: '瓷砖铺贴、石材粘贴，薄涂施工，提高粘结强度', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 39, name: '结构胶', category: 'adhesive', subCategory: '结构胶', description: '高强度胶粘剂，用于结构粘接', usage: '玻璃幕墙安装、石材干挂、金属构件粘接', tags: ['专业'], location: '材料仓库', notes: '' },
    { id: 40, name: '游标卡尺', category: 'measurement', subCategory: '长度测量', description: '高精度测量工具，用于精确测量尺寸', usage: '精密零件测量、模具检测、材料检验', tags: ['专业'], location: '质检室', notes: '' },
    { id: 41, name: '千分尺', category: 'measurement', subCategory: '长度测量', description: '超高精度测量工具，精度可达0.01mm', usage: '精密零件测量、厚度检测、尺寸校准', tags: ['专业'], location: '质检室', notes: '' },
    { id: 42, name: '经纬仪', category: 'measurement', subCategory: '角度测量', description: '用于测量水平角和竖直角的测量仪器', usage: '建筑轴线测设、角度测量、地形测绘', tags: ['专业'], location: '测量仪器室', notes: '' },
    { id: 43, name: '卷尺架', category: 'measurement', subCategory: '长度测量', description: '长卷尺的支架，方便长距离测量', usage: '场地测量、基线放线、大面积尺寸测量', tags: ['常用'], location: '测量工具房', notes: '' },
    { id: 44, name: '墨斗', category: 'measurement', subCategory: '定位测量', description: '用于弹线定位，标记直线', usage: '墙体弹线、地面放线、构件定位', tags: ['常用'], location: '工具箱A层', notes: '' },
    { id: 45, name: '红外线水平仪', category: 'measurement', subCategory: '激光测量', description: '发射红外线进行水平或垂直定位', usage: '墙面找平、吊顶安装、管道铺设定位', tags: ['常用', '推荐'], location: '工具箱A层', notes: '' },
    { id: 46, name: '手锯', category: 'cutting', subCategory: '手动切割', description: '手动切割工具，用于切割木材等材料', usage: '木材切割、树枝修剪、临时材料切割', tags: ['常用', '便携'], location: '工具箱B层', notes: '' },
    { id: 47, name: '钢锯', category: 'cutting', subCategory: '手动切割', description: '用于切割金属材料的手动工具', usage: '钢筋切断、钢管切割、金属型材加工', tags: ['常用'], location: '工具箱B层', notes: '' },
    { id: 48, name: '等离子切割机', category: 'cutting', subCategory: '等离子切割', description: '利用等离子弧进行金属切割，切割速度快', usage: '不锈钢切割、铝板切割、有色金属加工', tags: ['专业'], location: '车间', notes: '' },
    { id: 49, name: '水切割机', category: 'cutting', subCategory: '水切割', description: '利用高压水进行切割，无热影响区', usage: '石材切割、玻璃切割、复合材料加工', tags: ['专业'], location: '车间', notes: '' },
    { id: 50, name: '灰桶', category: 'masonry', subCategory: '抹灰工具', description: '用于盛放砂浆、涂料等材料的容器', usage: '砂浆运输、涂料盛放、抹灰施工', tags: ['常用'], location: '工具房', notes: '' },
    { id: 51, name: '刮杠', category: 'masonry', subCategory: '抹灰工具', description: '用于刮平墙面砂浆，控制平整度', usage: '墙面抹灰找平、地面砂浆刮平', tags: ['常用'], location: '工具房', notes: '' },
    { id: 52, name: '阴阳角器', category: 'masonry', subCategory: '抹灰工具', description: '用于处理墙面阴阳角，使线条顺直', usage: '墙面阴阳角找直、装饰线条处理', tags: ['常用'], location: '工具房', notes: '' },
    { id: 53, name: '混凝土试模', category: 'concrete', subCategory: '检测工具', description: '用于制作混凝土试块的模具', usage: '混凝土强度检测试块制作，标准养护', tags: ['常用'], location: '试验室', notes: '' },
    { id: 54, name: '坍落度筒', category: 'concrete', subCategory: '检测工具', description: '用于测量混凝土坍落度，判断流动性', usage: '混凝土质量检测、配合比调整', tags: ['常用'], location: '试验室', notes: '' },
    { id: 55, name: '混凝土养护剂', category: 'concrete', subCategory: '养护工具', description: '用于混凝土表面养护，防止水分蒸发', usage: '混凝土浇筑后喷洒，保持表面湿润', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 56, name: '钢筋切断机', category: 'steel', subCategory: '切割工具', description: '用于切断钢筋的机械设备', usage: '钢筋下料、废料切断、钢筋加工', tags: ['专业'], location: '钢筋加工场', notes: '' },
    { id: 57, name: '钢筋套筒', category: 'steel', subCategory: '连接工具', description: '用于钢筋机械连接的套筒', usage: '钢筋对接连接、提高连接强度', tags: ['专业'], location: '材料仓库', notes: '' },
    { id: 58, name: '电渣压力焊机', category: 'steel', subCategory: '焊接工具', description: '用于钢筋竖向连接的焊接设备', usage: '柱筋连接、剪力墙钢筋连接', tags: ['专业'], location: '钢筋加工场', notes: '' },
    { id: 59, name: '木工刨', category: 'decoration', subCategory: '木工工具', description: '用于刨平木材表面的手动工具', usage: '木材加工、木构件制作、表面修整', tags: ['常用'], location: '木工房', notes: '' },
    { id: 60, name: '木工锯', category: 'decoration', subCategory: '木工工具', description: '用于切割木材的工具', usage: '木材下料、木模板制作、家具加工', tags: ['常用'], location: '木工房', notes: '' },
    { id: 61, name: '砂纸', category: 'decoration', subCategory: '涂料工具', description: '用于打磨表面，使表面光滑', usage: '木材打磨、墙面打磨、金属抛光', tags: ['常用'], location: '装修工具房', notes: '' },
    { id: 62, name: '腻子刀', category: 'decoration', subCategory: '涂料工具', description: '用于批刮腻子的工具', usage: '墙面腻子批刮、缝隙填补、表面找平', tags: ['常用'], location: '装修工具房', notes: '' },
    { id: 63, name: '壁纸刀', category: 'decoration', subCategory: '木工工具', description: '用于切割壁纸、纸张、塑料等材料', usage: '壁纸裁剪、材料切割、精细加工', tags: ['常用', '便携'], location: '工具箱B层', notes: '' },
    { id: 64, name: '电线管', category: 'electrical', subCategory: '布线工具', description: '用于保护电线的管材', usage: '电线穿管、电路保护、防火阻燃', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 65, name: '接线盒', category: 'electrical', subCategory: '接线工具', description: '用于电线连接和保护的盒子', usage: '开关插座安装、电线分支连接', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 66, name: '绝缘胶带', category: 'electrical', subCategory: '接线工具', description: '用于电线接头绝缘包裹', usage: '电线连接绝缘、防潮保护', tags: ['常用', '便携'], location: '电工工具箱', notes: '' },
    { id: 67, name: 'PVC管', category: 'plumbing', subCategory: '安装工具', description: '用于给排水管道的塑料管材', usage: '室内给排水、雨水管、穿线管', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 68, name: 'PPR管', category: 'plumbing', subCategory: '安装工具', description: '用于热水管道的塑料管材', usage: '热水供应管道、供暖管道', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 69, name: '弯头', category: 'plumbing', subCategory: '连接工具', description: '用于管道转弯连接的管件', usage: '管道转向、角度调整', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 70, name: '三通', category: 'plumbing', subCategory: '连接工具', description: '用于管道分支连接的管件', usage: '管道分流、支路连接', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 71, name: '阀门', category: 'plumbing', subCategory: '连接工具', description: '用于控制管道流量的装置', usage: '管道开关、流量调节、维修隔离', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 72, name: '脚手架板', category: 'scaffold', subCategory: '扣件式', description: '用于铺设脚手架工作平台的木板', usage: '脚手架平台铺设、人员行走、物料堆放', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 73, name: '安全网', category: 'scaffold', subCategory: '安全防护', description: '用于脚手架外侧防护，防止人员和物料坠落', usage: '脚手架外侧防护、楼层临边防护', tags: ['重要'], location: '安全器材室', notes: '' },
    { id: 74, name: '门式脚手架', category: 'scaffold', subCategory: '门式', description: '由门架组成的脚手架，搭建方便', usage: '室内装修、小型工程、临时平台', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 75, name: '移动脚手架', category: 'scaffold', subCategory: '移动平台', description: '带轮子的脚手架，可移动使用', usage: '室内装修、设备维修、临时作业', tags: ['常用'], location: '工具房', notes: '' },
    { id: 76, name: '防护眼镜', category: 'safety', subCategory: '个人防护', description: '用于保护眼睛的防护装备', usage: '切割作业、打磨作业、焊接作业', tags: ['常用'], location: '安全器材室', notes: '' },
    { id: 77, name: '防护手套', category: 'safety', subCategory: '个人防护', description: '用于保护手部的防护装备', usage: '搬运作业、机械操作、化学品处理', tags: ['常用'], location: '安全器材室', notes: '' },
    { id: 78, name: '反光背心', category: 'safety', subCategory: '个人防护', description: '用于提高可见性的安全服装', usage: '道路施工、夜间作业、交通指挥', tags: ['常用'], location: '安全器材室', notes: '' },
    { id: 79, name: '应急灯', category: 'safety', subCategory: '应急工具', description: '用于停电时应急照明的设备', usage: '停电应急、安全疏散、夜间作业', tags: ['常用'], location: '各楼层', notes: '' },
    { id: 80, name: '警示带', category: 'safety', subCategory: '警示设备', description: '用于划分危险区域的警示标识', usage: '施工区域隔离、危险区域警示、安全警戒', tags: ['常用'], location: '安全器材室', notes: '' },
    { id: 81, name: '装载机', category: 'machinery', subCategory: '运输设备', description: '用于装载和搬运物料的工程机械', usage: '土方装载、物料转运、场地清理', tags: ['专业'], location: '施工现场', notes: '' },
    { id: 82, name: '推土机', category: 'machinery', subCategory: '挖掘设备', description: '用于推平场地、开挖土方的工程机械', usage: '场地平整、土方开挖、道路修建', tags: ['专业'], location: '施工现场', notes: '' },
    { id: 83, name: '旋挖钻机', category: 'machinery', subCategory: '挖掘设备', description: '用于钻孔灌注桩施工的设备', usage: '桩基施工、地基处理、深基坑支护', tags: ['专业'], location: '施工现场', notes: '' },
    { id: 84, name: '叉车', category: 'machinery', subCategory: '运输设备', description: '用于仓库和施工现场物料搬运', usage: '物料装卸、仓库管理、短途运输', tags: ['专业'], location: '仓库', notes: '' },
    { id: 85, name: '砂浆搅拌机', category: 'machinery', subCategory: '搅拌设备', description: '用于搅拌砂浆的设备', usage: '砌筑砂浆搅拌、抹灰砂浆搅拌', tags: ['常用'], location: '搅拌站', notes: '' },
    { id: 86, name: '环氧树脂', category: 'adhesive', subCategory: '胶粘剂', description: '高强度胶粘剂，用于多种材料粘接', usage: '金属粘接、石材粘接、复合材料粘接', tags: ['专业'], location: '材料仓库', notes: '' },
    { id: 87, name: '硅酮胶', category: 'adhesive', subCategory: '密封胶', description: '高性能密封胶，耐候性好', usage: '幕墙密封、门窗安装、玻璃粘接', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 88, name: '聚氨酯胶', category: 'adhesive', subCategory: '胶粘剂', description: '高强度胶粘剂，弹性好', usage: '塑料粘接、橡胶粘接、金属粘接', tags: ['专业'], location: '材料仓库', notes: '' },
    { id: 89, name: '密封膏', category: 'adhesive', subCategory: '密封胶', description: '用于密封缝隙的膏状材料', usage: '伸缩缝密封、裂缝修补、防水密封', tags: ['常用'], location: '材料仓库', notes: '' },
    { id: 90, name: '界面剂', category: 'adhesive', subCategory: '胶粘剂', description: '用于增强材料间粘结力的涂料', usage: '新旧混凝土连接、墙面抹灰预处理', tags: ['常用'], location: '材料仓库', notes: '' }
];

let tools = [];
let selectedToolIds = [];
let currentCategory = 'all';
let currentSearch = '';
let viewMode = 'grid';
let selectedToolId = null;

function init() {
    loadTools();
    loadSelectedTools();
    renderCategories();
    renderAvailableTools();
    renderSelectedTools();
    setupEventListeners();
    loadTheme();
}

function loadTools() {
    const currentVersion = '2.0';
    const savedVersion = localStorage.getItem('appVersion');
    
    if (savedVersion !== currentVersion) {
        localStorage.clear();
        localStorage.setItem('appVersion', currentVersion);
        tools = [...defaultTools];
        saveTools();
        return;
    }
    
    const saved = localStorage.getItem('tools');
    if (saved) {
        tools = JSON.parse(saved);
    } else {
        tools = [...defaultTools];
        saveTools();
    }
}

function saveTools() {
    localStorage.setItem('tools', JSON.stringify(tools));
}

function loadSelectedTools() {
    const saved = localStorage.getItem('selectedTools');
    if (saved) {
        selectedToolIds = JSON.parse(saved);
    }
}

function saveSelectedTools() {
    localStorage.setItem('selectedTools', JSON.stringify(selectedToolIds));
}

function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    const countAll = tools.length;
    
    document.getElementById('countAll').textContent = countAll;
    
    let html = `<li class="category-item ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
        <i class="fas fa-layer-group"></i>
        <span>全部工具</span>
        <span class="count">${countAll}</span>
    </li>`;
    
    for (const [key, cat] of Object.entries(categories)) {
        const count = tools.filter(t => t.category === key).length;
        html += `<li class="category-item ${currentCategory === key ? 'active' : ''}" data-category="${key}">
            <i class="fas ${cat.icon}"></i>
            <span>${cat.name}</span>
            <span class="count">${count}</span>
        </li>`;
    }
    
    categoryList.innerHTML = html;
}

function renderAvailableTools() {
    const filtered = filterTools();
    const container = document.getElementById('availableTools');
    
    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>未找到工具</h3>
            <p>尝试更换搜索关键词或选择其他分类</p>
        </div>`;
        return;
    }

    let html = '';
    filtered.forEach(tool => {
        if (selectedToolIds.includes(tool.id)) return;
        
        const cat = categories[tool.category];
        const colorIndex = Object.keys(categories).indexOf(tool.category) % categoryColors.length;
        const iconBg = categoryColors[colorIndex];
        
        html += `<div class="tool-card" data-id="${tool.id}">
            <div class="tool-header">
                <div class="tool-icon" style="background: ${iconBg}">
                    <i class="fas ${cat.icon}"></i>
                </div>
                <div class="tool-info">
                    <div class="tool-name">${tool.name}</div>
                    <div class="tool-category">
                        <i class="fas ${cat.icon}"></i>
                        ${cat.name}
                    </div>
                </div>
                <button class="tool-add-btn" data-id="${tool.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="tool-description">${tool.description}</div>
            <div class="tool-tags">
                ${tool.tags.slice(0, 3).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                ${tool.tags.length > 3 ? `<span class="tool-tag">+${tool.tags.length - 3}</span>` : ''}
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
}

function renderSelectedTools() {
    const container = document.getElementById('selectedTools');
    const selectedTools = tools.filter(t => selectedToolIds.includes(t.id));
    
    if (selectedTools.length === 0) {
        container.innerHTML = `<div class="empty-state">
            <i class="fas fa-box-open"></i>
            <h3>暂无选择的工具</h3>
            <p>从左侧选择需要的工具添加到此处</p>
        </div>`;
        return;
    }

    let html = '';
    selectedTools.forEach(tool => {
        const cat = categories[tool.category];
        const colorIndex = Object.keys(categories).indexOf(tool.category) % categoryColors.length;
        const iconBg = categoryColors[colorIndex];
        
        html += `<div class="tool-card selected" data-id="${tool.id}">
            <div class="tool-header">
                <div class="tool-icon" style="background: ${iconBg}">
                    <i class="fas ${cat.icon}"></i>
                </div>
                <div class="tool-info">
                    <div class="tool-name">${tool.name}</div>
                    <div class="tool-category">
                        <i class="fas ${cat.icon}"></i>
                        ${cat.name}
                    </div>
                </div>
                <button class="tool-remove-btn" data-id="${tool.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="tool-description">${tool.description}</div>
            <div class="tool-tags">
                ${tool.tags.slice(0, 3).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                ${tool.tags.length > 3 ? `<span class="tool-tag">+${tool.tags.length - 3}</span>` : ''}
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
    
    document.getElementById('selectedCount').textContent = selectedTools.length;
}

function filterTools() {
    let filtered = tools;
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(t => t.category === currentCategory);
    }
    
    if (currentSearch) {
        const search = currentSearch.toLowerCase();
        filtered = filtered.filter(t => 
            t.name.toLowerCase().includes(search) ||
            t.description.toLowerCase().includes(search) ||
            t.tags.some(tag => tag.toLowerCase().includes(search)) ||
            t.usage.toLowerCase().includes(search)
        );
    }
    
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function addToolToSelected(id) {
    if (!selectedToolIds.includes(id)) {
        selectedToolIds.push(id);
        saveSelectedTools();
        renderAvailableTools();
        renderSelectedTools();
        showToast('工具已添加到选择列表', 'success');
    }
}

function removeToolFromSelected(id) {
    selectedToolIds = selectedToolIds.filter(tid => tid !== id);
    saveSelectedTools();
    renderAvailableTools();
    renderSelectedTools();
    showToast('工具已从选择列表移除', 'info');
}

function clearSelectedTools() {
    if (confirm('确定要清空所有已选择的工具吗？')) {
        selectedToolIds = [];
        saveSelectedTools();
        renderAvailableTools();
        renderSelectedTools();
        showToast('已清空选择列表', 'info');
    }
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderAvailableTools();
    });

    document.getElementById('categoryList').addEventListener('click', (e) => {
        const item = e.target.closest('.category-item');
        if (item) {
            currentCategory = item.dataset.category;
            renderCategories();
            renderAvailableTools();
        }
    });

    document.getElementById('availableTools').addEventListener('click', (e) => {
        const addBtn = e.target.closest('.tool-add-btn');
        if (addBtn) {
            const id = parseInt(addBtn.dataset.id);
            addToolToSelected(id);
            return;
        }
        
        const card = e.target.closest('.tool-card');
        if (card) {
            const id = parseInt(card.dataset.id);
            addToolToSelected(id);
        }
    });

    document.getElementById('selectedTools').addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.tool-remove-btn');
        if (removeBtn) {
            const id = parseInt(removeBtn.dataset.id);
            removeToolFromSelected(id);
            return;
        }
        
        const card = e.target.closest('.tool-card');
        if (card) {
            const id = parseInt(card.dataset.id);
            const tool = tools.find(t => t.id === id);
            if (tool) {
                openDetailModal(id);
            }
        }
    });

    document.getElementById('clearSelectedBtn').addEventListener('click', clearSelectedTools);

    document.getElementById('addToolBtn').addEventListener('click', openAddModal);

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    document.getElementById('detailClose').addEventListener('click', closeDetailModal);
    document.getElementById('detailEdit').addEventListener('click', openEditModal);
    document.getElementById('detailDelete').addEventListener('click', deleteTool);
    
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCancel').addEventListener('click', closeModal);
    document.getElementById('modalSave').addEventListener('click', saveTool);
    
    document.getElementById('pageTabs').addEventListener('click', (e) => {
        const tab = e.target.closest('.page-tab');
        if (tab) {
            const page = tab.dataset.page;
            switchPage(page);
        }
    });
    
    document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
    document.getElementById('recognizeBtn').addEventListener('click', recognizeTool);
    document.getElementById('clearApiKeyBtn').addEventListener('click', clearApiKey);
    
    document.getElementById('toolCategory').addEventListener('change', (e) => {
        populateSubCategories(e.target.value);
    });
}

function switchPage(page) {
    document.querySelectorAll('.page-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.page === page);
    });
    
    document.getElementById('toolSelectorPage').style.display = page === 'selector' ? 'flex' : 'none';
    document.getElementById('aiPage').style.display = page === 'ai' ? 'block' : 'none';
    
    if (page === 'ai') {
        loadApiKey();
    }
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const preview = document.getElementById('imagePreview');
        preview.src = event.target.result;
        preview.style.display = 'block';
        document.getElementById('aiResult').innerHTML = '';
        document.getElementById('recognizeBtn').disabled = false;
    };
    reader.readAsDataURL(file);
}

function loadApiKey() {
    const saved = localStorage.getItem('openaiApiKey');
    if (saved) {
        document.getElementById('apiKey').value = saved;
    }
}

function saveApiKey() {
    const key = document.getElementById('apiKey').value.trim();
    if (key) {
        localStorage.setItem('openaiApiKey', key);
        showToast('API Key已保存', 'success');
    }
}

function clearApiKey() {
    localStorage.removeItem('openaiApiKey');
    document.getElementById('apiKey').value = '';
    showToast('API Key已清除', 'info');
}

async function recognizeTool() {
    const apiKey = document.getElementById('apiKey').value.trim();
    if (!apiKey) {
        showToast('请先输入OpenAI API Key', 'error');
        return;
    }
    
    const preview = document.getElementById('imagePreview');
    if (!preview.src || preview.src === 'about:blank') {
        showToast('请先上传图片', 'error');
        return;
    }
    
    saveApiKey();
    
    const btn = document.getElementById('recognizeBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 识别中...';
    
    try {
        const base64Image = preview.src.split(',')[1];
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: '请识别这张图片中的工具。请用中文回答，包括以下内容：\n1. 工具名称\n2. 工具用途和功能\n3. 使用方法和操作步骤\n4. 使用场合和适用场景\n5. 安全注意事项\n请以HTML格式输出，使用<h3>作为标题，<p>作为段落。'
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    url: `data:image/jpeg;base64,${base64Image}`
                                }
                            }
                        ]
                    }
                ],
                max_tokens: 1000
            })
        });
        
        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            document.getElementById('aiResult').innerHTML = data.choices[0].message.content;
            showToast('识别完成', 'success');
        } else {
            document.getElementById('aiResult').innerHTML = '<p>无法识别图片内容，请尝试上传更清晰的图片。</p>';
            showToast('识别失败', 'error');
        }
    } catch (error) {
        console.error('识别错误:', error);
        document.getElementById('aiResult').innerHTML = `<p>识别出错：${error.message}</p>`;
        showToast('识别出错，请检查API Key是否正确', 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-search"></i> 开始识别';
    }
}

function openAddModal() {
    document.getElementById('modalTitle').textContent = '添加工具';
    document.getElementById('toolForm').reset();
    document.getElementById('toolId').value = '';
    populateCategories();
    document.getElementById('toolSubCategory').innerHTML = '<option value="">请选择子分类</option>';
    document.getElementById('toolModal').classList.add('active');
}

function openEditModal() {
    const tool = tools.find(t => t.id === selectedToolId);
    if (!tool) return;
    
    document.getElementById('modalTitle').textContent = '编辑工具';
    document.getElementById('toolId').value = tool.id;
    document.getElementById('toolName').value = tool.name;
    document.getElementById('toolCategory').value = tool.category;
    populateCategories();
    populateSubCategories(tool.category);
    document.getElementById('toolSubCategory').value = tool.subCategory;
    document.getElementById('toolLocation').value = tool.location || '';
    document.getElementById('toolDescription').value = tool.description;
    document.getElementById('toolUsage').value = tool.usage || '';
    document.getElementById('toolTags').value = tool.tags.join(', ');
    document.getElementById('toolNotes').value = tool.notes || '';
    
    document.getElementById('toolModal').classList.add('active');
}

function openDetailModal(id) {
    selectedToolId = id;
    const tool = tools.find(t => t.id === id);
    if (!tool) return;
    
    const cat = categories[tool.category];
    const colorIndex = Object.keys(categories).indexOf(tool.category) % categoryColors.length;
    const iconBg = categoryColors[colorIndex];
    
    let html = `
        <div class="tool-header" style="margin-bottom: 1.5rem">
            <div class="tool-icon" style="width: 64px; height: 64px; font-size: 2rem; background: ${iconBg}">
                <i class="fas ${cat.icon}"></i>
            </div>
            <div class="tool-info">
                <div class="tool-name" style="font-size: 1.25rem">${tool.name}</div>
                <div class="tool-category" style="margin-top: 0.5rem">
                    <i class="fas ${cat.icon}"></i>
                    ${cat.name} / ${tool.subCategory}
                </div>
            </div>
        </div>
        
        ${tool.location ? `<div class="location-badge"><i class="fas fa-map-marker-alt"></i> ${tool.location}</div>` : ''}
        
        <div class="detail-section">
            <div class="detail-title">描述</div>
            <div class="detail-content">${tool.description}</div>
        </div>
        
        ${tool.usage ? `
        <div class="detail-section">
            <div class="detail-title">用途</div>
            <div class="detail-content">${tool.usage}</div>
        </div>` : ''}
        
        <div class="detail-section">
            <div class="detail-title">标签</div>
            <div class="tag-cloud">
                ${tool.tags.map(tag => `<div class="tag-item">${tag}</div>`).join('')}
            </div>
        </div>
        
        <div class="detail-section">
            <div class="detail-title">备注</div>
            <div class="notes-editor">
                <textarea id="detailNotes" placeholder="添加备注...">${tool.notes || ''}</textarea>
            </div>
            <div class="notes-actions">
                <button class="btn btn-sm btn-primary" id="saveNotes">保存备注</button>
            </div>
        </div>
    `;
    
    document.getElementById('detailBody').innerHTML = html;
    document.getElementById('detailModal').classList.add('active');
    
    document.getElementById('saveNotes').addEventListener('click', () => {
        const notes = document.getElementById('detailNotes').value;
        const toolIndex = tools.findIndex(t => t.id === selectedToolId);
        if (toolIndex !== -1) {
            tools[toolIndex].notes = notes;
            saveTools();
            showToast('备注已保存', 'success');
        }
    });
}

function closeModal() {
    document.getElementById('toolModal').classList.remove('active');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.remove('active');
    selectedToolId = null;
}

function populateCategories() {
    const select = document.getElementById('toolCategory');
    select.innerHTML = '<option value="">请选择分类</option>';
    for (const [key, cat] of Object.entries(categories)) {
        select.innerHTML += `<option value="${key}">${cat.name}</option>`;
    }
}

function populateSubCategories(categoryKey) {
    const select = document.getElementById('toolSubCategory');
    select.innerHTML = '<option value="">请选择子分类</option>';
    if (categoryKey && categories[categoryKey]) {
        categories[categoryKey].subCategories.forEach(sub => {
            select.innerHTML += `<option value="${sub}">${sub}</option>`;
        });
    }
}

function autoClassify(text) {
    if (!text) return;
    
    for (const [category, keywords] of Object.entries(autoClassifyKeywords)) {
        for (const keyword of keywords) {
            if (text.toLowerCase().includes(keyword.toLowerCase())) {
                document.getElementById('toolCategory').value = category;
                populateSubCategories(category);
                return;
            }
        }
    }
}

function saveTool() {
    const id = document.getElementById('toolId').value;
    const name = document.getElementById('toolName').value.trim();
    const category = document.getElementById('toolCategory').value;
    const subCategory = document.getElementById('toolSubCategory').value;
    const location = document.getElementById('toolLocation').value.trim();
    const description = document.getElementById('toolDescription').value.trim();
    const usage = document.getElementById('toolUsage').value.trim();
    const tagsInput = document.getElementById('toolTags').value.trim();
    const notes = document.getElementById('toolNotes').value.trim();
    
    if (!name || !category || !description) {
        showToast('请填写必填字段', 'error');
        return;
    }
    
    const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(t => t) : [];
    
    if (id) {
        const index = tools.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            tools[index] = { ...tools[index], name, category, subCategory, location, description, usage, tags, notes };
            showToast('工具已更新', 'success');
        }
    } else {
        const newId = Math.max(...tools.map(t => t.id), 0) + 1;
        tools.push({ id: newId, name, category, subCategory, location, description, usage, tags, notes });
        showToast('工具已添加', 'success');
    }
    
    saveTools();
    closeModal();
    renderCategories();
    renderAvailableTools();
    renderSelectedTools();
}

function deleteTool() {
    if (!selectedToolId) return;
    
    if (confirm('确定要删除这个工具吗？')) {
        tools = tools.filter(t => t.id !== selectedToolId);
        selectedToolIds = selectedToolIds.filter(id => id !== selectedToolId);
        saveTools();
        saveSelectedTools();
        showToast('工具已删除', 'success');
        closeDetailModal();
        renderCategories();
        renderAvailableTools();
        renderSelectedTools();
    }
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    toast.innerHTML = `<i class="fas ${icons[type]}"></i> ${message}`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.dataset.theme === 'dark';
    
    if (isDark) {
        html.dataset.theme = 'light';
        document.getElementById('themeIcon').className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        html.dataset.theme = 'dark';
        document.getElementById('themeIcon').className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const saved = localStorage.getItem('theme');
    const html = document.documentElement;
    
    if (saved === 'dark') {
        html.dataset.theme = 'dark';
        document.getElementById('themeIcon').className = 'fas fa-sun';
    } else {
        html.dataset.theme = 'light';
        document.getElementById('themeIcon').className = 'fas fa-moon';
    }
}

document.addEventListener('DOMContentLoaded', init);