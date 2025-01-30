import React from 'react'
import { MapPin, Car, Plane, Train } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const Directions: React.FC = () => {
  const { language } = useLanguage()
  const mapUrl = "https://restapi.amap.com/v3/staticmap?location=118.943858,28.686992&zoom=10&size=750*700&markers=mid,,A:118.943858,28.686992&key=431b6a8dcdc199c1c40e0a892fc140d6"
  const fullMapUrl = "https://uri.amap.com/dir?to=118.943858,28.686992&callnative=0"

  const content = {
    title: { EN: "How to Find Us", ZH: "如何找到我们" },
    location: { EN: "Our Location", ZH: "我们的位置" },
    address: {
      EN: "You Me Sanctum\nNo. 5, Baixiangkeng Natural Village\nWengyuan Village, Jucun Township\nQujiang District, Quzhou City, Zhejiang Province",
      ZH: "月明仓屋\n浙江省衢州市衢江区\n举村乡翁源村百祥坑自然村5号"
    },
    landmarks: {
      title: { EN: "Nearby Landmarks", ZH: "附近地标" },
      items: [
        { EN: "5 minutes from Peaceful Valley National Park", ZH: "距仙霞湖8分钟" },
        { EN: "12 minutes from Wengyuan Ancient Village", ZH: "距翁源古村落12分钟" },
        { EN: "16 minutes from Quzhou Sky Road", ZH: "距衢州天路16分钟" },
        { EN: "58 minutes from Tianji Longmen Scenic Area", ZH: "距天脊龙门景区58分钟" },
        { EN: "87 minutes from Lanke Mountain Scenic Area", ZH: "距烂柯山景区87分钟" },
        { EN: "97 minutes from Yaowang Mountain Scenic Area", ZH: "距药王山景区97分钟" },
        { EN: "105 minutes from Kongshi Nanzong Ancestral Temple", ZH: "距孔氏南宗家庙105分钟" },
      ]
    },
    gettingHere: { EN: "Getting Here", ZH: "如何到达" },
    transport: [
      {
        icon: Car,
        description: {
          EN: "Take Highway, Exit at Quzhou. Follow signs for Nianxiang Line, Shicheng Line, or Dayang Line to reach the homestay.",
          ZH: "自驾到衢州下高速，选择廿项线、石呈线或大杨线抵达民宿。"
        }
      },
      {
        icon: Plane,
        description: {
          EN: "Fly to Quzhou Airport. Follow signs for Nianxiang Line, Shicheng Line, or Dayang Line to reach the homestay.",
          ZH: "飞往衢州机场。选择廿项线、石呈线或大杨线抵达民宿。"
        }
      },
      {
        icon: Train,
        description: {
          EN: "Take the high-speed train to Quzhou Station. Follow signs for Nianxiang Line, Shicheng Line, or Dayang Line to reach the homestay",
          ZH: "乘坐高铁到衢州站。选择廿项线、石呈线或大杨线抵达民宿。"
        }
      }
    ],
    mapButton: { EN: "Open in Maps", ZH: "在地图中打开" }
  }

  return (
    <section id="directions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{content.title[language]}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-red-500" />
              {content.location[language]}
            </h3>
            <p className="text-gray-600 mb-4 whitespace-pre-line">
              {content.address[language]}
            </p>
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">{content.landmarks.title[language]}</h4>
              <ul className="list-disc list-inside text-gray-600">
                {content.landmarks.items.map((item, index) => (
                  <li key={index}>{item[language]}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">{content.gettingHere[language]}</h3>
              <div className="space-y-4">
                {content.transport.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <item.icon className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{item.description[language]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-[75%] h-0">
              <iframe 
                src={mapUrl} 
                className="absolute top-0 left-0 w-full h-full" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="You Me Sanctum Guesthouse Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href={fullMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                {content.mapButton[language]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Directions