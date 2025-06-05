import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-orange-500 rounded-full p-4 mr-4">
            <span className="text-4xl">🍊</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 font-montserrat">
            Онлайн школа <span className="text-orange-500">Апельсин</span>
          </h1>
        </div>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-open-sans">
          Качественное начальное образование в комфортной домашней обстановке.
          Персональный подход к каждому ребёнку и современные методики обучения.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full">
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть видео о школе
          </Button>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg rounded-full"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              500+ учеников
            </h3>
            <p className="text-gray-600 font-open-sans">
              Доверились нашей школе
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={32} className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              5 лет опыта
            </h3>
            <p className="text-gray-600 font-open-sans">В онлайн образовании</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="BookOpen" size={32} className="text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              15+ предметов
            </h3>
            <p className="text-gray-600 font-open-sans">В нашей программе</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
