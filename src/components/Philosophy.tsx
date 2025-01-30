import React from 'react'
import { Leaf, Heart, Home as HomeIcon } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const Philosophy: React.FC = () => {
  const { language } = useLanguage()

  const content = {
    title: {
      EN: "Our Philosophy",
      ZH: "我们的理念"
    },
    items: [
      {
        icon: Leaf,
        title: { EN: "Pure Beauty", ZH: "打造纯粹之美" },
        description: {
          EN: "We are committed to creating perfect harmony between architecture, landscape, lighting and nature. The beauty of You Me Sanctum is the beauty of 'purity'.",
          ZH: "我们致力于打造建筑、景观、灯光与大自然完美融合。月明仓屋的美，是“纯粹”之美。"
        }
      },
      {
        icon: Heart,
        title: { EN: "Treating Guests as Family", ZH: "奉以亲友之仪" },
        description: {
          EN: "Every guest who visits here will be treated with the same respect and hospitality as visiting family and friends.",
          ZH: "我们的每一位宾客光临这里，有如平日走亲访友一样，都会受到主人友善的尊重和款待。"
        }
      },
      {
        icon: HomeIcon,
        title: { EN: "Creating a Home Atmosphere", ZH: "谱写归家之韵" },
        description: {
          EN: "We strive to provide a simple, warm and delicious dining environment. Every detail here creates a cozy, comfortable and familiar home atmosphere.",
          ZH: "我们致力于提供简约人文、烟火气与美食并存的环境。每个细节都散发着温馨、舒适的家的气息，让您宾至如归。"
        }
      }
    ]
  }

  return (
    <section id="philosophy" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{content.title[language]}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">{item.title[language]}</h3>
              <p className="text-gray-600">{item.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy