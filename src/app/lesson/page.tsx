import { getLesson } from "@/lib/content";
import { BilingualLayout } from "@/components/layout/BilingualLayout";
import { QuestionCard } from "@/components/content/QuestionCard";

/**
 * Lesson page showing actual MDX content from intro.mdx
 * Uses BilingualLayout and QuestionCard components
 */
export default async function LessonPage() {
    const lesson = await getLesson("intro");

    if (!lesson) {
        return (
            <main className="min-h-screen bg-bg-APP p-8 text-text-PRIMARY">
                <p>Lesson not found</p>
            </main>
        );
    }

    // Content structured from intro.mdx - each section becomes a QuestionCard
    const sections = [
        {
            id: "physical-market",
            titleEn: "What is Physical Market Trading?",
            titleUr: "فزیکل مارکیٹ ٹریڈنگ کیا ہے؟",
            contentEn: [
                "1. Market (Mandi)",
                "2. Investment or Product",
                "3. Time",
                "4. Hard Struggle",
                "5. Experience",
                "6. Time Frame To Trade",
                "7. Risk Factor",
            ],
            contentUr: [
                "۱۔ مارکیٹ (منڈی)",
                "۲۔ سرمایہ کاری یا پروڈکٹ",
                "۳۔ وقت",
                "۴۔ سخت محنت",
                "۵۔ تجربہ",
                "۶۔ ٹریڈ کا وقت",
                "۷۔ رسک فیکٹر",
            ],
        },
        {
            id: "online-trade",
            titleEn: "What is Online Trading?",
            titleUr: "آن لائن ٹریڈنگ کیا ہے؟",
            contentEn: [
                "1. Platform (Software)",
                "2. Investment or Product",
                "3. Time (Choice)",
                "4. Soft Struggle",
                "5. Experience",
                "6. Time Frame To Trade (Choice)",
                "7. Risk Factor",
            ],
            contentUr: [
                "۱۔ پلیٹ فارم (سافٹ ویئر)",
                "۲۔ سرمایہ کاری یا پروڈکٹ",
                "۳۔ وقت (اپنی مرضی)",
                "۴۔ نرم محنت",
                "۵۔ تجربہ",
                "۶۔ ٹریڈ کا وقت (اپنی مرضی)",
                "۷۔ رسک فیکٹر",
            ],
        },
        {
            id: "stock-market",
            titleEn: "What is Stock Market Trading?",
            titleUr: "اسٹاک مارکیٹ ٹریڈنگ کیا ہے؟",
            contentEn: [
                "1. Platform (National Exchange)",
                "2. Investment",
                "3. Time (Choice)",
                "4. Soft Struggle",
                "5. Experience",
                "6. Time Frame To Trade (Fix)",
                "7. Risk Factor",
            ],
            contentUr: [
                "۱۔ پلیٹ فارم (نیشنل ایکسچینج)",
                "۲۔ سرمایہ کاری",
                "۳۔ وقت (اپنی مرضی)",
                "۴۔ نرم محنت",
                "۵۔ تجربہ",
                "۶۔ ٹریڈ کا وقت (مقررہ)",
                "۷۔ رسک فیکٹر",
            ],
        },
        {
            id: "digital-trade",
            titleEn: "What is Digital Trading?",
            titleUr: "ڈیجیٹل ٹریڈنگ کیا ہے؟",
            contentEn: [
                "1. Platform (PMEX, Forex, Crypto Currency/Coin Market)",
                "2. Investment",
                "3. Time (Choice)",
                "4. Soft Struggle",
                "5. Experience",
                "6. Time Frame To Trade (No Limit)",
                "7. Risk Factor",
            ],
            contentUr: [
                "۱۔ پلیٹ فارم (پی ایم ای ایکس، فاریکس، کرپٹو کرنسی)",
                "۲۔ سرمایہ کاری",
                "۳۔ وقت (اپنی مرضی)",
                "۴۔ نرم محنت",
                "۵۔ تجربہ",
                "۶۔ ٹریڈ کا وقت (کوئی حد نہیں)",
                "۷۔ رسک فیکٹر",
            ],
        },
        {
            id: "forex-benefits",
            titleEn: "What are the Benefits of Forex Market?",
            titleUr: "فاریکس مارکیٹ کے فوائد کیا ہیں؟",
            contentEn: [
                "1. International Market",
                "2. Thousands of Pairs (Commodities, Indices, Currencies)",
                "3. No Customer Need (only Buy & Sell Button)",
                "4. No Time Limit",
                "5. Huge Profit & Loss Within a Minute",
            ],
            contentUr: [
                "۱۔ بین الاقوامی مارکیٹ",
                "۲۔ ہزاروں جوڑے (اجناس، انڈیکس، کرنسیاں)",
                "۳۔ کسٹمر کی ضرورت نہیں (صرف خرید و فروخت بٹن)",
                "۴۔ کوئی وقت کی حد نہیں",
                "۵۔ ایک منٹ میں بھاری منافع یا نقصان",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-bg-APP">
            {/* Header - clean, minimal */}
            <header className="border-b border-border bg-bg-SURFACE sticky top-0 z-20 lg:static">
                <div className="px-6 py-8 lg:px-12 lg:py-12">
                    <p className="text-sm lg:text-base text-brand-primary font-medium mb-2 lg:mb-3">
                        Smart Way Learning Institute
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between lg:gap-8">
                        <h1 className="text-3xl lg:text-5xl font-bold text-text-PRIMARY">
                            {lesson.title}
                        </h1>
                        {lesson.translation?.urduTitle && (
                            <p
                                className="mt-2 lg:mt-0 font-urdu text-2xl lg:text-4xl text-text-SECONDARY leading-[2]"
                                dir="rtl"
                            >
                                {lesson.translation.urduTitle}
                            </p>
                        )}
                    </div>
                </div>
            </header>

            {/* Bilingual Content - Full width on desktop */}
            <div className="lg:px-8">
                <BilingualLayout
                    english={
                        <div className="space-y-4">
                            {sections.map((section) => (
                                <QuestionCard
                                    key={section.id}
                                    id={section.id}
                                    question={section.titleEn}
                                >
                                    <ul className="space-y-3">
                                        {section.contentEn.map((item, i) => (
                                            <li key={i} className="text-text-SECONDARY text-base lg:text-lg">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </QuestionCard>
                            ))}
                        </div>
                    }
                    urdu={
                        <div className="space-y-4">
                            {sections.map((section) => (
                                <QuestionCard
                                    key={`${section.id}-ur`}
                                    id={`${section.id}-ur`}
                                    question={section.titleUr}
                                >
                                    <ul className="space-y-3">
                                        {section.contentUr.map((item, i) => (
                                            <li key={i} className="text-text-SECONDARY text-lg lg:text-xl leading-[2.2]">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </QuestionCard>
                            ))}
                        </div>
                    }
                />
            </div>
        </main>
    );
}
