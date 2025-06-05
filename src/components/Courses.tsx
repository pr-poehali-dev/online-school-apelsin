import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Courses = () => {
  const courses = [
    {
      title: "Математика для начинающих",
      description:
        "Основы арифметики, логические задачи и развитие математического мышления",
      age: "6-8 лет",
      duration: "60 мин",
      price: "2000 ₽/мес",
      color: "from-blue-400 to-blue-600",
      icon: "Calculator",
    },
    {
      title: "Русский язык и чтение",
      description:
        "Обучение грамоте, развитие речи и любви к чтению через игровые методики",
      age: "6-9 лет",
      duration: "45 мин",
      price: "1800 ₽/мес",
      color: "from-green-400 to-green-600",
      icon: "BookOpen",
    },
    {
      title: "Английский для малышей",
      description:
        "Изучение английского через песни, игры и интерактивные занятия",
      age: "5-8 лет",
      duration: "40 мин",
      price: "2200 ₽/мес",
      color: "from-purple-400 to-purple-600",
      icon: "Globe",
    },
    {
      title: "Окружающий мир",
      description:
        "Знакомство с природой, наукой и обществом через эксперименты",
      age: "6-10 лет",
      duration: "50 мин",
      price: "1600 ₽/мес",
      color: "from-yellow-400 to-orange-500",
      icon: "Leaf",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Популярные <span className="text-orange-500">курсы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Выберите подходящие предметы для вашего ребёнка из нашего каталога
            курсов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`bg-gradient-to-r ${course.color} p-6 text-white`}
              >
                <div className="flex items-center justify-between">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <Icon
                      name={course.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90 font-open-sans">от</div>
                    <div className="text-2xl font-bold font-montserrat">
                      {course.price}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 font-montserrat">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 font-open-sans leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-6 text-sm text-gray-500 font-open-sans">
                  <div className="flex items-center">
                    <Icon name="Users" size={16} className="mr-2" />
                    {course.age}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {course.duration}
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full group-hover:transform group-hover:scale-105 transition-all duration-300">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  Записаться на курс
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg rounded-full"
          >
            <Icon name="Grid" size={20} className="mr-2" />
            Посмотреть все курсы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
