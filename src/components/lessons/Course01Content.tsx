"use client";

import { QuestionCard } from "@/components/content/QuestionCard";

/**
 * Course 1 (Chapter 1) Content Component
 * Contains all the structured content for Introduction to Markets
 */
interface Section {
    id: string;
    titleEn: string;
    titleUr: string;
    contentEn: string[];
    contentUr: string[];
    visualsMap?: Record<number, { src: string; labelEn: string; labelUr: string; wide?: boolean }[]>;
}

export function Course01Content() {
    const sections: Section[] = [
        {
            id: "physical-market",
            titleEn: "Traditional Markets – Introduction",
            titleUr: "روایتی منڈیاں اور ان کا تعارف",
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
            visualsMap: {
                0: [
                    { src: "/assets/visuals/sabzi-mandi.webp", labelEn: "Sabzi Mandi", labelUr: "سبزی منڈی" },
                    { src: "/assets/visuals/ghalla-mandi.webp", labelEn: "Ghalla Mandi", labelUr: "غلہ منڈی" },
                    { src: "/assets/visuals/motorcycle-market.webp", labelEn: "Motorcycle Market", labelUr: "موٹر سائیکل مارکیٹ" },
                ],
                1: [
                    { src: "/assets/visuals/investment-product.webp", labelEn: "Physical Exchange", labelUr: "مال کا تبادلہ" }
                ],
                2: [
                    { src: "/assets/visuals/time-concept.webp", labelEn: "Time Passing", labelUr: "وقت کا گزرنا" }
                ],
                3: [
                    { src: "/assets/visuals/hard-struggle.webp", labelEn: "Hard Labor", labelUr: "سخت مشقت" }
                ],
                4: [
                    { src: "/assets/visuals/experience.webp", labelEn: "Years of Experience", labelUr: "برسوں کا تجربہ" }
                ],
                5: [
                    { src: "/assets/visuals/time-frame.webp", labelEn: "Fixed Hours", labelUr: "محدود اوقات" }
                ],
                6: [
                    { src: "/assets/visuals/risk-factor.webp", labelEn: "Physical Risk", labelUr: "جسمانی نقصان کا خطرہ" }
                ]
            }
        },
        {
            id: "online-trade",
            titleEn: "E-Commerce – Introduction",
            titleUr: "ای کامرس کا تعارف",
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
            visualsMap: {
                0: [
                    { src: "/assets/visuals/online-platform.webp", labelEn: "Trading Platform", labelUr: "ٹریڈنگ پلیٹ فارم" }
                ],
                1: [
                    { src: "/assets/visuals/online-investment.webp", labelEn: "Digital Portfolio", labelUr: "ڈیجیٹل پورٹ فولیو" }
                ],
                2: [
                    { src: "/assets/visuals/online-time-choice.webp", labelEn: "Trade Anytime", labelUr: "جب چاہیں ٹریڈ کریں" }
                ],
                3: [
                    { src: "/assets/visuals/online-soft-struggle.webp", labelEn: "Mental Focus", labelUr: "ذہنی توجہ" }
                ],
                4: [
                    { src: "/assets/visuals/online-experience.webp", labelEn: "Learning Journey", labelUr: "سیکھنے کا سفر", wide: true }
                ],
                5: [
                    { src: "/assets/visuals/online-timeframe.webp", labelEn: "24/7 Global Access", labelUr: "۲۴ گھنٹے عالمی رسائی" }
                ],
                6: [
                    { src: "/assets/visuals/online-risk.webp", labelEn: "Digital Risk", labelUr: "ڈیجیٹل نقصان کا خطرہ" }
                ]
            }
        },
        {
            id: "stock-market",
            titleEn: "Stock Market – Introduction",
            titleUr: "اسٹاک مارکیٹ کا تعارف",
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
            visualsMap: {
                0: [
                    { src: "/assets/visuals/stock-platform.webp", labelEn: "Pakistan Stock Exchange", labelUr: "پاکستان اسٹاک ایکسچینج" }
                ],
                1: [
                    { src: "/assets/visuals/online-investment.webp", labelEn: "Digital Portfolio", labelUr: "ڈیجیٹل پورٹ فولیو" }
                ],
                2: [
                    { src: "/assets/visuals/online-time-choice.webp", labelEn: "Trade Anytime", labelUr: "جب چاہیں ٹریڈ کریں" }
                ],
                3: [
                    { src: "/assets/visuals/online-soft-struggle.webp", labelEn: "Mental Focus", labelUr: "ذہنی توجہ" }
                ],
                4: [
                    { src: "/assets/visuals/online-experience.webp", labelEn: "Learning Journey", labelUr: "سیکھنے کا سفر", wide: true }
                ],
                5: [
                    { src: "/assets/visuals/stock-fixed-hours.webp", labelEn: "Fixed Trading Hours", labelUr: "مقررہ اوقات", wide: true }
                ],
                6: [
                    { src: "/assets/visuals/online-risk.webp", labelEn: "Digital Risk", labelUr: "ڈیجیٹل نقصان کا خطرہ" }
                ]
            }
        },
        {
            id: "digital-trade",
            titleEn: "Crypto Market – Introduction",
            titleUr: "کرپٹو مارکیٹ کا تعارف",
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
            visualsMap: {
                0: [
                    { src: "/assets/visuals/digital-platform.webp", labelEn: "Multi-Platform Trading", labelUr: "ملٹی پلیٹ فارم ٹریڈنگ" }
                ],
                1: [
                    { src: "/assets/visuals/online-investment.webp", labelEn: "Digital Portfolio", labelUr: "ڈیجیٹل پورٹ فولیو" }
                ],
                2: [
                    { src: "/assets/visuals/online-time-choice.webp", labelEn: "Trade Anytime", labelUr: "جب چاہیں ٹریڈ کریں" }
                ],
                3: [
                    { src: "/assets/visuals/online-soft-struggle.webp", labelEn: "Mental Focus", labelUr: "ذہنی توجہ" }
                ],
                4: [
                    { src: "/assets/visuals/online-experience.webp", labelEn: "Learning Journey", labelUr: "سیکھنے کا سفر", wide: true }
                ],
                5: [
                    { src: "/assets/visuals/online-timeframe.webp", labelEn: "24/7 Global Access", labelUr: "۲۴ گھنٹے عالمی رسائی" }
                ],
                6: [
                    { src: "/assets/visuals/digital-crypto-risk.webp", labelEn: "Crypto Volatility", labelUr: "کرپٹو کا خطرہ" }
                ]
            }
        },
        {
            id: "forex-benefits",
            titleEn: "Forex Market – Introduction",
            titleUr: "فاریکس مارکیٹ کا تعارف",
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
            visualsMap: {
                0: [
                    { src: "/assets/visuals/forex-global.webp", labelEn: "Global Forex Network", labelUr: "عالمی فاریکس نیٹ ورک" }
                ],
                1: [
                    { src: "/assets/visuals/forex-pairs.webp", labelEn: "Thousands of Options", labelUr: "ہزاروں آپشنز" }
                ],
                2: [
                    { src: "/assets/visuals/forex-buy-sell.webp", labelEn: "Just Buy & Sell", labelUr: "صرف خرید و فروخت" }
                ],
                3: [
                    { src: "/assets/visuals/online-timeframe.webp", labelEn: "24/7 Global Access", labelUr: "۲۴ گھنٹے عالمی رسائی" }
                ],
                4: [
                    { src: "/assets/visuals/forex-profit-spike.webp", labelEn: "Instant Profit & Loss", labelUr: "فوری نفع و نقصان", wide: true }
                ]
            }
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
                        <ul className="flex flex-col">
                            {section.contentEn.map((itemEn, i) => {
                                const itemUr = section.contentUr[i];
                                const visuals = section.visualsMap?.[i];

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

                                        {visuals && (
                                            <div className="flex flex-wrap justify-center gap-6 mt-4 pt-4 border-t border-border/30">
                                                {visuals.map((visual, idx: number) => (
                                                    <div key={idx} className={`flex flex-col gap-3 group/visual cursor-pointer w-full ${visual.wide ? 'md:w-[65%]' : 'md:w-[31%]'}`}>
                                                        <div className={`relative ${visual.wide ? 'aspect-[16/9]' : 'aspect-[4/3]'} w-full overflow-hidden rounded-xl bg-bg-SURFACE border border-border transition-all duration-300 group-hover/visual:shadow-lg group-hover/visual:border-brand-primary/20`}>
                                                            <img
                                                                src={visual.src}
                                                                alt={visual.labelEn}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/visual:scale-105"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-center text-center gap-1">
                                                            <span className="text-sm font-medium text-text-PRIMARY">{visual.labelEn}</span>
                                                            <span className="text-lg font-urdu text-text-SECONDARY" dir="rtl">{visual.labelUr}</span>
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
