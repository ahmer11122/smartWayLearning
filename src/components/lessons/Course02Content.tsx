"use client";

import { QuestionCard } from "@/components/content/QuestionCard";

/**
 * Course 2 (Chapter 2) Content Component
 * Basic Forex Course - exact same design as Course 1
 */
export function Course02Content() {
    const sections = [
        {
            id: "intro-forex",
            titleEn: "Introduction of Forex",
            titleUr: "فاریکس کا تعارف",
            contentEn: [
                "1. What Is Forex?",
                "2. When Did Forex Start?",
                "3. What is the method of exchange in the modern era",
                "4. When did Forex become connected with internet banking, and what benefits does it provide to people?",
            ],
            contentUr: [
                "۱۔ فاریکس کیا ہے؟",
                "۲۔ فاریکس کب شروع ہوا؟",
                "۳۔ جدید دور میں تبادلے کا طریقہ کار کیا ہے؟",
                "۴۔ فوریکس انٹرنیٹ بینکنگ کے ساتھ کب منسلک ہوئی اور اس کے لوگوں کو کیا فائدہ ہوتا ہے؟",
            ],
            answersUr: [
                "لفظ فوریکس دو الفاظ کا مجموعہ ہے جن میں پہلا لفظ \"فارن\" یعنی غیر ملکی اور دوسرا لفظ \"ایکسچینج\" یعنی تبادلہ یا لین دین ہے۔ دونوں لفظوں کو ملا کر اگر آسان زبان میں سمجھیں تو اس کا مطلب عالمی منڈی یا انٹرنیشنل مارکیٹ ہے جس میں آپ خرید و فروخت کر سکتے ہیں",
                "جب سے یہ دنیا بنی ہے تب سے ہم ایک دوسرے کے ساتھ مختلف طریقوں سے تبادلہ یا ایکسچینج کرتے آ رہے ہیں۔ پرانے وقتوں میں خرید و فروخت میں چیزوں کے ساتھ چیزوں کا تبادلہ ہوتا تھا، مثلاً دانے لے کر چاول دے رہے ہیں، گڑ لے کر مرچ لے رہے ہیں وغیرہ وغیرہ۔",
                "پرانے وقتوں سے لے کر اب تک کے دور میں تبادلہ بھی اپنی نوعیت بدلتا رہا ہے، مثلاً پہلے چیزوں کے ساتھ چیزوں کا تبادلہ، پھر سونا چاندی کے سکوں کے ساتھ خرید و فروخت، اور پھر ملکوں میں بادشاہوں۔ یا سلطنت کے نام کی کرنسی سکوں کی صورت میں، اور پھر ہر ملک اپنے گنتی والے سکے، اور پھر گنتی والے نوٹ یعنی پیپر کرنسی، اور اب ڈیجیٹل کرنسی۔ لہٰذا مختلف ادوار میں تبدیلی ہوتی ہوئی اب ڈیجیٹل کرنسی تک پہنچ چکی ہے اور اب جدید دور میں تبادلہ یعنی ایکسچینج بھی ڈیجیٹل طریقے سے ہی ہو رہی ہے۔",
                "فوریکس 1980 میں انٹرنیٹ کی وجہ سے عام لوگوں کے لیے یعنی ریٹیل ٹریڈرز کے کاروبار کی وجہ بنی اور تب سے آن لائن ٹریڈنگ کا آغاز ہو گیا۔ انٹرنیٹ بینکنگ کی وجہ سے یہ مارکیٹ 23 گھنٹے کھلی رہتی ہے لہٰذا دن ہو یا رات ہو آپ اس مارکیٹ میں فائدہ اٹھا سکتے ہیں",
            ],
            visualsMap: {
                0: [{ src: "/assets/visuals/forex-real-mandi.webp", labelEn: "Global Forex Market", labelUr: "عالمی فاریکس مارکیٹ" }],
                1: [{ src: "/assets/visuals/forex-ancient-barter.webp", labelEn: "Ancient Barter System", labelUr: "قدیم تبادلہ" }],
                2: [{ src: "/assets/visuals/modern-digital-exchange.webp", labelEn: "Evolution of Money", labelUr: "رقم کا ارتقاء" }],
                3: [{ src: "/assets/visuals/forex-real-internet-banking.webp", labelEn: "Digital Banking & 24h Access", labelUr: "ڈیجیٹل بینکنگ اور ۲۴ گھنٹے رسائی" }],
            }
        },
        {
            id: "basic-pairs",
            titleEn: "Basic of Pairs",
            titleUr: "جوڑوں کی بنیادی باتیں",
            contentEn: [
                "5. What is Currencies? (Famous Pairs)",
                "6. What is Commodities? (Famous Examples)",
                "7. What is Indices? (Famous Examples)",
            ],
            contentUr: [
                "۵۔ کرنسیاں کیا ہیں؟ (مشہور جوڑے)",
                "۶۔ اجناس کیا ہیں؟ (مشہور مثالیں)",
                "۷۔ انڈیکس کیا ہے؟ (مشہور مثالیں)",
            ],
        },
        {
            id: "currency-info",
            titleEn: "Currency Information",
            titleUr: "کرنسی کی معلومات",
            contentEn: [
                "1. How is currency read?",
                "2. How many types of currency pairs?",
                "3. What is major currency?",
                "4. What is cross currency?",
            ],
            contentUr: [
                "۱۔ کرنسی کو کیسے پڑھا جاتا ہے؟",
                "۲۔ کرنسی جوڑوں کی کتنی اقسام ہیں؟",
                "۳۔ میجر کرنسی کیا ہے؟",
                "۴۔ کراس کرنسی کیا ہے؟",
            ],
        },
        {
            id: "spread-pips",
            titleEn: "Basic of Spread & Pips",
            titleUr: "اسپریڈ اور پپس کی بنیادی باتیں",
            contentEn: [
                "5. What is Exotic currency?",
                "6. How to make money in forex?",
                "7. What is Long and Short?",
                "8. What is Pips and Spread?",
            ],
            contentUr: [
                "۵۔ ایگزاٹک کرنسی کیا ہے؟",
                "۶۔ فاریکس میں پیسہ کیسے کمایا جاتا ہے؟",
                "۷۔ لانگ اور شارٹ کیا ہے؟",
                "۸۔ پپ اور اسپریڈ کیا ہے؟",
            ],
        },
        {
            id: "sessions",
            titleEn: "Sessions",
            titleUr: "سیشنز",
            contentEn: [
                "1. How many sessions are there in forex?",
                "2. Time to open and close in forex",
                "3. What is the asian session called?",
                "4. Which pair should be traded in the asian session?",
            ],
            contentUr: [
                "۱۔ فاریکس میں کتنے سیشنز ہیں؟",
                "۲۔ فاریکس میں کھلنے اور بند ہونے کا وقت",
                "۳۔ ایشین سیشن کو کیا کہا جاتا ہے؟",
                "۴۔ ایشین سیشن میں کون سے جوڑے ٹریڈ کرنے چاہیے؟",
            ],
        },
        {
            id: "trends",
            titleEn: "Trends",
            titleUr: "ٹرینڈز",
            contentEn: [
                "5. What is trend?",
                "6. What are the types of trends?",
                "7. When are trends?",
                "8. What is the profit and loss of the trend?",
            ],
            contentUr: [
                "۵۔ ٹرینڈ کیا ہے؟",
                "۶۔ ٹرینڈز کی کتنی اقسام ہیں؟",
                "۷۔ ٹرینڈز کب ہوتے ہیں؟",
                "۸۔ ٹرینڈ میں منافع اور نقصان کیا ہے؟",
            ],
        },
        {
            id: "lot-size",
            titleEn: "Lot Size",
            titleUr: "لاٹ سائز",
            contentEn: [
                "1. What is Lot size?",
                "2. How many types of lot sizes?",
                "3. What is the lot sizing Schedule on account balance?",
                "4. What is an Order?",
            ],
            contentUr: [
                "۱۔ لاٹ سائز کیا ہے؟",
                "۲۔ لاٹ سائز کی کتنی اقسام ہیں؟",
                "۳۔ اکاؤنٹ بیلنس کے مطابق لاٹ سائز",
                "۴۔ آرڈر کیا ہے؟",
            ],
        },
        {
            id: "market-orders",
            titleEn: "Market Orders",
            titleUr: "مارکیٹ آرڈرز",
            contentEn: [
                "5. How many types of Orders?",
                "6. What is Market Order?",
                "7. What is Limit Order?",
                "8. What is Stop Order?",
            ],
            contentUr: [
                "۵۔ آرڈرز کی کتنی اقسام ہیں؟",
                "۶۔ مارکیٹ آرڈر کیا ہے؟",
                "۷۔ لمٹ آرڈر کیا ہے؟",
                "۸۔ اسٹاپ آرڈر کیا ہے؟",
            ],
        },
        {
            id: "chart",
            titleEn: "Chart",
            titleUr: "چارٹ",
            contentEn: [
                "1. What is a forex chart?",
                "2. How many types of chart?",
                "3. Why is Candlestick chart more important?",
            ],
            contentUr: [
                "۱۔ فاریکس چارٹ کیا ہے؟",
                "۲۔ چارٹ کی کتنی اقسام ہیں؟",
                "۳۔ کینڈل اسٹک چارٹ زیادہ اہم کیوں ہے؟",
            ],
        },
        {
            id: "analysis",
            titleEn: "Analysis",
            titleUr: "تجزیہ",
            contentEn: [
                "4. What is Analysis?",
                "5. How many types of Analysis?",
                "6. What is Fundamental Analysis?",
                "7. What is Technical Analysis?",
            ],
            contentUr: [
                "۴۔ تجزیہ کیا ہے؟",
                "۵۔ تجزیہ کی کتنی اقسام ہیں؟",
                "۶۔ فنڈامنٹل تجزیہ کیا ہے؟",
                "۷۔ ٹیکنیکل تجزیہ کیا ہے؟",
            ],
        },
        {
            id: "benefits",
            titleEn: "Benefits of Forex",
            titleUr: "فاریکس کے فوائد",
            contentEn: [
                "8. Benefits of Forex",
                "9. Benefits of Beginner trading",
                "10. Open Real trading account and Earn",
            ],
            contentUr: [
                "۸۔ فاریکس کے فوائد",
                "۹۔ ابتدائی ٹریڈنگ کے فوائد",
                "۱۰۔ حقیقی ٹریڈنگ اکاؤنٹ کھولیں اور کمائیں",
            ],
        },
    ];

    return (
        <div className="w-full px-4 py-8 lg:px-12 lg:py-16 space-y-6">
            {sections.map((section) => (
                <QuestionCard
                    key={section.id}
                    id={section.id}
                    question={
                        <div className="flex flex-col gap-3 py-1">
                            <span className="text-xl lg:text-2xl font-bold text-text-PRIMARY tracking-tight">
                                {section.titleEn}
                            </span>
                            <span
                                className="text-2xl lg:text-3xl font-urdu text-brand-primary leading-[1.6] text-right"
                                dir="rtl"
                            >
                                {section.titleUr}
                            </span>
                        </div>
                    }
                >
                    <div className="space-y-8 pt-2">
                        <ul className="flex flex-col">
                            {section.contentEn.map((itemEn, i) => {
                                const itemUr = section.contentUr[i];

                                return (
                                    <li
                                        key={i}
                                        className="flex flex-col gap-4 group py-6 border-b border-border last:border-0 first:pt-2"
                                    >
                                        <div className="text-text-PRIMARY text-lg lg:text-xl font-medium leading-relaxed pl-3 border-l-2 border-transparent group-hover:border-brand-primary/30 transition-colors">
                                            {itemEn}
                                        </div>

                                        <div
                                            className="text-text-SECONDARY text-xl lg:text-3xl leading-[2] font-urdu text-right pr-2 mt-1"
                                            dir="rtl"
                                        >
                                            {itemUr}
                                        </div>

                                        {/* @ts-ignore */}
                                        {section.answersUr && section.answersUr[i] && (
                                            <div
                                                className="text-text-SECONDARY/70 text-xl lg:text-3xl leading-[2.4] font-urdu text-right pr-2 mt-6 pt-6 border-t border-border/20 tracking-wide"
                                                dir="rtl"
                                            >
                                                {/* @ts-ignore */}
                                                {section.answersUr[i]}
                                            </div>
                                        )}

                                        {/* @ts-ignore */}
                                        {section.visualsMap && section.visualsMap[i] && (
                                            <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-border/10">
                                                {/* @ts-ignore */}
                                                {section.visualsMap[i].map((visual: any, idx: number) => (
                                                    <div key={idx} className={`flex flex-col gap-3 group/visual cursor-pointer w-full ${visual.wide ? 'md:w-[65%]' : 'md:w-[45%]'}`}>
                                                        <div className={`relative ${visual.wide ? 'aspect-[16/9]' : 'aspect-video'} w-full overflow-hidden rounded-2xl bg-bg-SURFACE border border-border/40 transition-all duration-500 group-hover/visual:shadow-2xl group-hover/visual:border-brand-primary/30 group-hover/visual:scale-[1.02]`}>
                                                            <img
                                                                src={visual.src}
                                                                alt={visual.labelEn}
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/visual:scale-110"
                                                                loading="lazy"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/visual:opacity-100 transition-opacity" />
                                                        </div>
                                                        <div className="flex flex-col items-center text-center gap-3 mt-2">
                                                            <span className="text-sm font-semibold text-text-PRIMARY/80 tracking-wide uppercase leading-relaxed">{visual.labelEn}</span>
                                                            <span className="text-xl lg:text-2xl font-urdu text-text-SECONDARY leading-relaxed" dir="rtl">{visual.labelUr}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </QuestionCard>
            ))}
        </div>
    );
}
