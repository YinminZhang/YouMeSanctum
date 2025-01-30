import React from 'react'
import { Award } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const Awards: React.FC = () => {
  const { language } = useLanguage()

  const content = {
    title: {
      EN: "Awards & Recognition",
      ZH: "奖项与荣誉"
    },
    awards: [
      {
        title: { EN: "2022 Zhejiang Provincial Gold Guesthouse", ZH: "2022年度中国·浙江省级金宿" },
        organization: { EN: "Zhejiang Tourism Homestay Industry Association", ZH: "浙江省旅游民宿产业联合会" }
      },
      {
        title: { EN: "First Class of Zhejiang's 'Zhege Hao' Public Brand", ZH: "首批浙江省个体工商户\"浙个好\"公共品牌" },
        organization: { EN: "Zhejiang Private Enterprise Development Association", ZH: "浙江省民营企业发展联合会" }
      },
      {
        title: { EN: "2023 Green China Designated Accommodation", ZH: "2023年绿色中国指定下榻民宿" },
        organization: { EN: "Green China Campaign Organizing Committee", ZH: "绿色中国行活动组织委员会" }
      },
      {
        title: { EN: "2024 Quzhou City's Top-Rated Guesthouse in Popularity and Reviews", ZH: "2024年衢州市客栈民宿人气榜好评榜双第一" },
        organization: { EN: "Tiktok", ZH: "抖音" }
      }
    ]
  }

  return (
    <section id="awards" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{content.title[language]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {content.awards.map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold text-center mb-2">{award.title[language]}</h3>
              <p className="text-gray-600 text-center">{award.organization[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards