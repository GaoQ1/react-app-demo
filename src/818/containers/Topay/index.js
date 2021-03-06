import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import { alert } from '../../utils/alert'

import styles from '../../../../public/less/818/index.less'

class Topay extends Component {
  render() {
    return (
      <div>
        <div class={styles.container}>
            <div class={`${styles.payHeader} ${styles.goPay}`}>
                <div class={styles.payLeft}>
                    <div class={styles.waitPay}>待支付</div>
                    <div class={styles.payNum}><span>订单编号</span>
                        <div class={styles.numB}>712345738496738</div>
                    </div>
                    <div class={`${styles.payBox} ${styles.fir}`}><span>下单时间:</span>2016-09-23 14:32:54</div>
                    <div class={styles.payBox}><span>支付方式:</span>积分支付</div>
                    <div class={styles.payBox}><span>订单金额:</span><b class={styles.ora}>28990积分</b></div>
                    <a href="javascript:;" class={styles.cancelBtn}>取消订单</a>
                </div>
                <Link class={styles.goto} to="/payment">去支付</Link>

            </div>
            <div class={styles.success}>
                <h3>兑换成功名单</h3>
                <div class={styles.successBox}>
                    <div class={styles.successDiv}>
                        <h5>欧阳锋</h5>
                        <p>万里行卡号:<span>7266*******1234</span></p>
                        <p>手机号:<span>156****3413</span></p>
                    </div>
                    <div class={styles.successDiv}>
                        <h5>张傲蕾</h5>
                        <p>万里行卡号:<span>3546*******1234</span></p>
                        <p>手机号:<span>180****3422</span></p>
                    </div>
                    <div class={styles.successDiv}>
                        <h5>Steve Jobs</h5>
                        <p>万里行卡号:<span>1006*******1228</span></p>
                        <p>手机号:<span>160****3552</span></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Topay
// export default connect(matchStateToProps,matchDispatchToProps)(App)
