import { TextLoop } from "react-text-loop-next";
import PlayTv from './components/play';
import Footer from "./components/footer";
import vipBg from '../../assets/img/vipbg.png';
import './home.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <div className="big-logo">
              <h3>katoto</h3>
            </div>
            <li>
              <a href="/" rel="noreferrer" title="海量高清VIP影视免费看">首页</a>
            </li>
            <li>
              <a href="http://katoto.cn/webpack5-docs/">程序员区</a>
            </li>
            <li>
              <a href="https://www.remove.bg/zh/" rel="noreferrer" target="_blank">去水印</a>
            </li>
            <li>
              <a href="https://www.67tool.com/" rel="noreferrer" target="_blank">即时工具</a>
            </li>
            <li>
              <a href="https://support.qq.com/product/507346" rel="noreferrer" target="_blank">我要反馈</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="body" style={{ backgroundImage: `url(${vipBg})` }}>
        <div className='head-board container'>
          <TextLoop mask>
            <p>katoto-vip影视在线播放</p>
            <p><b>使用方法：进入各大视频网站，找到VIP视频，然后复制浏览器上的视频地址，粘贴到视频的输入框，并点击“播放”按钮即可</b></p>
          </TextLoop>
        </div>
        <PlayTv />
      </div>
      <Footer />
    </div >
  );
}

export default App;
