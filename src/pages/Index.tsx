import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.contact) {
      toast.success('Спасибо! Мы отправим вам презентацию в ближайшее время.');
      setFormData({ name: '', contact: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Ваш универсальный хит для полки
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Мультиформатные капсулы для стирки Family boks — больше довольных покупателей. 
                Экономично, универсально, удобно для вас и ваших клиентов.
              </h2>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить презентацию и спецпредложение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/2d209c6d-96eb-4a2b-9d73-cbbff54ee140/files/ac0ce869-9ddf-48aa-913c-7a70c765fc21.jpg"
                alt="Family boks на полке"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Знакомо ли вам это?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://cdn.poehali.dev/projects/2d209c6d-96eb-4a2b-9d73-cbbff54ee140/files/9597480c-d083-4aa6-8894-bf49c73151cf.jpg"
              alt="Проблемы ритейлеров"
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="space-y-6">
              {[
                'Переплачиваете за ассортимент, который "не идет" — покупатели теряются в выборе',
                'Проходят недели, пока новая позиция начинает приносить реальную выручку',
                'Вас регулярно "бомбят" сомнительные новинки — результат сомнительный, риски ваши'
              ].map((text, idx) => (
                <Card key={idx} className="border-l-4 border-l-destructive hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex gap-4">
                    <Icon name="AlertCircle" className="text-destructive flex-shrink-0" size={24} />
                    <p className="text-lg">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Family boks — капсулы, которые выбирают сами покупатели
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Загрузите на полку один универсальный продукт. В каждой упаковке — капсулы для разных сценариев: 
              стандартная стирка, вещи для детей, сильные загрязнения и деликатные ткани.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.poehali.dev/projects/2d209c6d-96eb-4a2b-9d73-cbbff54ee140/files/28734d03-7944-477d-ab97-db2ccb50707e.jpg"
              alt="Капсулы Family boks"
              className="rounded-3xl shadow-2xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Преимущества для вашего бизнеса
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Coins', title: 'Экономия', desc: 'Больше продаж с меньшим ассортиментом, минимум списаний' },
              { icon: 'Handshake', title: 'Универсальность', desc: 'Подходит для большинства покупателей и форматов магазинов' },
              { icon: 'TrendingUp', title: 'Увеличение трафика', desc: 'Инновация, которая "цепляет" и быстро набирает популярность' },
              { icon: 'Clock', title: 'Экономия времени', desc: 'Проще заказывать, проще объяснять ассортимент персоналу' },
              { icon: 'Shield', title: 'Безопасность', desc: 'Подтверждённое качество и международные сертификаты' },
              { icon: 'Users', title: 'Лояльность', desc: 'Клиенты возвращаются за проверенным решением' }
            ].map((benefit, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-primary">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name={benefit.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Нам доверяют 500+ магазинов
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: '500+', label: 'Магазинов-партнёров' },
              { number: '98%', label: 'Повторных покупок' },
              { number: '100%', label: 'Сертифицированная продукция' }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-lg text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto border-l-4 border-l-secondary">
            <CardContent className="p-8">
              <div className="flex gap-4 items-start">
                <Icon name="Quote" className="text-secondary flex-shrink-0" size={40} />
                <div>
                  <p className="text-xl mb-4 italic">
                    "Мы искали товар, который действительно нужен разным покупателям. Family boks упростил закупки 
                    и помог увеличить долю возвратных покупателей — с полки не залеживается!"
                  </p>
                  <p className="font-semibold text-lg">— Ирина Орлова</p>
                  <p className="text-muted-foreground">Руководитель закупок, сеть "ГородМаркет"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                А если наши покупатели не поймут, как использовать разные капсулы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Понятная цветовая маркировка и короткая инструкция для каждого вида — покупателю не надо разбираться долго. 
                Плюс визуальные подсказки прямо на упаковке.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Чем Family boks выгоднее нескольких отдельных товаров?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В одной товарной позиции — сразу все главные форматы. Меньше остатков, проще учёт и поставка, 
                максимальное количество проблем для клиента решается одной покупкой.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Есть ли гарантии качества и безопасность состава?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, все капсулы Family boks проходят независимые лабораторные тесты и имеют полный комплект сертификатов. 
                С радостью предоставим документы по первому требованию.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Получите специальное предложение
            </h2>
            <p className="text-xl opacity-90">
              Оставьте заявку прямо сейчас — получите подробную презентацию и специальную оптовую цену на первую поставку
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="text-lg py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон или Email</label>
                  <Input
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="text-lg py-6"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-gradient-to-r from-accent to-secondary hover:opacity-90 transition-all"
                >
                  Получить презентацию
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-75">© 2024 Family boks. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
