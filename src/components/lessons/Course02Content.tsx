"use client";

import { useState, useRef } from "react";
import { QuestionCard } from "@/components/content/QuestionCard";
import { Play, Square } from "lucide-react";

/**
 * Course 2 (Chapter 2) Content Component
 * Basic Forex Course - exact same design as Course 1
 */
interface TableAnswer {
    isTable: boolean;
    headers: string[];
    rows: string[][];
    preText?: string;
    postText?: string;
}

interface Section {
    id: string;
    titleEn: string;
    titleUr: string;
    contentEn: string[];
    contentUr: string[];
    answersUr?: (string | TableAnswer)[];
    visualsMap?: Record<number, { src: string; labelEn: string; labelUr: string }[]>;
    audioMap?: Record<number, string>;
}

export function Course02Content() {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = (src: string, index: number) => {
        if (playingIndex === index) {
            audioRef.current?.pause();
            if (audioRef.current) audioRef.current.currentTime = 0;
            setPlayingIndex(null);
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = src;
                audioRef.current.play();
                setPlayingIndex(index);
                audioRef.current.onended = () => setPlayingIndex(null);
            } else {
                const audio = new Audio(src);
                audioRef.current = audio;
                audio.play();
                setPlayingIndex(index);
                audio.onended = () => setPlayingIndex(null);
            }
        }
    };
    const sections: Section[] = [
        {
            id: "intro-forex",
            titleEn: "Introduction of Forex",
            titleUr: "فاریکس کا تعارف",
            contentEn: [
                "1. What Is Forex?",
                "2. When Did Forex Start?",
                "3. What is the method of exchange in the modern era?",
                "4. When did Forex become connected with internet banking?",
                "5. What is the difference between traditional business and Forex?",
            ],
            contentUr: [
                "۱۔ فاریکس کیا ہے؟",
                "۲۔ فاریکس کب شروع ہوئی؟",
                "۳۔ جدید دور میں تبادلے کا طریقہ کار کیا ہے؟",
                "۴۔ فوریکس انٹرنیٹ بینکنگ کے ساتھ کب منسلک ہوئی؟",
                "۵۔ روایتی کاروبار اور فوریکس میں کیا فرق ہے؟",
            ],
            answersUr: [
                "لفظ فوریکس دو الفاظ کا مجموعہ ہے جن میں پہلا لفظ \"فارن\" یعنی غیر ملکی اور دوسرا لفظ \"ایکسچینج\" یعنی تبادلہ یا لین دین ہے۔ دونوں لفظوں کو ملا کر اگر آسان زبان میں سمجھیں تو اس کا مطلب عالمی منڈی یا انٹرنیشنل مارکیٹ ہے جس میں آپ خرید و فروخت کر سکتے ہیں",
                "جب سے یہ دنیا بنی ہے تب سے ہم ایک دوسرے کے ساتھ مختلف طریقوں سے تبادلہ یا ایکسچینج کرتے آ رہے ہیں۔ پرانے وقتوں میں خرید و فروخت میں چیزوں کے ساتھ چیزوں کا تبادلہ ہوتا تھا، مثلاً دانے لے کر چاول دے رہے ہیں، گڑ دے کر مرچ لے رہے ہیں وغیرہ وغیرہ۔",
                "پرانے وقتوں سے لے کر اب تک کے دور میں تبادلہ بھی اپنی نوعیت بدلتا رہا ہے، مثلاً پہلے چیزوں کے ساتھ چیزوں کا تبادلہ، پھر سونا چاندی کے سکوں کے ساتھ خرید و فروخت، اور پھر ملکوں میں بادشاہوں۔ یا سلطنت کے نام کی کرنسی سکوں کی صورت میں، اور پھر ہر ملک اپنے گنتی والے سکے، اور پھر گنتی والے نوٹ یعنی پیپر کرنسی، اور اب ڈیجیٹل کرنسی۔ لہٰذا مختلف ادوار میں تبدیلی ہوتی ہوئی اب ڈیجیٹل کرنسی تک پہنچ چکی ہے اور اب جدید دور میں تبادلہ یعنی ایکسچینج بھی ڈیجیٹل طریقے سے ہی ہو رہی ہے۔",
                "فوریکس انٹرنیٹ بینکنگ کے ساتھ کب منسلک ہوئی ؟ اور اس سے لوگوں کو کیا فائدہ ہوا\nفوریکس 1980 میں انٹرنیٹ کی وجہ سے عام لوگوں کے لیے یعنی ریٹیل ٹریڈرز کے کاروبار کی وجہ بنی اور تب سے آن لائن ٹریڈنگ کا آغاز ہو گیا۔ انٹرنیٹ بینکنگ کی وجہ سے یہ مارکیٹ 23 گھنٹے کھلی رہتی ہے لہٰذا دن ہو یا رات ہو آپ اس مارکیٹ میں فائدہ اٹھا سکتے ہیں",
                {
                    isTable: true,
                    headers: ["روایتی کاروبار", "فوریکس"],
                    rows: [
                        ["کاروبار کے لیے دکان یا مخصوص جگہ کی ضرورت ہوتی ہے", "کسی دکان یا جگہ کی ضرورت نہیں ہوتی"],
                        ["بہت زیادہ سخت محنت کرنا پڑتی ہے", "بہت زیادہ سخت محنت نہیں کرنی پڑتی۔"],
                        ["کام کا وقت فکس ہوتا ہے (اوپن اور کلوز ٹائم مقرر)", "کوئی فکس ٹائم نہیں، مارکیٹ تقریباً 23 گھنٹے کھلی رہتی ہے"],
                        ["کسٹمر یا پروڈکٹ لازمی ہوتے ہیں، ان کے بغیر کاروبار نہیں چل سکتا", "کسٹمر کی ضرورت نہیں، صرف Buy اور Sell کے بٹن سے ٹریڈ ہوتی ہے"],
                        ["زیادہ انویسٹمنٹ اور انفراسٹرکچر چاہیے ہوتا ہے", "کم انویسٹمنٹ سے بھی شروع کیا جا سکتا ہے، انفراسٹرکچر نہیں چاہیے"],
                        ["زیادہ وقت لگتا ہے، پھر جا کر منافع شروع ہوتا ہے (ہٹی چٹی اور کھٹی والا سلو سسٹم)", "فوراً ٹریڈنگ شروع ہو سکتی ہے، منافع اور نقصان فوری ہوتا ہے"],
                        ["عموماً ایک ہی کاروبار تک محدود رہتے ہیں", "ایک ہی وقت میں مختلف مارکیٹس (کرنسی، میٹل، انڈیکس، کرپٹو) میں ٹریڈ ممکن ہے"],
                        ["موسمی حالات، ہڑتالیں، اور چھٹیاں کاروبار کو متاثر کرتی ہیں", "زیادہ تر بیرونی رکاوٹوں سے آزاد، مسلسل مارکیٹ چلتی رہتی ہے"],
                        ["وقت کے ساتھ منافع بڑھتا ہے (time = profit)", "کم وقت میں زیادہ منافع ممکن، مگر رسک بھی زیادہ ہوتا ہے"],
                        ["کامیابی کے لیے ڈگری، سرمایہ اور تجربہ ضروری ہوتا ہے", "ڈگری ضروری نہیں، بنیادی سکلز سے 3–6 ماہ میں سیکھا جا سکتا ہے"],
                    ]
                },
            ],
            visualsMap: {
                0: [{ src: "/assets/visuals/forex-real-mandi.webp", labelEn: "Global Forex Market", labelUr: "عالمی فاریکس مارکیٹ" }],
                1: [{ src: "/assets/visuals/forex-ancient-barter.webp", labelEn: "Ancient Barter System", labelUr: "قدیم تبادلہ" }],
                2: [{ src: "/assets/visuals/modern-digital-exchange.webp", labelEn: "Evolution of Money", labelUr: "رقم کا ارتقاء" }],
                3: [{ src: "/assets/visuals/forex-real-internet-banking.webp", labelEn: "Digital Banking & 24h Access", labelUr: "ڈیجیٹل بینکنگ اور ۲۴ گھنٹے رسائی" }],
                4: [
                    { src: "/assets/visuals/hard-struggle.webp", labelEn: "Traditional Business Struggle", labelUr: "روایتی کاروبار کی محنت" },
                    { src: "/assets/visuals/online-soft-struggle.webp", labelEn: "Forex Digital Lifestyle", labelUr: "فاریکس ڈیجیٹل لائف اسٹائل" }
                ],
            },
            audioMap: {
                0: "/assets/audio/lessons/what-is-forex.mp3",
                1: "/assets/audio/lessons/when-did-forex-start.mp3"
            }
        },
        {
            id: "forex-importance",
            titleEn: "Importance of Forex",
            titleUr: "فاریکس کی حیثیت",
            contentEn: [
                "1. How much business is conducted daily in the Forex market?",
                "2. How large is the Forex market in terms of size, and which countries have the highest participation in Forex?",
                "3. Why is most trading in Forex done in US Dollars, and why is the Dollar important in the Forex market?",
            ],
            contentUr: [
                "۱۔ فوریکس مارکیٹ میں روزانہ کتنا کاروبار ہوتا ہے؟",
                "۲۔ فوریکس سائز کے اعتبار سے کتنی بڑی مارکیٹ ہے اور کتنے ممالک ایسے ہیں جن کا زیادہ تر پیسہ فوریکس میں ہے؟",
                "۳۔ فوریکس میں زیادہ تر ٹریڈ ڈالر میں کیوں ہوتی ہے اور ڈالر کی اہمیت فوریکس میں کیوں ہے؟",
            ],
            answersUr: [
                "فوریکس مارکیٹ دنیا کی سب سے بڑی مارکیٹ کا نام ہے جس میں روزانہ کی بنیاد پر 7 ٹریلین ڈالر سے 10 ٹریلین ڈالر کا بزنس ہوتا ہے جو کہ پاکستانی روپے کے مطابق (1,959,010,000,000,000) بنتے ہیں، اگر ڈالر 279 روپے کا ہو۔",
                "فوریکس دنیا کی سب سے بڑی مالیاتی مارکیٹ ہے۔ یہ ایک انٹرنیشنل اور ڈی سینٹرلائزڈ مارکیٹ ہے جو الیکٹرانک بینکنگ سسٹم کے ذریعے چلتی ہے اور تقریباً 23 گھنٹے (ہفتے میں 5 دن) کھلی رہتی ہے۔\n\nاس مارکیٹ کا روزانہ حجم (Daily Trading Volume) تقریباً 7 ٹریلین امریکی ڈالر سے بھی زیادہ ہے، جو اسے دنیا کی سب سے بڑی مارکیٹ بناتا ہے۔\n\nکرنسی کے استعمال کے لحاظ سے:\n\nامریکی ڈالر (USD) تقریباً 85-90% ٹریڈز میں شامل ہوتا ہے (سب سے زیادہ)\nیورو (EUR) دوسرے نمبر پر ہے (تقریباً 20-30%)\nجاپانی ین (JPY) تیسرے نمبر پر (تقریباً 15-20%)\nاس کے بعد:\nبرطانوی پاؤنڈ (GBP)\nآسٹریلین ڈالر (AUD)\nکینیڈین ڈالر (CAD)\nسوئس فرانک (CHF)\n\nباقی دنیا کی دیگر کرنسیاں نسبتاً کم تناسب میں شامل ہوتی ہیں",
                "فوریکس مارکیٹ میں زیادہ تر ٹریڈ امریکی ڈالر (USD) میں ہوتی ہے کیونکہ یہ دنیا کی سب سے اہم اور مضبوط کرنسی ہے، جسے انٹرنیشنل ریزرو کرنسی کہا جاتا ہے۔\n\nڈالر کی اہمیت کی وجوہات درج ذیل ہیں:\n\n1۔ دنیا کی سب سے بڑی معیشت United States کی ہے، اس لیے عالمی تجارت میں اس کا کردار سب سے زیادہ ہے۔\n2۔ دنیا کی بڑی اسٹاک ایکسچینجز میں سے ایک New York Stock Exchange امریکہ میں موجود ہے۔\n3۔ امریکہ کے پاس دنیا کے بڑے گولڈ ریزرو موجود ہیں۔\n4۔ امریکہ ایک بڑی دفاعی طاقت ہے، جس سے عالمی اعتماد بڑھتا ہے۔\n5۔ امریکہ معاشی اور سیاسی طور پر مستحکم ملک ہے۔\n6۔ عالمی تجارت (خاص طور پر تیل اور بڑی اشیاء) زیادہ تر ڈالر میں ہوتی ہے۔\n\nاسی لیے ڈالر کو فوریکس مارکیٹ میں مرکزی حیثیت حاصل ہے اور زیادہ تر کرنسی پیئرز میں یہ شامل ہوتا ہے",
            ],
            visualsMap: {
                0: [{ src: "/assets/visuals/forex_market_size_visual.webp", labelEn: "Global Daily Volume ($7-10T)", labelUr: "روزانہ عالمی تجارت (7-10 ٹریلین ڈالر)" }],
                1: [{ src: "/assets/visuals/forex_market_scale_comparison_v2.webp", labelEn: "Forex vs Stock Markets", labelUr: "فاریکس بمقابلہ اسٹاک مارکیٹ" }],
                2: [{ src: "/assets/visuals/usd_global_dominance_visual.webp", labelEn: "USD Global Dominance", labelUr: "ڈالر کی عالمی برتری" }],
            }
        },
        {
            id: "forex-broker",
            titleEn: "Importance of Broker",
            titleUr: "بروکر کی اہمیت",
            contentEn: [
                "1. What is a broker?",
                "2. Why is a broker necessary?",
                "3. What importance does a broker have in our profit and loss?",
                "4. What key factors should be considered when choosing a broker?",
                "5. Top 10 Largest and Most Well-Known Brokers",
            ],
            contentUr: [
                "۱۔ بروکر کیا ہوتا ہے؟",
                "۲۔ بروکر کیوں ضروری ہے؟",
                "۳۔ بروکر کی ہمارے نفع و نقصان میں کیا اہمیت ہے؟",
                "۴۔ بروکر کا انتخاب کرتے ہوئے کن باتوں کا خاص خیال رکھنا چاہیے؟",
                "۵۔ 10 بڑے اور معروف بروکرز",
            ],
            answersUr: [
                "بروکر ایک ایسا درمیانی ادارہ یا پلیٹ فارم ہوتا ہے جو ٹریڈر اور مارکیٹ کے درمیان رابطہ فراہم کرتا ہے۔ بروکر کے ذریعے ہی ٹریڈر خرید و فروخت (Buy/Sell) کے آرڈر مارکیٹ میں داخل کرتا ہے۔ یہ آپ کو ٹریڈنگ کے لیے پلیٹ فارم، لیوریج، اور دیگر سہولیات فراہم کرتا ہے، اور اس کے بدلے کمیشن یا اسپریڈ وصول کرتا ہے۔",
                "بروکر اس لیے ضروری ہوتا ہے کیونکہ عام فرد اپنے تھوڑے سرمائے کے ساتھ براہِ راست انٹرنیشنل مارکیٹ میں ٹریڈ نہیں کر سکتا۔ بروکر ایک پلیٹ فارم فراہم کرتا ہے جس کے ذریعے ٹریڈر آسانی سے خرید و فروخت کر سکتا ہے۔",
                "بروکر کا براہِ راست ہمارے نفع یا نقصان میں کوئی کردار نہیں ہوتا، کیونکہ وہ صرف ٹریڈر کی ٹریڈ کو مارکیٹ تک پہنچانے کا کام کرتا ہے۔\n\nالبتہ بروکر بالواسطہ طور پر نفع و نقصان پر اثر انداز ہوتا ہے کیونکہ:\n\n1۔ بروکر ہر ٹریڈ پر اسپریڈ (Spread) یا کمیشن چارج کرتا ہے، جس سے منافع کم ہو سکتا ہے۔\n2۔ اگر بروکر کا اسپریڈ زیادہ ہو تو ٹریڈر کو نقصان ہو سکتا ہے۔\n3۔ بروکر کی execution speed (آرڈر مکمل ہونے کی رفتار) بھی اہم ہوتی ہے، سست رفتار نقصان کا باعث بن سکتی ہے۔",
                "بروکر کا انتخاب کرتے وقت درج ذیل 8 اہم نکات کا خیال رکھیں:\n\n1۔ ریگولیشن (Regulation):\nسب سے پہلے دیکھیں کہ بروکر FCA (UK)، ASIC (Australia) یا CySEC (Cyprus) جیسی مستند اتھارٹی سے رجسٹرڈ ہو۔\n\n2۔ فنڈز کی سیفٹی:\nبروکر ٹریڈرز کے فنڈز کو الگ (Segregated) اکاؤنٹس میں رکھتا ہو تاکہ آپ کا سرمایہ محفوظ رہے۔\n\n3۔ اسپریڈ اور کمیشن:\nکم اسپریڈ اور شفاف کمیشن والا بروکر منتخب کریں تاکہ آپ کا منافع زیادہ رہے۔\n\n4۔ ڈیپازٹ اور وڈراول:\nچیک کریں کہ رقم جمع کروانا اور نکلوانا کتنا آسان اور تیز ہے۔\n\n5۔ ٹریڈنگ پلیٹ فارم:\nبروکر MT4 یا MT5 جیسے مستحکم اور عالمی معیار کے پلیٹ فارم فراہم کرتا ہو۔\n\n6۔ لیوریج (Leverage):\nBeginner کے لیے کم لیوریج بہتر ہے۔ بہت زیادہ لیوریج دینے والے بروکر رسکی ہو سکتے ہیں۔\n\n7۔ کسٹمر سپورٹ:\n24/5 یا 24/7 سپورٹ اور لائیو چیٹ کی سہولت موجود ہو۔\n\n8۔ ریویوز اور شہرت:\nگوگل اور فاریکس فورمز پر بروکر کے بارے میں لوگوں کے تجربات اور ریویوز لازمی دیکھیں۔",
                "WikiFX کے مطابق دنیا کے 10 بڑے اور قابلِ اعتماد بروکرز یہ ہیں:\n\n1. AvaTrade\n2. FXCM\n3. EC Markets\n4. GTCFX\n5. Finalto\n6. XM\n7. Trade Nation\n8. GO Markets\n9. IC Markets Global\n10. FP Markets",
            ],
            visualsMap: {
                0: [{ src: "/assets/visuals/forex_broker_bridge_visual.webp", labelEn: "Broker as a Digital Bridge", labelUr: "بروکر ایک ڈیجیٹل پل کے طور پر" }],
                1: [{ src: "/assets/visuals/forex-intro-global.webp", labelEn: "Global Market Access", labelUr: "عالمی مارکیٹ تک رسائی" }],
                2: [{ src: "/assets/visuals/forex_execution_speed_visual.webp", labelEn: "Execution Speed & Spreads", labelUr: "آرڈر مکمل ہونے کی رفتار اور اسپریڈ" }],
                3: [{ src: "/assets/visuals/forex_broker_selection_criteria.webp", labelEn: "Selection Criteria", labelUr: "بروکر کے انتخاب کے معیار" }],
                4: [{ src: "/assets/visuals/forex_top_10_brokers_list.webp", labelEn: "WikiFX Top 10 Brokers", labelUr: "دنیا کے ٹاپ 10 بروکرز" }],
            }
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
                "5. What is Exotic currency?",
            ],
            contentUr: [
                "۱۔ کرنسی کو کیسے پڑھا جاتا ہے؟",
                "۲۔ کرنسی جوڑوں کی کتنی اقسام ہیں؟",
                "۳۔ میجر کرنسی کیا ہے؟",
                "۴۔ کراس کرنسی کیا ہے؟",
                "۵۔ ایگزاٹک کرنسی کیا ہے؟",
            ],
            answersUr: [
                "کرنسی کو ہمیشہ جوڑوں (Pairs) کی صورت میں پڑھا جاتا ہے،\nکیونکہ ایک کرنسی کو دوسری کرنسی کے مقابلے میں ناپا جاتا ہے۔\n\nمثال: EUR/USD\n\nپہلی کرنسی کو Base Currency کہتے ہیں\nدوسری کرنسی کو Quote Currency کہتے ہیں\nاس کا مطلب ہوتا ہے: 1 یورو خریدنے کے لیے کتنے امریکی ڈالر چاہییں",
                "کرنسی جوڑوں کی تین اقسام ہیں:\n\nمیجر کرنسی\nکراس کرنسی\nایکزوٹک کرنسی",
                "میجر کرنسی وہ کرنسی جوڑے ہیں جن میں US Dollar (USD) شامل ہوتا ہے اور جو دنیا میں سب سے زیادہ استعمال اور ٹریڈ ہوتے ہیں\n\nEUR/USD (یورو / امریکی ڈالر)\nGBP/USD (برطانوی پاؤنڈ / امریکی ڈالر)\nUSD/JPY (امریکی ڈالر / جاپانی ین)\nUSD/CHF (امریکی ڈالر / سوئس فرانک)\nAUD/USD (آسٹریلین ڈالر / امریکی ڈالر)\nUSD/CAD (امریکی ڈالر / کینیڈین ڈالر)",
                "کراس کرنسی وہ جوڑے ہوتے ہیں جن میں US Dollar (USD) شامل نہیں ہوتا۔\n\nیعنی دو دوسری بڑی کرنسیاں آپس میں trade ہوتی ہیں۔\n\nمثالیں:\n\nEUR/GBP (یورو / برطانوی پاؤنڈ)\nEUR/JPY (یورو / جاپانی ین)\nGBP/JPY (پاؤنڈ / ین)\nAUD/JPY (آسٹریلین ڈالر / ین)\nEUR/CHF (یورو / سوئس فرانک)",
                "ایکزوٹک کرنسی وہ جوڑے ہوتے ہیں جن میں:\n\nایک میجر کرنسی (عام طور پر USD)\nاور ایک چھوٹی یا کم ٹریڈ ہونے والی کرنسی شامل ہوتی ہے\n\nیہ جوڑے کم مشہور ہوتے ہیں، کم liquidity ہوتی ہے، اور اسپریڈ زیادہ ہوتا ہے۔\n\nمثالیں:\n\nUSD/TRY (امریکی ڈالر / ترک لیرا)\nUSD/ZAR (امریکی ڈالر / ساؤتھ افریقی رینڈ)\nUSD/MXN (امریکی ڈالر / میکسیکن پیسو)",
            ],
        },
        {
            id: "basic-pairs",
            titleEn: "Basic of Pairs",
            titleUr: "جوڑوں کی بنیادی باتیں",
            contentEn: [
                "1. What are Currencies?",
                "2. What are Commodities?",
                "3. What are Indices?",
                "4. What is Cryptocurrency?",
            ],
            contentUr: [
                "۱۔ کرنسیاں کیا ہیں؟",
                "۲۔ دھاتیں (Commodities) کیا ہیں؟",
                "۳۔ انڈیکس (Indices) کیا ہے؟",
                "۴۔ کرپٹوکرنسی کیا ہے؟",
            ],
            answersUr: [
                "کرنسیاں اصل میں ممالک کے پیسے ہوتے ہیں، بس ڈیجیٹل یا کاغذی شکل میں۔ ہر ملک اپنی کرنسی چلاتا ہے، جیسے پاکستان میں روپے، امریکا میں ڈالر۔\n\nفوریکس میں ہم ان کرنسیوں کو آپس میں trade کرتے ہیں، یعنی ایک کرنسی خریدتے ہیں اور دوسری بیچتے ہیں۔\n\nفوریکس کی مشہور کرنسیاں:\n\nیہ وہ کرنسیاں ہیں جو سب سے زیادہ استعمال ہوتی ہیں:\n\nUSD (امریکی ڈالر)\nEUR (یورو)\nGBP (برطانوی پاؤنڈ)\nJPY (جاپانی ین)\nCHF (سوئس فرانک)\nAUD (آسٹریلین ڈالر)\nCAD (کینیڈین ڈالر)\nNZD (نیوزی لینڈ ڈالر)",
                "دھاتیں زمین سے نکلنے والی سخت اور قیمتی چیزیں ہوتی ہیں۔\n\nمشہور دھاتیں:\nسونا (Gold)\nچاندی (Silver)\nپلاٹینم (Platinum)\nپیلیڈیم (Palladium)",
                "انڈیکس (Index) ایک ایسا “پیکج” ہوتا ہے جس میں ایک ملک کی بڑی بڑی کمپنیوں کے شیئرز شامل ہوتے ہیں۔ یہ پورے اسٹاک مارکیٹ کی حالت بتاتا ہے کہ مارکیٹ اوپر جا رہی ہے یا نیچے۔\n\nسادہ بات:\nانڈیکس = کئی کمپنیوں کا مجموعی نتیجہ\n\nمشہور انڈیکس:\nUS30 (Dow Jones) – امریکا کی بڑی 30 کمپنیاں\nNAS100 (Nasdaq) – ٹیک کمپنیوں کا انڈیکس (Apple, Google وغیرہ)\nS&P 500 – امریکا کی 500 بڑی کمپنیاں\nDAX 40 – جرمنی کی بڑی کمپنیاں\nFTSE 100 – برطانیہ کی بڑی کمپنیاں\nNikkei 225 – جاپان کی بڑی کمپنیاں",
                "کرپٹوکرنسی ایک ڈیجیٹل (آن لائن) کرنسی ہے جو صرف انٹرنیٹ پر استعمال ہوتی ہے۔ یہ کسی بینک یا حکومت کے کنٹرول میں نہیں ہوتی، بلکہ ایک سسٹم “blockchain” کے ذریعے چلتی ہے۔\n\nآسان تعریف:\n\nکرپٹوکرنسی وہ آن لائن پیسہ ہے جو بغیر بینک کے استعمال ہوتا ہے۔\n\nمشہور مثالیں:\nBitcoin (BTC)\nEthereum (ETH)\nBinance Coin (BNB)\nRipple (XRP)\nSolana (SOL)",
            ],
        },
        {
            id: "spread-pips",
            titleEn: "Basic of Spread & Pips",
            titleUr: "اسپریڈ اور پپس کی بنیادی باتیں",
            contentEn: [
                "1. How to make money in Forex?",
                "2. What is Long and Short?",
                "3. What are Pips and Spread?",
            ],
            contentUr: [
                "۱۔ فاریکس میں پیسہ کیسے کمایا جاتا ہے؟",
                "۲۔ لانگ اور شارٹ کیا ہے؟",
                "۳۔ پپ اور اسپریڈ کیا ہے؟",
            ],
            answersUr: [
                "فاریکس میں پیسہ کرنسی کی قیمت کے فرق (price difference) سے کمایا جاتا ہے۔\nآپ کوئی کرنسی دیکھتے ہو (مثلاً EUR/USD)\nاگر آپ سمجھو قیمت اوپر جائے گی → آپ Buy کرتے ہو\nجب قیمت اوپر چلی جائے → آپ trade close کرتے ہو → profit\nاگر آپ سمجھو قیمت نیچے جائے گی → آپ Sell کرتے ہو\nجب قیمت نیچے آ جائے → آپ trade close کرتے ہو → profit",
                "لانگ (Long) اور شارٹ (Short) فاریکس کے دو basic طریقے ہیں trade کرنے کے۔\n\nلانگ (Long)\nمطلب: خریدنا (Buy کرنا)\nجب آپ کو لگے price اوپر جائے گی\n\nشارٹ (Short)\nمطلب: بیچنا (Sell کرنا)\nجب آپ کو لگے price نیچے جائے گی",
                "Pip کیا ہے؟\n\nPip فاریکس میں price change کا سب سے چھوٹا یونٹ ہوتا ہے۔\n\nPip Value: 0.01\nمثال: Gold (XAUUSD) 2000.00 سے 2000.01 ہو جائے → 1 Pip change\n\nSpread کیا ہے؟\n\nSpread وہ فرق (difference) ہوتا ہے جو:\n\nBuy price (Ask)\nSell price (Bid)\n\nکے درمیان ہوتا ہے۔\n\nآسان مثال:\nBuy price = 2000.02\nSell price = 2000.00\nSpread = 2 pips",
            ],
        },
        {
            id: "lot-size",
            titleEn: "Lot Size",
            titleUr: "لاٹ سائز",
            contentEn: [
                "1. What is Lot size?",
                "2. What are the types of lot sizes?",
                "3. What is the lot sizing schedule for account balances?",
                "4. What is TP (Take Profit)?",
                "5. What is SL (Stop Loss)?",
                "6. What is Break Even?",
            ],
            contentUr: [
                "۱۔ لاٹ سائز کیا ہے؟",
                "۲۔ لاٹ سائز کی کتنی اقسام ہیں؟",
                "۳۔ اکاؤنٹ بیلنس کے مطابق لاٹ سائز",
                "۴۔ ٹی پی (TP) کیا ہے؟",
                "۵۔ ایس ایل (SL) کیا ہے؟",
                "۶۔ بریک ایون (Break Even) کیا ہے؟",
            ],
            answersUr: [
                "لاٹ سائز فاریکس میں اس مقدار کو کہتے ہیں جس میں آپ ٹریڈ کرتے ہو، یعنی آپ کتنی بڑی trade لگا رہے ہو۔\n\nآسان الفاظ:\n\nلاٹ سائز = آپ کی trade کا “size” (کتنا پیسہ market میں لگا رہے ہو)",
                "لاٹ سائز کی 3 main اقسام ہوتی ہیں\n\n1. Standard Lot\nسائز: 1.00\nبڑی trade\nprofit اور loss دونوں زیادہ\n\n2. Mini Lot\nسائز: 0.10\nدرمیانی trade\nrisk بھی درمیانہ\n\n3. Micro Lot\nسائز: 0.01\nچھوٹی trade\nbeginners کے لیے بہتر\n\nخلاصہ:\nبڑا lot = زیادہ risk + زیادہ profit\nچھوٹا lot = کم risk + کم profit",
                {
                    isTable: true,
                    headers: ["اکاؤنٹ بیلنس (USD)", "لاٹ سائز"],
                    rows: [
                        ["100", "0.01"],
                        ["200", "0.02"],
                        ["300", "0.03"],
                        ["400", "0.04"],
                        ["500", "0.05"],
                        ["600", "0.06"],
                        ["700", "0.07"],
                        ["800", "0.08"],
                        ["900", "0.09"],
                        ["1000", "0.10"],
                    ]
                },
                "TP یعنی Take Profit\nیہ وہ لیول ہوتا ہے جہاں آپ چاہتے ہیں کہ trade خود بند ہو جائے اور آپ کا منافع محفوظ ہو جائے۔\n\nآسان الفاظ:\nجہاں profit لینا ہو، وہاں TP لگاتے ہیں۔",
                "SL یعنی Stop Loss\nیہ وہ لیول ہوتا ہے جہاں trade خود بند ہو جاتی ہے تاکہ نقصان ایک حد سے زیادہ نہ بڑھے۔\n\nآسان الفاظ:\nجہاں loss روکنا ہو، وہاں SL لگاتے ہیں۔",
                "Break Even وہ point ہوتا ہے جہاں نہ profit ہو نہ loss۔\n\nآسان الفاظ:\nجب trade کو entry price پر یا cost cover کر کے close کریں"
            ],
        },
        {
            id: "market-orders",
            titleEn: "Market Orders",
            titleUr: "مارکیٹ آرڈرز",
            contentEn: [
                "1. What is an Order?",
                "2. How many types of Orders?",
                "3. What is Market Order?",
                "4. What is Limit Order?",
                "5. What is Stop Order?",
            ],
            contentUr: [
                "۱۔ آرڈر کیا ہے؟",
                "۲۔ آرڈرز کی کتنی اقسام ہیں؟",
                "۳۔ مارکیٹ آرڈر کیا ہے؟",
                "۴۔ لمٹ آرڈر کیا ہے؟",
                "۵۔ اسٹاپ آرڈر کیا ہے؟",
            ],
            answersUr: [
                "فاریکس میں آرڈر وہ instruction ہوتی ہے جو آپ broker کو دیتے ہو کہ trade open یا close کرے۔\n\nآسان الفاظ:\n\nآرڈر = “buy یا sell کرنے کا حکم”",
                "آرڈرز کی بنیادی طور پر 3 اقسام ہوتی ہیں:\n\n1. Market Order\nفوراً trade open ہو جاتی ہے\nموجودہ price پر buy یا sell\n\n2. Limit Order\nبہتر price کا انتظار\nBuy کم price پر / Sell زیادہ price پر\n\n3. Stop Order\nجب price کسی level کو cross کرے تو trade لگتی ہے\nbreakout کے لیے استعمال ہوتا ہے",
                "مارکیٹ آرڈر وہ ہوتا ہے جس میں آپ فوراً trade open یا close کرتے ہو، موجودہ market price پر۔\n\nآسان الفاظ:\n\nمارکیٹ آرڈر = “ابھی فوراً خرید یا فروخت کرو”\n\nمثال:\nآپ نے Buy دبایا → trade فوراً چل گئی\nآپ نے Sell دبایا → trade فوراً چل گئی",
                "Limit Order وہ ہوتا ہے جس میں آپ trade فوراً نہیں لگاتے بلکہ ایک خاص price set کرتے ہو اور market وہاں آئے تو trade خود لگ جاتی ہے۔\n\nآسان الفاظ:\n\nLimit Order = “میں ابھی نہیں کروں گا، جب price میرے level پر آئے گی تب trade لگے گی”\n\nاقسام:\nBuy Limit → کم price پر buy کرنا\nSell Limit → زیادہ price پر sell کرنا\n\nمثال:\nEUR/USD ابھی 1.1000 پر ہے\nآپ نے Buy Limit لگایا 1.0950 پر\nجب price 1.0950 آئے گی → trade خود buy ہو جائے گی",
                "Stop Order وہ ہوتا ہے جس میں آپ trade پہلے سے set کرتے ہو، لیکن وہ تب ہی activate ہوتی ہے جب price ایک خاص level کو cross کرے۔\n\nآسان الفاظ:\n\nStop Order = “جب price یہاں تک پہنچے، تب میری trade چلا دینا”\n\nاقسام:\nBuy Stop → جب price اوپر جائے تو buy کرنا\nSell Stop → جب price نیچے جائے تو sell کرنا\n\nمثال:\nEUR/USD ابھی 1.1000 پر ہے\nآپ نے Buy Stop لگایا 1.1050 پر\nجب price 1.1050 کو cross کرے گی → buy trade لگ جائے گی"
            ]
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
            answersUr: [
                "فاریکس چارٹ وہ گراف ہوتا ہے جو کرنسی pair کی قیمت کی movement دکھاتا ہے۔\n\nآسان الفاظ:\n\nچارٹ = price اوپر نیچے جانے کی تصویر\n\nچارٹ سے کیا پتا چلتا ہے؟\nPrice کہاں جا رہی ہے\nپہلے کہاں گئی تھی\nTrend اوپر ہے یا نیچے",
                "چارٹ کی 3 بنیادی اقسام ہیں:\nLine Chart\nBar Chart\nCandlestick Chart",
                "کیونکہ یہ دوسرے charts کے مقابلے میں زیادہ معلومات دیتا ہے۔\n\nاس سے پتا چلتا ہے:\nPrice کہاں open ہوئی\nکہاں close ہوئی\nکتنی اوپر گئی\nکتنی نیچے گئی\n\nفائدہ:\nMarket کا trend سمجھنا آسان ہوتا ہے\nBuyers اور sellers کی طاقت نظر آتی ہے\nEntry اور exit بہتر plan ہوتی ہے"
            ],
        },
        {
            id: "trends",
            titleEn: "Trends",
            titleUr: "ٹرینڈز",
            contentEn: [
                "1. What is trend?",
                "2. What are the types of trends?",
                "3. When do trends occur?",
                "4. What is the profit and loss of the trend?",
            ],
            contentUr: [
                "۱۔ ٹرینڈ کیا ہے؟",
                "۲۔ ٹرینڈز کی کتنی اقسام ہیں؟",
                "۳۔ ٹرینڈز کب ہوتے ہیں؟",
                "۴۔ ٹرینڈ میں منافع اور نقصان کیا ہے؟",
            ],
            answersUr: [
                "ٹرینڈ سے مراد market کی مجموعی direction ہوتی ہے، یعنی price زیادہ تر کس طرف جا رہی ہے۔\n\nآسان الفاظ:\n\nٹرینڈ = market کا رخ",
                "ٹرینڈز کی 3 اقسام ہیں:\nاپ ٹرینڈ (Uptrend)\nڈاؤن ٹرینڈ (Downtrend)\nسائیڈ ویز ٹرینڈ (Sideways Trend)",
                "ٹرینڈ زیادہ تر نیویارک سیشن میں بنتے ہیں۔\n\nٹرینڈ اس وقت بنتا ہے جب market مسلسل ایک ہی direction میں move کرے۔\n\nمثال:\nاگر price بار بار اوپر higher highs اور higher lows بنائے → Uptrend\nاگر price بار بار نیچے lower highs اور lower lows بنائے → Downtrend\nاگر price نہ واضح اوپر جائے نہ نیچے → Sideways",
                "اگر آپ ٹرینڈ کی direction میں trade کریں تو منافع کے chances بڑھ جاتے ہیں،\nاور اگر ٹرینڈ کے خلاف trade کریں تو نقصان کے chances بڑھ جاتے ہیں۔\n\nآسان الفاظ:\nTrend کے ساتھ trade = آسان اور محفوظ trade\nTrend کے خلاف trade = زیادہ risk\n\nمثال:\nMarket uptrend میں ہے اور آپ buy کرتے ہو → profit کا chance بہتر\nMarket uptrend میں ہے اور آپ sell کرتے ہو → loss का chance زیادہ"
            ],
        },
        {
            id: "sessions",
            titleEn: "Sessions",
            titleUr: "سیشنز",
            contentEn: [
                "1. How many sessions are there in Forex?",
                "2. When are the market opening and closing times?",
                "3. What is the Asian session called?",
                "4. Which pairs should be traded in the Asian session?",
            ],
            contentUr: [
                "۱۔ فاریکس میں کتنے سیشنز ہیں؟",
                "۲۔ مارکیٹ کے کھلنے اور بند ہونے کے اوقات کیا ہیں؟",
                "۳۔ ایشین سیشن کو کیا کہا جاتا ہے؟",
                "۴۔ ایشین سیشن میں کون سے جوڑے ٹریڈ کرنے چاہیے؟",
            ],
            answersUr: [
                "فاریکس میں 4 بڑے سیشنز ہوتے ہیں:\n\n1. Sydney Session\n2. Tokyo Session\n3. London Session\n4. New York Session",
                {
                    isTable: true,
                    preText: "فاریکس میں کھلنے اور بند ہونے کا وقت (پاکستان ٹائم کے مطابق)\n\nنوٹ: سیشن کے اوقات سال میں کبھی کبھی Daylight Saving کی وجہ سے 1 گھنٹہ اوپر نیچے ہو سکتے ہیں۔ نیچے دیے گئے اوقات موجودہ 2026 conversion کے مطابق ہیں۔",
                    headers: ["سیشن", "کھلنے کا وقت (PKT)", "بند ہونے کا وقت (PKT)"],
                    rows: [
                        ["سڈنی سیشن", "3:00 صبح", "12:00 دوپہر"],
                        ["ٹوکیو سیشن", "4:00 صبح", "1:00 دوپہر"],
                        ["لندن سیشن", "1:00 دوپہر", "9:00 رات"],
                        ["نیویارک سیشن", "6:00 شام", "3:00 صبح"],
                    ],
                    postText: "اہم بات:\nسب سے زیادہ movement: لندن + نیویارک overlap\nپاکستان ٹائم: 5:00 شام سے 9:00 رات\nیہی وقت اکثر traders شکار کرتے ہیں، کیونکہ volatility زیادہ ہوتی ہے"
                },
                "ایشین سیشن کو عام طور پر ٹوکیو سیشن کہا جاتا ہے۔\n\nکیوں؟\n\nکیونکہ ایشیا میں سب سے بڑی فاریکس مارکیٹ ٹوکیو ہے،\nاس لیے پورے ایشین سیشن کو اسی کے نام سے پکارا جاتا ہے۔",
                "ایشین (ٹوکیو) سیشن میں مارکیٹ عموماً slow اور range-bound ہوتی ہے، یعنی بڑے “jumps” کم ہوتے ہیں۔\n\nاس سیشن میں بہتر جوڑے:\n\n1. JPY والے pairs (سب سے active)\nUSD/JPY\nEUR/JPY\nGBP/JPY\nAUD/JPY\n\n2. AUD / NZD والے pairs\nAUD/USD\nNZD/USD\nAUD/JPY\nNZD/JPY\n\nکیوں یہ pairs؟\nکیونکہ یہ currencies ایشین economy سے directly related ہیں\nاس وقت انہی میں liquidity زیادہ ہوتی ہے"
            ]
        },
        {
            id: "analysis",
            titleEn: "Analysis",
            titleUr: "تجزیہ",
            contentEn: [
                "1. What is Analysis?",
                "2. How many types of Analysis?",
                "3. What is Fundamental Analysis?",
                "4. What is Technical Analysis?",
            ],
            contentUr: [
                "۱۔ تجزیہ کیا ہے؟",
                "۲۔ تجزیہ کی کتنی اقسام ہیں؟",
                "۳۔ فنڈامنٹل تجزیہ کیا ہے؟",
                "۴۔ ٹیکنیکل تجزیہ کیا ہے؟",
            ],
            answersUr: [
                "تجزیہ کا مطلب ہے کسی چیز کو غور سے دیکھ کر سمجھنا اور اس کے بارے میں فیصلہ کرنا۔\n\nآسان الفاظ:\n\nتجزیہ = data یا situation کو سمجھ کر نتیجہ نکالنا\n\nفاریکس میں:\nچارٹ دیکھنا\ntrend سمجھنا\nprice کہاں جا سکتی ہے اندازہ لگانا\n\nمثال:\nآپ EUR/USD کا چارٹ دیکھ کر سوچتے ہو:\nقیمت اوپر جائے گی یا نیچے؟\nیہی تجزیہ ہے۔",
                "تجزیہ کی 2 بنیادی اقسام ہیں (فاریکس میں):\n\n1. تکنیکی تجزیہ (Technical Analysis)\n2. بنیادی تجزیہ (Fundamental Analysis)",
                "فنڈامنٹل تجزیہ وہ طریقہ ہے جس میں آپ معیشت (economy)، خبروں اور ملک کے حالات دیکھ کر فیصلہ کرتے ہو کہ کرنسی اوپر جائے گی یا نیچے۔\n\nآسان الفاظ:\n\nفنڈامنٹل تجزیہ = news اور economy دیکھ کر trade کرنا\n\nکیا چیزیں دیکھتے ہیں؟\nInterest rate (سود کی شرح)\nInflation (مہنگائی)\nGDP (ملکی ترقی)\nEmployment data (نوکریوں کے اعداد و شمار)\nImportant news events\n\nمثال:\nاگر امریکہ کی economy strong ہو → USD مضبوط ہو سکتا ہے\nاگر economy weak ہو → USD کمزور ہو سکتا ہے",
                "ٹیکنیکل تجزیہ وہ طریقہ ہے جس میں آپ صرف چارٹ اور price movement دیکھ کر فیصلہ کرتے ہو کہ مارکیٹ اوپر جائے گی یا نیچے۔\n\nآسان الفاظ:\n\nٹیکنیکل تجزیہ = چارٹ دیکھ کر trade کرنا\n\nکیا چیزیں دیکھتے ہیں؟\nCandlestick patterns\nTrend (اوپر، نیچے یا سائیڈ ویز)\nSupport اور Resistance\nIndicators (RSI, Moving Average وغیرہ)\n\nمثال:\nاگر چارٹ میں price بار بار ایک level سے اوپر نہیں جا رہی → آپ سمجھتے ہو resistance ہے اور فیصلہ لیتے ہو"
            ]
        },
        {
            id: "benefits",
            titleEn: "Benefits of Forex",
            titleUr: "فاریکس کے فوائد",
            contentEn: [
                "1. Benefits of Forex",
                "2. Benefits of Beginner trading",
            ],
            contentUr: [
                "۱۔ فاریکس کے فوائد",
                "۲۔ ابتدائی ٹریڈنگ کے فوائد",
            ],
            answersUr: [
                "فاریکس مارکیٹ کے چند بڑے فوائد درج ذیل ہیں:\n\n1. ۲۳/۵ مارکیٹ کھلی رہتی ہے، جب چاہو trade کر سکتے ہو\n2. گھر بیٹھے صرف موبائل یا لیپ ٹاپ سے کام ہو جاتا ہے\n3. کم پیسے سے بھی start کیا جا سکتا ہے\n4. Buy اور Sell دونوں طرف profit کمانے کا موقع ہوتا ہے\n5. دنیا کی سب سے بڑی financial مارکیٹ ہے، اس میں liquidity زیادہ ہوتی ہے",
                "شروعات میں ٹریڈنگ کے فوائد:\n\n1. کم پیسے سے شروع کیا جا سکتا ہے\n2. مارکیٹ کو سمجھنے کا موقع ملتا ہے\n3. practice سے experience بنتا ہے\n4. risk کم رکھنے کا طریقہ سیکھتے ہو\n5. آہستہ آہستہ confidence بڑھتا ہے"
            ]
        },
    ];

    return (
        <div className="w-full px-4 py-8 lg:px-12 lg:py-16 space-y-6">
            {sections.map((section) => (
                <QuestionCard
                    key={section.id}
                    id={section.id}
                    question={
                        <span className="flex flex-col gap-3 py-1">
                            <span className="text-xl lg:text-2xl font-bold text-text-PRIMARY tracking-tight">
                                {section.titleEn}
                            </span>
                            <span
                                className="text-2xl lg:text-3xl font-urdu text-brand-primary leading-[1.6] text-right"
                                dir="rtl"
                            >
                                {section.titleUr}
                            </span>
                        </span>
                    }
                >
                    <div className="space-y-8 pt-2">
                        {/* Summary of Questions */}
                        <div className="bg-brand-primary/5 rounded-2xl p-5 md:p-6 border border-brand-primary/10 mb-8">
                            <div className="flex flex-col gap-2 mb-6 pb-4 border-b border-brand-primary/10">
                                <h3 className="text-lg lg:text-xl font-bold text-text-PRIMARY tracking-wide">
                                    Section Overview
                                </h3>
                                <h3 className="text-xl lg:text-2xl font-urdu font-bold text-text-PRIMARY text-right" dir="rtl">
                                    اس حصے کا جائزہ
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {section.contentEn.map((itemEn, i) => (
                                    <div
                                        key={`summary-${i}`}
                                        className="flex flex-col md:flex-row justify-between gap-3 md:gap-6 items-start md:items-center bg-bg-SURFACE/50 p-4 rounded-xl border border-border/10 hover:border-brand-primary/20 transition-colors"
                                    >
                                        <div className="text-text-SECONDARY text-base lg:text-lg font-medium flex-1">
                                            {itemEn}
                                        </div>
                                        <div className="text-text-SECONDARY text-lg lg:text-2xl font-urdu flex-1 text-right w-full" dir="rtl">
                                            {section.contentUr[i]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <ul className="flex flex-col">
                            {section.contentEn.map((itemEn, i) => {
                                const itemUr = section.contentUr[i];
                                const audioSrc = section.audioMap?.[i];
                                const answer = section.answersUr?.[i];
                                const visuals = section.visualsMap?.[i];

                                return (
                                    <li
                                        key={i}
                                        className="flex flex-col gap-4 group py-6 border-b border-border last:border-0 first:pt-2"
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="text-text-PRIMARY text-lg lg:text-xl font-medium leading-relaxed pl-3 border-l-2 border-transparent group-hover:border-brand-primary/30 transition-colors">
                                                {itemEn}
                                            </div>
                                            {audioSrc && (
                                                <button
                                                    onClick={() => toggleAudio(audioSrc, i)}
                                                    className="p-2 rounded-full bg-brand-primary/10 hover:bg-brand-primary/20 transition-all active:scale-95 text-brand-primary"
                                                    title="Listen to Question"
                                                >
                                                    {playingIndex === i ? (
                                                        <Square className="w-5 h-5 fill-current" />
                                                    ) : (
                                                        <Play className="w-5 h-5 fill-current" />
                                                    )}
                                                </button>
                                            )}
                                        </div>

                                        <div
                                            className="text-text-SECONDARY text-xl lg:text-3xl leading-[2] font-urdu text-right pr-2 mt-1"
                                            dir="rtl"
                                        >
                                            {itemUr}
                                        </div>

                                        {answer && (
                                            <div
                                                className="mt-6 pt-6 border-t border-border/20"
                                                dir="rtl"
                                            >
                                                {typeof answer === 'object' && answer.isTable ? (
                                                    <div className="w-full space-y-6">
                                                        {answer.preText && (
                                                            <div className="text-text-SECONDARY/70 text-xl lg:text-3xl leading-[2.4] font-urdu tracking-wide mb-6">
                                                                {answer.preText.split('\n').map((line, idx) => (
                                                                    <div key={idx}>{line}</div>
                                                                ))}
                                                            </div>
                                                        )}
                                                        {/* Desktop View: Maintained exactly as requested */}
                                                        <div className="hidden lg:block overflow-x-auto rounded-xl border border-border/30 bg-bg-SURFACE/50">
                                                            <table className="w-full text-right border-collapse min-w-[800px]">
                                                                <thead>
                                                                    <tr className="bg-brand-primary/10 border-b border-border/30">
                                                                        <th className="px-6 py-6 text-text-PRIMARY font-urdu text-xl lg:text-2xl font-bold border-l border-border/20">#</th>
                                                                        {answer.headers.map((header: string, hIdx: number) => (
                                                                            <th key={hIdx} className="px-8 py-6 text-text-PRIMARY font-urdu text-2xl lg:text-4xl font-bold border-l border-border/20 last:border-0">
                                                                                {header}
                                                                            </th>
                                                                        ))}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {answer.rows.map((row: string[], rIdx: number) => (
                                                                        <tr key={rIdx} className="border-b border-border/10 last:border-0 hover:bg-brand-primary/5 transition-colors">
                                                                            <td className="px-6 py-6 text-text-SECONDARY/60 font-medium text-lg border-l border-border/20">{rIdx + 1}</td>
                                                                            {row.map((cell, cIdx) => (
                                                                                <td key={cIdx} className="px-8 py-6 text-text-SECONDARY/80 font-urdu text-2xl lg:text-3xl leading-[2.4] tracking-[0.05em] border-l border-border/20 last:border-0">
                                                                                    {cell.split(/(\s+)/).map((part: string, pIdx: number) => {
                                                                                        if (part.toLowerCase() === "buy") return <span key={pIdx} className="text-green-500 font-bold font-sans mx-1">{part}</span>;
                                                                                        if (part.toLowerCase() === "sell") return <span key={pIdx} className="text-red-500 font-bold font-sans mx-1">{part}</span>;
                                                                                        return part;
                                                                                    })}
                                                                                </td>
                                                                            ))}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        {/* Mobile View: Premium No-Scroll Comparison Experience */}
                                                        <div className="lg:hidden space-y-4" dir="rtl">
                                                            {answer.rows.map((row: string[], rIdx: number) => (
                                                                <div
                                                                    key={rIdx}
                                                                    className="bg-bg-SURFACE/60 rounded-2xl border border-border/20 p-5 shadow-sm hover:border-brand-primary/20 transition-all duration-300"
                                                                >
                                                                    {/* Comparison Point Index Header */}
                                                                    <div className="flex items-center gap-3 mb-5">
                                                                        <span className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-sm font-sans ring-4 ring-brand-primary/5">
                                                                            {rIdx + 1}
                                                                        </span>
                                                                        <div className="h-px flex-1 bg-gradient-to-r from-border/20 to-transparent" />
                                                                    </div>

                                                                    <div className="space-y-8">
                                                                        {/* Section A: Traditional Business */}
                                                                        <div className="space-y-3 group">
                                                                            <div className="flex items-center gap-3">
                                                                                <span className="text-base lg:text-lg font-urdu font-bold text-text-TERTIARY bg-text-TERTIARY/10 px-3 py-1 rounded-lg">
                                                                                    {answer.headers[0]}
                                                                                </span>
                                                                                <div className="h-px flex-1 bg-border/20" />
                                                                            </div>
                                                                            <p className="text-xl font-urdu leading-[2.2] text-text-SECONDARY/90 pr-4 border-r-2 border-border/20">
                                                                                {row[0]}
                                                                            </p>
                                                                        </div>

                                                                        {/* Section B: Forex (Focal Point) */}
                                                                        <div className="relative p-5 rounded-2xl bg-brand-primary/[0.03] border border-brand-primary/10 group">
                                                                            <div className="relative z-10 space-y-4">
                                                                                <div className="flex items-center gap-3">
                                                                                    <span className="text-base lg:text-lg font-urdu font-bold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-lg ring-1 ring-brand-primary/20">
                                                                                        {answer.headers[1]}
                                                                                    </span>
                                                                                    <div className="h-px flex-1 bg-brand-primary/20" />
                                                                                </div>
                                                                                <p className="text-2xl font-urdu leading-[2.2] text-brand-primary font-medium pr-4 border-r-2 border-brand-primary/30">
                                                                                    {row[1].split(/(\s+)/).map((part: string, pIdx: number) => {
                                                                                        if (part.toLowerCase() === "buy") return <span key={pIdx} className="text-green-500 font-bold font-sans mx-1 text-2xl lg:text-3xl">{part}</span>;
                                                                                        if (part.toLowerCase() === "sell") return <span key={pIdx} className="text-red-500 font-bold font-sans mx-1 text-2xl lg:text-3xl">{part}</span>;
                                                                                        return part;
                                                                                    })}
                                                                                </p>
                                                                            </div>
                                                                            {/* Background Glow */}
                                                                            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {answer.postText && (
                                                            <div className="text-text-SECONDARY/70 text-xl lg:text-3xl leading-[2.4] font-urdu tracking-wide mt-8 border-t border-border/10 pt-6">
                                                                {answer.postText.split('\n').map((line, idx) => (
                                                                    <div key={idx}>{line}</div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="text-text-SECONDARY/70 text-xl lg:text-3xl leading-[2.4] font-urdu tracking-wide space-y-4">
                                                        {(answer as string).split('\n').map((line, idx) => (
                                                            <div key={idx}>{line}</div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {visuals && (
                                            <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-border/10">
                                                {visuals.map((visual: any, idx: number) => (
                                                    <div key={idx} className={`flex flex-col gap-3 group/visual cursor-pointer w-full ${visual.wide ? 'md:w-[65%]' : 'md:w-[45%]'}`}>
                                                        <div className={`relative ${visual.wide ? 'aspect-[16/9]' : 'aspect-video'} w-full overflow-hidden rounded-2xl bg-bg-SURFACE border border-border/40 transition-all duration-500 group-hover/visual:shadow-2xl group-hover/visual:border-brand-primary/30 group-hover/visual:scale-[1.02]`}>
                                                            <img
                                                                src={visual.src}
                                                                alt={visual.labelEn}
                                                                className="w-full h-full object-contain transition-transform duration-700 group-hover/visual:scale-110 p-4"
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
