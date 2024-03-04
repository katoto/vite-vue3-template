import './index.css';
import { Card, Input, message, Select } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import Meta from 'antd/lib/card/Meta';

function PlayTv() {
  const [url, setUrl] = useState<string>('');
  const [preUrl, setPreUrl] = useState<string>('https://jx.xmflv.com/?url=');
  const [searVal, setSearVal] = useState<string>('https://v.qq.com/x/cover/dv71ekj7urmxkvp.html');
  const list = [
    {
      name: '默认解析',
      link: 'https://jx.xmflv.com/?url='
    },
    {
      name: '默认解析',
      link: 'https://jx.playerjy.com/?url='
    },
    {
      name: '默认解析',
      link: 'https://jx.m3u8.tv/jiexi/?url='
    },
    {
      name: '默认解析',
      link: 'https://jx.yparse.com/index.php?url='
    },
    {
      name: '默认解析',
      link: 'https://www.pouyun.com/?url='
    },
    {
      name: '默认解析',
      link: 'https://www.pangujiexi.com/pangu/?url='
    },
    {
      name: '默认解析',
      link: 'https://jx.jsonplayer.com/player/?url='
    },
    {
      name: '默认解析',
      link: 'https://im1907.top/?jx='
    },
    {
      name: '默认解析',
      link: 'https://bd.jx.cn/?url='
    },
    {
      name: '默认解析',
      link: 'https://www.ckplayer.vip/jiexi/?url='
    },
    {
      name: '默认解析',
      link: 'https://jx.nnxv.cn/tv.php?url='
    },
    {
      name: '默认解析',
      link: 'https://json.ovvo.pro/jx.php?url='
    },
    {
      name: '默认解析',
      link: 'https://www.yemu.xyz/?url='
    },
    {
      name: '默认解析',
      link: 'https://jx.000180.top/jx/?url='
    },
    {
      name: '默认解析',
      link: 'https://gj.fenxiangb.com/player/analysis.php?v='
    },
    {
      name: '默认解析',
      link: 'https://www.8090g.cn/?url='
    }
  ]

  useEffect(() => {
    message.success('使用pc看，体验更佳');
    // window.process = {}
  }, [])

  return (
    <div>
      <div className="ifr-box container" >
        <iframe
          id="palybox"
          title={'iframe'}
          src={url || 'https://jx.xmflv.com/?url=https://v.qq.com/x/cover/dv71ekj7urmxkvp.html'}
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
        />
      </div>
      <div className='tv-bottom'>
        <div className='bottom-cont'>
          <Input.Group compact >
            <Select size="large" style={{ width: '16%', textAlign: 'left' }} defaultValue="默认解析"
              onChange={(val: string) => {
                setPreUrl(val)
                const currUrl = (val + searVal).toString();
                setUrl(currUrl)
              }}
            >
              {
                list.map((item, ind) => {
                  return (
                    <Select.Option key={item.link} value={item.link}>{item.name}{ind + 1}</Select.Option>
                  )
                })
              }
            </Select>
            <Search size="large" style={{ width: '80%' }}
              onSearch={(val: string) => {
                setSearVal((prevState: string) => {
                  const nowVal = val.toString();
                  const currUrl = (preUrl + nowVal).toString();
                  setUrl(currUrl)
                  return val.toString()
                })
              }}
              onChange={(e) => {
                setSearVal(e.target.value.trim())
              }}
              placeholder="黏贴影视网址，开启观影之旅" allowClear defaultValue={'https://v.qq.com/x/cover/dv71ekj7urmxkvp.html'} enterButton="播放" />
          </Input.Group>
        </div>
      </div>

      <section className='tv-block'>
        <div className='container tv-cont'>
          <h2>独家推荐</h2>
          <div className='cont-card'>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://t1.szrtcpa.com/2022/05/04/5f9551cd215bd.jpg" />}
            >
              <Meta title="爱，死亡和机器人 第二季" description="《爱、死亡&机器人》是一部动画短片合集，涵盖科幻、奇幻、恐怖和喜剧等题材。每集都采用大胆的叙事手法，故事好看易懂，令人印象深刻。" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://t1.szrtcpa.com/upload/vod/20220313-17/158f2adffff499dade874c63e1d847b6.jpg" />}
            >
              <Meta title="性／生活" description="《性／生活》讲述了一个女人、她的丈夫以及她的旧情人之间的三角恋故事，采用全新的视角审视了女性的身份和欲望。" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://t1.szrtcpa.com/2022/05/17/3aa0a4576ebaf.jpg" />}
            >
              <Meta title="欢迎光临" description="《欢迎光临》讲述了生活在大城市的一群小人物的温暖和奋斗。" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://t1.szrtcpa.com/upload/vod/20220313-24/7b0943f4ed5a556861b3c3c32b5ff807.jpg" />}
            >
              <Meta title="海贼王" description="由此引得群雄并起，众海盗们为了这笔传说中的巨额财富展开争夺，各种势力、政权不断交替，整个世界进入了动荡混乱的“大海贼时代" />
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlayTv;
