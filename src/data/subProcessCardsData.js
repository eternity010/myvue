// 子流程信息卡片数据

// 所有子流程环节的数据
export const processCardsData = {
  purchase: {
    productionTitle: '采购物料数量',
    progressPercent: 55,
    progressChange: '+3%',
    productionData: [
      { month: '3月', value: 95 },
      { month: '4月', value: 98 },
      { month: '5月', value: 120 },
      { month: '6月', value: 105 },
      { month: '7月', value: 115 },
      { month: '8月', value: 125 },
      { month: '9月', value: 135 },
      { month: '10月', value: 130 },
      { month: '11月', value: 140 },
    ],
    risks: [
      { text: '物料价格上涨', level: 'warning' },
      { text: '供应商A缺货', level: 'danger' }
    ],
    efficiency: {
      title: '采购流程效率',
      metrics: [
        { 
          label: '采购周期', 
          value: '5.8', 
          unit: '天', 
          trend: '-0.3',
          isPositive: true 
        },
        { 
          label: '供应商响应率', 
          value: '94.2', 
          unit: '%', 
          trend: '+1.5',
          isPositive: true 
        }
      ]
    }
  },
  production: {
    productionTitle: '生产产品数量',
    progressPercent: 68,
    progressChange: '+5%',
    productionData: [
      { month: '3月', value: 80 },
      { month: '4月', value: 90 },
      { month: '5月', value: 110 },
      { month: '6月', value: 115 },
      { month: '7月', value: 125 },
      { month: '8月', value: 128 },
      { month: '9月', value: 130 },
      { month: '10月', value: 135 },
      { month: '11月', value: 138 },
    ],
    risks: [
      { text: '工艺问题', level: 'warning' },
      { text: '质量检测异常', level: 'danger' }
    ],
    efficiency: {
      title: '生产流程效率',
      metrics: [
        { 
          label: '单位生产时间', 
          value: '2.3', 
          unit: '小时', 
          trend: '-0.2',
          isPositive: true 
        },
        { 
          label: '产品合格率', 
          value: '98.7', 
          unit: '%', 
          trend: '+0.8',
          isPositive: true 
        }
      ]
    }
  },
  marketing: {
    productionTitle: '销售订单数量',
    progressPercent: 72,
    progressChange: '+7%',
    productionData: [
      { month: '3月', value: 70 },
      { month: '4月', value: 85 },
      { month: '5月', value: 95 },
      { month: '6月', value: 110 },
      { month: '7月', value: 120 },
      { month: '8月', value: 130 },
      { month: '9月', value: 145 },
      { month: '10月', value: 155 },
      { month: '11月', value: 175 },
    ],
    risks: [
      { text: '竞争价格下降', level: 'warning' },
      { text: '客户投诉增多', level: 'danger' }
    ],
    efficiency: {
      title: '营销流程效率',
      metrics: [
        { 
          label: '订单转化率', 
          value: '28.5', 
          unit: '%', 
          trend: '+3.2',
          isPositive: true 
        },
        { 
          label: '客户满意度', 
          value: '89.6', 
          unit: '%', 
          trend: '-1.2',
          isPositive: false 
        }
      ]
    }
  },
  operation: {
    productionTitle: '设备维护次数',
    progressPercent: 82,
    progressChange: '+2%',
    productionData: [
      { month: '3月', value: 25 },
      { month: '4月', value: 22 },
      { month: '5月', value: 20 },
      { month: '6月', value: 18 },
      { month: '7月', value: 17 },
      { month: '8月', value: 16 },
      { month: '9月', value: 15 },
      { month: '10月', value: 14 },
      { month: '11月', value: 12 },
    ],
    risks: [
      { text: '设备老化严重', level: 'warning' },
      { text: '备品备件短缺', level: 'danger' }
    ],
    efficiency: {
      title: '运维流程效率',
      metrics: [
        { 
          label: '故障响应时间', 
          value: '1.5', 
          unit: '小时', 
          trend: '-0.5',
          isPositive: true 
        },
        { 
          label: '设备完好率', 
          value: '94.8', 
          unit: '%', 
          trend: '+0.9',
          isPositive: true 
        }
      ]
    }
  }
}; 