import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import Title from './screens/Maker/Maker'
import * as serviceWorker from './screens/serviceWorker'

import { library } from '@fortawesome/fontawesome-svg-core' // fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons' // fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons' // fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons' // fontawesomeのregularアイコンのインポート

library.add(fab, fas, far) // 他のコンポーネントから簡単に呼び出せるようにするための登録処理？

ReactDOM.render(<Title />, document.getElementById('root'))
serviceWorker.unregister()
