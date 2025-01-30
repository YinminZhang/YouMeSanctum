import React from 'react'
import { Camera, Sunrise, Leaf, Flame, CookingPot, Star, Sparkles, Mountain } from 'lucide-react'
import { useLanguage } from './LanguageContext'

const Activities: React.FC = () => {
  const { language } = useLanguage()

  const content = {
    title: {
      EN: "Our Activities",
      ZH: "我们的活动"
    },
    activities: [
      {
        title: { EN: "Morning Tea Ritual", ZH: "围炉煮茶" },
        description: {
          EN: "Wake up naturally and start your day with a pot of tea, accompanied by the soothing sounds of nature.",
          ZH: "早上睡到自然醒，煮一壶茶，在大自然的美妙声音中开启美好的一天。"
        },
        icon: Sunrise,
        schedule: { EN: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM", ZH: "周二和周四，下午2:00 - 4:00" }
      },
      {
        title: { EN: "Courtyard Photography", ZH: "庭院摄影" },
        description: {
          EN: "Our picturesque courtyard offers stunning photo opportunities at every turn.",
          ZH: "这里的庭院一步一景，出片效果很好。"
        },
        icon: Camera,
        schedule: { EN: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM", ZH: "周二和周四，下午2:00 - 4:00" }
      },
      {
        title: { EN: "Dragon-Phoenix Valley Exploration", ZH: "龙凤谷探秘" },
        description: {
          EN: "Explore the Dragon-Phoenix Valley, visit waterfalls, and learn about local flora and fauna.",
          ZH: "深入“龙凤谷”，游览瀑布群，了解丛林动植物。"
        },
        icon: Mountain,
        schedule: { EN: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM", ZH: "周二和周四，下午2:00 - 4:00" }
      },
      {
        title: { EN: "Wild Foraging", ZH: "野外采摘" },
        description: {
          EN: "Seasonal foraging for bamboo shoots, bayberries, chestnuts, persimmons, and various wild fruits and vegetables.",
          ZH: "有竹笋、杨梅、板栗、柿子及各种野果、野菜可供采摘。"
        },
        icon: Leaf,
        schedule: { EN: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM", ZH: "周二和周四，下午2:00 - 4:00" }
      },
      {
        title: { EN: "Wood-fired Cooking Experience", ZH: "柴火灶烹饪体验" },
        description: {
          EN: "Prepare local delicacies using fresh ingredients and traditional wood-fired stoves.",
          ZH: "可自带，或现取新鲜食材，使用柴火灶制作当地美食。"
        },
        icon: CookingPot,
        schedule: { EN: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM", ZH: "周二和周四，下午2:00 - 4:00" }
      },
      {
        title: { EN: "Outdoor BBQ", ZH: "野炊烧烤" },
        description: {
          EN: "Enjoy a nature-immersed BBQ experience using local ingredients, a favorite among children.",
          ZH: "在亲近大自然中，就地取材，野炊烧烤是孩子们的最爱。"
        },
        icon: Flame,
        schedule: { EN: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM", ZH: "周二和周四，下午2:00 - 4:00" }
      },
      {
        title: { EN: "Stargazing", ZH: "夜间星空" },
        description: {
          EN: "Experience zero light pollution and marvel at the stunning night sky, with the Milky Way visible to the naked eye.",
          ZH: "空气“0”污染，极通透，星空美轮美奂，银河肉眼可见。"
        },
        icon: Star,
        schedule: { EN: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM", ZH: "周二和周四，下午2:00 - 4:00" }
      },
      {
        title: { EN: "Firefly Watching", ZH: "观赏萤火虫" },
        description: {
          EN: "Best time to watch fireflies is from April to October during your stay.",
          ZH: "每年4月—10月是入住酒店观赏萤火虫的最佳时节。"
        },
        icon: Sparkles,
        schedule: { EN: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM", ZH: "周二和周四，下午2:00 - 4:00" }
      },
    ]
  }

  return (
    <section id="activities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{content.title[language]}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.activities.map((activity, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <activity.icon className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">{activity.title[language]}</h3>
              </div>
              <p className="text-gray-600 mb-4">{activity.description[language]}</p>
              {/* <p className="text-sm text-gray-500">
                <strong>{language === 'EN' ? 'Schedule:' : '时间安排：'}</strong> {activity.schedule[language]}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities