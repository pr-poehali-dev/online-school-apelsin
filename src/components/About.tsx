import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Monitor",
      title: "Интерактивные уроки",
      description:
        "Современные технологии делают обучение увлекательным и эффективным",
    },
    {
      icon: "Users",
      title: "Небольшие группы",
      description:
        "До 8 учеников в классе для максимального внимания каждому ребёнку",
    },
    {
      icon: "Clock",
      title: "Гибкое расписание",
      description: "Подстраиваем время занятий под режим вашей семьи",
    },
    {
      icon: "Target",
      title: "Индивидуальный подход",
      description: "Учитываем особенности и темп развития каждого ученика",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Почему выбирают <span className="text-orange-500">Апельсин</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Мы создали уникальную образовательную среду, где каждый ребёнок
            может раскрыть свой потенциал
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 shadow-lg group-hover:shadow-xl">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Icon
                    name={feature.icon as any}
                    size={36}
                    className="text-orange-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-open-sans leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4 font-montserrat">
            Начните обучение уже сегодня!
          </h3>
          <p className="text-xl mb-6 opacity-90 font-open-sans">
            Первый урок бесплатно для всех новых учеников
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <Icon name="Check" size={24} className="mr-2" />
              <span className="font-open-sans">
                Без регистрационных взносов
              </span>
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={24} className="mr-2" />
              <span className="font-open-sans">Материалы включены</span>
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={24} className="mr-2" />
              <span className="font-open-sans">Поддержка 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
