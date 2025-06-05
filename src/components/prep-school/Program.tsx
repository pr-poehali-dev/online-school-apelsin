import Icon from "@/components/ui/icon";

const Program = () => {
  const subjects = [
    {
      icon: "Calculator",
      title: "Математика",
      description:
        "Счёт до 100, простые примеры, геометрические фигуры, логические задачи",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "BookOpen",
      title: "Чтение",
      description: "Изучение букв, слогов, чтение простых слов и предложений",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "PenTool",
      title: "Письмо",
      description: "Подготовка руки к письму, обводка, первые буквы и цифры",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "Globe",
      title: "Окружающий мир",
      description: "Знания о природе, временах года, животных и растениях",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "Users",
      title: "Социальные навыки",
      description: "Общение, работа в группе, следование правилам",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: "Brain",
      title: "Логика и внимание",
      description: "Развитие памяти, концентрации, логического мышления",
      color: "from-indigo-400 to-purple-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Программа <span className="text-orange-500">подготовки</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Комплексный подход к развитию всех необходимых навыков для успешного
            обучения в школе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`bg-gradient-to-r ${subject.color} rounded-2xl p-4 mb-4`}
              >
                <Icon
                  name={subject.icon as any}
                  size={32}
                  className="text-white mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 font-montserrat">
                {subject.title}
              </h3>
              <p className="text-gray-600 font-open-sans leading-relaxed">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
