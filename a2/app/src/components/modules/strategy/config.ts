export const columns: AntTableColumns = [
    {
        title: '策略ID',
        dataIndex: 'name',
        align: 'left',
        sorter: true,
        width: 90,
    },
    {
        title: '策略文件',
        dataIndex: 'strategyFile',
        align: 'left',
        sorter: true,
        width: 120,
    },
    {
        title: '进程',
        dataIndex: 'processStatus',
        align: 'center',
        sorter: true,
        width: 60,
    },
    {
        title: '浮动盈亏',
        dataIndex: 'unrealizedPnl',
        align: 'right',
        sorter: true,
        width: 90,
    },
    {
        title: '市值',
        dataIndex: 'marketValue',
        align: 'right',
        sorter: true,
        width: 90,
    },
    {
        title: '保证金',
        dataIndex: 'margin',
        align: 'right',
        sorter: true,
        width: 90,
    },

    {
        title: '操作',
        dataIndex: 'actions',
        align: 'right',
        width: 140,
        fixed: 'right',
    },
];
