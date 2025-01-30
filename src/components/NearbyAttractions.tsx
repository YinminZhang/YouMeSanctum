import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const NearbyAttractions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()

  const content = {
    title: {
      EN: "Nearby Attractions",
      ZH: "周边景点"
    },
    attractions: [
      {
        title: { EN: "Xianxia Lake", ZH: "仙霞湖" },
        description: {
          EN: "Also known as Hunanzhen Reservoir, Xianxia Lake is situated in the southern part of Quzhou, covering an area of approximately 2,151 square kilometers. Fed by the Wuxijiang Irrigation Canal, it is one of the large reservoirs in East China. The lake is surrounded by towering peaks, ancient trees, and deep valleys. The continuous mountain ranges embrace Xianxia Valley, while the lake's crystal-clear and emerald waters resemble a mirror, occasionally rippled by gentle waves.",
          ZH: "仙霞湖也叫湖南镇水库，位于衢州南部，约2151平方公里，由乌溪江引水灌渠，是华东地区大型水库之一。湖周围层峦叠嶂，古木参天，林壑幽深。山峰连绵不断环抱着仙霞谷，湖水清澈碧绿像一块明镜，偶尔泛起阵阵的涟漪。"
        },
        image: "https://b0.bdstatic.com/eaf048967850719dd078371c67acd900.jpg@h_1280"
      },
      {
        title: { EN: "Wengyuan Ancient Village", ZH: "翁源古村落" },
        description: {
          EN: "Located 3 kilometers northeast of Jucun Township in Qujiang District, about 40 kilometers from the city of Quzhou. Wengyuan Village boasts a rich cultural heritage and was included in the provincial-level historical and cultural conservation and utilization village program - ancient architectural village - in 2013.",
          ZH: "翁源村文化底蕴深厚地处衢江区举村乡，2013年被列入省级历史文化保护利用村落——古建筑村落。"
        },
        image: "https://pic.rmb.bdstatic.com/bjh/down/3761d0cad9ef3e60d2ed3df9e307cb48.png"
      },
      {
        title: { EN: "Lanke Mountain", ZH: "烂柯山" },
        description: {
          EN: "The Legend of Mount Lanke, a local folktale circulating in Quzhou, Zhejiang Province, states that the origin of Go (Weiqi), which hails from China, can be traced back to Mount Lanke.",
          ZH: "烂柯山传说，是流传在浙江衢州的当地民间传说，围棋源于中国，相传围棋之根则在烂柯山。"
        },
        image: "http://pic5.40017.cn/i/ori/1cmDeVBRF7y.jpg"
      },
      {
        title: { EN: "Mountain of Medicine King", ZH: "药王山" },
        description: {
          EN: "Legend has it that Emperor Yan (also known as Shennong, the God of Agriculture) gathered herbs here, leaving behind historical sites such as \"Shennong Valley\" and \"Shennong Alchemy.\" Later, famous physicians like Li Shizhen, Bian Que, and Hua Tuo also gathered herbs and resided here, leaving behind the historical site \"Residence of Medicine King.\" Hence, it was named \"Mountain of Medicine King.\"",
          ZH: "相传炎帝在此采药，留有“神农谷”、“神农炼丹”古迹；后有李时珍、扁鹊、华陀等相继在此采药、居住、留有“药王居”遗迹，故得名“药王山”。"
        },
        image: "https://img.meituan.net/leadinimg/e8c8dcc9b2f640972a2a6248d1d5ca32226840.webp%40watermark%3D0"
      },
      {
        title: { EN: "Tianji Dragon Gate", ZH: "天脊龙门" },
        description: {
          EN: "Tianji Dragon Gate one of the main scenic areas of the national forest park and provincial-level scenic spot—Ziweishan National Forest Park, features a spectacular volcanic rock canyon, integrating unique mountains, peculiar rocks, and serene valleys with flowing streams.",
          ZH: "天脊龙门，国家级森林公园、省级风景名胜区——紫微山国家森林公园的主景区之一，火山岩峡谷奇观，集奇山异石、幽谷川流于一体。"
        },
        image: "http://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web2759/site/picture/0/1803141652284569591.jpg"
      },
      {
        title: { EN: "Confucius Southern Ancestral Temple", ZH: "孔氏南宗家庙" },
        description: {
          EN: "The Confucius Southern Ancestral Temple, with a history of approximately 700 years, is one of the three Confucius ancestral temples in China. Later, the imperial court ordered the construction of the Confucius ancestral temple here, known as the 'Southern Branch'.",
          ZH: "孔氏南宗家庙距今约有700多年的历史。据史料记载，北宋末年，金兵南侵，宋高宗赵构仓促南渡，建都于临安，孔子第48代裔孙孔端友，负着孔子和孔子夫人的楷木像，离开山东曲阜，南迁至此，后敕建孔氏家庙，为宗庙，为中国仅有的三座孔氏家庙之一，素称“南宗”。"
        },
        image: "http://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web2849/site/picture/0/1907301651113607796.jpg"
      },
    ]
  }

  const nextAttraction = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.attractions.length)
  }

  const prevAttraction = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.attractions.length) % content.attractions.length)
  }

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{content.title[language]}</h2>
        <div className="relative">
          <div className="h-[650px] mb-8">
            <img
              src={content.attractions[currentIndex].image}
              alt={content.attractions[currentIndex].title[language]}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <button
            onClick={prevAttraction}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
            aria-label="Previous attraction"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextAttraction}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
            aria-label="Next attraction"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold mb-4">{content.attractions[currentIndex].title[language]}</h3>
          <p className="text-gray-600 mb-6">{content.attractions[currentIndex].description[language]}</p>
          {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-full inline-flex items-center hover:bg-blue-600 transition duration-300">
            <Play className="w-5 h-5 mr-2" />
            {content.buttonText[language]}
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default NearbyAttractions