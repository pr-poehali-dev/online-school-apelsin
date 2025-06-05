import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AgeGroups = () => {
  const groups = [
    {
      age: "5-6 лет",
      title: "Ранняя подготовка",
      description: "Мягкое введение в мир знаний через игру и творчество",
      features: [
        "Знакомство с буквами и цифрами",
        "Развитие мелкой моторики",
        "Формирование усидчивости",
        "Социализация в группе",
      ],
      duration: "30 мин",
      price: "1500 ₽/мес",
      color: "from-green-400 to-emerald-600",
    },
    {
      age: "6-7 лет",
      title: "Интенсивная подготовка",
      description: "Комплексная подготовка к поступлению в первый класс",
      features: [
        "Чтение простых текстов",
        "Решение примеров до 20",
        "Письмо печатными буквами",
        "Психологическая готовность",
      ],
      duration: "45 мин",
      price: "1800 ₽/мес",
      color: "from-orange-400 to-red-500",
      popular: true,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Возрастные <span className="text-orange-500">группы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Программы адаптированы под возрастные особенности и потребности
            детей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {groups.map((group, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                group.popular ? "ring-4 ring-orange-200" : ""
              }`}
            >
              {group.popular && (
                <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold font-open-sans">
                  ⭐ Самая популярная группа
                </div>
              )}

              <div className={`bg-gradient-to-r ${group.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold font-montserrat">
                    {group.age}
                  </h3>
                  <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                    <span className="text-sm font-semibold">
                      {group.duration}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2 font-montserrat">
                  {group.title}
                </h4>
                <p className="opacity-90 font-open-sans">{group.description}</p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-4 text-gray-800 font-montserrat">
                    Что изучаем:
                  </h5>
                  <ul className="space-y-3">
                    {group.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-600 font-open-sans">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-orange-500 font-montserrat">
                    {group.price}
                  </span>
                  <span className="text-sm text-gray-500 font-open-sans">
                    8 занятий в месяц
                  </span>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Записаться в группу
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;
