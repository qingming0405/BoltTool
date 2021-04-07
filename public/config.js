let config = {
  // 设备参数配置
  get paramsSet() {
    return {
      globalRun: {
        title: "全局运行参数",
        configs: {
          ev: { checked: false, type: 1, label: "激励电压", value: "EV_100", options: { "EV_100": "100V", "EV_200": "200V", "EV_300": "300V", "EV_400": "400V" } },
          pm: { checked: false, type: 1, label: "激励模式", value: "PM_Internal", options: { "PM_Internal": "内部激励", "PM_External": "外部激励" } },
          sl: { checked: false, type: 1, label: "采样深度", value: "SL_512", options: { "SL_512": "512（点数）", "SL_1024": "1024（点数）" } },
          tm: { checked: false, type: 1, label: "触发模式", value: "TM_External", options: { "TM_Soft": "软件触发", "TM_Encoder": "编码器触发", "TM_Pos": "位置触发", "TM_External": "外部触发", "TM_Internal": "内部触发", "TM_Threshold": "阈值触发" } },
        }
      },
      signalReceive: {
        title: "信号接收设置",
        configs: {
          iDmp: { checked: false, type: 1, label: "阻抗匹配", value: "50", options: { "0": "不启用", "50": "50ohms", "100": "100ohms", "200": "200ohms", "400": "400ohms" } },
          frq: { checked: false, type: 1, label: "信号接收频率", value: "RFQ_1", options: { "RFQ_1": "接收频率 1M", "RFQ_2Dt25": "接收频率 2.25M", "RFQ_5": "接收频率 5M", "RFQ_10": "接收频率 10M", "RFQ_15": "接收频率 15M", "RFQ_0Dt2_30": "接收频率 0.2M~30M", "RFQ_10_30": "接收频率 10M~30M", "RFQ_RSV": "保留" } },
          wm: { checked: false, type: 1, label: "检波方式", value: "RF", options: { "RF": "RF", "FullWave": "全波", "SemiPositive": "正半波", "SemiNegetive": "负半波" } },
          trm: { checked: false, type: 1, label: "收发模式", value: "TR_Integrated", options: { "TR_Integrated": "收发一体", "TR_Seperated": "收发分离" } },
          wkm: { checked: false, type: 1, label: "工作模式", value: "ST_Normal", options: { "ST_Resetting": "复位状态", "ST_Idle": "空闲状态", "ST_Normal": "正常状态", "ST_Error": "异常状态", "ST_Test": "测试状态" } },
          flm: { checked: false, type: 1, label: "滤波器选择", value: "FM_HP1", options: { "FM_HP1": "高通 1M", "FM_HP2Dt5": "高通 2.5M", "FM_HP5": "高通 5M", "FM_HP10": "高通 10M" } },
        }
      },
      AScan: {
        title: "AScan",
        configs: {
          fGain: { checked: false, type: 2, label: "增益", value: "600" },
          scanLength: { checked: false, type: 2, label: "采样长度", value: "-1" },
          cableLen: { checked: false, type: 2, label: "线缆长度", value: "0" },
          confLevel: { checked: false, type: 2, label: "置信度", value: "95" },
          //  scanLength:{checked:false,type:1,label:"采样长度", value:"-1", options:{"-1":"自动","20480":"20480","38912":"38912"}},
          readMode: { checked: false, type: 1, label: "波形模式", value: "0", options: { "0": "全波", "1": "闸门波" } },
        }
      },
      /**其它配置**/
      boltSet: {
        title: "螺栓配置",
        configs: {
          modelName: { checked: false, type: 2, label: "规格名称", value: "" },
          totalLen: { checked: false, type: 2, label: "总长", value: "420" },
          standardLen: { checked: false, type: 2, label: "标称长度", value: "400" },
          diameter: { checked: false, type: 2, label: "螺栓直径", value: "64" },
          clampLen: { checked: false, type: 2, label: "夹紧长度", value: "285" },
          threadLen: { checked: false, type: 2, label: "螺纹长度", value: "0" },
        }
      },
      always: {
        title: "左侧常显配置",
        configs: {
          pull: { checked: true, type: 2, label: "拉力", value: "1" },
          stressType: { checked: true, type: 1, label: "测量模式", value: "1", options: { "1": "模式1", "2": "模式2" } },
          fitting: { checked: true, type: 1, label: "拟合方式", value: "1", options: { "1": "算法1", "2": "算法2", "3": "算法3" } },
        }
      },
      wave: {
        title: "波形相关配置",
        configs: {
          fStart: { checked: false, type: 2, label: "起点", value: "109" },
          fWidth: { checked: false, type: 2, label: "跨度", value: "6" },
          fThreshold: { checked: false, type: 2, label: "高度", value: "15" },
          spaceTime: { checked: false, type: 2, label: "采集间隔", value: "10" },
          wStart: { checked: false, type: 2, label: "波形起始", value: "0" },
          wRange: { checked: false, type: 2, label: "波形范围", value: "0" },
          // referLine:{checked:false,type:2,label:"参考线", value:"0"},
        }
      }
    }
  }
}