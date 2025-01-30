import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const GalleryAndAttractions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()

  const content = {
    title: {
      EN: "Gallery & Attractions",
      ZH: "画廊与景点"
    },
    buttonText: {
      EN: "Watch Video Tour",
      ZH: "观看视频导览"
    },
    attractions: [
      {
        title: { EN: "Main Building", ZH: "民宿主体" },
        description: {
          EN: "Our main building features a blend of natural comfort and traditional design, offering spacious rooms and common areas.",
          ZH: "我们民宿的主楼融合了自然舒适与传统设计，提供宽敞的房间和公共区域。"
        },
        image: "http://cdnjson.com/images/2025/01/30/imageacc13f5ac0b24054.png"
      },
      {
        title: { EN: "Night View Overlook", ZH: "俯瞰民宿夜景" },
        description: {
          EN: "Nestled in a serene valley, our guesthouse offers a captivating night view with warm lights contrasting against the lush green surroundings, creating an idyllic atmosphere of tranquility and harmony.",
          ZH: "我们民宿隐匿于山谷中，夜晚灯光点缀，与周围翠绿山林形成鲜明对比，营造出宁静祥和的世外桃源氛围。"
        },
        image: "http://cdnjson.com/images/2025/01/30/image35d8d21856095058.png"
      },
      {
        title: { EN: "Breathtaking Starry Sky", ZH: "民宿星空美轮美奂" },
        description: {
          EN: "The starry sky at Inn is a mesmerizing spectacle, with the Milky Way cascading across the indigo canvas and countless stars twinkling above. The warm glow of the inn's lights harmonizes with the celestial radiance, creating an enchanting and serene atmosphere reminiscent of a secluded paradise.",
          ZH: "我们民宿的星空如一幅浩瀚的画卷，银河倾泻而下，繁星点缀夜幕，与民宿的温暖灯光交相辉映，营造出宁静而神秘的世外桃源之境。"
        },
        image: "http://cdnjson.com/images/2025/01/30/imaged7f3417b6d2f48f4.png"
      },
      {
        title: { EN: "Firefly Paradise", ZH: "萤火虫的天堂" },
        description: {
          EN: "From April to October, and especially during June to August, You Me Sanctum Inn transforms into a firefly paradise. Thousands of fireflies dance through the forest, their soft greenish-yellow glow intertwining with the twinkling stars above, creating a dreamy and romantic nocturnal forestscape.",
          ZH: "我们民宿每年4月至10月，尤其是6月至8月，夜晚化身萤火虫天堂，成千上万的萤火虫在林间飞舞，点点荧光与夜空繁星交相辉映，营造出梦幻而浪漫的森林之夜。"
        },
        image: "http://cdnjson.com/images/2025/01/30/image563c48e56ff5734d.png"
      },
      {
        title: { EN: "Main Entrance", ZH: "民宿大门" },
        description: {
          EN: "The graceful entrance to our guesthouse, featuring traditional architecture and a welcoming atmosphere.",
          ZH: "我们民宿的典雅入口，采用传统建筑风格，营造出温馨的氛围。"
        },
        image: "http://cdnjson.com/images/2025/01/30/image.png"
      },
      {
        title: { EN: "Longfeng Valley Waterfalls", ZH: "龙凤谷瀑布群" },
        description: {
          EN: "Surrounding our guesthouse, the Longfeng Valley Waterfalls boast a majestic presence with their powerful cascades and crystal-clear waters, creating a breathtaking natural spectacle of dynamic and serene beauty amidst the lush green valley.",
          ZH: "我们民宿周边的龙凤谷瀑布群，以其磅礴气势和清澈水流，在绿意盎然的山谷中形成了一道动静结合、令人叹为观止的自然景观。"
        },
        image: "http://cdnjson.com/images/2025/01/30/imagedf539e3ba0f33f2f.png"
      },
      {
        title: { EN: "Lanke Mountain", ZH: "烂柯山" },
        description: {
          EN: "The Legend of Mount Lanke, a local folktale circulating in Quzhou, Zhejiang Province, states that the origin of Go (Weiqi), which hails from China, can be traced back to Mount Lanke.",
          ZH: "烂柯山传说，是流传在浙江衢州的当地民间传说，围棋源于中国，相传围棋之根则在烂柯山。"
        },
        image: "http://pic5.40017.cn/i/ori/1cmDeVBRF7y.jpg"
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
          <div className="h-[600px] mb-8">
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

export default GalleryAndAttractions