import Icon from "@/components/ui/icon";

const Teachers = () => {
  const teachers = [
    {
      name: "Анна Петровна",
      subject: "Математика и логика",
      experience: "8 лет опыта",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop&crop=face",
      achievements: [
        "Победитель конкурса 'Учитель года'",
        "Автор методических пособий",
        "Кандидат педагогических наук",
      ],
    },
    {
      name: "Мария Сергеевна",
      subject: "Русский язык и литература",
      experience: "12 лет опыта",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      achievements: [
        "Эксперт по развитию речи",
        "Специалист по детской психологии",
        "Магистр филологии",
      ],
    },
    {
      name: "Елена Андреевна",
      subject: "Английский язык",
      experience: "6 лет опыта",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba621fe?w=400&h=400&fit=crop&crop=face",
      achievements: [
        "Сертификат TESOL",
        "Стажировка в Великобритании",
        "Специалист по игровым методикам",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Наши <span className="text-orange-500">преподаватели</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Опытные педагоги с профильным образованием и любовью к детям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-montserrat">
                  {teacher.name}
                </h3>
                <p className="text-orange-600 font-semibold mb-1 font-open-sans">
                  {teacher.subject}
                </p>
                <p className="text-gray-500 mb-6 font-open-sans">
                  {teacher.experience}
                </p>

                <div className="space-y-3">
                  {teacher.achievements.map((achievement, achieveIndex) => (
                    <div key={achieveIndex} className="flex items-start">
                      <Icon
                        name="Award"
                        size={16}
                        className="text-orange-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-600 font-open-sans">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
            Хотите познакомиться лично?
          </h3>
          <p className="text-xl text-gray-600 mb-8 font-open-sans">
            Запишитесь на бесплатную встречу с нашими преподавателями
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center text-gray-700">
              <Icon name="Video" size={24} className="text-orange-500 mr-3" />
              <span className="font-open-sans">
                Видеозвонок в удобное время
              </span>
            </div>
            <div className="flex items-center text-gray-700">
              <Icon
                name="MessageCircle"
                size={24}
                className="text-orange-500 mr-3"
              />
              <span className="font-open-sans">Ответы на все вопросы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
