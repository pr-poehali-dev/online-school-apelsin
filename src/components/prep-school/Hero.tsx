import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-orange-500 rounded-full p-4 mr-4">
            <span className="text-4xl">🎒</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 font-montserrat">
            Подготовка к <span className="text-orange-500">школе</span>
          </h1>
        </div>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-open-sans">
          Комплексная программа подготовки детей 5-7 лет к успешному началу
          школьной жизни. Развиваем навыки чтения, счёта, письма и социальные
          компетенции в игровой форме.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full">
            <Icon name="BookOpen" size={20} className="mr-2" />
            Записаться на курс
          </Button>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg rounded-full"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Пробный урок бесплатно
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="GraduationCap" size={32} className="text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              100% готовность
            </h3>
            <p className="text-gray-600 font-open-sans">
              К поступлению в школу
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={32} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              Любовь к учёбе
            </h3>
            <p className="text-gray-600 font-open-sans">
              Формируем с первых уроков
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={32} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              Уверенность
            </h3>
            <p className="text-gray-600 font-open-sans">В своих способностях</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
