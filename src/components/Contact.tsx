import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-500 to-yellow-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Записаться на <span className="text-yellow-200">консультацию</span>
          </h2>
          <p className="text-xl text-white opacity-90 font-open-sans">
            Узнайте больше о наших программах и выберите подходящий курс для
            вашего ребёнка
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-montserrat">
              Оставьте заявку
            </h3>

            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Имя родителя"
                  className="border-gray-300 rounded-xl py-3 px-4 font-open-sans"
                />
              </div>

              <div>
                <Input
                  placeholder="Телефон"
                  type="tel"
                  className="border-gray-300 rounded-xl py-3 px-4 font-open-sans"
                />
              </div>

              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  className="border-gray-300 rounded-xl py-3 px-4 font-open-sans"
                />
              </div>

              <div>
                <Input
                  placeholder="Имя и возраст ребёнка"
                  className="border-gray-300 rounded-xl py-3 px-4 font-open-sans"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Дополнительные вопросы или пожелания"
                  className="border-gray-300 rounded-xl p-4 min-h-[100px] font-open-sans"
                />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center font-open-sans">
              Мы перезвоним в течение 30 минут
            </p>
          </div>

          <div className="text-white space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-montserrat">
                Что вас ждёт?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4 flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 font-montserrat">
                      Персональная консультация
                    </h4>
                    <p className="opacity-90 font-open-sans">
                      Обсудим потребности вашего ребёнка и подберём идеальную
                      программу
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4 flex-shrink-0">
                    <Icon name="Calendar" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 font-montserrat">
                      Пробный урок
                    </h4>
                    <p className="opacity-90 font-open-sans">
                      Бесплатное занятие, чтобы познакомиться с форматом и
                      преподавателем
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4 flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 font-montserrat">
                      Гибкий график
                    </h4>
                    <p className="opacity-90 font-open-sans">
                      Составим расписание, удобное для всей семьи
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4 font-montserrat">
                Контакты
              </h4>
              <div className="space-y-3 font-open-sans">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3" />
                  <span>info@apelsin-school.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3" />
                  <span>Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
