export default {
  keyword_input: '关键字',
  empty_text: '暂无数据',
  success: '成功',
  error: '失败',
  add: '添加',
  close: '关闭',
  delete: '删除',
  rename: '重命名',
  set: '设置',
  clean: '清空',
  help: '帮助',
  run: '运行',
  quit: '退出',
  operation_success: '操作成功',
  operation_failed: '操作失败',
  location_error: '当前 Location 错误',
  instrument_error: '标的错误',
  prompt: '提示',
  warning: '警告',
  confirm: '确 认',
  cancel: '取 消',
  save_file: '保存文件',
  detail: '详情',
  ok: '好的',

  edit: '编辑',
  copy: '复制',
  paste: '粘贴',
  select_all: '全选',
  undo: '撤销',

  open_resources_directory: '打开功夫资源目录 (KF_HOME)',
  open_install_directory: '打开功夫安装目录',
  open_basic_configuration: '打开功夫基础配置DB',
  browsing_log: '浏览日志文件',

  clear_journal: '清理journal',
  clear_DB: '清理DB',
  reset_main_panel: '重置主面板',
  export_all_transaction_data: '导出所有交易数据',

  website: '官网',
  user_manual: '用户手册',
  API_documentation: '策略API文档',
  Kungfu_forum: 'Kungfu 论坛',

  KungFu: '功夫',
  about_kungfu: '关于功夫交易',

  file: '文件',
  folder: '文件夹',

  no_focus: '当前页面没有聚焦',
  clear: '清理 {content} 完成, 请重启应用',
  open_window: '正在打开窗口',
  open_code_editor: '正在打开代码编辑器',
  add_board: '添加面板',
  select_board: '请选择要添加的面板',
  add_board_error: '添加面板目标错误',

  delete_category:
    '删除 {category} 所有数据， 如果该 {categoryName} 进程正在运行, 也将停止进程, 确认删除',
  add_config_modal:
    '{category}ID系统唯一, {changeTypeName} 成功后不可修改, 确认 {key}',
  update_config_modal: '确认{key} 相关配置',

  MakeOrderDashboard: '下单面板',
  FutureArbitrage: '套利指令',
  OrderBook: '深度行情',
  MarketData: '行情订阅',
  TradingTask: '交易任务',
  Strategy: '策略进程',
  Md: '行情源 ',
  Td: '交易账户',
  Trade: '成交记录',
  Order: '委托记录',
  PosGlobal: '持仓汇总',
  Pos: '持仓',

  baseConfig: {
    main_panel: '主面板',
    control_center: '控制中心',
  },

  tradingConfig: {
    un_known: '未知',
    default: '封装策略',
    order_task: '下单任务',

    running: '运行中',
    stopping: '停止中',
    stopped: '已停止',
    launching: '启动中',
    error: '错误',
    waiting_restart: '待重启',

    pending: '等待中',
    Idle: '无数据',
    dis_connected: '已断开',
    connected: '已连接',
    logged_in: '已登录',
    login_failed: '登录失败',
    ready: '就绪',

    system: '系统服务',
    daemon: '后台服务',
    md: '行情源',
    td: '交易账户 ',
    strategy: '策略',

    open: '开',
    close: '平',
    close_today: '平今',
    close_yesterday: '平昨',

    buy: '买',
    sell: '卖',
    lock: '锁仓',
    unlock: '解锁',
    exec: '行权',
    drop: '放弃行权',
    purchase: '申购',
    redemption: '赎回',
    split: '拆分',
    merge: '合并',
    margin_trade: '融资买入',
    short_sell: '融券卖出',
    repay_margin: '卖券还款',
    repay_short: '买券还券',
    cash_repay_margin: '现金还款',
    stock_repay_short: '现券还券',
    surplus_stock_transfer: '余券划转',
    guarantee_stock_transfer: '担保品转入',
    guarantee_stock_redeem: '担保品转出',

    submitted: '已提交',
    cancelled: '已撤单',
    filled: '已成交',
    partial_filled_not_active: '部分撤单',
    partial_filled_active: '正在交易',
    lost: '丢失',

    long: '多',
    short: '空',

    Limit: '[Limit] 限价',
    Market: '[Any] 市价',
    FakBest5: '[FakBest5] 上海深圳最优五档即时成交剩余撤销, 不需要报价',
    Forward_best: '[ForwardBest] 深圳本方方最优价格申报',
    Reverse_best:
      '[ReverseBest] 上海最优五档即时成交剩余转限价, 深圳对手方最优价格申报, 不需要报价',
    Fak: '[Fak] 深圳即时成交剩余撤销',
    Fok: '[Fok] 深圳市价全额成交或者撤销',

    speculation: '投机',
    hedge: '套保',
    arbitrage: '套利',
    covered: '备兑',

    any: '任意',
    min: '最小',
    all: '全部',

    by_amount: '按金额',
    by_volume: '按手数',

    IOC: 'IOC',
    GFD: 'GFD',
    GTC: 'GTC',

    stock: '普通股票',
    future: '期货',
    bond: '债券',
    stock_option: '股票期权',
    fund: '基金',
    tech_stock: '科技板股票',
    index: '指数',
    repo: '回购',
    crypto: '数字货币',
    crypto_future: '数字货币合约',
    kungfu_simu: '功夫模拟',

    SSE: '上交所',
    SZE: '深交所',
    BSE: '北交所',
    SHFE: '上期所',
    DCE: '大商所',
    CZCE: '郑商所',
    CFFEX: '中金所',
    INE: '能源中心',

    SP: '郑商所 跨期 SP',
    SPC: '郑商所 跨品种 SPC',
    SPD: '大商所 跨期 SPD',
    IPS: '大商所 跨品种 IPS',

    master: '主控进程',
    ledger: '计算服务',
    cached: '存储服务',
    archive: '归档服务',

    place_order: '下单',
    apart_order: '拆单',
    reset_order: '重置',
    account: '账户',
    instrument: '标的',
    instrument_type: '标的类型',
    volume: '下单量',
    price: '价格',
    protect_price: '保护价格',
    price_type: '方式',
    side: '买卖',
    offset: '开平',
    limit_price: '限额',

    make_order_number: '下单次数',
    no_empty: '下单量不可为空',
    total_order_amount: '总下单量',
    every_volume: '每次下单量',

    fat_finger_buy_modal:
      '买入价格超出警戒线, 当前价格为{price},警戒线为{warningLine}, 当前乌龙指阈值为{fatFinger}',
    fat_finger_sell_modal:
      '卖出价格超出警戒线, 当前价格为{price},警戒线为{warningLine}, 当前乌龙指阈值为{fatFinger}',
    start_process: '请先启动{process}交易进程',
    place_confirm: '下单确认',
    close_all: '是否全部平仓?',
    Continue: '继续下单',
  },

  orderConfig: {
    update_time: '更新时间',
    instrument_id: '代码',
    limit_price: '委托价',
    order_status: '订单状态',
    latency_system: '系统延迟μs',
    latency_network: '网络延迟μs',
    dest_uname: '下单源',
    source_uname: '目标账户',
    completed: '已完成',
    clinch: '已成交',
    all: '全部',

    mean: '委托均价',
    max: '最高委托价',
    min: '最低委托价',
    volume: '成交量',

    checkbox_text: '未完成委托',
    cancel_all: '全部撤单',
    date_picker: '请选择日期',
    confirm_cancel_all: '确认全部撤单',
    entrust: '委托',
    start: '请先启动',
    trade_process: '交易进程',

    entrust_statistical: '委托统计',
    statistical_desc: '实时(最新100条数据)',
    entrust_statistical_number: '委托统计数量',
    ntrust_statistical_price: '委托价统计',
    average_withdrawal_ratio: '平均撤单比 (仅统计 部成部撤 和 全部撤单)',
    average_system_latency: '平均系统延迟(μs)',
    min_system_latency: '最小系统延迟(μs)',
    max_system_latency: '最大系统延迟(μs)',
    average_network_latency: '平均网络延迟(μs)',
    min_network_latency: '最小网络延迟(μs)',
    max_network_latency: '最大网络延迟(μs)',
  },

  tdConfig: {
    td_group: '账户分组',
    td_name: '账户组名称',
    account_name: '账户(组)',
    account_ps: '备注',
    state_status: '状态',
    process_status: '进程',
    unrealized_pnl: '浮动盈亏',
    marked_value: '市值',
    margin: '保证金',
    avail_money: '可用资金',
    actions: '操作',

    add_td: '添加',
    add_group_placeholder: '添加分组',
    set_td_group: '账户分组设置',
    account_group: '账户组',
    td_not_found: '{td}柜台插件不存在',
    sourse_not_found: '配置项不存在, 请检查 {value} package.json',
    need_only_group: '需保证该账户组名称唯一',
    delete_amount_group: '删除账户组{group}',
    confirm_delete_group: '不会影响改账户组下账户进程, 确认删除',
  },

  mdConfig: {
    counter_name: '柜台',
    state_status: '状态',
    process_status: '进程',
    actions: '操作',
    select_counter_api: '选择柜台API',
    select_trade_task: '选择交易任务',
    select_plugin_type: '选择插件类型',

    add_md: '添加',
    counter_plugin_inexistence: '柜台插件不存在',
  },

  strategyConfig: {
    strategy: '策略',
    strategy_id: '策略ID',
    strategy_file: '策略文件',
    strategy_path: '策略路径',
    process_status: '进程',
    unrealized_pnl: '浮动盈亏',
    marked_value: '市值',
    actions: '操作',
    strategy_tip: '需保证该策略ID唯一',

    add_strategy: '添加',
  },

  tradingTaskConfig: {
    task_id: '任务ID',
    process_status: '进程',
    args: '参数',
    actions: '操作',

    add_task: '添加',
    illegal_process_id: '不是合法交易任务进程ID',
    key_inexistence: '交易任务插件 key 不存在',
    plugin_inexistence: '交易任务插件不存在',
    configuration_inexistence: '配置项不存在, 请检查',
    delete_task: '删除交易任务',
    delete_task_content:
      '所有数据, 如果该交易任务正在运行, 也将停止进程, 确认删除',
  },

  posGlobalConfig: {
    instrument_id: '代码',
    account_id_resolved: '持有账户',
    yesterday_volume: '昨',
    today_volume: '今',
    sum_volume: '总',
    avg_open_price: '开仓均价',
    last_price: '最新价',
    unrealized_pnl: '浮动盈亏',
  },

  marketDataConfig: {
    instrument_id: '标的',
    open_price: '开盘价',
    high_price: '最高价',
    low_price: '最低价',
    last_price: '最新价',
    volume: '成交量',
    actions: '操作',

    subscribe_btn: '订阅',
    add_market: '添加自选',
  },

  tradeConfig: {
    instrument: '标的',
    trade_time_resolved: '成交时间',
    kf_time_resolved: '系统时间',
    instrument_id: '代码',
    price: '成交价',
    volume: '成交量',
    latency_trade: '成交延迟(μs)',

    mean_price: '成交均价',
    min_price: '最低成交价',
    max_price: '最高成交价',

    statistical: '成交统计',
    statistical_count: '统计成交数量',
    statistical_price: '成交价统计',
    statistical_desc: '实时(最新100条数据)',
    average_trade_latency: '平均成交延迟(μs)',
    max_trade_latency: '最大成交延迟(μs)',
    min_trade_latency: '最小成交延迟(μs)',
  },

  futureArbitrageConfig: {
    account_name: '账户',
    future_arbitrage_code: '套利代码',
    instrument_bug_A: '买入标的 A',
    instrument_sell_A: '卖出标的 A',
    instrument_bug_B: '买入标的 B',
    instrument_sell_B: '卖出标的 B',
    side: '买卖',
    offset: '开平',
    hedge_flag: '套保',
    price_type: '方式',
    limit_price: '价差 A-B',
    volume: '下单量',

    place_order: '下单',
    reset_order: '重置',
    only_corresponding: '只能对应',
  },

  globalSettingConfig: {
    global_setting_title: '全局设置',
    system: '系统',
    log_level: '全局日志级别',
    for_all_log: '对系统内所有日志级别的设置',

    porformance: '性能',
    open_rocket_model: '开启极速模式',
    rocket_model_desc:
      '开启极速模式会极大的降低系统延迟, 并会使 CPU 使用效率达到100%, 开启后请重启功夫交易系统',
    pass_quote: '跳过行情计算',
    pass_quote_desc:
      '在订阅一定数量(上千)支Ticker时, 由行情推送触发pnl计算会导致性能问题, 开启后会掉过行情计算',

    strategy: '策略',
    use_local_python: '使用本地Python',
    local_python_desc:
      '使用本地python启动策略, 需要 pip3 install kungfu*.whl, 开启后需重启策略, 本地 python3 版本需为',
    python_path: '选择本地 Python 路径',
    python_path_desc:
      '功夫将会以选择的python路径运行策略, 同时需要保证 kungfu*.whl 已经通过 pip安装',

    trade: '交易',
    sound: '提示音',
    use_sound: '启用系统提示音',
    fat_finger_threshold: '乌龙指阈值',
    set_fat_finger: '设置乌龙指触发阈值(百分比)',
    close_threshold: '平仓阈值',
    set_close_threshold: '设置平仓阈值(百分比)',

    code_editor: '代码编辑器',
    tab_space_type: '缩进类别',
    set_tab_space: '功夫编辑器缩进类别',
    tab_space_size: '缩进长度',
    set_tab_space_size: '功夫编辑器缩进长度(空格)',

    comission: '期货手续费',
    varieties: '品种',
    add_comission: '添加',
    exchange_id: '交易所',
    open: '开仓',
    close_today: '平今',
    close_yesterday: '平昨',
    min: '最小',

    timing_rev_top: '定时起停',
    use_timing_rev_top: '使用定时起停',
    timing_task_list: '定时起停任务列表',
    add_timing: '添加定时',
    target_process: '目标进程',
    manner: '方式',
    daily_time: '每日时间',

    master: '主控进程',
    start: '启动',
    stop: '停止',
    restart: '重启',
  },

  validate: {
    no_special_characters: '不能含有特殊字符',
    no_underline: '不能含有下划线',
    no_zero_number: '请输入非零数字',
    no_negative_number: '请输入非负数',
    value_existing: '{value}已存在',
    mandatory: '该项为必填项',
  },

  editor: {
    set_strategy_entrance: '设置策略入口文件',
    current_strategy: '当前策略',
    new_file: '新建文件',
    new_folder: '新建文件夹',
    set_strategy_success: '策略{file}文件路径修改成功！',
    entry_file: '入口文件',
    creaate_success: '{file}创建成功！',

    name_repeat: '此位置已存在文件或文件夹 {name} ，请选择其他名称！',
    empty_input: '必须提供文件或文件夹名称！',
    illegal_character: '名称不能包含\\/:*?"<>|',
    delate_confirm: '确认删除{value}吗？',
    cannot_delate_entry: '不可删除入口文件',
  },

  logview: {
    scroll_to_bottom: '滚动到底部',
  },

  master_interrupt: '主控进程 master 中断',
  master_desc: '主控进程负责策略进程间通信与资源配置, 请重启功夫交易系统',

  ledger_interrupt: '计算服务 ledger 中断',
  ledger_desc: '计算服务负责持仓跟资金计算, 请重启功夫交易系统',

  cached_interrupt: '存储服务 cached 中断',
  cached_desc:
    '存储服务负责数据落地, 存储服务断开不影响交易, 可等交易完成后重启功夫系统',

  state_interrupt_msg: '{state} 已断开',
  state_interrupt_desc: '{state} 已断开, 可能会导致交易中断, 请检查',

  kungfu: '功夫交易系统',

  system_prompt: '系统提示',
  archive_completion: '功夫归档完成',
  archive: '功夫归档中...',
  environment_complete: '功夫环境准备完成 ✓',
  environment_preparation: '功夫环境准备中...',
  ready: '功夫就绪 ✓',
  wait_ready: '等待功夫就绪...',
  saving_completed: '保存数据完成 ✓',
  save_data: '保存数据中...',
  end_all_transactions: '结束所有交易进程 ✓',
  closing: '结束交易进程中, 请勿关闭...',

  quit_confirm: '退出应用会结束所有交易进程, 确认退出吗?',
  restart_process: '功夫图形进程中断, 该中断不会影响交易, 是否重启图形进程？',
};
